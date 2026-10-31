const IMAGE = {
  hero: "/assets/photos/jess-july-2026/complex-aerial.webp",
  entrance: "/assets/photos/jess-july-2026/entrance-aerial.webp",
  fields: "/assets/photos/jess-july-2026/fields-overhead.webp",
  suite: "/assets/photos/jess-july-2026/bucks-suite-field.webp",
  bucks: "/assets/photos/jess-july-2026/bucks-suite-field.webp",
  player: "/assets/photos/jess-july-2026/dugout-team.webp",
  action: "/assets/photos/jess-july-2026/game-at-parsons-field.webp",
  sportsmanship: "/assets/photos/jess-july-2026/softball-sportsmanship.webp",
  slide: "/assets/photos/jess-july-2026/softball-slide.webp",
  network: "/wp-content/uploads/2025/10/Parsons-Sports-Network.png",
  showcase: "/assets/photos/jess-july-2026/softball-at-bat.webp",
  equipment: "/assets/photos/jess-july-2026/softball-slide.webp",
  hotelPartners: "/wp-content/uploads/2026/02/Waco-Hotels-1.webp",
  rvPark: "/wp-content/uploads/2026/02/Parsons-RV-Park-1.webp",
};

const SITE_URL = "https://www.parsonssportsranch.com";
const SHARE_IMAGE = `${SITE_URL}/assets/parsons-sports-ranch-select-baseball-social-card.png`;
const SHARE_IMAGE_ALT = "Parsons Sports Ranch vertical share image with America's Best Select Baseball Park headline.";
const LOGO_IMAGE = `${SITE_URL}/assets/parsons-white-logo-150x150.webp`;
const LOCATION_ID = `${SITE_URL}/#sports-location`;
const WEBSITE_ID = `${SITE_URL}/#website`;
const DEFAULT_ROBOTS = "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1";
const NOINDEX_ROBOTS = "noindex,follow,max-image-preview:large";
const FACILITY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "1358 FM2114",
  addressLocality: "Clifton",
  addressRegion: "TX",
  postalCode: "76634",
  addressCountry: "US",
};

const FACILITY_AMENITIES = [
  "4 fully turfed baseball and softball fields",
  "10,000 square foot Bucks Suite",
  "Climate-controlled hospitality",
  "Rooftop patio",
  "High-speed WiFi",
  "Live-stream support",
  "Modern concessions",
  "Clean restrooms",
  "Family parking",
  "Playground space",
];

const HEADER_VIDEO_URL =
  "https://www.youtube.com/embed/ED7ZsgUyij4?autoplay=1&mute=1&loop=1&playlist=ED7ZsgUyij4&controls=0&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1";
// Retained for future placement: the KWTX news video previously featured with the Showcase.
const SHOWCASE_NEWS_VIDEO_URL = "https://player.vimeo.com/video/1209252778?title=0&byline=0&portrait=0";
const SHOWCASE_NEWS_ARTICLE_URL =
  "https://www.kwtx.com/video/2026/07/12/parsons-sports-ranch-hosts-showcase-with-over-dozen-college-coaches/";

const pages = {
  "/the-fields/": {
    eyebrow: "The Fields",
    title: "Select baseball and softball on four turf fields.",
    lead: "Bring your next select or travel ball weekend to Parsons Sports Ranch in Clifton, Texas. Four fully turfed fields, baseball and softball layouts, cedar dugouts, batting cages, and bullpens keep teams close to the action.",
    image: IMAGE.fields,
    variant: "fields",
    featureTitle: "Four diamonds. One tournament destination.",
    featureIntro: "Our Central Texas youth baseball and softball complex brings four fully turfed fields together in one location. Teams can warm up in the batting cages and bullpens, take the field under the lights, and find space to recharge between games.",
    familyHeadline: "A travel ball weekend for the whole family.",
    familyIntro: "Between games, explore the family amenities or make the 10,000-square-foot Bucks Suite part of your visit. Hotel partners and nearby RV options help traveling teams plan a full weekend in the Clifton area.",
    faqTitle: "Fields & Tournament Questions",
    faqIntro: "Plan your team's visit with details on our turf fields, tournament registration, and family amenities.",
    dateModified: "2026-09-15",
    stats: [
      ["Fields", "4 Turf"],
      ["Surface", "Fully Turfed"],
      ["Setup", "Baseball + Softball"],
      ["Built For", "Tournament Play"],
    ],
    cards: [
      ["Turf Baseball & Softball Fields", "All four fields are fully turfed, with layouts supporting youth baseball and softball. Check each tournament listing for its age divisions and format."],
      ["Space to Prepare", "Batting cages, bullpens, and cedar dugouts support warmups and game-day preparation. Review the park rules before arriving; molded cleats or turf shoes are required."],
      ["Day & Night Tournament Play", "Field lighting supports evening games, and live-stream support helps family members follow from home when coverage is available."],
    ],
    faq: [
      ["Where are the fields located?", "Parsons Sports Ranch is at 1358 FM2114, Clifton, TX 76634, in Central Texas."],
      ["How many fields does Parsons Sports Ranch have?", "The complex has four fully turfed fields with layouts for youth baseball and softball."],
      ["Do you host select baseball and travel ball tournaments?", "Yes. Parsons Sports Ranch hosts youth baseball and softball tournaments, including select and travel ball events. Check current tournament listings for age divisions, dates, and registration details."],
      ["Can the fields accommodate softball?", "Yes. The complex supports both baseball and softball, including youth softball tournaments and showcase events."],
      ["What footwear is allowed on the turf?", "Players must wear molded cleats or turf shoes. Metal cleats are not allowed."],
      ["What facilities are available for teams and families?", "The ranch has batting cages, bullpens, cedar dugouts, field lighting, concessions, restrooms, parking, playground space, and live-stream support. Bucks Suite passes provide access to premium hospitality."],
      ["How do teams register or ask about hosting an event?", "Use the tournament registration links for current events. For facility availability or event questions, contact the Parsons Sports Ranch team."],
      ["Where can traveling teams stay?", "The Lodging page connects teams with local hotel partners and Parsons RV Park options for tournament weekends."],
    ],
  },
  "/buck-suit/": {
    eyebrow: "Bucks Suite",
    title: "The premium game-day view above every pitch.",
    lead: "The 10,000-square-foot Bucks Suite gives families, coaches, and sponsors an elevated, air-conditioned view of all four fields at Parsons Sports Ranch.",
    image: IMAGE.bucks,
    stats: [
      ["Suite", "10,000 SF"],
      ["Comfort", "Climate Controlled"],
      ["Views", "Rooftop Patio"],
      ["Game Day", "Live Screens"],
    ],
    cards: [
      ["Premium Buffet", "All-you-can-eat hospitality built for families spending the full day at the park."],
      ["Rooftop Patio", "An elevated view of the fields with room to relax between games."],
      ["VIP Experience", "TVs, bar service, merchandise, and event hospitality in one signature space."],
    ],
    cta: ["Buy VIP Passes", "https://events.hometownticketing.com/boxoffice/lifetimeyouthsports"],
    hidePlanVisitButton: true,
  },
  "/family-fun/": {
    eyebrow: "Family Fun",
    title: "A tournament weekend that works for the whole family.",
    lead: "The park is designed for more than games: concessions, clean restrooms, playground space, parking, and room for families to settle in.",
    image: IMAGE.sportsmanship,
    stats: [
      ["Families", "Welcome"],
      ["Amenities", "Concessions"],
      ["Comfort", "Clean Restrooms"],
      ["Weekend", "Room To Play"],
    ],
    cards: [
      ["Between Games", "Families have space to breathe, eat, visit, and enjoy the ranch between first pitch and the final out."],
      ["Convenience", "Parking, concessions, restrooms, and clear rules make long tournament days easier."],
      ["Small-Town Hospitality", "A high-end facility with a friendly, practical weekend experience."],
    ],
  },
  "/hotel-partners/": {
    eyebrow: "Lodging",
    title: "Stay close to the fields all weekend.",
    lead: "Local hotel partners and Parsons RV Park help traveling teams plan the whole tournament weekend around Clifton.",
    image: IMAGE.entrance,
    variant: "lodging",
    hideHeroActions: true,
    lodgingLinks: [
      {
        id: "everhome",
        title: "Everhome Suites Waco",
        kicker: "Preferred Hotel Partner",
        subtitle: "Extended Stay",
        description: "Full kitchens, a free team meeting room, and suites that sleep 4. Kids 18 and under stay free.",
        action: "Book &amp; Save 17%",
        href: "https://www.choicehotels.com/ires/en-US/html/ArrivalInfo?hotel=TXQ57&amp;srp=LPSR&amp;pu=no",
        image: "/assets/lodging/everhome-suites-waco.webp",
        imageAlt: "Everhome Suites Waco hotel exterior",
        details: [
          "Full kitchen in every suite. Cook team meals and skip pricey eating out",
          "Meeting room for up to 30 people, included. Perfect for team dinners, film sessions, and pregame talks",
          "On-site laundry to wash uniforms between games",
          "Outdoor pool, fire pit, and grills for team hangouts",
          "Next door to TopGolf and Main Event for off-field fun",
          "Near Magnolia Market, Baylor, and downtown Waco",
          "Grab-and-go market for early game-day mornings",
        ],
      },
      {
        id: "river_lodge",
        title: "Parsons River Lodge",
        kicker: "Airbnb Lodging",
        subtitle: "Just 2.5 miles from Parsons Sports Ranch",
        description: "A private 4-bedroom, 2-bath riverfront retreat on 3 acres along the Brazos River. It sleeps up to 10 guests and features an outdoor kitchen, fire pit, spacious patio, and plenty of room for families and teams to relax.",
        action: "Book on Airbnb",
        href: "https://www.airbnb.com/rooms/1464814357267987557",
        image: "/assets/lodging/parsons-river-lodge.webp",
        imageAlt: "Parsons River Lodge on the Brazos River",
      },
      {
        id: "hotel_partners",
        title: "Local Hotel Partners",
        kicker: "Waco Hotels",
        subtitle: "The best deals on local Waco hotels",
        action: "View All Hotels",
        href: "https://wacotpid.com/lifetime-youth-sports/",
        image: IMAGE.hotelPartners,
        imageAlt: "Local Waco hotel lodging",
      },
      {
        id: "rv_park",
        title: "Parsons RV Park",
        kicker: "RV Lodging",
        subtitle: "Just minutes from Parsons Sports Ranch",
        action: "Parsons RV Park",
        href: "https://www.parsonsmarina.com/rv-park/",
        image: IMAGE.rvPark,
        imageAlt: "RV sites at Parsons RV Park",
      },
    ],
  },
  "/sponsors/": {
    eyebrow: "Our Sponsors",
    title: "Proudly backed by the best.",
    lead: "Thank you to the businesses and organizations helping us build something special at Parsons Sports Ranch.",
    image: IMAGE.hero,
    variant: "sponsors",
    seoTitle: "Sponsors & Community Partners | Parsons Sports Ranch",
    seoDescription:
      "Meet the businesses and organizations helping Parsons Sports Ranch support youth baseball, softball, families, and the Central Texas community.",
    canonical: `${SITE_URL}/sponsors/`,
    dateModified: "2026-09-14",
  },
  "/park-rules-and-pricing/": {
    eyebrow: "Park Rules & Pricing",
    title: "Park rules, gate pricing, and Bucks Suite passes.",
    lead: "Clear fees, clear rules, and the full game-day setup for teams and families before they arrive at Parsons Sports Ranch.",
    image: IMAGE.slide,
    variant: "rules",
    stats: [
      ["Adult Gate", "$20"],
      ["Child Gate", "$10"],
      ["Senior/Veteran", "$10"],
      ["Adult VIP", "$49.99/day"],
    ],
    cards: [
      ["Gate Pricing", "Adults 13 and up $20, children ages 4-12 $10, seniors and veterans 65+ $10, and kids 3 and under free."],
      ["Turf Rules", "No metal cleats. Players should use molded cleats or turf shoes."],
      ["Park Rules", "No outside food, drinks, coolers, pets, or canopies. Players must be in uniform for free entry; three coaches per team are also free."],
    ],
  },
  "/college-softball-showcase/": {
    eyebrow: "PSR Softball Showcase Tournament II",
    title: "July 31-August 2 showcase for 14U-18U teams.",
    lead: "High-level fastpitch softball and college coaches return to Parsons Sports Ranch. Registration runs July 14-July 31, and team spots are limited.",
    image: IMAGE.showcase,
    showcaseNewsVideo: true,
    variant: "showcase-registration",
    stats: [
      ["Dates", "July 31-Aug 2"],
      ["Registration", "July 14-31"],
      ["Divisions", "14U-18U"],
      ["Team Fee", "$625"],
    ],
    cards: [
      ["14U/16U Division", "Team registration is available for the 14U/16U Softball showcase division."],
      ["16U/18U Division", "Team registration is available for the 16U/18U Softball showcase division."],
      ["Showcase Experience", "Play high-level fastpitch softball with college coaches in attendance and access to Parsons Sports Ranch amenities."],
    ],
    cta: ["Register Team by July 31", "https://parsonssportsranch.leagueapps.com/app/tournaments/5058557"],
    teamEntryLink: ["Register Team in LeagueApps", "https://parsonssportsranch.leagueapps.com/app/tournaments/5058557"],
    campLinks: [
      ["Purchase All-Skills Camp", "https://square.link/u/RZkD7DDf"],
      ["Purchase Pitchers & Catchers Camp", "https://square.link/u/Ihqz7o8V"],
      ["Purchase Both Camps", "https://square.link/u/T2bD3q2O"],
    ],
  },
  "/tournament-brackets/": {
    eyebrow: "Tournament Brackets",
    title: "Softball tournament brackets.",
    lead: "Follow the October 31-November 1 softball brackets for 10U and 14U at Parsons Sports Ranch.",
    image: IMAGE.action,
    variant: "brackets",
    hidePlanVisitButton: true,
    stats: [
      ["Latest Tournament", "Oct 31-Nov 1"],
      ["Format", "Double Elimination"],
      ["Divisions", "10U & 14U"],
      ["Brackets", "2 Available"],
    ],
    brackets: [
      {
        id: "10u-oct-31-nov-1",
        title: "10U Bracket",
        dates: "October 31-November 1, 2026",
        navLabel: "10U · Oct 31-Nov 1",
        embedUrl: "https://brackethq.com/b/qfmrd/embed/?name=1",
        publicUrl: "https://brackethq.com/b/qfmrd/",
      },
      {
        id: "14u-oct-31-nov-1",
        title: "14U Bracket",
        dates: "October 31-November 1, 2026",
        navLabel: "14U · Oct 31-Nov 1",
        embedUrl: "https://brackethq.com/b/rfmrd/embed/?name=1",
        publicUrl: "https://brackethq.com/b/rfmrd/",
      },
    ],
    cta: ["View Live Brackets", "#live-brackets"],
  },
  "/contact-us/": {
    eyebrow: "Contact",
    title: "Talk with the Parsons Sports Ranch team.",
    lead: "Questions about tournaments, facility details, Bucks Suite passes, or planning a team weekend? Start here.",
    image: IMAGE.entrance,
    variant: "contact",
    stats: [
      ["Location", "Clifton, TX"],
      ["General Manager", "Justin Tabor"],
      ["Tournament Director", "Kevin Bosson"],
      ["Marketing Director", "Jess Pisani"],
    ],
    cards: [
      ["General Manager", "Justin Tabor - (254) 339-9916 - justin@parsonssportsranch.com"],
      ["Tournament Director", "Kevin Bosson - (909) 753-7969 - kevin@parsonssportsranch.com"],
      ["Marketing Director", "Jess Pisani - (609) 489-9666 - jess@parsonssportsranch.com"],
      ["Location", "1358 FM2114, Clifton, TX 76634"],
    ],
  },
  "/plan-your-visit/": {
    eyebrow: "Plan Your Visit",
    title: "Everything families need before tournament weekend.",
    lead: "Directions, rules, lodging, contacts, registration, and game-day expectations all stay easy to find.",
    image: IMAGE.entrance,
    stats: [
      ["Address", "1358 FM2114"],
      ["City", "Clifton, TX"],
      ["Gate", "Cash + CC"],
      ["Registration", "LeagueApps"],
    ],
    cards: [
      ["Before You Arrive", "Review gate pricing, turf rules, parking, and tournament registration before leaving home."],
      ["Lodging", "Use local hotel partners and Parsons RV Park for team travel planning."],
      ["Book A Tournament", "Tournament registration remains connected directly to LeagueApps."],
    ],
    cta: ["Register On LeagueApps", "https://parsonssportsranch.leagueapps.com/tournaments"],
  },
  "/live-streaming/": {
    eyebrow: "Live Streaming",
    title: "Watch the weekend from anywhere.",
    lead: "Parsons Sports Network and live-stream support help families follow games when they cannot be at the fields.",
    image: IMAGE.network,
    stats: [
      ["Network", "Parsons Sports"],
      ["Coverage", "Live Games"],
      ["Access", "Families"],
      ["Facility", "Stream Ready"],
    ],
    cards: [
      ["Game Coverage", "Follow tournament action through streaming support when available."],
      ["Family Access", "Grandparents, parents, and fans can stay connected from outside the park."],
      ["Modern Facility", "WiFi and streaming infrastructure are part of the game-day experience."],
    ],
  },
  "/stream-now/": {
    eyebrow: "Stream Now",
    title: "Jump into Parsons Sports Network coverage.",
    lead: "Use this page as the streaming entry point for tournament weekends and live game access.",
    image: IMAGE.network,
    stats: [
      ["Stream", "Live"],
      ["Games", "Tournament"],
      ["Fans", "Remote Access"],
      ["Network", "PSR"],
    ],
    cards: [
      ["Live Games", "Streaming links and access details can live here for active events."],
      ["Tournament Weekends", "Make the stream entry point easy to find from every page."],
      ["Families First", "Keep remote family members connected to the weekend."],
    ],
  },
  "/thank-you/": {
    eyebrow: "Thank You",
    title: "Thanks for reaching out.",
    lead:
      "Your submission has been received, and the Parsons Sports Ranch team is excited to connect with you.",
    image: IMAGE.hero,
    cta: ["Back To Home", "/"],
    stats: [
      ["Status", "Received"],
      ["Weekdays", "Within 24 Hours"],
      ["Weekends", "Next Business Day"],
      ["Location", "Clifton, TX"],
    ],
    cards: [
      ["What Happens Next", "A member of our team will review your message and follow up with the right next step."],
      ["Business Week", "If you reached out Monday through Friday, we generally respond within 24 hours."],
      ["Weekend Messages", "If you reached out over the weekend, we will respond the next business day."],
    ],
  },
  "/hello-world/": {
    eyebrow: "Parsons Sports Ranch",
    title: "Welcome to Parsons Sports Ranch.",
    lead: "This legacy post permalink is preserved so old links do not break.",
    image: IMAGE.hero,
    stats: [
      ["Legacy URL", "Preserved"],
      ["Home", "Available"],
      ["Tournaments", "LeagueApps"],
      ["Facility", "Clifton"],
    ],
    cards: [
      ["Start At The Home Page", "Use the main homepage for the full Parsons Sports Ranch experience."],
      ["Find Tournaments", "Tournament registration remains connected through LeagueApps."],
      ["Plan A Visit", "Rules, pricing, lodging, and contact information are available on dedicated pages."],
    ],
  },
  "/category/uncategorized/": {
    eyebrow: "Archive",
    title: "Parsons Sports Ranch archive.",
    lead: "This category archive permalink is preserved for compatibility with the existing WordPress URL structure.",
    image: IMAGE.fields,
    stats: [
      ["Archive", "Preserved"],
      ["Pages", "Available"],
      ["Home", "Updated"],
      ["SEO", "Protected"],
    ],
    cards: [
      ["The Fields", "Explore our four turf fields for select baseball, softball, and travel ball weekends."],
      ["Plan Your Visit", "Find park rules, lodging, and game-day information for teams and families."],
      ["Hello World", "A legacy WordPress starter post URL kept from breaking."],
    ],
  },
};

