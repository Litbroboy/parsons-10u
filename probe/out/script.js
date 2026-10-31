const getCentralToday = () => {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Chicago",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  }).formatToParts(new Date());
  const values = Object.fromEntries(parts.map((part) => [part.type, part.value]));
  return new Date(Number(values.year), Number(values.month) - 1, Number(values.day));
};

const TODAY = getCentralToday();
const LEAGUE_APPS_URL = "https://parsonssportsranch.leagueapps.com/tournaments";
const TOURNAMENTS_API_URL = "/api/tournaments";
const TOURNAMENT_PAGE_SIZE = 5;
const BRACKET_LINKS_BY_TOURNAMENT_ID = Object.freeze({
  5012672: "/tournament-brackets/#10u-gold-oct-17-18",
  5012671: "/tournament-brackets/#12u-oct-17-18",
});
const fallbackTournaments = Array.isArray(window.PSR_TOURNAMENTS) ? window.PSR_TOURNAMENTS : [];
let rawTournaments = fallbackTournaments;
let normalizedTournaments = [];

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const parseDate = (value) => {
  const [month, day, year] = value.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const escapeHtml = (value) =>
  String(value ?? "").replace(/[&<>"']/g, (char) => {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }[char];
  });

const cleanTitle = (name) =>
  name
    .replace(/^\d{1,2}\/\d{1,2}(?:-\d{1,2}\/\d{1,2})?\s*:?\s*-?\s*/u, "")
    .replace(/\s+/g, " ")
    .trim();

const getType = (event) => {
  const text = `${event.name} ${event.division}`.toLowerCase();
  const types = [];
  if (/(baseball|bb|kid pitch|cp baseball|kp baseball)/.test(text)) types.push("baseball");
  if (/(softball|fastpitch|\bfp\b)/.test(text)) types.push("softball");
  if (/showcase|camp|clinic/.test(text)) types.push("showcase");
  return types.length ? types : ["tournament"];
};

const getStatus = (event, date) => {
  const spots = Number.parseInt(event.spots, 10);
  const division = event.division.toLowerCase();

  if (date < TODAY) return "past";
  if (division.includes("waitlist")) return "waitlist";
  if (Number.isFinite(spots) && spots > 0) return "open";
  if (Number.isFinite(spots) && spots === 0) return "sold";
  return "details";
};

const formatPrice = (price) => {
  if (!price || price === "N/A") return "TBD";
  return price.replace(".00", "");
};

const externalLinkAttrs = (href) => {
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin ? ' target="_blank" rel="noopener noreferrer"' : "";
  } catch {
    return "";
  }
};

function normalizeTournaments(tournaments) {
  return tournaments.map((event) => {
    const date = parseDate(event.startDate);
    const status = getStatus(event, date);
    const types = getType(event);
    const schedule = event.links?.find((link) => /schedule/i.test(link.text))?.href || "";
    const standings = event.links?.find((link) => /standings/i.test(link.text))?.href || "";

    return {
      ...event,
      date,
      title: cleanTitle(event.name),
      month: monthNames[date.getMonth()],
      day: String(date.getDate()).padStart(2, "0"),
      types,
      status,
      schedule,
      standings,
      registerUrl: event.id ? `${LEAGUE_APPS_URL}/${event.id}` : LEAGUE_APPS_URL,
    };
  });
}

normalizedTournaments = normalizeTournaments(rawTournaments);

const state = {
  filter: getDefaultMonthFilter(),
  query: "",
  showPrevious: false,
  visibleTournamentLimit: TOURNAMENT_PAGE_SIZE,
};
let hasUserSelectedFilter = false;

const list = document.querySelector("#tournamentList");
const monthFilters = document.querySelector("#monthFilters");
const searchInput = document.querySelector("#tournamentSearch");
const showingCount = document.querySelector("#tournamentShowing");
const totalCount = document.querySelector("#tournamentTotal");
const boardProgramCount = document.querySelector("#boardProgramCount");
const boardEmpty = document.querySelector("#boardEmpty");
const previousEventsControl = document.querySelector("#previousEventsControl");
const tournamentLoadMoreControl = document.querySelector("#tournamentLoadMoreControl");
const tournamentLoadMoreButton = document.querySelector("#tournamentLoadMore");
const tournamentLoadMoreLabel = tournamentLoadMoreButton?.querySelector(".tournament-load-more-copy strong");
const tournamentLoadMoreStatus = tournamentLoadMoreButton?.querySelector(".tournament-load-more-copy small");
const tournamentLoadMoreCount = tournamentLoadMoreButton?.querySelector(".tournament-load-more-count");
const nextTournament = document.querySelector("#nextTournament");
const heroNextTournament = document.querySelector("#heroNextTournament");
const heroProgramCount = document.querySelector("#heroProgramCount");
const heroOpenCount = document.querySelector("#heroOpenCount");
const menuButton = document.querySelector(".menu-button");
const mobileMenu = document.querySelector("#mobileMenu");
const mobileBackdrop = document.querySelector(".mobile-backdrop");
const menuClosers = document.querySelectorAll("[data-menu-close]");
const header = document.querySelector(".site-header");

