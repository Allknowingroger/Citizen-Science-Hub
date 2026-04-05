import { Category, Project } from "./types";

export const CATEGORIES: Category[] = [
  { id: "astronomy", name: "Astronomy & Space", icon: "Stars", description: "Explore the cosmos from your backyard." },
  { id: "ecology", name: "Ecology & Environment", icon: "Leaf", description: "Monitor wildlife and protect ecosystems." },
  { id: "climate", name: "Climate & Weather", icon: "CloudRain", description: "Track weather patterns and climate change." },
  { id: "health", name: "Health & Medical", icon: "Activity", description: "Contribute to medical research and public health." },
  { id: "digital-humanities", name: "Digital Humanities", icon: "Library", description: "Transcribe historical documents and preserve culture." },
  { id: "gamified", name: "Gamified Science", icon: "Gamepad2", description: "Play games to solve complex scientific problems." },
  { id: "urban", name: "Urban Planning", icon: "Building2", description: "Help design better cities and communities." },
  { id: "disaster", name: "Disaster Response", icon: "AlertTriangle", description: "Aid in emergency response and recovery." },
];

export const PROJECTS: Project[] = [
  {
    name: "Galaxy Zoo",
    description: "Help astronomers classify galaxies by their shapes. Your classifications help scientists understand how galaxies form and evolve.",
    longDescription: "Galaxy Zoo is a citizen science project that invites people to assist in the morphological classification of large numbers of galaxies. It is part of the Zooniverse, a collection of citizen science projects. The data produced by Galaxy Zoo has led to numerous scientific discoveries and publications.",
    url: "https://www.galaxyzoo.org/",
    category: "astronomy",
    tags: ["Galaxies", "Classification", "Zooniverse"],
    featured: true,
    difficulty: "Easy",
    timeCommitment: "5-10 mins",
    impact: "Over 50 scientific papers published using volunteer data."
  },
  {
    name: "Planet Hunters TESS",
    description: "Search for planets around other stars using data from NASA's TESS mission. You might find a world that astronomers missed!",
    longDescription: "The Transiting Exoplanet Survey Satellite (TESS) is a NASA mission searching for planets around the brightest stars in the sky. Volunteers look at light curves—graphs of a star's brightness over time—to find the tell-tale dips that indicate a planet passing in front of its star.",
    url: "https://www.planethunters.org/",
    category: "astronomy",
    tags: ["Exoplanets", "NASA", "TESS"],
    difficulty: "Medium",
    timeCommitment: "15-20 mins",
    impact: "Discovered several confirmed exoplanets that automated systems missed."
  },
  {
    name: "eBird",
    description: "The world's largest birding community. Share your sightings, track your lists, and contribute to science and conservation.",
    longDescription: "eBird is an online database of bird observations providing scientists, researchers and amateur naturalists with real-time data about bird distribution and abundance. It has revolutionized the way that the birding community reports and accesses information about birds.",
    url: "https://ebird.org/",
    category: "ecology",
    tags: ["Birds", "Wildlife", "Conservation"],
    featured: true,
    difficulty: "Easy",
    timeCommitment: "Flexible",
    impact: "Used by conservationists worldwide to track bird population trends."
  },
  {
    name: "iNaturalist",
    description: "A social network for sharing biodiversity information. Record your observations, share with fellow naturalists, and discuss your findings.",
    url: "https://www.inaturalist.org/",
    category: "ecology",
    tags: ["Biodiversity", "Plants", "Animals"]
  },
  {
    name: "Globe Observer",
    description: "An international citizen science program that provides people the opportunity to contribute to NASA's Earth science missions.",
    url: "https://observer.globe.gov/",
    category: "climate",
    tags: ["NASA", "Clouds", "Land Cover"]
  },
  {
    name: "CoCoRaHS",
    description: "Community Collaborative Rain, Hail and Snow Network. A unique, non-profit, community-based network of volunteers who measure and map precipitation.",
    url: "https://www.cocorahs.org/",
    category: "climate",
    tags: ["Precipitation", "Weather", "Mapping"]
  },
  {
    name: "Foldit",
    description: "A revolutionary crowdsourcing computer game enabling you to contribute to important scientific research by folding proteins.",
    url: "https://fold.it/",
    category: "gamified",
    tags: ["Proteins", "Biochemistry", "Puzzle"],
    featured: true
  },
  {
    name: "Eterna",
    description: "Solve puzzles to design RNA-based medicines. Your designs could be synthesized and tested in a lab at Stanford University.",
    url: "https://eternagame.org/",
    category: "gamified",
    tags: ["RNA", "Medicine", "Puzzle"]
  },
  {
    name: "Old Weather",
    description: "Help scientists recover Arctic and worldwide weather observations made by United States ships since the mid-19th century.",
    url: "https://www.oldweather.org/",
    category: "digital-humanities",
    tags: ["History", "Weather", "Transcription"]
  },
  {
    name: "Zooniverse",
    description: "The world's largest and most popular platform for people-powered research.",
    url: "https://www.zooniverse.org/",
    category: "various",
    tags: ["Platform", "Multi-domain"]
  },
  {
    name: "SciStarter",
    description: "A globally acclaimed, online citizen science hub where more than 3,000 projects have been registered.",
    url: "https://scistarter.org/",
    category: "various",
    tags: ["Directory", "Aggregator"]
  },
  {
    name: "Project BudBurst",
    description: "A national network of people who monitor plants as the seasons change. Help scientists understand how plants respond to changes in climate.",
    url: "https://budburst.org/",
    category: "ecology",
    tags: ["Plants", "Phenology", "Climate"]
  },
  {
    name: "Wildwatch Kenya",
    description: "Help conservationists track giraffes in Kenya by identifying them in motion-triggered camera trap images.",
    url: "https://www.zooniverse.org/projects/sandiegozooglobal/wildwatch-kenya",
    category: "ecology",
    tags: ["Giraffes", "Kenya", "Conservation"]
  },
  {
    name: "Stardust@home",
    description: "Search for tiny interstellar dust particles in images returned by the Stardust spacecraft.",
    url: "https://stardustathome.ssl.berkeley.edu/",
    category: "astronomy",
    tags: ["Space Dust", "NASA", "Microscopy"]
  },
  {
    name: "Mark2Cure",
    description: "Help scientists find clues in medical literature to help people with rare diseases. No scientific background required.",
    url: "https://mark2cure.org/",
    category: "health",
    tags: ["Medical", "Rare Disease", "Literature"]
  },
  {
    name: "OpenStreetMap",
    description: "A collaborative project to create a free editable map of the world. Often used in disaster response to map affected areas.",
    url: "https://www.openstreetmap.org/",
    category: "urban",
    tags: ["Mapping", "GIS", "Open Data"]
  },
  {
    name: "Missing Maps",
    description: "A collaborative project to map areas where humanitarian organizations are working, making them more resilient to disasters.",
    url: "https://www.missingmaps.org/",
    category: "disaster",
    tags: ["Humanitarian", "Mapping", "Disaster"]
  },
  {
    name: "Lingscape",
    description: "Help scientists map the linguistic landscape of the world by photographing signs and lettering in public spaces.",
    url: "https://lingscape.uni.lu/",
    category: "digital-humanities",
    tags: ["Linguistics", "Language", "Public Space"]
  }
];