const RULES_FAQ = [
  [
    "What are the daily gate fees?",
    "Adult admission for ages 13 and up is $20; children ages 4-12 are $10; seniors age 65 and up and veterans are $10. Children age 3 and under enter free. Players in uniform and three coaches per team also enter free.",
  ],
  ["Where is Parsons Sports Ranch located?", "Parsons Sports Ranch is located in Clifton, Texas. Teams travel here for youth baseball and softball tournament weekends."],
  ["Can I bring outside food, drinks, or coolers?", "No. Outside food, drinks, and coolers are not allowed. Team water jugs are available in the dugouts, and concessions are available at the park."],
  [
    "What amenities does Parsons Sports Ranch have for families?",
    "Families have access to concessions, clean restrooms, parking, Bucks Suite hospitality, WiFi, live-stream support, and room to spend the day comfortably.",
  ],
  ["Are metal cleats allowed on the turf?", "No. Metal cleats are not allowed. Players should wear molded cleats or turf shoes."],
  ["Can teams host tournaments or book weekends at Parsons Sports Ranch?", "Yes. Tournament organizers and teams can request dates and explore scheduling options through the Parsons Sports Ranch team."],
  ["Does Parsons Sports Ranch support baseball and softball?", "Yes. Parsons Sports Ranch supports both youth baseball and youth softball events."],
  ["How do teams register for tournaments?", "Use LeagueApps for tournament registration or contact the Parsons Sports Ranch team directly for event questions."],
];

const SEO_OVERRIDES = {
  "/the-fields/": {
    seoTitle: "Select Baseball & Softball Fields in Texas | Parsons Sports Ranch",
    seoDescription:
      "Explore four fully turfed youth baseball and softball fields in Clifton, Texas, with batting cages, bullpens, lighting, and select and travel ball tournament amenities.",
    canonical: `${SITE_URL}/the-fields/`,
  },
  "/buck-suit/": {
    seoTitle: "Bucks Suite VIP Passes | Parsons Sports Ranch",
    seoDescription:
      "Watch every game from the 10,000-square-foot Bucks Suite with climate control, buffet, rooftop patio, TVs, bar service, and VIP tournament views.",
    canonical: `${SITE_URL}/buck-suit/`,
  },
  "/family-fun/": {
    seoTitle: "Family-Friendly Baseball Tournaments | Parsons Sports Ranch",
    seoDescription:
      "Plan a youth baseball or softball tournament weekend with concessions, clean restrooms, parking, playground space, premium suite access, and family-friendly amenities.",
    canonical: `${SITE_URL}/family-fun/`,
  },
  "/hotel-partners/": {
    seoTitle: "Team Lodging Near Parsons Sports Ranch | Clifton & Waco Hotels",
    seoDescription:
      "Find team lodging for Parsons Sports Ranch tournament weekends with local Waco hotel partners and Parsons RV Park options near Clifton, Texas.",
    canonical: `${SITE_URL}/hotel-partners/`,
  },
  "/park-rules-and-pricing/": {
    seoTitle: "Park Rules, Gate Fees & Pricing | Parsons Sports Ranch",
    seoDescription:
      "Review Parsons Sports Ranch gate fees, turf rules, cooler policy, pet policy, Bucks Suite passes, and tournament-day expectations before you arrive.",
    canonical: `${SITE_URL}/park-rules-and-pricing/`,
    faq: RULES_FAQ,
  },
  "/college-softball-showcase/": {
    seoTitle: "College Softball Showcase | Parsons Sports Ranch",
    seoDescription:
      "Register July 14-July 31 for the July 31-August 2, 2026 PSR Softball Showcase Tournament II at Parsons Sports Ranch for 14U/16U and 16U/18U teams.",
    canonical: `${SITE_URL}/college-softball-showcase/`,
    event: {
      name: "PSR Softball Showcase Tournament II",
      startDate: "2026-07-31",
      endDate: "2026-08-02",
      description:
        "A high-level fastpitch softball showcase for 14U/16U and 16U/18U teams with college coaches in attendance at Parsons Sports Ranch.",
      url: "https://parsonssportsranch.leagueapps.com/app/tournaments/5058557",
    },
  },
  "/tournament-brackets/": {
    seoTitle: "Softball Tournament Brackets | Parsons Sports Ranch",
    seoDescription:
      "Follow the October 31-November 1, 2026 softball brackets for 10U and 14U at Parsons Sports Ranch.",
    canonical: `${SITE_URL}/tournament-brackets/`,
  },
  "/contact-us/": {
    seoTitle: "Contact Parsons Sports Ranch | Tournaments, Fields & Events",
    seoDescription:
      "Contact Parsons Sports Ranch for youth baseball and softball tournaments, Bucks Suite details, facility visits, sponsorships, and event planning in Clifton, Texas.",
    canonical: `${SITE_URL}/contact-us/`,
    pageType: "ContactPage",
  },
  "/plan-your-visit/": {
    seoTitle: "Plan Your Visit | Parsons Sports Ranch in Clifton, Texas",
    seoDescription:
      "Plan your Parsons Sports Ranch tournament weekend with directions, gate pricing, park rules, lodging links, registration, and team contacts in one place.",
    canonical: `${SITE_URL}/plan-your-visit/`,
  },
  "/live-streaming/": {
    seoTitle: "Live Streaming | Parsons Sports Ranch & Parsons Sports Network",
    seoDescription:
      "Watch Parsons Sports Ranch tournament coverage through Parsons Sports Network live-stream support for families following games from anywhere.",
    canonical: `${SITE_URL}/live-streaming/`,
  },
  "/stream-now/": {
    seoTitle: "Stream Now | Parsons Sports Network at Parsons Sports Ranch",
    seoDescription:
      "Use the Parsons Sports Ranch stream entry point to follow tournament weekends, live games, and Parsons Sports Network coverage when available.",
    canonical: `${SITE_URL}/stream-now/`,
  },
  "/thank-you/": {
    seoTitle: "Thank You | Parsons Sports Ranch",
    seoDescription:
      "Thank you for contacting Parsons Sports Ranch. The team will review your message and follow up about tournaments, visits, or event questions.",
    canonical: `${SITE_URL}/thank-you/`,
    robots: NOINDEX_ROBOTS,
  },
  "/hello-world/": {
    seoTitle: "Welcome | Parsons Sports Ranch",
    seoDescription:
      "A preserved legacy Parsons Sports Ranch permalink with links to current tournament registration, facility details, and visit planning.",
    canonical: `${SITE_URL}/hello-world/`,
    robots: NOINDEX_ROBOTS,
  },
  "/category/uncategorized/": {
    seoTitle: "Archive | Parsons Sports Ranch",
    seoDescription:
      "A preserved Parsons Sports Ranch archive permalink for compatibility with the previous WordPress site structure.",
    canonical: `${SITE_URL}/category/uncategorized/`,
    robots: NOINDEX_ROBOTS,
  },
};

Object.entries(SEO_OVERRIDES).forEach(([path, seo]) => {
  if (pages[path]) Object.assign(pages[path], seo);
});

const fallbackPage = {
  eyebrow: "Parsons Sports Ranch",
  title: "Texas' Premier Select & Travel Ball Destination.",
  lead: "This page is preserved as part of the Parsons Sports Ranch site structure.",
  image: IMAGE.hero,
  stats: [["Home", "PSR"], ["Fields", "4 Turf"], ["Suite", "10,000 SF"], ["Location", "Clifton"]],
  cards: [["Start Here", "Return to the homepage or tournament board for current information."]],
};

const ranchLinks = [
  ["Buck Suite", "/buck-suit/"],
  ["The Fields", "/the-fields/"],
  ["Lodging", "/hotel-partners/"],
];

const navLinks = [
  ["Rules & Pricing", "/park-rules-and-pricing/"],
  ["Sponsors", "/sponsors/"],
];

const registrationLinks = [
  ["PSR Tournaments", "https://parsonssportsranch.leagueapps.com/tournaments"],
  ["PSR Softball Brackets", "/tournament-brackets/"],
  [
    "Five Tool Tournaments",
    "https://play.fivetoolyouth.org/?region=&event_label_id=&month=&name=&division=&state=&sport_id=&director=98",
  ],
  ["Tournament Rules", "https://parsonssportsranch.leagueapps.com/"],
];