function getDefaultMonthFilter() {
  const currentMonth = monthNames[TODAY.getMonth()];
  const currentMonthEvents = rawTournaments.filter((event) => {
    const date = parseDate(event.startDate);
    return date.getFullYear() === TODAY.getFullYear() && monthNames[date.getMonth()] === currentMonth;
  });
  const hasUpcomingCurrentMonth = currentMonthEvents.some((event) => parseDate(event.startDate) >= TODAY);
  const lastDayOfMonth = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, 0).getDate();
  const isLastTwoDaysOfMonth = TODAY.getDate() >= lastDayOfMonth - 1;

  if (currentMonthEvents.length && !hasUpcomingCurrentMonth && isLastTwoDaysOfMonth) {
    const nextMonthDate = new Date(TODAY.getFullYear(), TODAY.getMonth() + 1, 1);
    const nextMonth = monthNames[nextMonthDate.getMonth()];
    const hasNextMonthEvents = rawTournaments.some((event) => {
      const date = parseDate(event.startDate);
      return date.getFullYear() === nextMonthDate.getFullYear() && monthNames[date.getMonth()] === nextMonth;
    });

    if (hasNextMonthEvents) return nextMonth;
  }

  return currentMonthEvents.length ? currentMonth : "all";
}

function statusLabel(status) {
  return {
    past: "Past",
    open: "Open",
    waitlist: "Waitlist",
    sold: "Sold Out",
    details: "Details",
  }[status];
}

function spotsLabel(event) {
  if (event.status === "waitlist") return "Waitlist";
  if (event.status === "past") return "Past";
  if (event.status === "sold") return "0 spots";
  if (event.spots) return `${event.spots} spots`;
  return "See details";
}

function matchesFilter(event) {
  if (state.filter === "all") return true;
  return event.month === state.filter;
}

