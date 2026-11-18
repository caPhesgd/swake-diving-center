export type ServiceSummary = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  priceLabel: string;
  ctaLabel: string;
  href: string;
  image: string;
  imageAlt: string;
  gallery: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  certification?: string;
  bio: string;
  image?: string;
};

export type CourseCard = {
  title: string;
  duration: string;
  price: string;
  summary: string;
  prerequisites: string[];
  courseRequirements: string[];
  highlights: string[];
  note?: string;
  gallery: string[];
};

export type IntroDetails = {
  title: string;
  duration: string;
  schedule: string;
  price: string;
  summary: string;
  audience: string[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  gallery: string[];
};

export type FundiveDetails = {
  title: string;
  price: string;
  summary: string;
  schedule: string;
  minRequirement: string;
  inclusions: string[];
  exclusions: string[];
  transportAddOns: string[];
  notes: string[];
  gallery: string[];
};

export type LineTrainingDetails = {
  title: string;
  price: string;
  summary: string;
  schedule: string;
  minRequirement: string;
  rates: string[];
  inclusions: string[];
  exclusions: string[];
  notes: string[];
  gallery: string[];
};

const contact = {
  phone: "+63 906 629 3634",
  email: "swakefreediver@gmail.com",
  whatsapp: "https://api.whatsapp.com/send?phone=639066293634",
  instagram: "https://www.instagram.com/direct/t/17842367781054987/",
  facebook: "https://www.messenger.com/t/115348667850263",
};

const contactColors: Record<string, string> = {
  WhatsApp: "text-[#25D366]",
  Instagram: "text-[#E4405F]",
  Facebook: "text-[#1877F2]",
  Email: "text-slate-300",
};

export const site = {
  name: "Swake Freedivers Siquijor",
  description:
    "Freediving in Siquijor for first-timers and experienced divers.",
  legalName: "Swake Diving Center",
  baseUrl: "https://swakefreedivers.com",
  contact,
  contactLinks: [
    { label: "WhatsApp", href: contact.whatsapp },
      ],
};

export const lineTrainingDetails: LineTrainingDetails = {
  title: "Line Training",
  price: "₱1,500–₱2,500",
  summary:
    "A coached line-training session for divers working on comfort, technique, efficiency, and depth progression.",
  schedule: "9:00 AM – 12:00 NN | Weekdays and weekends - prior arrangement",
  minRequirement: "Previous freediving experience required",
  rates: [
    "Solo or private coaching: contact for current rate",
    "Small group setup: contact for current rate",
  ],
  inclusions: [
    "Pre-dive planning & discussion",
    "Stretching & warm-up",
    "Safety and Rescue Protocol Review",
    "Open Water Session: Up to 2–3 hours line dives",
    "Post-dive feedback & debrief",
  ],
  exclusions: [
    "Environmental or cottage fees",
    "Gear rental",
    "Transport",
  ],
  notes: [
    "Best for divers with previous freediving experience.",
    "Final setup depends on conditions and diver level.",
  ],
  gallery: [
    "/images/linetraining/1.jpg",
    "/images/linetraining/2.JPG",
    "/images/linetraining/3.jpg",
    "/images/linetraining/4.jpg",
    "/images/linetraining/5.jpg",
    "/images/linetraining/6.jpg",
  ],
};

export const team: TeamMember[] = [
  {
    name: "Jether Serino",
    role: "Instructor/Athlete",
    certification: "Molchanovs W3 Instructor",
    bio: "Athlete freediver, professional freediving instructor, underwater photographer, and an accomplished visual artist with artworks exhibited in cultural institutions and museums",
    image: "/images/team/jether.jpg",
  },
  {
    name: "Kalvin Klein Matas",
    role: "Master Freediver/ Assistant Instructor",
    certification: "Molchanovs W3",
    bio: "Underwater videographer, plane mechanic, content creator, dominant pickle ball player, chill surf skater, ultimate frisbee player, etc. (you name it)",
    image: "/images/team/kc.jpg",
  },
  {
    name: "Glee Joshua Bunado",
    role: "Master Freediver/ Assistant Instructor",
    certification: "Molchanovs W3",
    bio: "Freediving since childhood, exploring tide pools on weekends and holidays; started training seriously in 2020 and earned his first certification in 2021. He assists in intro class for beginners and coaches line training for students refining form and depth technique. A chemical engineer now working as a software engineer, and active in various other sports in his free time. Teaches with patience above all, focusing on comfort and mastering equalization without rushing. Prefers dedicated line training over casual fundives, valuing the precision and deeper awareness.",
    image: "/images/team/buds.jpg",
  },
  {
    name: "Bernard Serino",
    role: "Co-founder/ Master Freediver",
    certification: "Molchanovs W3",
    bio: "--------",
    image: "/images/team/bernard.jpg",
  },
  {
    name: "Charisse Nicole Espinosa",
    role: "Co-founder/ Admin Officer/ Accountant",
    certification: " ",
    bio: "Has an immense dedication in freediving activities and related field, works mainly accounting and financial sectors",
    image: "/images/team/charisse.jpg",
  },
  {
    name: "Rexon Bongat",
    role: "Fundive Guide",
    certification: "Molchanovs W2",
    bio: "Began freediving in 2015 after joining as a guide at the sanctuary — about 10 years of diving experience. Serves as Swake's videographer, and his background as a fisherman gives him sharp instincts for reading currents and depth underwater. Dives with safety at the front of his mind, for himself and for guests.",
    image: "/images/team/rexon.jpg",
  },
  {
    name: "Jayson Abas",
    role: "Fundive Guide/ SocMed Manager",
    certification: "Molchanovs W2",
    bio: "Started freediving in October 2023, talked into it by his friend Pipay for the self-challenge — 3 years in now. Handles marketing, line training, and fundive guiding. Outside diving: surfskating, coffee, Dota, and tour guiding at waterfalls and island tours. Always checks water conditions and temperature first to dial in camera settings for smoother edits. Describes the feeling underwater as being one with the sea creatures, respectfully.",
    image: "/images/team/jayson.jpg",
  },
  {
    name: "John Lloyd Payla",
    role: "Fundive Guide",
    certification: "Molchanovs W2",
    bio: "Started out just tagging along on dives at Tulapos Marine Sanctuary — 4 years in now. Aalso guides at Tulapos Marine Sanctuary. Outside diving: basketball and frisbee.",
    image: "/images/team/johnL.jpg",
  },
  {
    name: "Soyinx Lazarte",
    role: "Fundive Guide/ Club President/ Marketing",
    certification: "Molchanovs W1",
    bio: "Started freediving in 2021, during the pandemic, with Swake's OGs. Works in service to farmers and fishermen in San Juan outside diving. Known for patience, video, and reading sea conditions — believes freediving is rare and amazing, since only 1 in 1000 people do it.",
    image: "/images/team/soysoy.jpg",
  },
  {
    name: "Reyida Keith Ocao",
    role: "Administrative Officer/ Finance",
    certification: "Molchanovs W1",
    bio: "Started freediving 2 years ago after encouragement from KC. Handles Swake's finance and dive/gear records, invoicing, and client payments; and enjoys pickleball and nature trips.  Patient, calm, and focused underwater, always chasing a bit more depth.",
    image: "/images/team/reyida.jpg",
  },
  {
    name: "Sul Dahunan",
    role: "Snorkeling guide",
    certification: "Candidate Molchanovs W1",
    bio: "Started freediving as a tour guide and has been diving for 3 years since. Now works as a DA-NIR staff and part-time guide and fundive videographer, capturing underwater footage and editing it himself. Playfully explore angles for a great shot.",
    image: "/images/team/sul.jpg",
  },
];