const SHOWCASE_DAYS = [
  { id: "friday", label: "Friday", date: "Jul 10", fullDate: "Friday, July 10" },
  { id: "saturday", label: "Saturday", date: "Jul 11", fullDate: "Saturday, July 11" },
  { id: "sunday", label: "Sunday", date: "Jul 12", fullDate: "Sunday, July 12" },
];

const SHOWCASE_FIELDS = [
  { id: "field-1", number: "1", shortName: "Parsons", name: "Parsons Field" },
  { id: "field-2", number: "2", shortName: "Remy", name: "Remy Field" },
  { id: "field-3", number: "3", shortName: "Parker's", name: "Parker's Field" },
  { id: "field-4", number: "4", shortName: "Sue Parsons", name: "Sue Parsons Field" },
];

const SHOWCASE_TEAMS = [
  { number: 1, name: "Pro Form Prospects", division: "14/16U" },
  { number: 2, name: "Bombers Juarez", division: "14/16U" },
  { number: 3, name: "Triple Threat", division: "14/16U" },
  { number: 4, name: "Velocity Fastpitch", division: "14/16U" },
  { number: 5, name: "Powerhouse", division: "14/16U" },
  { number: 6, name: "FCA Fastpitch", division: "14/16U" },
  { number: 7, name: "Buzz Powell", division: "14/16U" },
  { number: 8, name: "Midlothian Heat", division: "14/16U" },
  { number: 9, name: "Hooks Elite Baty", division: "16/18U" },
  { number: 10, name: "CS Elite", division: "16/18U" },
  { number: 11, name: "Magic FP", division: "16/18U" },
  { number: 12, name: "Firecrackers CTX", division: "14/16U" },
  { number: 13, name: "Blaze Vogan", division: "16/18U" },
  { number: 14, name: "Buzz CTX", division: "16/18U" },
  { number: 15, name: "Buzz Gold 16U", division: "16/18U" },
  { number: 16, name: "Buzz Premier 18U", division: "16/18U" },
  { number: 17, name: "FCA Fastpitch", division: "16/18U" },
  { number: 18, name: "TX Glory Adkins", division: "16/18U" },
  { number: 19, name: "Pro Form Gold", division: "16/18U" },
  { number: 20, name: "Barrel Factory", division: "16/18U" },
  { number: 21, name: "Waco Heat Biddy", division: "16/18U" },
  { number: 22, name: "Buzz 14U Gold", division: "16/18U" },
  { number: 23, name: "Impact Gold National", division: "16/18U" },
  { number: 24, name: "Buzz Gold Futures", division: "16/18U" },
];

const SHOWCASE_MATCHUPS = {
  friday: [
    ["11:30 AM", [[1, 20, 21], [2, 3, 4], [3, 13, 14], [4, 5, 6]]],
    ["1:00 PM", [[1, 15, 11], [2, 16, 14], [3, 19, 22], [4, 1, 2]]],
    ["2:30 PM", [[1, 15, 12], [2, 16, 21], [3, 22, 14], [4, 11, 10]]],
  ],
  saturday: [
    ["9:00 AM", [[1, 13, 17], [2, 10, 19], [3, 2, 3], [4, 1, 4]]],
    ["10:30 AM", [[1, 15, 19], [2, 11, 17], [3, 2, 6], [4, 12, 7]]],
    ["12:00 PM", [[1, 15, 16], [2, 10, 22], [3, 23, 8], [4, 4, 5]]],
    ["1:30 PM", [[1, 16, 18], [2, 13, 22], [3, 3, 6], [4, 1, 5]]],
    ["3:00 PM", [[1, 15, 18], [2, 14, 19], [3, 24, 8], [4, 23, 7]]],
    ["4:30 PM", [[1, 21, 9], [2, 20, 11], [3, 22, 14], [4, 12, 23]]],
    ["6:00 PM", [[1, 9, 20], [2, 21, 12], [3, 17, 18], [4, 7, 24]]],
  ],
  sunday: [
    ["9:00 AM", [[1, 9, 11], [2, 19, 17], [3, 3, 7], [4, 1, 6]]],
    ["10:30 AM", [[1, 23, 11], [2, 9, 17], [3, 4, 7], [4, 2, 8]]],
    ["12:00 PM", [[1, 13, 21], [2, 20, 18], [3, 12, 5], [4, 1, 3]]],
    ["1:30 PM", [[1, 10, 24], [2, 21, 19], [3, 2, 5], [4, 4, 6]]],
    ["3:00 PM", [[1, 20, 10], [2, 23, 24], [3, 14, 18], [4, 6, 8]]],
    ["4:30 PM", [[2, 13, 12], [3, 9, 14], [4, 5, 8]]],
  ],
};

const SHOWCASE_SPECIAL_EVENTS = [
  {
    id: "friday-camp",
    type: "event",
    dayId: "friday",
    dayLabel: "Friday",
    date: "Jul 10",
    sort: 1020,
    timeLabel: "5:00-8:00 PM",
    title: "Showcase Camps",
    fieldId: "all-fields",
    fieldNumber: "All",
    fieldName: "All Fields",
    body: "Pitchers & Catchers from 5:00-6:00 PM. Elite All Skills from 6:00-8:00 PM.",
    divisions: ["14/16U", "16/18U"],
    search: "friday jul 10 5:00 8:00 camp showcase pitchers catchers elite all skills all fields 14/16u 16/18u",
  },
];

const SHOWCASE_TEAM_BY_NUMBER = Object.fromEntries(SHOWCASE_TEAMS.map((team) => [team.number, team]));
const SHOWCASE_FIELD_BY_NUMBER = Object.fromEntries(SHOWCASE_FIELDS.map((field) => [Number(field.number), field]));
const SHOWCASE_DAY_BY_ID = Object.fromEntries(SHOWCASE_DAYS.map((day) => [day.id, day]));

function getShowcaseTimeSort(timeLabel) {
  const [, hourText, minuteText = "0", period] = timeLabel.match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i) || [];
  const hour = Number(hourText);
  const minutes = Number(minuteText);

  if (!Number.isFinite(hour) || !Number.isFinite(minutes)) return 0;
  const normalizedHour = period.toUpperCase() === "PM" && hour !== 12 ? hour + 12 : period.toUpperCase() === "AM" && hour === 12 ? 0 : hour;
  return normalizedHour * 60 + minutes;
}

const SHOWCASE_GAMES = Object.entries(SHOWCASE_MATCHUPS).flatMap(([dayId, rows]) => {
  const day = SHOWCASE_DAY_BY_ID[dayId];

  return rows.flatMap(([timeLabel, games]) => {
    return games.map(([fieldNumber, teamOneNumber, teamTwoNumber]) => {
      const field = SHOWCASE_FIELD_BY_NUMBER[fieldNumber];
      const teamOne = SHOWCASE_TEAM_BY_NUMBER[teamOneNumber];
      const teamTwo = SHOWCASE_TEAM_BY_NUMBER[teamTwoNumber];
      const division = teamOne.division === teamTwo.division ? teamOne.division : "Crossover";
      const search = [
        day.label,
        day.date,
        timeLabel,
        field.number,
        field.name,
        field.shortName,
        teamOne.number,
        teamOne.name,
        teamOne.division,
        teamTwo.number,
        teamTwo.name,
        teamTwo.division,
        division,
      ]
        .join(" ")
        .toLowerCase();

      return {
        id: `${dayId}-${getShowcaseTimeSort(timeLabel)}-${field.id}`,
        type: "game",
        dayId,
        dayLabel: day.label,
        date: day.date,
        sort: getShowcaseTimeSort(timeLabel),
        timeLabel,
        fieldId: field.id,
        fieldNumber: field.number,
        fieldName: field.name,
        fieldShortName: field.shortName,
        teamOne,
        teamTwo,
        division,
        search,
      };
    });
  });
});

const SHOWCASE_SCHEDULE_ITEMS = [...SHOWCASE_GAMES, ...SHOWCASE_SPECIAL_EVENTS].sort((a, b) => {
  const dayOrder = SHOWCASE_DAYS.findIndex((day) => day.id === a.dayId) - SHOWCASE_DAYS.findIndex((day) => day.id === b.dayId);
  if (dayOrder) return dayOrder;
  if (a.sort !== b.sort) return a.sort - b.sort;
  return String(a.fieldNumber).localeCompare(String(b.fieldNumber));
});

function normalizePath(pathname) {
  if (!pathname.endsWith("/")) return `${pathname}/`;
  return pathname;
}

function isCurrentHref(href) {
  return href.startsWith("/") && normalizePath(href) === normalizePath(window.location.pathname);
}

function activeAttrs(href) {
  return isCurrentHref(href) ? ' class="is-active" aria-current="page"' : "";
}

function externalLinkAttrs(href) {
  try {
    const url = new URL(href, window.location.href);
    return url.origin !== window.location.origin ? ' target="_blank" rel="noopener noreferrer"' : "";
  } catch {
    return "";
  }
}

function renderNavAnchor(label, href) {
  return `<a href="${href}"${activeAttrs(href)}>${label}</a>`;
}

function renderRanchDropdown() {
  return `
    <div class="nav-dropdown">
      <button type="button" aria-haspopup="true">
        The Ranch
        <i class="ti ti-chevron-down" aria-hidden="true"></i>
      </button>
      <div class="nav-dropdown-menu" aria-label="The Ranch links">
        ${ranchLinks.map(([label, href]) => renderNavAnchor(label, href)).join("")}
      </div>
    </div>
  `;
}

function renderRegistrationDropdown() {
  return `
    <div class="nav-dropdown">
      <a href="/#tournaments">
        Tournaments
        <i class="ti ti-chevron-down" aria-hidden="true"></i>
      </a>
      <div class="nav-dropdown-menu" aria-label="Tournament links">
        ${registrationLinks.map(([label, href]) => `<a href="${href}"${activeAttrs(href)}${externalLinkAttrs(href)}>${label}</a>`).join("")}
      </div>
    </div>
  `;
}

function renderHeaderVideo() {
  return `
    <iframe
      class="hero-video"
      src="${HEADER_VIDEO_URL}"
      title="Parsons Sports Ranch video background"
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerpolicy="strict-origin-when-cross-origin"
      tabindex="-1"
      aria-hidden="true"
    ></iframe>
  `;
}

function renderShowcaseNewsVideo() {
  return `
    <aside class="home-showcase-video" aria-label="Showcase news coverage">
      <p class="eyebrow">Watch the story</p>
      <div class="home-showcase-video-frame">
        <iframe
          src="${SHOWCASE_NEWS_VIDEO_URL}"
          title="Parsons Sports Ranch showcase news coverage"
          allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <a class="home-showcase-video-title" href="${SHOWCASE_NEWS_ARTICLE_URL}" target="_blank" rel="noopener noreferrer">
        Parsons Sports Ranch Hosts Showcase with Over a Dozen College Coaches - KWTX
        <i class="ti ti-external-link" aria-hidden="true"></i>
      </a>
    </aside>
  `;
}

function renderMobileMenuContent() {
  return `
    <div class="mobile-menu-body">
      <div class="mobile-menu-actions">
        <a class="mobile-action primary" href="https://parsonssportsranch.leagueapps.com/tournaments" target="_blank" rel="noopener noreferrer">
          <i class="ti ti-trophy" aria-hidden="true"></i>
          <span>Register</span>
        </a>
        <a class="mobile-action" href="/#tournaments">
          <i class="ti ti-list-search" aria-hidden="true"></i>
          <span>Tournament Board</span>
        </a>
        <a class="mobile-action bracket-action${isCurrentHref("/tournament-brackets/") ? " is-active" : ""}" href="/tournament-brackets/"${isCurrentHref("/tournament-brackets/") ? ' aria-current="page"' : ""}>
          <i class="ti ti-git-branch" aria-hidden="true"></i>
          <span>PSR Softball Brackets</span>
        </a>
      </div>

      <nav class="mobile-menu-nav" aria-label="Mobile menu">
        <p class="mobile-section-label">Explore</p>
        <div class="mobile-link-grid">
          <a href="/the-fields/"${activeAttrs("/the-fields/")}><i class="ti ti-layout-grid" aria-hidden="true"></i><span>The Fields</span></a>
          <a href="/buck-suit/"${activeAttrs("/buck-suit/")}><i class="ti ti-ticket" aria-hidden="true"></i><span>Bucks Suite</span></a>
          <a href="/hotel-partners/"${activeAttrs("/hotel-partners/")}><i class="ti ti-bed" aria-hidden="true"></i><span>Lodging</span></a>
          <a href="https://www.parsonssportsnetwork.com/" target="_blank" rel="noopener noreferrer"><i class="ti ti-broadcast" aria-hidden="true"></i><span>Live Streaming</span></a>
          <a href="/park-rules-and-pricing/"${activeAttrs("/park-rules-and-pricing/")}><i class="ti ti-clipboard-list" aria-hidden="true"></i><span>Rules</span></a>
        </div>

        <details class="mobile-menu-group">
          <summary>
            <span><i class="ti ti-calendar-event" aria-hidden="true"></i> Tournaments</span>
            <i class="ti ti-chevron-down" aria-hidden="true"></i>
          </summary>
          <div class="mobile-menu-subnav">
            ${registrationLinks.map(([label, href]) => `<a href="${href}"${activeAttrs(href)}${externalLinkAttrs(href)}>${label}</a>`).join("")}
          </div>
        </details>

        <a class="mobile-menu-direct${isCurrentHref("/sponsors/") ? " is-active" : ""}" href="/sponsors/"${isCurrentHref("/sponsors/") ? ' aria-current="page"' : ""}>
          <span><i class="ti ti-heart-handshake" aria-hidden="true"></i> Sponsors</span>
          <i class="ti ti-arrow-right" aria-hidden="true"></i>
        </a>

        <a class="mobile-menu-direct${isCurrentHref("/contact-us/") ? " is-active" : ""}" href="/contact-us/"${isCurrentHref("/contact-us/") ? ' aria-current="page"' : ""}>
          <span><i class="ti ti-message-circle" aria-hidden="true"></i> Contact</span>
          <i class="ti ti-arrow-right" aria-hidden="true"></i>
        </a>
      </nav>

      <div class="mobile-contact-card">
        <span>Game Day Address</span>
        <strong>1358 FM2114, Clifton, TX 76634</strong>
      </div>
    </div>
  `;
}