function matchesQuery(event) {
  if (!state.query) return true;
  const haystack = [
    event.startDate,
    event.name,
    event.title,
    event.division,
    event.price,
    event.season,
    event.location,
    event.types.join(" "),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(state.query);
}

function getMatchingTournaments() {
  return normalizedTournaments.filter((event) => matchesFilter(event) && matchesQuery(event));
}

function getFilterLabel() {
  return state.filter === "all" ? "" : state.filter;
}

function renderTournamentRows(events) {
  return events
    .map((event) => {
      const typeLabel = event.types.filter((type) => type !== "tournament").join(" + ") || "Tournament";
      const scheduleLink = event.schedule
        ? `<a class="mini-link" href="${escapeHtml(event.schedule)}"${externalLinkAttrs(event.schedule)}>Schedule</a>`
        : "";
      const standingsLink = event.standings
        ? `<a class="mini-link" href="${escapeHtml(event.standings)}"${externalLinkAttrs(event.standings)}>Standings</a>`
        : "";
      const bracketHref = BRACKET_LINKS_BY_TOURNAMENT_ID[String(event.id)] || "";
      const bracketLink = bracketHref
        ? `<a class="mini-link bracket-link" href="${bracketHref}">Brackets</a>`
        : "";

      return `
        <article class="tournament-row ${event.status}">
          <div class="date-chip">
            <span>${escapeHtml(event.month)}</span>
            <strong>${escapeHtml(event.day)}</strong>
          </div>
          <div class="tournament-main">
            <h3>${escapeHtml(event.title || event.name)}</h3>
            <div class="tournament-meta">
              <span>${escapeHtml(event.division || "Division details")}</span>
              <span>${escapeHtml(typeLabel)}</span>
              <span>${escapeHtml(event.location || "Parsons Sports Ranch")}</span>
            </div>
          </div>
          <span class="status ${event.status}">${escapeHtml(statusLabel(event.status))}</span>
          <span class="spots">${escapeHtml(spotsLabel(event))}</span>
          <span class="price">${escapeHtml(formatPrice(event.price))}</span>
          <div class="row-actions">
            <a class="row-action" href="${escapeHtml(event.registerUrl)}"${externalLinkAttrs(event.registerUrl)}>${event.status === "past" ? "Results" : "Register"}</a>
            ${bracketLink}
            ${scheduleLink}
            ${standingsLink}
          </div>
        </article>
      `;
    })
    .join("");
}

function renderPreviousEventsControl(previousEvents, monthLabel) {
  if (!previousEventsControl) return;

  const count = previousEvents.length;
  if (!count || state.query) {
    previousEventsControl.hidden = true;
    previousEventsControl.innerHTML = "";
    return;
  }

  const label = monthLabel ? `previous ${monthLabel} events` : "previous events";
  const previousTitle = monthLabel ? `Previous ${monthLabel} events` : "Previous events";
  previousEventsControl.hidden = false;
  previousEventsControl.innerHTML = `
    <div class="previous-events-panel ${state.showPrevious ? "is-open" : ""}">
      <button
        class="previous-events-button ${state.showPrevious ? "is-active" : ""}"
        type="button"
        aria-expanded="${state.showPrevious}"
        aria-controls="previousEventsList"
      >
        <span class="previous-events-icon"><i class="ti ti-history" aria-hidden="true"></i></span>
        <span class="previous-events-copy">
          <span>${state.showPrevious ? "Hide" : "Show"} ${count} ${label}</span>
          <small>Earlier results stay tucked away so the next tournament stays first.</small>
        </span>
        <i class="previous-events-chevron ti ${state.showPrevious ? "ti-chevron-up" : "ti-chevron-down"}" aria-hidden="true"></i>
      </button>
      ${
        state.showPrevious
          ? `<div class="previous-events-list" id="previousEventsList" aria-label="${previousTitle}">
              <div class="previous-events-divider"><span>${previousTitle}</span></div>
              ${renderTournamentRows(previousEvents)}
            </div>`
          : ""
      }
    </div>
  `;

  previousEventsControl.querySelector("button")?.addEventListener("click", () => {
    state.showPrevious = !state.showPrevious;
    renderTournaments();
  });
}

function resetTournamentPagination() {
  state.visibleTournamentLimit = TOURNAMENT_PAGE_SIZE;
}

function renderTournamentLoadMore(total) {
  if (!tournamentLoadMoreControl || !tournamentLoadMoreButton) return;

  const displayed = Math.min(state.visibleTournamentLimit, total);
  const remaining = Math.max(0, total - displayed);
  const nextBatchSize = Math.min(TOURNAMENT_PAGE_SIZE, remaining);

  tournamentLoadMoreControl.hidden = remaining === 0;
  tournamentLoadMoreButton.disabled = remaining === 0;

  if (tournamentLoadMoreLabel) {
    tournamentLoadMoreLabel.textContent = remaining
      ? `Load ${nextBatchSize} more tournament${nextBatchSize === 1 ? "" : "s"}`
      : "All tournaments shown";
  }

  if (tournamentLoadMoreStatus) {
    tournamentLoadMoreStatus.setAttribute("aria-live", "polite");
    tournamentLoadMoreStatus.textContent = remaining
      ? `${displayed} of ${total} shown · ${remaining} remaining`
      : `All ${total} tournament${total === 1 ? "" : "s"} shown`;
  }

  if (tournamentLoadMoreCount) {
    tournamentLoadMoreCount.textContent = `+${nextBatchSize}`;
  }

  tournamentLoadMoreButton.setAttribute(
    "aria-label",
    remaining
      ? `Load ${nextBatchSize} more tournament${nextBatchSize === 1 ? "" : "s"}. ${remaining} remaining.`
      : "All tournaments shown",
  );
}

function renderTournaments() {
  const matching = getMatchingTournaments();
  const upcoming = matching.filter((event) => event.date >= TODAY);
  const previous = matching.filter((event) => event.date < TODAY);
  const shouldUsePreviousControl = !state.query && upcoming.length > 0 && previous.length > 0;
  const current = shouldUsePreviousControl ? upcoming : matching;
  const visible = current.slice(0, state.visibleTournamentLimit);
  const visibleCount = visible.length + (shouldUsePreviousControl && state.showPrevious ? previous.length : 0);
  const monthLabel = getFilterLabel();

  showingCount.textContent = String(visibleCount);
  totalCount.textContent = String(normalizedTournaments.length);
  boardEmpty.hidden = visibleCount > 0;
  renderPreviousEventsControl(shouldUsePreviousControl ? previous : [], monthLabel);
  renderTournamentLoadMore(current.length);

  list.innerHTML = renderTournamentRows(visible);
}

function updateSummary() {
  const upcoming = normalizedTournaments.filter((event) => event.date >= TODAY);
  const open = upcoming.filter((event) => event.status === "open");
  const next = upcoming[0];

  animateCount(heroProgramCount, normalizedTournaments.length);
  animateCount(heroOpenCount, open.length);
  boardProgramCount.textContent = `${normalizedTournaments.length} Programs`;

  if (next) {
    nextTournament.textContent = `${next.month} ${next.day} - ${next.title}`;
    heroNextTournament.textContent = next.title.replace(/\s*\(.+\)/, "");
  }
}

function animateCount(element, target) {
  if (!element) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) {
    element.textContent = String(target);
    return;
  }

  const duration = 900;
  const start = performance.now();

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    element.textContent = String(Math.round(target * eased));

    if (progress < 1) {
      requestAnimationFrame(tick);
    }
  }

  element.textContent = "0";
  requestAnimationFrame(tick);
}