function renderHeader(extraClass = "") {
  return `
    <header class="site-header is-scrolled${extraClass ? ` ${extraClass}` : ""}" aria-label="Primary navigation">
      <div class="brand-row">
        <a class="brand" href="/" aria-label="Parsons Sports Ranch home">
          <img src="/assets/parsons-white-logo-150x150.webp" alt="" />
          <span>Parsons<br />Sports Ranch</span>
        </a>
        <a class="network-brand" href="https://www.parsonssportsnetwork.com/" target="_blank" rel="noopener noreferrer" aria-label="Parsons Sports Network">
          <img src="${IMAGE.network}" alt="Parsons Sports Network" />
        </a>
      </div>
      <nav class="desktop-nav" aria-label="Main menu">
        ${renderRanchDropdown()}
        ${renderRegistrationDropdown()}
        ${navLinks.map(([label, href]) => renderNavAnchor(label, href)).join("")}
      </nav>
      <a class="header-cta" href="/contact-us/">Contact</a>
      <button class="menu-button" type="button" aria-label="Open menu" aria-controls="mobileMenu" aria-expanded="false">
        <i class="ti ti-menu-2" aria-hidden="true"></i>
      </button>
    </header>
    <div class="mobile-backdrop" data-menu-close hidden></div>
    <aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
      <div class="mobile-menu-top">
        <span>Parsons Sports Ranch</span>
        <button type="button" aria-label="Close menu" data-menu-close><i class="ti ti-x" aria-hidden="true"></i></button>
      </div>
      ${renderMobileMenuContent()}
    </aside>
  `;
}

function renderDefaultInteriorContent(page) {
  const featureCopyAttrs = page.featureClass === "showcase-flyer-feature" ? ' class="showcase-entry" data-reveal' : "";

  return `
    <section class="interior-content">
      <div class="interior-stats">
        ${page.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>

      <div class="interior-feature ${page.featureClass || ""}">
        <figure>
          <img src="${page.image}" alt="" />
        </figure>
        <div${featureCopyAttrs}>
          <p class="eyebrow dark">${page.eyebrow}</p>
          <h2>${page.title}</h2>
          <p>${page.lead}</p>
          ${
            page.links
              ? `<div class="interior-link-grid">${page.links.map(([label, href]) => `<a href="${href}"${externalLinkAttrs(href)}>${label}</a>`).join("")}</div>`
              : ""
          }
        </div>
      </div>

      <div class="interior-card-grid">
        ${page.cards
          .map(
            ([title, body], index) => `
              <article class="interior-card">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${title}</h3>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderShowcaseRegistrationContent(page) {
  return `
    <section class="showcase-registration-content" aria-label="Showcase registration options">
      <div class="showcase-registration-wrap">
        <div class="interior-stats showcase-registration-stats">
          ${page.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>

        <div class="showcase-registration-heading">
          <div>
            <p class="eyebrow dark">Registration Options</p>
            <h2>Choose your path to the showcase.</h2>
          </div>
          <p>Enter a team through LeagueApps or use the camp payment links for individual athlete sessions.</p>
        </div>

        <div class="showcase-registration-grid">
          <article class="showcase-registration-panel showcase-team-entry-panel">
            <span class="showcase-registration-number" aria-hidden="true">01</span>
            <div class="showcase-registration-copy">
              <div class="showcase-registration-kicker">
                <span class="showcase-registration-icon" aria-hidden="true"><i class="ti ti-users-group"></i></span>
                <p class="eyebrow dark">Team Entry</p>
              </div>
              <h2>Tournament Team Registration</h2>
              <p>Secure your team&apos;s place in the July 31-August 2 showcase through LeagueApps.</p>
            </div>
            <div class="showcase-registration-highlights" aria-label="Team registration details">
              <div><span>Team Fee</span><strong>$625</strong></div>
              <div><span>Divisions</span><strong>14U/16U + 16U/18U</strong></div>
              <div><span>Registration</span><strong>July 14-July 31</strong></div>
            </div>
            <a class="showcase-team-entry-link" href="${page.teamEntryLink[1]}"${externalLinkAttrs(page.teamEntryLink[1])}>
              <span>${page.teamEntryLink[0]}</span>
              <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
            </a>
            <div class="showcase-registration-trust">
              <i class="ti ti-shield-check" aria-hidden="true"></i>
              <span>Opens secure team registration in LeagueApps.</span>
            </div>
          </article>

          <article class="showcase-registration-panel showcase-camp-entry-panel">
            <span class="showcase-registration-number" aria-hidden="true">02</span>
            <div class="showcase-registration-copy">
              <div class="showcase-registration-kicker">
                <span class="showcase-registration-icon" aria-hidden="true"><i class="ti ti-ball-baseball"></i></span>
                <p class="eyebrow dark">Camp Registration</p>
              </div>
              <h2>Choose Your Camp</h2>
              <p>Purchase the All-Skills Camp, the Pitchers &amp; Catchers Camp, or both sessions through Square.</p>
            </div>
            <div class="showcase-camp-link-list">
              ${page.campLinks
                .map(
                  ([label, href]) => `
                    <a href="${href}"${externalLinkAttrs(href)}>
                      <span>${label}</span>
                      <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
                    </a>
                  `,
                )
                .join("")}
            </div>
            <div class="showcase-registration-trust">
              <i class="ti ti-lock" aria-hidden="true"></i>
              <span>Camp payments open in a secure Square checkout.</span>
            </div>
          </article>
        </div>

        <div class="interior-card-grid showcase-registration-details">
          ${page.cards
            .map(
              ([title, body], index) => `
                <article class="interior-card">
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${title}</h3>
                  <p>${body}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>
  `;
}

function renderShowcaseContent(page) {
  const gamesByDay = SHOWCASE_DAYS.map((day) => {
    const count = SHOWCASE_GAMES.filter((game) => game.dayId === day.id).length;
    return { ...day, count };
  });
  const divisions = [...new Set(SHOWCASE_TEAMS.map((team) => team.division))];

  return `
    <section class="showcase-schedule-content" id="schedule">
      <div class="showcase-schedule-wrap">
        <div class="interior-stats showcase-stat-strip">
          ${page.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>

        <div class="showcase-intro">
          <div>
            <p class="eyebrow dark">Game Schedule</p>
            <h2>Every field, time, and matchup in one place.</h2>
          </div>
          <p>July 10-12 at Parsons Field, Remy Field, Parker's Field, and Sue Parsons Field.</p>
        </div>

        <div class="showcase-schedule-app" data-showcase-schedule>
          <div class="showcase-control-panel">
            <div class="showcase-day-tabs" role="group" aria-label="Showcase schedule days">
              <button class="is-active" type="button" data-schedule-day="all" aria-pressed="true">
                <span>All</span>
                <strong>${SHOWCASE_GAMES.length}</strong>
                <small>Games</small>
              </button>
              ${gamesByDay
                .map(
                  (day) => `
                    <button type="button" data-schedule-day="${day.id}" aria-pressed="false">
                      <span>${day.label}</span>
                      <strong>${day.count}</strong>
                      <small>${day.date}</small>
                    </button>
                  `,
                )
                .join("")}
            </div>

            <div class="showcase-filter-grid">
              <label class="showcase-search">
                <span>Search</span>
                <input id="showcaseSearch" type="search" placeholder="Team, field, time" autocomplete="off" />
              </label>

              <label class="showcase-select">
                <span>Team</span>
                <select id="showcaseTeamFilter">
                  <option value="all">All teams</option>
                  ${SHOWCASE_TEAMS.map((team) => `<option value="${team.number}">${team.number} - ${team.name}</option>`).join("")}
                </select>
              </label>

              <label class="showcase-select">
                <span>Field</span>
                <select id="showcaseFieldFilter">
                  <option value="all">All fields</option>
                  ${SHOWCASE_FIELDS.map((field) => `<option value="${field.id}">Field ${field.number} - ${field.name}</option>`).join("")}
                </select>
              </label>

              <button class="showcase-reset" type="button" data-showcase-reset hidden>Reset</button>
            </div>
          </div>

          <div class="showcase-results-bar">
            <strong id="showcaseResultCount">${SHOWCASE_GAMES.length} games</strong>
            <span id="showcaseResultContext">All days &middot; all teams &middot; all fields</span>
          </div>

          <div class="showcase-results" id="showcaseResults" aria-live="polite"></div>
        </div>

        <div class="showcase-lower-grid">
          <section class="showcase-camp-card" aria-label="Showcase camp registration">
            <div>
              <p class="eyebrow dark">Friday Camp</p>
              <h2>Optional camp blocks run before the weekend slate opens up.</h2>
              <p>Pitchers & Catchers starts at 5:00 PM, followed by Elite All Skills from 6:00-8:00 PM.</p>
            </div>
            <div class="interior-link-grid">
              ${page.links.map(([label, href]) => `<a href="${href}"${externalLinkAttrs(href)}>${label}</a>`).join("")}
            </div>
          </section>

          <section class="showcase-roster" aria-label="Team directory">
            <div class="showcase-roster-head">
              <p class="eyebrow dark">Team Directory</p>
              <h2>Numbers decoded.</h2>
            </div>
            <div class="showcase-roster-grid">
              ${divisions
                .map(
                  (division) => `
                    <div class="showcase-roster-division">
                      <h3>${division}</h3>
                      <div>
                        ${SHOWCASE_TEAMS.filter((team) => team.division === division)
                          .map(
                            (team) => `
                              <button type="button" data-roster-team="${team.number}">
                                <span>${team.number}</span>
                                <strong>${team.name}</strong>
                              </button>
                            `,
                          )
                          .join("")}
                      </div>
                    </div>
                  `,
                )
                .join("")}
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderCampFimfoPartner() {
  return `
    <article class="camp-fimfo-feature" aria-labelledby="camp-fimfo-title">
      <header class="camp-fimfo-heading">
        <span class="camp-fimfo-eyebrow">Premier Lodging Partner</span>
        <h2 class="camp-fimfo-title" id="camp-fimfo-title">Camp Fimfo Waco</h2>
        <p class="camp-fimfo-intro">Turn your tournament weekend into a family getaway.</p>
      </header>
      <div class="camp-fimfo-layout">
        <div class="camp-fimfo-showcase">
          <div class="camp-fimfo-photos">
            <div class="camp-fimfo-photo camp-fimfo-cabin-window"><img class="camp-fimfo-cabin" src="/assets/lodging/camp-fimfo-waco-cabin.webp" alt="Cabin with a covered porch at Camp Fimfo Waco" width="1600" height="1065" loading="lazy" decoding="async"></div>
            <div class="camp-fimfo-photo camp-fimfo-slide-window"><img class="camp-fimfo-slide" src="/assets/lodging/camp-fimfo-waco-water-park.webp" alt="Water playground with slides and splash features at Camp Fimfo Waco" width="1600" height="1069" loading="lazy" decoding="async"></div>
          </div>
          <ul class="camp-fimfo-amenities">
            <li><i class="ti ti-home" aria-hidden="true"></i><span>Cabins &amp; RV sites</span></li>
            <li><i class="ti ti-ripple" aria-hidden="true"></i><span>Resort pool &amp;<br>water playground</span></li>
            <li><i class="ti ti-golf" aria-hidden="true"></i><span>Mini golf &amp;<br>on-site dining</span></li>
          </ul>
          <p class="camp-fimfo-seasonal">Water attractions are seasonal.</p>
        </div>
        <aside class="camp-fimfo-offer" aria-label="Camp Fimfo Parsons discount">
          <p class="camp-fimfo-offer-label">Exclusive Parsons Offer</p>
          <strong class="camp-fimfo-discount">30% OFF</strong>
          <p class="camp-fimfo-code-label">Use code PARSONS<br>at booking.</p>
          <code class="camp-fimfo-code">PARSONS</code>
          <small class="camp-fimfo-terms">For stays through the end of 2026.</small>
          <a class="camp-fimfo-book" data-lodging-partner="camp_fimfo" href="https://book.campfimfo.com/waco/search" target="_blank" rel="noopener noreferrer">Book Camp Fimfo<i class="ti ti-arrow-right" aria-hidden="true"></i></a>
        </aside>
      </div>
    </article>
  `;
}

function renderLodgingContent(page) {
  return `
    <section class="lodging-content" aria-label="Lodging partners">
      <div class="lodging-wrap">
        <div class="lodging-section-header">
          <p class="eyebrow dark">Book Your Stay</p>
          <h2>Choose hotels or RV sites close to the park.</h2>
          <p>Give traveling families two clear paths: partner hotel options for the weekend or Parsons RV Park just minutes from the fields.</p>
        </div>

        <div class="lodging-link-list">
          ${renderCampFimfoPartner()}
          <section class="lodging-partners" aria-labelledby="lodging-partners-title">
            <header class="lodging-partners-heading">
              <p class="eyebrow dark">More Ways to Stay</p>
              <h2 id="lodging-partners-title">Lodging Partners</h2>
            </header>
            <div class="lodging-partner-grid">
              ${page.lodgingLinks
                .map(
                  (link) => `
                    <article class="lodging-partner-card">
                      <div class="lodging-partner-media">
                        <img src="${link.image}" alt="${link.imageAlt}" width="800" height="500" loading="lazy" decoding="async">
                      </div>
                      <div class="lodging-partner-copy">
                        <p class="lodging-partner-kicker">${link.kicker}</p>
                        <h3>${link.title}</h3>
                        <p class="lodging-partner-subtitle">${link.subtitle}</p>
                        ${link.description ? `<p class="lodging-partner-description">${link.description}</p>` : ""}
                        ${link.details ? `
                          <details class="lodging-partner-details">
                            <summary>Hotel details</summary>
                            <p>4301 S Jack Kultgen Expy &middot; Right off I-35</p>
                            <ul>${link.details.map((detail) => `<li>${detail}</li>`).join("")}</ul>
                          </details>
                        ` : ""}
                        <a class="lodging-partner-button" data-lodging-partner="${link.id}" href="${link.href}" target="_blank" rel="noopener noreferrer" aria-label="${link.action} — ${link.title}">
                          ${link.action}<i class="ti ti-arrow-up-right" aria-hidden="true"></i>
                        </a>
                      </div>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function renderTurnstileVerification(extraClass = "") {
  return `
    <div class="form-verification${extraClass ? ` ${extraClass}` : ""}" data-turnstile-verification>
      <div data-turnstile-widget></div>
      <p role="status" aria-live="polite" data-turnstile-status>Checking your browser before submission...</p>
    </div>
  `;
}

function contactFormErrorMessage() {
  const error = new URLSearchParams(window.location.search).get("error");
  const messages = {
    missing: "Please enter a valid name, email address, and a message of at least 10 characters.",
    verification: "We could not verify this submission. Please refresh the page and try again.",
    "rate-limit": "Too many submission attempts were received. Please wait 15 minutes and try again.",
  };
  return messages[error] || "";
}

function renderContactContent(page) {
  const formError = contactFormErrorMessage();
  const contacts = [
    {
      role: "General Manager",
      name: "Justin Tabor",
      phone: "(254) 339-9916",
      phoneHref: "tel:12543399916",
      email: "justin@parsonssportsranch.com",
    },
    {
      role: "Tournament Director",
      name: "Kevin Bosson",
      phone: "(909) 753-7969",
      phoneHref: "tel:19097537969",
      email: "kevin@parsonssportsranch.com",
    },
    {
      role: "Marketing Director",
      name: "Jess Pisani",
      phone: "(609) 489-9666",
      phoneHref: "tel:16094899666",
      email: "jess@parsonssportsranch.com",
    },
  ];

  return `
    <section class="contact-page-content" aria-label="Contact Parsons Sports Ranch">
      <div class="interior-stats contact-stat-strip">
        ${page.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>

      <div class="contact-page-grid">
        <div class="contact-info-panel">
          <p class="eyebrow dark">Start Here</p>
          <h2>Send the team a note.</h2>
          <p>Use the form for tournament questions, Bucks Suite details, facility visits, sponsorships, or general game-day planning.</p>

          <div class="contact-card-list">
            ${contacts
              .map(
                (contact) => `
                  <article>
                    <span>${contact.role}</span>
                    <strong>${contact.name}</strong>
                    <a href="${contact.phoneHref}">${contact.phone}</a>
                    <a href="mailto:${contact.email}">${contact.email}</a>
                  </article>
                `,
              )
              .join("")}
          </div>
        </div>

        <div class="contact-form-panel">
          <div class="contact-form-header">
            <p class="eyebrow dark">Contact Form</p>
            <h3>Tell us what you need.</h3>
          </div>
          ${formError ? `<p class="form-error" role="alert">${formError}</p>` : ""}
          <form class="contact-form" action="/api/contact" method="post">
            <input type="hidden" name="source" value="Contact Page" />
            <input class="form-honeypot" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" />
            <div class="contact-form-grid">
              <label>
                <span>First Name</span>
                <input type="text" name="first_name" autocomplete="given-name" required />
              </label>
              <label>
                <span>Last Name</span>
                <input type="text" name="last_name" autocomplete="family-name" required />
              </label>
              <label>
                <span>Email</span>
                <input type="email" name="email" autocomplete="email" required />
              </label>
              <label>
                <span>Phone Number</span>
                <input type="tel" name="phone" autocomplete="tel" inputmode="tel" maxlength="14" placeholder="(555) 555-5555" data-phone-format required />
              </label>
              <label class="is-full">
                <span>Message</span>
                <textarea name="message" rows="7" minlength="10" maxlength="800" aria-describedby="contactMessageCount" data-character-limited required></textarea>
              </label>
              ${renderTurnstileVerification("is-full")}
              <div class="contact-character-row">
                <span id="contactMessageCount" data-character-count>0 / 800</span>
                <button type="submit" data-protected-submit disabled>
                  <i class="ti ti-send" aria-hidden="true"></i>
                  Submit Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  `;
}

function renderCheckList(items) {
  return `
    <ul class="rules-check-list">
      ${items.map((item) => `<li><i class="ti ti-check" aria-hidden="true"></i><span>${item}</span></li>`).join("")}
    </ul>
  `;
}

function renderRulesContent() {
  const fees = [
    ["Daily Gate Fees", "Adult (Ages 13+)", "$20.00", "Adult"],
    ["Daily Gate Fees", "Child (Ages 4-12)", "$10.00", "Child"],
    ["Daily Gate Fees", "Seniors (65+) / Veterans", "$10.00", "65+ / Veterans"],
    ["Daily Gate Fees", "Players & Coaches", "Free", "Players must be in uniform; 3 coaches per team"],
    ["Daily Gate Fees", "Kids 3 & Under", "Free", "Kids 3 and under"],
    ["VIP Bucks Suite", "Premium game-day access", "$49.99", "Adults 13+ per day; children ages 4-12 $33.99/day; coaches $34.99/day; players $33.99/day"],
  ];

  const rules = [
    {
      icon: "ti-tools-kitchen-off",
      title: "Food + Coolers",
      detail:
        "No outside food or drink. No coolers. You may be asked to throw it out or take it back to your car. Team water jugs are available in the dugouts.",
    },
    {
      icon: "ti-paw-off",
      title: "Pets",
      detail: "No pets allowed inside the park.",
    },
    {
      icon: "ti-video-off",
      title: "Backstop Devices",
      detail: "No hanging devices on the nets behind home plate for Video or GameChanger.",
    },
    {
      icon: "ti-tent-off",
      title: "Canopies",
      detail: "No canopies inside the facility.",
    },
    {
      icon: "ti-shoe-off",
      title: "Turf Cleats",
      detail: "All fields are turf. No metal cleats. Molded cleats and turf shoes only.",
    },
  ];

  const familyItems = [
    "<strong>Turfed playground area</strong> for kids to play safely.",
    "<strong>Climate-controlled comfort</strong> with cold A/C in the summer and heat in the winter.",
    "<strong>Infield turf wiffle ball area</strong> for fun between games.",
    "Scenic Texas country views with trees, water, and room to enjoy the ranch.",
  ];

  const techItems = [
    "High-speed WiFi across the facility.",
    "<strong>Live streaming app</strong> so parents, grandparents, and fans never miss a game.",
    "Modern concessions stand and clean restrooms.",
    "Parking designed for teams and families.",
  ];

  const faqs = RULES_FAQ;

  return `
    <section class="rules-rates" aria-label="Tournament rules and gate fees">
      <div class="rules-section-header">
        <p class="eyebrow dark">Tournament Rules</p>
        <h2>Gate fees, suite passes, and park rules in one place.</h2>
        <p>Cash and credit cards are accepted. Processing fees may apply.</p>
      </div>

      <div class="rules-pricing-grid">
        ${fees
          .map(
            ([kicker, label, price, detail]) => `
              <article class="rules-price-card">
                <span>${kicker}</span>
                <h3>${label}</h3>
                <strong>${price}</strong>
                <p>${detail}</p>
              </article>
            `,
          )
          .join("")}
      </div>

      <div class="rules-alert-list">
        ${rules
          .map(
            (rule, index) => `
              <article>
                <span class="rules-alert-number">${String(index + 1).padStart(2, "0")}</span>
                <i class="ti ${rule.icon}" aria-hidden="true"></i>
                <h3>${rule.title}</h3>
                <p>${rule.detail}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="rules-family-band">
      <figure>
        <img src="${IMAGE.action}" alt="Softball game at Parsons Field" loading="lazy" decoding="async" />
      </figure>
      <div>
        <p class="eyebrow dark">Family Experience</p>
        <h2>A ballpark experience for the whole family.</h2>
        <p>Parsons Sports Ranch was designed with the whole family in mind.</p>
        ${renderCheckList(familyItems)}
        <a class="button primary" href="https://parsonssportsranch.leagueapps.com/tournaments" target="_blank" rel="noopener noreferrer">
          <i class="ti ti-trophy" aria-hidden="true"></i>
          Book Your Tournament
        </a>
      </div>
    </section>

    <section class="rules-tech-band">
      <div>
        <p class="eyebrow">Parsons Sports Ranch</p>
        <h2>Technology & Convenience</h2>
        ${renderCheckList(techItems)}
      </div>
      <figure>
        <img src="${IMAGE.bucks}" alt="Players at Parsons Sports Ranch Bucks Suite" />
      </figure>
    </section>

    <section class="rules-testimonial">
      <figure>
        <img src="${IMAGE.hero}" alt="A game underway at Parsons Sports Ranch" />
      </figure>
      <blockquote>
        <p class="eyebrow dark">Loved by Players, Parents, & Coaches</p>
        <strong>Parsons Sports Ranch delivers an unforgettable experience.</strong>
        <p>The facilities are top-notch, the fields are meticulously maintained, and the staff goes above and beyond to ensure every event runs smoothly.</p>
        <cite>Kent Stark, Houston Tigers Coach</cite>
      </blockquote>
    </section>

    <section class="rules-faq" aria-label="Park Rules & Pricing FAQ">
      <div class="rules-section-header">
        <p class="eyebrow dark">FAQ</p>
        <h2>Park Rules & Pricing Questions</h2>
        <p>Quick answers for teams, parents, and tournament directors planning a weekend at Parsons Sports Ranch.</p>
      </div>
      <div class="rules-faq-grid">
        ${faqs
          .map(
            ([question, answer], index) => `
              <details ${index === 0 ? "open" : ""}>
                <summary><span>${question}</span><i class="ti ti-plus" aria-hidden="true"></i></summary>
                <p>${answer}</p>
              </details>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="rules-contact-band" aria-label="Plan your visit">
      <div>
        <p class="eyebrow">Parsons Sports Ranch</p>
        <h2>Plan your visit before first pitch.</h2>
        <p>Where state-of-the-art facilities meet small-town hospitality: four fully turfed fields, a 10,000 square foot Bucks Suite, and amenities for the whole family.</p>
      </div>
      <div class="rules-contact-panel">
        <h3>Ready to book a tournament or event?</h3>
        <form class="rules-visit-form" action="/api/contact" method="post">
          <input type="hidden" name="source" value="Rules & Pricing Page" />
          <input class="form-honeypot" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" />
          <label>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" minlength="10" maxlength="800" required></textarea>
          </label>
          ${renderTurnstileVerification()}
          <button type="submit" data-protected-submit disabled>Submit</button>
        </form>
        <div class="rules-contact-grid">
          <article>
            <span>General Manager</span>
            <strong>Justin Tabor</strong>
            <a href="tel:12543399916">(254) 339-9916</a>
            <a href="mailto:justin@parsonssportsranch.com">justin@parsonssportsranch.com</a>
          </article>
          <article>
            <span>Tournament Director</span>
            <strong>Kevin Bosson</strong>
            <a href="tel:19097537969">(909) 753-7969</a>
            <a href="mailto:kevin@parsonssportsranch.com">kevin@parsonssportsranch.com</a>
          </article>
        </div>
      </div>
    </section>
  `;
}

function renderFieldsContent(page) {
  const familyItems = [
    "<strong>Turfed playground area</strong> for kids to play safely between games.",
    "<strong>Climate-controlled comfort</strong> with cold A/C in the summer and heat in the winter.",
    "<strong>Infield turf wiffle ball area</strong> for a fun break between tournament games.",
    "Scenic Texas country views with trees, water, and room to enjoy the ranch.",
  ];

  const techItems = [
    "High-speed WiFi across the facility.",
    "<strong>Live-stream support</strong> so parents, grandparents, and fans can follow when coverage is available.",
    "Modern concessions stand and clean restrooms.",
    "Parking designed for teams and families.",
  ];

  const tournamentDetails = [
    ["Select & Travel Baseball", "Find upcoming youth baseball tournaments through our registration links. Each event listing provides its own age divisions, dates, format, and entry details."],
    ["Softball Tournaments & Events", "Our softball calendar includes tournaments and special event weekends. Check current tournament listings for event-specific information."],
    ["Plan the Weekend", "Check gate fees and turf rules before arrival, arrange team lodging, and explore Bucks Suite passes for a climate-controlled place to enjoy the games."],
  ];

  return `
    <section class="interior-content seo-proof-section">
      <div class="interior-stats">
        ${page.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
      </div>

      <div class="interior-feature">
        <figure>
          <img src="${page.image}" alt="Overhead view of the four turf fields at Parsons Sports Ranch" loading="lazy" decoding="async" />
        </figure>
        <div>
          <p class="eyebrow dark">${page.eyebrow}</p>
          <h2>${page.featureTitle}</h2>
          <p>${page.featureIntro}</p>
        </div>
      </div>

      <div class="interior-card-grid">
        ${page.cards
          .map(
            ([title, body], index) => `
              <article class="interior-card">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${title}</h3>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="rules-family-band">
      <figure>
        <img src="${IMAGE.sportsmanship}" alt="Softball players at Parsons Sports Ranch" loading="lazy" decoding="async" />
      </figure>
      <div>
        <p class="eyebrow dark">Parsons Sports Ranch</p>
        <h2>${page.familyHeadline}</h2>
        <p>${page.familyIntro}</p>
        ${renderCheckList(familyItems)}
        <a class="button primary" href="https://parsonssportsranch.leagueapps.com/tournaments" target="_blank" rel="noopener noreferrer">
          <i class="ti ti-trophy" aria-hidden="true"></i>
          Book Your Tournament
        </a>
        <p><a href="/buck-suit/">Explore the Bucks Suite</a> &middot; <a href="/hotel-partners/">Find team lodging</a></p>
      </div>
    </section>

    <section class="rules-tech-band">
      <div>
        <p class="eyebrow">Parsons Sports Ranch</p>
        <h2>Technology & Convenience</h2>
        ${renderCheckList(techItems)}
      </div>
      <figure>
        <img src="${IMAGE.bucks}" alt="View of the field from the Bucks Suite at Parsons Sports Ranch" loading="lazy" decoding="async" />
      </figure>
    </section>

    <section class="rules-rates seo-tournament-proof" aria-label="Tournament planning at Parsons Sports Ranch">
      <div class="rules-section-header">
        <p class="eyebrow dark">Tournament Weekends</p>
        <h2>Built for baseball, softball, and full family weekends.</h2>
        <p>Parsons Sports Ranch keeps the tournament experience connected from registration to the last game of the weekend.</p>
      </div>
      <div class="interior-card-grid">
        ${tournamentDetails
          .map(
            ([title, body], index) => `
              <article class="interior-card">
                <span>${String(index + 1).padStart(2, "0")}</span>
                <h3>${title}</h3>
                <p>${body}</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <p><a href="/park-rules-and-pricing/">Park rules & pricing</a> &middot; <a href="/plan-your-visit/">Plan your visit</a></p>
    </section>

    <section class="rules-faq" aria-label="${page.faqTitle} FAQ">
      <div class="rules-section-header">
        <p class="eyebrow dark">FAQ</p>
        <h2>${page.faqTitle}</h2>
        <p>${page.faqIntro}</p>
      </div>
      <div class="rules-faq-grid">
        ${page.faq
          .map(
            ([question, answer], index) => `
              <details ${index === 0 ? "open" : ""}>
                <summary><span>${question}</span><i class="ti ti-plus" aria-hidden="true"></i></summary>
                <p>${answer}</p>
              </details>
            `,
          )
          .join("")}
      </div>
    </section>

    <section class="rules-contact-band" aria-label="Plan your visit">
      <div>
        <p class="eyebrow">Parsons Sports Ranch</p>
        <h2>Plan your visit to Parsons Sports Ranch.</h2>
        <p>Where state-of-the-art facilities meet small-town hospitality: four fully turfed fields, a 10,000 square foot Bucks Suite, and amenities for the whole family.</p>
      </div>
      <div class="rules-contact-panel">
        <h3>Ready to book a tournament or event?</h3>
        <form class="rules-visit-form" action="/api/contact" method="post">
          <input type="hidden" name="source" value="Interior Page Contact Band" />
          <input class="form-honeypot" type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" />
          <label>
            <span>Name</span>
            <input type="text" name="name" required />
          </label>
          <label>
            <span>Email</span>
            <input type="email" name="email" required />
          </label>
          <label>
            <span>Message</span>
            <textarea name="message" rows="5" minlength="10" maxlength="800" required></textarea>
          </label>
          ${renderTurnstileVerification()}
          <button type="submit" data-protected-submit disabled>Submit</button>
        </form>
        <div class="rules-contact-grid">
          <article>
            <span>General Manager</span>
            <strong>Justin Tabor</strong>
            <a href="tel:12543399916">(254) 339-9916</a>
            <a href="mailto:justin@parsonssportsranch.com">justin@parsonssportsranch.com</a>
          </article>
          <article>
            <span>Tournament Director</span>
            <strong>Kevin Bosson</strong>
            <a href="tel:19097537969">(909) 753-7969</a>
            <a href="mailto:kevin@parsonssportsranch.com">kevin@parsonssportsranch.com</a>
          </article>
        </div>
      </div>
    </section>
  `;
}

function upsertMeta(selector, createTag, attrs) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement(createTag);
    document.head.appendChild(element);
  }
  Object.entries(attrs).forEach(([name, value]) => element.setAttribute(name, value));
}

function absoluteSiteUrl(value) {
  if (!value) return "";
  if (/^https?:\/\//i.test(value)) return value;
  return `${SITE_URL}${value.startsWith("/") ? value : `/${value}`}`;
}

function buildFacilitySchema() {
  return {
    "@type": ["SportsActivityLocation", "LocalBusiness"],
    "@id": LOCATION_ID,
    name: "Parsons Sports Ranch",
    url: `${SITE_URL}/`,
    description:
      "Parsons Sports Ranch is a youth baseball and softball tournament destination in Clifton, Texas with fully turfed fields, premium hospitality, and family-friendly amenities.",
    image: SHARE_IMAGE,
    logo: LOGO_IMAGE,
    telephone: "+1-254-339-9916",
    email: "justin@parsonssportsranch.com",
    address: FACILITY_ADDRESS,
    sport: ["Baseball", "Softball"],
    amenityFeature: FACILITY_AMENITIES.map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "General Manager",
        name: "Justin Tabor",
        telephone: "+1-254-339-9916",
        email: "justin@parsonssportsranch.com",
        areaServed: "US",
      },
      {
        "@type": "ContactPoint",
        contactType: "Tournament Director",
        name: "Kevin Bosson",
        telephone: "+1-909-753-7969",
        email: "kevin@parsonssportsranch.com",
        areaServed: "US",
      },
    ],
  };
}

function buildSeoSchema(page, path) {
  const url = page.canonical || `${SITE_URL}${path}`;
  const breadcrumbId = `${url}#breadcrumb`;
  const graph = [
    {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: `${SITE_URL}/`,
      name: "Parsons Sports Ranch",
      inLanguage: "en-US",
      publisher: {
        "@id": LOCATION_ID,
      },
    },
    buildFacilitySchema(),
    {
      "@type": "BreadcrumbList",
      "@id": breadcrumbId,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_URL}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.eyebrow,
          item: url,
        },
      ],
    },
    {
      "@type": page.pageType || "WebPage",
      "@id": `${url}#webpage`,
      url,
      name: page.seoTitle || page.title,
      description: page.seoDescription || page.lead,
      inLanguage: "en-US",
      isPartOf: {
        "@id": WEBSITE_ID,
      },
      about: {
        "@id": LOCATION_ID,
      },
      publisher: {
        "@id": LOCATION_ID,
      },
      breadcrumb: {
        "@id": breadcrumbId,
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: absoluteSiteUrl(page.image),
      },
      image: SHARE_IMAGE,
      dateModified: page.dateModified || "2026-08-27",
    },
  ];

  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${url}#faq`,
      url,
      name: `FAQ: ${page.faqTitle || page.eyebrow}`,
      mainEntity: page.faq.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: {
          "@type": "Answer",
          text: answer,
        },
      })),
    });
  }

  if (page.event) {
    graph.push({
      "@type": "SportsEvent",
      "@id": `${url}#event`,
      name: page.event.name,
      description: page.event.description,
      url: page.event.url || url,
      image: [SHARE_IMAGE, absoluteSiteUrl(page.image)],
      startDate: page.event.startDate,
      endDate: page.event.endDate,
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@id": LOCATION_ID,
      },
      organizer: {
        "@id": LOCATION_ID,
      },
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

function applyPageMetadata(page, path) {
  const title = page.seoTitle || `${page.eyebrow} | Parsons Sports Ranch`;
  const description = page.seoDescription || page.lead;
  const canonical = page.canonical || `${SITE_URL}${path}`;
  const shareImage = page.shareImage || SHARE_IMAGE;
  const robots = page.robots || DEFAULT_ROBOTS;

  document.title = title;
  upsertMeta('meta[name="description"]', "meta", { name: "description", content: description });
  upsertMeta('link[rel="canonical"]', "link", { rel: "canonical", href: canonical });
  upsertMeta('meta[name="robots"]', "meta", { name: "robots", content: robots });
  upsertMeta('meta[property="og:locale"]', "meta", { property: "og:locale", content: "en_US" });
  upsertMeta('meta[property="og:type"]', "meta", { property: "og:type", content: "website" });
  upsertMeta('meta[property="og:site_name"]', "meta", { property: "og:site_name", content: "Parsons Sports Ranch" });
  upsertMeta('meta[property="og:title"]', "meta", { property: "og:title", content: title });
  upsertMeta('meta[property="og:description"]', "meta", { property: "og:description", content: description });
  upsertMeta('meta[property="og:url"]', "meta", { property: "og:url", content: canonical });
  upsertMeta('meta[property="og:image"]', "meta", { property: "og:image", content: shareImage });
  upsertMeta('meta[property="og:image:secure_url"]', "meta", { property: "og:image:secure_url", content: shareImage });
  upsertMeta('meta[property="og:image:width"]', "meta", { property: "og:image:width", content: "1122" });
  upsertMeta('meta[property="og:image:height"]', "meta", { property: "og:image:height", content: "1402" });
  upsertMeta('meta[property="og:image:alt"]', "meta", {
    property: "og:image:alt",
    content: SHARE_IMAGE_ALT,
  });
  upsertMeta('meta[name="twitter:card"]', "meta", { name: "twitter:card", content: "summary_large_image" });
  upsertMeta('meta[name="twitter:title"]', "meta", { name: "twitter:title", content: title });
  upsertMeta('meta[name="twitter:description"]', "meta", { name: "twitter:description", content: description });
  upsertMeta('meta[name="twitter:image"]', "meta", { name: "twitter:image", content: shareImage });
  upsertMeta('meta[name="twitter:image:alt"]', "meta", {
    name: "twitter:image:alt",
    content: SHARE_IMAGE_ALT,
  });

  document.head.querySelectorAll('script[data-psr-schema="true"]').forEach((script) => script.remove());
  const schema = document.createElement("script");
  schema.type = "application/ld+json";
  schema.dataset.psrSchema = "true";
  schema.textContent = JSON.stringify(buildSeoSchema(page, path));
  document.head.appendChild(schema);
}

function renderBracketsContent(page) {
  const brackets = Array.isArray(page.brackets) ? page.brackets : [];

  return `
    <section class="brackets-content" id="live-brackets" aria-labelledby="brackets-heading">
      <div class="brackets-wrap">
        <div class="interior-stats brackets-stats" aria-label="Tournament bracket details">
          ${page.stats.map(([label, value]) => `<div><span>${label}</span><strong>${value}</strong></div>`).join("")}
        </div>

        <div class="brackets-heading">
          <div>
            <p class="eyebrow dark">Live Tournament Board</p>
            <h2 id="brackets-heading">Choose your division.</h2>
          </div>
          <p>
            Scores and advancement are maintained in BracketHQ. On a phone, use the controls inside the bracket or open it in a new tab for a larger view.
          </p>
        </div>

        <nav class="bracket-jump-nav" aria-label="Jump to a tournament bracket">
          <span>Jump to</span>
          ${brackets.map((bracket) => `<a href="#${bracket.id}">${bracket.navLabel}</a>`).join("")}
        </nav>

        <div class="bracket-list">
          ${brackets
            .map(
              (bracket, index) => `
                <article class="bracket-card" id="${bracket.id}" aria-labelledby="${bracket.id}-title">
                  <header class="bracket-card-header">
                    <div>
                      <span class="bracket-live-label"><i aria-hidden="true"></i> ${bracket.dates} · Double Elimination</span>
                      <h3 id="${bracket.id}-title">${bracket.title}</h3>
                    </div>
                    <a class="bracket-open-link" href="${bracket.publicUrl}" target="_blank" rel="noopener noreferrer">
                      Open Full Bracket
                      <i class="ti ti-external-link" aria-hidden="true"></i>
                    </a>
                  </header>
                  <div class="bracket-frame">
                    <iframe
                      src="${bracket.embedUrl}"
                      title="${bracket.title} for the ${bracket.dates} Parsons Sports Ranch softball tournament"
                      width="100%"
                      height="550"
                      loading="${index === 0 ? "eager" : "lazy"}"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allow="fullscreen"
                      allowfullscreen
                    >
                      <a href="${bracket.publicUrl}" target="_blank" rel="noopener noreferrer">Open ${bracket.title}</a>
                    </iframe>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>

        <p class="brackets-note">
          <i class="ti ti-refresh" aria-hidden="true"></i>
          If a recent score is not visible yet, refresh this page or open that bracket directly in BracketHQ.
        </p>
      </div>
    </section>
  `;
}

function renderSponsorsPage() {
  return `
    ${renderHeader("sponsors-site-header")}
    <main class="sponsors-page" id="top">
      <section class="sponsors-hero" aria-labelledby="sponsors-title">
        <div class="sponsors-hero-photo" role="img" aria-label="Aerial view of Parsons Sports Ranch"></div>
        <div class="sponsors-hero-grid" aria-hidden="true"></div>
        <div class="sponsors-hero-content sponsors-shell">
          <p class="sponsors-eyebrow is-light"><span></span> Our partners</p>
          <h1 id="sponsors-title">Proudly backed<br />by <em>the best.</em></h1>
          <p class="sponsors-hero-copy">
            Thank you to the businesses and organizations helping us build something special at Parsons Sports Ranch.
          </p>
          <a class="sponsors-hero-link" href="#partners">
            Meet our partners
            <i class="ti ti-arrow-down" aria-hidden="true"></i>
          </a>
        </div>

        <div class="sponsors-hero-note" aria-label="Community built, partner powered">
          <span>Community built</span>
          <strong>Partner powered.</strong>
          <i aria-hidden="true"></i>
          <small>Clifton, Texas</small>
        </div>
      </section>

      <section class="sponsors-intro sponsors-shell sponsors-reveal" id="partners" aria-labelledby="partners-heading" data-reveal>
        <div class="sponsors-intro-index" aria-hidden="true">01</div>
        <div>
          <p class="sponsors-eyebrow is-dark"><span></span> The partner lineup</p>
          <h2 id="partners-heading">Shared values.<br /><em>Visible impact.</em></h2>
        </div>
        <p class="sponsors-intro-copy">
          Our partners show up for the players, families, and communities that make this place special. Every partnership helps us raise the standard for youth sports in Central Texas.
        </p>
      </section>

      <section class="sponsors-tier sponsors-shell sponsors-reveal" aria-labelledby="official-partners-heading" data-reveal>
        <div class="sponsors-tier-heading">
          <div>
            <p class="sponsors-eyebrow is-dark"><span></span> Official partner</p>
            <h2 id="official-partners-heading">Built into the park.</h2>
          </div>
          <span class="sponsors-tier-number">01 / 04</span>
        </div>

        <article class="sponsors-featured-partner">
          <div class="sponsors-featured-brand">
            <div class="sponsors-featured-topline">
              <span>Official electrical partner</span>
              <span>Since 1979</span>
            </div>
            <div class="sponsors-hensel-logo">
              <img
                src="/assets/sponsors/hensel-electric-logo.webp"
                alt="Hensel Electric Company"
                width="374"
                height="223"
                loading="lazy"
                decoding="async"
              />
            </div>
            <p>Hensel Electric <strong>Broadcast Tower</strong></p>
          </div>

          <div class="sponsors-featured-story">
            <span class="sponsors-partner-label">Official Partners</span>
            <h3>Power you can trust.<br />A partnership built to last.</h3>
            <p>
              Hensel Electric has proudly served Central Texas since 1979, providing trusted residential, commercial, and industrial electrical services built on quality, integrity, and strong community relationships. As the Official Electrical Partner of Parsons Sports Ranch, Hensel Electric shares PSR’s commitment to investing in and supporting the communities we serve.
            </p>
            <div class="sponsors-partner-facts">
              <span><strong>1979</strong> Serving Central Texas</span>
              <span><strong>Official</strong> Electrical Partner</span>
            </div>
            <a class="sponsors-text-link" href="https://henselelectric.com/" target="_blank" rel="noopener noreferrer">
              Visit Hensel Electric <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>

          <div class="sponsors-featured-photo">
            <img
              src="/assets/photos/jess-july-2026/bucks-suite-field.webp"
              alt="Parsons Sports Ranch fields and Bucks Suite"
              width="1920"
              height="1079"
              loading="lazy"
              decoding="async"
            />
            <span>Partnerships with a presence</span>
          </div>
        </article>
      </section>

      <section class="sponsors-tier sponsors-ticket-tier sponsors-shell sponsors-reveal" id="pioneer" aria-labelledby="ticket-partner-heading" data-reveal>
        <div class="sponsors-tier-heading">
          <div>
            <p class="sponsors-eyebrow is-dark"><span></span> Ticket booth partner</p>
            <h2 id="ticket-partner-heading">Part of our foundation.</h2>
          </div>
          <span class="sponsors-tier-number">02 / 04</span>
        </div>

        <article class="sponsors-pioneer-partner" aria-labelledby="pioneer-partner-heading">
          <div class="sponsors-pioneer-brand">
            <span class="sponsors-pioneer-roots">Waco &amp; Bryan, Texas · Since 1943</span>
            <img
              src="/assets/sponsors/pioneer-steel-pipe-logo.png"
              alt="Pioneer Steel &amp; Pipe"
              width="1619"
              height="971"
              loading="lazy"
              decoding="async"
            />
            <p><i class="ti ti-ticket" aria-hidden="true"></i> Ticket booth naming partner</p>
          </div>

          <div class="sponsors-pioneer-story">
            <span class="sponsors-partner-label">Official Steel &amp; Pipe Partner</span>
            <h3 id="pioneer-partner-heading">Pioneer Steel &amp; Pipe</h3>
            <p>
              From the poles surrounding our fields to the steel framing of our multi-sport center, Pioneer Steel &amp; Pipe helped build Parsons Sports Ranch from the ground up.
            </p>
            <p>
              Serving Central Texas since 1943, with locations in Waco and Bryan, Pioneer is part of our foundation and our future. As our ticket booth naming partner, they welcome athletes and families from the moment they arrive at the Ranch.
            </p>
            <a class="sponsors-text-link" href="https://www.pioneerboys.com/" target="_blank" rel="noopener noreferrer">
              Visit Pioneer <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      </section>

      <section class="sponsors-tier sponsors-ticket-tier sponsors-shell sponsors-reveal" id="atx-turf" aria-labelledby="turf-sponsor-heading" data-reveal>
        <div class="sponsors-tier-heading">
          <div>
            <p class="sponsors-eyebrow is-dark"><span></span> Turf sponsor</p>
            <h2 id="turf-sponsor-heading">Built for every play.</h2>
          </div>
          <span class="sponsors-tier-number">03 / 04</span>
        </div>

        <article class="sponsors-pioneer-partner sponsors-atx-partner" aria-labelledby="atx-partner-heading">
          <div class="sponsors-pioneer-brand sponsors-atx-brand">
            <span class="sponsors-pioneer-roots">Dripping Springs, Texas · Since 2008</span>
            <img
              src="/assets/sponsors/atx-turf-logo.png"
              alt="ATX Turf — Artificial Turf — 866-747-1149"
              width="1612"
              height="976"
              loading="lazy"
              decoding="async"
            />
            <p><i class="ti ti-ball-baseball" aria-hidden="true"></i> Turf &amp; athletic facility solutions</p>
          </div>

          <div class="sponsors-pioneer-story">
            <span class="sponsors-partner-label">Proud Turf Sponsor of Parsons Sports Ranch</span>
            <h3 id="atx-partner-heading">ATX Turf</h3>
            <p>
              ATX Turf is a proud turf sponsor of Parsons Sports Ranch! Based in Dripping Springs, Texas, ATX Turf specializes in high-quality artificial turf, sports field installations, batting cages, netting, and athletic facility solutions.
            </p>
            <p>
              Since 2008, they’ve helped schools, sports complexes, and training facilities nationwide create durable, professional-grade playing surfaces. We’re proud to partner with ATX Turf to provide a top-quality playing experience for our athletes and families!
            </p>
            <a class="sponsors-text-link" href="https://www.atxturf.com/" target="_blank" rel="noopener noreferrer">
              Visit ATX Turf <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
            </a>
          </div>
        </article>
      </section>

      <section class="sponsors-tier sponsors-community-tier sponsors-shell sponsors-reveal" aria-labelledby="psr-partners-heading" data-reveal>
        <div class="sponsors-tier-heading">
          <div>
            <p class="sponsors-eyebrow is-dark"><span></span> PSR partners</p>
            <h2 id="psr-partners-heading">Backing every game.</h2>
          </div>
          <span class="sponsors-tier-number">04 / 04</span>
        </div>

        <article class="sponsors-community-partner" aria-labelledby="solrite-partner-heading">
          <div class="sponsors-community-logo sponsors-solrite-logo">
            <img
              src="/assets/sponsors/solrite-logo-transparent.png"
              alt="SOLRITE Energy"
              width="2172"
              height="724"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="sponsors-community-copy">
            <span class="sponsors-partner-label">Fall 2026 Game Ball Sponsor</span>
            <h3 id="solrite-partner-heading">Solrite</h3>
            <p>
              SOLRITE Energy provides innovative solar and battery solutions that help homeowners lower energy costs, gain reliable backup power, and contribute to a stronger, more resilient energy grid.
            </p>
          </div>
          <a class="sponsors-circle-link" href="https://www.solriteenergy.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit SOLRITE Energy">
            <span>Visit partner</span>
            <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
          </a>
        </article>

        <article class="sponsors-community-partner sponsors-synergy-partner" aria-labelledby="synergy-partner-heading">
          <div class="sponsors-community-logo sponsors-synergy-logo">
            <img
              src="/assets/sponsors/synergy-solutions-logo.webp?v=20261019"
              alt="Synergy Residential and Commercial Solutions"
              width="1322"
              height="580"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="sponsors-community-copy">
            <span class="sponsors-partner-label sponsors-awards-label">
              <i class="ti ti-trophy" aria-hidden="true"></i>
              Official PSR Fall Awards Sponsor
            </span>
            <h3 id="synergy-partner-heading">Synergy<span class="sponsors-partner-subtitle">Residential and Commercial Solutions</span></h3>
            <p>
              Synergy Residential and Commercial Solutions provides trusted roofing, remodeling, repairs, and property improvement services with a focus on quality and dependable service.
            </p>
          </div>
          <a class="sponsors-circle-link" href="https://synsolns.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Synergy Residential and Commercial Solutions">
            <span>Visit partner</span>
            <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
          </a>
        </article>

        <article class="sponsors-community-partner" aria-labelledby="tucker-partner-heading">
          <div class="sponsors-community-logo sponsors-tucker-logo">
            <img
              src="/assets/sponsors/tucker-lumber-logo.png"
              alt="Tucker Lumber Company, Hillsboro and Whitney, since 1953"
              width="2170"
              height="725"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="sponsors-community-copy">
            <span class="sponsors-partner-label">Family Owned Since 1953</span>
            <h3 id="tucker-partner-heading">Tucker Lumber</h3>
            <p>
              Tucker Lumber supplies Central Texas with lumber, building materials, and hardware from Hillsboro and Whitney. Their support helps build and maintain the fields, facilities, and experiences at Parsons Sports Ranch.
            </p>
          </div>
          <a class="sponsors-circle-link" href="https://tuckerlumber.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Tucker Lumber">
            <span>Visit partner</span>
            <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
          </a>
        </article>

        <article class="sponsors-community-partner sponsors-republic-partner" id="republic-laser-therapy" aria-labelledby="republic-partner-heading">
          <div class="sponsors-community-logo sponsors-republic-logo">
            <img
              src="/assets/sponsors/republic-laser-therapy-logo.png"
              alt="Republic Laser Therapy — Feel Better, Faster"
              width="1219"
              height="507"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="sponsors-community-copy">
            <h3 id="republic-partner-heading">Republic Laser Therapy</h3>
            <p>
              Feel better, faster. Republic Laser Therapy helps Waco athletes and active people recover from pain and injury with Class IV infrared laser therapy, a non-invasive, drug-free treatment with zero downtime. From sports injuries and joint pain to tendonitis and post-surgery recovery, they focus on getting you back to doing what you love.
            </p>
            <p>
              Republic Laser Therapy supports Parsons Sports Ranch with a field sign and a donated bench for players, parents, and fans. We're grateful to have a local partner invested in keeping our community healthy and in the game.
            </p>
            <ul class="sponsors-partner-details" aria-label="Republic Laser Therapy contact details">
              <li><i class="ti ti-map-pin" aria-hidden="true"></i><span>5725 Bagby Ave, Waco, TX (inside Halo Athletic Center)</span></li>
              <li><i class="ti ti-phone" aria-hidden="true"></i><a href="tel:+12544337790">(254) 433-7790</a></li>
              <li><i class="ti ti-clock" aria-hidden="true"></i><span>Monday–Friday, 8am–5pm · Weekends by request</span></li>
              <li><i class="ti ti-world" aria-hidden="true"></i><a href="https://www.republiclasertherapy.com/" target="_blank" rel="noopener noreferrer">republiclasertherapy.com</a></li>
            </ul>
          </div>
          <a class="sponsors-circle-link" href="https://www.republiclasertherapy.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Republic Laser Therapy">
            <span>Visit partner</span>
            <i class="ti ti-arrow-up-right" aria-hidden="true"></i>
          </a>
        </article>
      </section>

      <section class="sponsors-partnership-cta" aria-labelledby="partnership-heading">
        <div class="sponsors-cta-photo" aria-hidden="true"></div>
        <div class="sponsors-cta-content sponsors-shell">
          <p class="sponsors-eyebrow is-light"><span></span> Join the lineup</p>
          <h2 id="partnership-heading">Build something that lasts<br /><em>beyond the final out.</em></h2>
          <p>
            Interested in putting your organization alongside the families, teams, and unforgettable moments at Parsons Sports Ranch?
          </p>
          <div class="sponsors-cta-actions">
            <a class="button primary" href="mailto:jess@parsonssportsranch.com">
              <i class="ti ti-mail" aria-hidden="true"></i>
              Talk Partnerships
            </a>
            <a class="button secondary" href="tel:16094899666">
              <i class="ti ti-phone" aria-hidden="true"></i>
              (609) 489-9666
            </a>
          </div>
        </div>
        <div class="sponsors-cta-contact">
          <span>Jess Pisani</span>
          <small>Marketing Director</small>
          <a href="mailto:jess@parsonssportsranch.com">jess@parsonssportsranch.com</a>
        </div>
      </section>

      <footer class="sponsors-site-footer">
        <div class="sponsors-footer-brand">
          <img src="/assets/parsons-white-logo-150x150.webp" alt="" width="150" height="150" loading="lazy" decoding="async" />
          <div>
            <strong>Parsons Sports Ranch</strong>
            <span>Texas’ Premier Select &amp; Travel Ball Destination</span>
          </div>
        </div>
        <p>1358 FM2114 · Clifton, Texas 76634</p>
        <p>
          &copy; 2026 Parsons Sports Ranch · Custom built by
          <a href="https://www.squeakywheelmarketing.com/" target="_blank" rel="noopener noreferrer">Squeaky.co</a>
        </p>
      </footer>
    </main>
  `;
}

function renderPage(page) {
  if (page.variant === "sponsors") return renderSponsorsPage();

  const cta = page.cta || ["View Tournaments", "https://parsonssportsranch.leagueapps.com/tournaments"];
  const planVisitButton = page.hidePlanVisitButton
    ? ""
    : `<a class="button secondary" href="/plan-your-visit/"><i class="ti ti-map-pin" aria-hidden="true"></i>Plan Your Visit</a>`;
  document.title = page.seoTitle || `${page.eyebrow} | Parsons Sports Ranch`;

  return `
    ${renderHeader()}
    <main class="interior-page">
      <section class="interior-hero${page.showcaseNewsVideo ? " home-showcase-hero" : ""}">
        <div class="interior-hero-media" style="background-image: url('${page.image}')">${renderHeaderVideo()}</div>
        <div class="interior-hero-shade"></div>
        <div class="interior-hero-content${page.showcaseNewsVideo ? " home-showcase-hero-content" : ""}">
          <div class="interior-hero-copy${page.showcaseNewsVideo ? " home-showcase-copy" : ""}">
            <p class="eyebrow">${page.eyebrow}</p>
            <h1>${page.title}</h1>
            <p>${page.lead}</p>
            ${
              page.hideHeroActions
                ? ""
                : `<div class="hero-actions">
                    <a class="button primary" href="${cta[1]}"${externalLinkAttrs(cta[1])}><i class="ti ti-trophy" aria-hidden="true"></i>${cta[0]}</a>
                    ${planVisitButton}
                  </div>`
            }
          </div>
          ${page.showcaseNewsVideo ? renderShowcaseNewsVideo() : ""}
        </div>
      </section>

      ${
        page.variant === "rules"
          ? renderRulesContent()
          : page.variant === "lodging"
            ? renderLodgingContent(page)
            : page.variant === "brackets"
              ? renderBracketsContent(page)
              : page.variant === "contact"
                ? renderContactContent(page)
                : page.variant === "showcase-registration"
                  ? renderShowcaseRegistrationContent(page)
                  : page.variant === "showcase"
                    ? renderShowcaseContent(page)
                    : page.variant === "fields"
                      ? renderFieldsContent(page)
                      : renderDefaultInteriorContent(page)
      }

      <section class="final-cta" aria-label="Book a tournament and follow Parsons Sports Ranch">
        <div>
          <p class="eyebrow">Texas' Premier Select &amp; Travel Ball Destination</p>
          <h2>Make your next weekend feel like a championship.</h2>
        </div>
        <div class="final-cta-actions">
          <a class="button primary" href="https://parsonssportsranch.leagueapps.com/tournaments" target="_blank" rel="noopener noreferrer">
            <i class="ti ti-send" aria-hidden="true"></i>
            Book Your Tournament
          </a>
          <nav class="social-links" aria-label="Follow Parsons Sports Ranch on social media" data-reveal>
            <span class="social-links-label">Follow the Ranch</span>
            <div class="social-links-list">
              <a class="social-link" href="https://www.instagram.com/parsons_sports_ranch/" target="_blank" rel="noopener noreferrer" aria-label="Parsons Sports Ranch on Instagram (opens in a new tab)" title="Instagram">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"></path>
                  <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0"></path>
                  <path d="M16.5 7.5v.01"></path>
                </svg>
              </a>
              <a class="social-link" href="https://www.facebook.com/parsonssportsranch" target="_blank" rel="noopener noreferrer" aria-label="Parsons Sports Ranch on Facebook (opens in a new tab)" title="Facebook">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3V3h-3a5 5 0 0 0-5 5v2z"></path>
                </svg>
              </a>
              <a class="social-link" href="https://www.tiktok.com/@parsonssportsranch" target="_blank" rel="noopener noreferrer" aria-label="Parsons Sports Ranch on TikTok (opens in a new tab)" title="TikTok">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path>
                </svg>
              </a>
              <a class="social-link" href="https://x.com/parsonssports_" target="_blank" rel="noopener noreferrer" aria-label="Parsons Sports Ranch on X (opens in a new tab)" title="X">
                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path d="M4 4l11.7 16H20L8.3 4z"></path>
                  <path d="M4 20l6.8-6.8M13.2 10.8 20 4"></path>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      </section>

      <footer class="site-footer">
        <p>&copy; 2026 Parsons Sports Ranch. All rights reserved.</p>
        <p>
          Custom built by
          <a href="https://www.squeakywheelmarketing.com/" target="_blank" rel="noopener noreferrer">Squeaky.co</a>
        </p>
      </footer>
    </main>
  `;
}

function getShowcaseDivisionClass(division) {
  if (division === "14/16U") return "division-younger";
  if (division === "16/18U") return "division-older";
  return "division-crossover";
}

function renderShowcaseTeamLine(team, selectedTeam) {
  const isSelected = selectedTeam !== "all" && Number(selectedTeam) === team.number;

  return `
    <div class="showcase-team-line ${isSelected ? "is-selected" : ""}">
      <span>${team.number}</span>
      <div>
        <strong>${team.name}</strong>
        <small>${team.division}</small>
      </div>
    </div>
  `;
}

function renderShowcaseScheduleItem(item, selectedTeam) {
  if (item.type === "event") {
    return `
      <article class="showcase-game-card showcase-event-card">
        <div class="showcase-card-time">
          <span>${item.date}</span>
          <strong>${item.timeLabel}</strong>
        </div>
        <div class="showcase-card-main">
          <div class="showcase-card-heading">
            <h4>${item.title}</h4>
            <span class="showcase-badge division-crossover">Camp</span>
          </div>
          <p>${item.body}</p>
        </div>
        <div class="showcase-card-field">
          <span>${item.fieldNumber}</span>
          <strong>${item.fieldName}</strong>
        </div>
      </article>
    `;
  }

  return `
    <article class="showcase-game-card">
      <div class="showcase-card-time">
        <span>${item.date}</span>
        <strong>${item.timeLabel}</strong>
      </div>
      <div class="showcase-card-main">
        <div class="showcase-card-heading">
          <h4>${item.teamOne.name} vs ${item.teamTwo.name}</h4>
          <span class="showcase-badge ${getShowcaseDivisionClass(item.division)}">${item.division}</span>
        </div>
        <div class="showcase-matchup">
          ${renderShowcaseTeamLine(item.teamOne, selectedTeam)}
          <span class="showcase-versus">vs</span>
          ${renderShowcaseTeamLine(item.teamTwo, selectedTeam)}
        </div>
      </div>
      <div class="showcase-card-field">
        <span>Field ${item.fieldNumber}</span>
        <strong>${item.fieldName}</strong>
      </div>
    </article>
  `;
}

function getShowcaseSavedTeam() {
  try {
    return window.localStorage.getItem("psrShowcaseTeam") || "all";
  } catch {
    return "all";
  }
}

function setShowcaseSavedTeam(teamNumber) {
  try {
    if (teamNumber === "all") {
      window.localStorage.removeItem("psrShowcaseTeam");
      return;
    }
    window.localStorage.setItem("psrShowcaseTeam", teamNumber);
  } catch {
    // Storage is a convenience; filtering should still work without it.
  }
}

function setupShowcaseSchedule() {
  const root = document.querySelector("[data-showcase-schedule]");
  if (!root) return;

  const searchInput = root.querySelector("#showcaseSearch");
  const teamSelect = root.querySelector("#showcaseTeamFilter");
  const fieldSelect = root.querySelector("#showcaseFieldFilter");
  const resetButton = root.querySelector("[data-showcase-reset]");
  const results = root.querySelector("#showcaseResults");
  const resultCount = root.querySelector("#showcaseResultCount");
  const resultContext = root.querySelector("#showcaseResultContext");
  const dayButtons = [...root.querySelectorAll("[data-schedule-day]")];
  const rosterButtons = [...document.querySelectorAll("[data-roster-team]")];
  const savedTeam = getShowcaseSavedTeam();
  const state = {
    day: "all",
    query: "",
    team: SHOWCASE_TEAM_BY_NUMBER[Number(savedTeam)] ? savedTeam : "all",
    field: "all",
  };

  if (teamSelect) teamSelect.value = state.team;

  const getFieldLabel = () => {
    if (state.field === "all") return "all fields";
    return SHOWCASE_FIELDS.find((field) => field.id === state.field)?.name || "selected field";
  };

  const getTeamLabel = () => {
    if (state.team === "all") return "all teams";
    const team = SHOWCASE_TEAM_BY_NUMBER[Number(state.team)];
    return team ? `#${team.number} ${team.name}` : "selected team";
  };

  const getDayLabel = () => {
    if (state.day === "all") return "all days";
    return SHOWCASE_DAY_BY_ID[state.day]?.label || "selected day";
  };

  const matchesState = (item) => {
    const matchesDay = state.day === "all" || item.dayId === state.day;
    const matchesField = state.field === "all" || item.fieldId === state.field || item.fieldId === "all-fields";
    const matchesTeam = state.team === "all" || (item.type === "game" && [item.teamOne.number, item.teamTwo.number].includes(Number(state.team)));
    const matchesQuery = !state.query || item.search.includes(state.query);
    return matchesDay && matchesField && matchesTeam && matchesQuery;
  };

  const render = () => {
    const filteredItems = SHOWCASE_SCHEDULE_ITEMS.filter(matchesState);
    const gameCount = filteredItems.filter((item) => item.type === "game").length;
    const eventCount = filteredItems.length - gameCount;
    const hasFilters = state.day !== "all" || state.team !== "all" || state.field !== "all" || state.query;

    dayButtons.forEach((button) => {
      const isActive = button.dataset.scheduleDay === state.day;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    rosterButtons.forEach((button) => {
      button.classList.toggle("is-active", button.dataset.rosterTeam === state.team);
    });

    if (resetButton) resetButton.hidden = !hasFilters;
    if (resultCount) resultCount.textContent = `${gameCount} ${gameCount === 1 ? "game" : "games"}${eventCount ? ` / ${eventCount} event` : ""}`;
    if (resultContext) resultContext.textContent = `${getDayLabel()} / ${getTeamLabel()} / ${getFieldLabel()}`;

    if (!filteredItems.length) {
      results.innerHTML = `
        <div class="showcase-empty">
          <strong>No matchups found.</strong>
          <span>Try another team, field, or search term.</span>
        </div>
      `;
      return;
    }

    results.innerHTML = SHOWCASE_DAYS.map((day) => {
      const dayItems = filteredItems.filter((item) => item.dayId === day.id);
      if (!dayItems.length) return "";

      return `
        <section class="showcase-day-group">
          <div class="showcase-day-heading">
            <span>${day.date}</span>
            <h3>${day.label}</h3>
          </div>
          <div class="showcase-day-list">
            ${dayItems.map((item) => renderShowcaseScheduleItem(item, state.team)).join("")}
          </div>
        </section>
      `;
    }).join("");
  };

  dayButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.day = button.dataset.scheduleDay || "all";
      render();
    });
  });

  searchInput?.addEventListener("input", () => {
    state.query = searchInput.value.trim().toLowerCase();
    render();
  });

  teamSelect?.addEventListener("change", () => {
    state.team = teamSelect.value;
    setShowcaseSavedTeam(state.team);
    render();
  });

  fieldSelect?.addEventListener("change", () => {
    state.field = fieldSelect.value;
    render();
  });

  rosterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.team = button.dataset.rosterTeam || "all";
      if (teamSelect) teamSelect.value = state.team;
      setShowcaseSavedTeam(state.team);
      root.scrollIntoView({ behavior: "smooth", block: "start" });
      render();
    });
  });

  resetButton?.addEventListener("click", () => {
    state.day = "all";
    state.query = "";
    state.team = "all";
    state.field = "all";
    if (searchInput) searchInput.value = "";
    if (teamSelect) teamSelect.value = "all";
    if (fieldSelect) fieldSelect.value = "all";
    setShowcaseSavedTeam("all");
    render();
  });

  render();
}