function setupHomeShowcaseTakeover() {
  const container = document.querySelector("#homeShowcaseTakeover");
  if (!container) return false;

  const showcase = window.PSR_SHOWCASE_SCHEDULE;
  const shouldShow = Boolean(showcase?.isActive?.());

  if (!shouldShow) {
    container.remove();
    return false;
  }

  if (!showcase?.renderHomeTakeover || !showcase?.setupSchedule) {
    document.documentElement.classList.remove("showcase-home-active");
    document.documentElement.classList.add("showcase-home-ended");
    return false;
  }

  container.innerHTML = showcase.renderHomeTakeover();
  showcase.setupSchedule(container);
  document.querySelector(".home-default-hero")?.remove();
  return true;
}

function setupRevealOnView() {
  const revealItems = document.querySelectorAll("[data-reveal]");
  if (!revealItems.length) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.24,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealItems.forEach((item) => {
    item.classList.add("is-reveal-ready");
    observer.observe(item);
  });
}

function renderMonthFilters() {
  if (!monthFilters) return;

  const monthCounts = normalizedTournaments.reduce((counts, event) => {
    counts.set(event.month, (counts.get(event.month) || 0) + 1);
    return counts;
  }, new Map());

  const monthOrder = [...new Set(normalizedTournaments.map((event) => event.month))];
  const tiles = [
    { label: "All", value: "all", count: normalizedTournaments.length },
    ...monthOrder.map((month) => ({
      label: month,
      value: month,
      count: monthCounts.get(month),
    })),
  ];

  monthFilters.innerHTML = tiles
    .map(
      (tile) => `
        <button class="filter-button ${tile.value === state.filter ? "is-active" : ""}" type="button" data-filter="${tile.value}">
          <span>${tile.label}</span>
          <strong>${tile.count}</strong>
          <small>Events</small>
        </button>
      `,
    )
    .join("");

  monthFilters.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      hasUserSelectedFilter = true;
      state.filter = button.dataset.filter;
      state.showPrevious = false;
      resetTournamentPagination();
      renderMonthFilters();
      renderTournaments();
    });
  });
}

function setTournamentData(tournaments) {
  if (!Array.isArray(tournaments) || !tournaments.length) return;

  rawTournaments = tournaments;
  normalizedTournaments = normalizeTournaments(rawTournaments);
  if (!hasUserSelectedFilter && !state.query) {
    state.filter = getDefaultMonthFilter();
  }
  state.showPrevious = false;
  resetTournamentPagination();
  renderMonthFilters();
  updateSummary();
  renderTournaments();
}

async function refreshTournamentData() {
  try {
    const response = await fetch(TOURNAMENTS_API_URL, {
      cache: "no-store",
      headers: { accept: "application/json" },
    });
    if (!response.ok) throw new Error(`Tournament sync failed: ${response.status}`);

    const feed = await response.json();
    if (Array.isArray(feed.tournaments)) {
      setTournamentData(feed.tournaments);
    }
  } catch (error) {
    console.warn(error.message);
  }
}

searchInput?.addEventListener("input", (event) => {
  state.query = event.target.value.trim().toLowerCase();
  state.showPrevious = false;
  resetTournamentPagination();
  renderTournaments();
});

tournamentLoadMoreButton?.addEventListener("click", () => {
  state.visibleTournamentLimit += TOURNAMENT_PAGE_SIZE;
  renderTournaments();
});

function setMenu(open) {
  mobileMenu?.setAttribute("aria-hidden", String(!open));
  menuButton?.setAttribute("aria-expanded", String(open));
  document.body.classList.toggle("menu-open", open);
  if (mobileBackdrop) mobileBackdrop.hidden = !open;
}

menuButton?.addEventListener("click", () => setMenu(true));
menuClosers.forEach((closer) => closer.addEventListener("click", () => setMenu(false)));
mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));

window.addEventListener("scroll", () => {
  header?.classList.toggle("is-scrolled", window.scrollY > 12);
});

setupHomeShowcaseTakeover();
setupRevealOnView();
renderMonthFilters();
updateSummary();
renderTournaments();
refreshTournamentData();