function setupMenu() {
  const menuButton = document.querySelector(".menu-button");
  const mobileMenu = document.querySelector("#mobileMenu");
  const mobileBackdrop = document.querySelector(".mobile-backdrop");
  const menuClosers = document.querySelectorAll("[data-menu-close]");

  function setMenu(open) {
    mobileMenu?.setAttribute("aria-hidden", String(!open));
    menuButton?.setAttribute("aria-expanded", String(open));
    document.body.classList.toggle("menu-open", open);
    if (mobileBackdrop) mobileBackdrop.hidden = !open;
  }

  menuButton?.addEventListener("click", () => setMenu(true));
  menuClosers.forEach((closer) => closer.addEventListener("click", () => setMenu(false)));
  mobileMenu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => setMenu(false)));
}

function setupCharacterCounters() {
  document.querySelectorAll("[data-character-limited]").forEach((field) => {
    const counter = field.closest("form")?.querySelector("[data-character-count]");
    const maxLength = Number(field.getAttribute("maxlength")) || 800;

    const updateCounter = () => {
      if (field.value.length > maxLength) {
        field.value = field.value.slice(0, maxLength);
      }
      if (counter) counter.textContent = `${field.value.length} / ${maxLength}`;
    };

    field.addEventListener("input", updateCounter);
    updateCounter();
  });
}

function formatUSPhone(value = "") {
  const digits = String(value).replace(/\D/g, "").replace(/^1(?=\d{10}$)/, "").slice(0, 10);
  if (digits.length <= 3) return digits ? `(${digits}` : "";
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

function setupPhoneFormatting() {
  document.querySelectorAll("[data-phone-format]").forEach((field) => {
    const updatePhone = () => {
      field.value = formatUSPhone(field.value);
    };

    field.addEventListener("input", updatePhone);
    field.addEventListener("blur", updatePhone);
    updatePhone();
  });
}

let turnstileScriptPromise;

function loadTurnstileScript() {
  if (window.turnstile) return Promise.resolve(window.turnstile);
  if (turnstileScriptPromise) return turnstileScriptPromise;

  turnstileScriptPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;
    script.defer = true;
    script.onload = () => resolve(window.turnstile);
    script.onerror = () => reject(new Error("Turnstile could not be loaded."));
    document.head.appendChild(script);
  });

  return turnstileScriptPromise;
}

function setupTurnstile() {
  const verifications = [...document.querySelectorAll("[data-turnstile-verification]")];
  if (!verifications.length) return;

  const siteKey = String(window.PSR_CONFIG?.turnstileSiteKey || "").trim();
  if (!siteKey) {
    verifications.forEach((verification) => {
      const status = verification.querySelector("[data-turnstile-status]");
      if (status) status.textContent = "Form verification is temporarily unavailable.";
    });
    return;
  }

  loadTurnstileScript()
    .then((turnstile) => {
      if (!turnstile) throw new Error("Turnstile did not initialize.");

      verifications.forEach((verification) => {
        const form = verification.closest("form");
        const widget = verification.querySelector("[data-turnstile-widget]");
        const status = verification.querySelector("[data-turnstile-status]");
        const submit = form?.querySelector("[data-protected-submit]");
        if (!form || !widget || !submit) return;

        turnstile.render(widget, {
          sitekey: siteKey,
          action: "contact",
          appearance: "interaction-only",
          size: "flexible",
          theme: "light",
          callback: () => {
            submit.disabled = false;
            if (status) status.textContent = "Verification complete. You can submit the form.";
          },
          "expired-callback": () => {
            submit.disabled = true;
            if (status) status.textContent = "Verification expired. Please complete the check again.";
          },
          "error-callback": () => {
            submit.disabled = true;
            if (status) status.textContent = "Verification could not be completed. Please refresh and try again.";
          },
        });
      });
    })
    .catch(() => {
      verifications.forEach((verification) => {
        const status = verification.querySelector("[data-turnstile-status]");
        if (status) status.textContent = "Form verification could not load. Please refresh and try again.";
      });
    });
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

const path = normalizePath(window.location.pathname);
const page = pages[path] || fallbackPage;
document.body.classList.toggle("sponsors-body", page.variant === "sponsors");
document.body.innerHTML = renderPage(page);
applyPageMetadata(page, path);
setupMenu();
setupCharacterCounters();
setupPhoneFormatting();
setupTurnstile();
setupRevealOnView();
setupShowcaseSchedule();
