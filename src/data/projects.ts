export type ProjectCategory = "Platforms" | "Business" | "Experiments";
export type Project = {
  slug: string;
  title: string;
  image: string;
  url: string;
  category: ProjectCategory;
  status: string;
  eyebrow: string;
  summary: string;
  context: string;
  contribution: string;
  features: string[];
  stack: string[];
  resources?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    slug: "wejha-clinic",
    title: "Wejha Clinic",
    image: "/images/wejha-clinic.webp",
    url: "https://wejhaclinic.com",
    category: "Platforms",
    status: "Published project",
    eyebrow: "HEALTHCARE WEBSITE & PATIENT APP",
    summary:
      "Connecting people with clinics, doctors, and appointment services in Saudi Arabia.",
    context:
      "Patients need a clear way to discover clinics, compare specialties and services, and contact providers. Wejha Clinic brings these discovery and appointment workflows into an Arabic and English platform.",
    contribution:
      "Built the Wejha Clinic website and patient mobile app for iOS and Android, connecting clinic discovery, provider information, and appointment workflows across web and mobile experiences.",
    features: [
      "Clinic and doctor discovery",
      "Search by specialty and city",
      "Clinic services, offers, and profiles",
      "Arabic and English experiences",
      "Patient app available on iOS and Android",
    ],
    stack: ["Next.js"],
    resources: [
      {
        label: "Patient app for iOS",
        url: "https://apps.apple.com/sa/app/wejha-clinic/id6819287747",
      },
      {
        label: "Patient app for Android",
        url: "https://play.google.com/store/apps/details?id=sa.wejha.app",
      },
    ],
  },
  {
    slug: "adhali-law",
    title: "Adhali Law",
    image: "/images/adhali-law-clean.webp",
    url: "https://adhalilaw.com/site/",
    category: "Platforms",
    status: "Client project",
    eyebrow: "HOSTING, MIGRATION & LEGAL MANAGEMENT",
    summary:
      "Hosting and a company-wide move to GoDaddy, alongside a custom lawyer management system.",
    context:
      "A Saudi law firm needed its website, company data, and business email migrated to GoDaddy, alongside custom software for its legal operations.",
    contribution:
      "Handled hosting and the company’s migration to GoDaddy, including the website, company data, and business email services. Also developed a custom lawyer management system for the firm’s operations.",
    features: [
      "Website hosting on GoDaddy",
      "Website migration to GoDaddy",
      "Company data migration",
      "Business email migration",
      "Custom lawyer management system",
    ],
    stack: [
      "GoDaddy",
      "Website hosting",
      "Website migration",
      "Email migration",
      "Custom software development",
    ],
  },
  {
    slug: "gems-and-minerals-paradise",
    title: "Gems & Minerals Paradise",
    image: "/images/gem.webp",
    url: "https://www.Gemsandmineralsparadise.com",
    category: "Platforms",
    status: "In development",
    eyebrow: "MULTI-VENDOR MARKETPLACE",
    summary:
      "A marketplace connecting gems, minerals, and the people who value them.",
    context:
      "A gems and minerals business needs a shopping experience that connects buyers, vendors, inventory, and payments in one product.",
    contribution:
      "Developing the full stack marketplace, including vendor dashboards, inventory management, an admin panel, and multi-currency shopping flows.",
    features: [
      "Vendor & admin dashboards",
      "Inventory management",
      "Stripe & PayPal integration",
      "Automated email workflows",
    ],
    stack: [
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Resend",
      "Stripe",
      "PayPal",
    ],
  },
  {
    slug: "own-it-digital",
    title: "Own It Digital",
    image: "/images/own.webp",
    url: "https://www.ownitdigital.co.uk/",
    category: "Business",
    status: "Client project",
    eyebrow: "DIGITAL AGENCY WEBSITE",
    summary: "A digital home for a UK agency and the services behind its work.",
    context:
      "Own It Digital needed a clear, responsive website to communicate its services and support client acquisition.",
    contribution:
      "Delivered the marketing website with responsive layouts, on-page SEO, hosting, and attention to page performance.",
    features: [
      "Service presentation",
      "Responsive layouts",
      "On-page SEO",
      "Production deployment",
    ],
    stack: ["Next.js", "MongoDB", "Resend"],
  },
  {
    slug: "whippy-brother",
    title: "Whippy Brothers",
    image: "/images/whippy-brothers.webp",
    url: "https://whippybrothers.uk",
    category: "Business",
    status: "Client project",
    eyebrow: "EVENT CATERING & BRAND EXPERIENCE",
    summary:
      "A playful web experience for ice cream catering across London and the home counties.",
    context:
      "Whippy Brothers needed a website to showcase its ice cream catering, introduce its menu and event services, and help customers make booking inquiries for weddings, festivals, corporate events, and private parties.",
    contribution:
      "Designed and developed the Whippy Brothers website, connecting product and menu presentation, event service pages, booking inquiries, and a responsive interface with flavour-based color themes.",
    features: [
      "Menu and event service pages",
      "Event booking inquiries",
      "Flavour-based color themes",
      "Responsive interface and animations",
    ],
    stack: ["Next.js", "MongoDB", "Resend"],
  },
  {
    slug: "saf-automation",
    title: "SAF Automation",
    image: "/images/saf.webp",
    url: "https://www.safautmationllc.com",
    category: "Business",
    status: "Client project",
    eyebrow: "AUTOMATION & BUSINESS",
    summary: "Making an automation business easier to discover and understand.",
    context:
      "SAF Automation LLC needed a business website to explain its services and provide a path for customer inquiries.",
    contribution:
      "Built the website with structured service content, contact integration, and managed hosting.",
    features: [
      "Service showcase",
      "Structured business content",
      "Contact integration",
      "Production deployment",
    ],
    stack: ["Next.js", "MongoDB", "Resend"],
  },
  {
    slug: "hag",
    title: "HAG",
    image: "/images/hag.webp",
    url: "https://www.hag.ae/",
    category: "Business",
    status: "Client project",
    eyebrow: "BUSINESS WEB EXPERIENCE",
    summary:
      "A responsive website connecting a UAE business with its customers.",
    context:
      "HAG needed a clear digital presence to introduce the business and support customer inquiries.",
    contribution:
      "Designed and delivered the responsive website, with attention to interface clarity, performance, and on-page SEO.",
    features: [
      "Responsive interface",
      "Business presentation",
      "On-page SEO",
      "Vercel deployment",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
  },
  {
    slug: "uj-easy-life",
    title: "UJ Easy Life",
    image: "/images/uj.webp",
    url: "https://www.ujeasylife.com",
    category: "Platforms",
    status: "Client project",
    eyebrow: "SERVICE BOOKING PLATFORM",
    summary: "From finding a service to making a booking. All in one place.",
    context:
      "A Dubai cleaning service provider needed a platform for general cleaning, AC cleaning, and painting service bookings.",
    contribution:
      "Built a full stack platform with a responsive interface, booking functionality, MongoDB data management, and automated email notifications.",
    features: [
      "Service booking flows",
      "MongoDB data management",
      "Automated email notifications",
      "Responsive customer interface",
    ],
    stack: ["Next.js", "Tailwind CSS", "MongoDB", "Resend", "Vercel"],
  },
  {
    slug: "alaqeel",
    title: "Alaqeel",
    image: "/images/alaqeel.webp",
    url: "https://alaqeel.hadnat.site",
    category: "Platforms",
    status: "Team project",
    eyebrow: "LEGAL SERVICES & ADMIN",
    summary:
      "A legal services interface with the tools to manage what happens behind it.",
    context:
      "A legal services business needed customer-facing interfaces and an admin dashboard.",
    contribution:
      "Contributed reusable UI components, administrative interfaces, API endpoints, and file uploads as part of the Selsla engineering team.",
    features: [
      "Admin dashboard",
      "Reusable UI components",
      "API integration",
      "File uploads",
    ],
    stack: ["Next.js", "Express", "MySQL", "Prisma", "Multer"],
  },
  {
    slug: "rawdhat",
    title: "Rawdhat",
    image: "/images/rahwat.webp",
    url: "https://rawdhat.com/login",
    category: "Platforms",
    status: "Team project",
    eyebrow: "LAWYER PORTAL",
    summary: "A portal connecting legal professionals to their workspace.",
    context:
      "A legal services platform needed a portal and authentication interface for lawyers.",
    contribution:
      "Contributed portal interfaces and custom API integration as part of the Selsla engineering team.",
    features: [
      "Portal interfaces",
      "Authentication flows",
      "API integration",
      "Reusable components",
    ],
    stack: ["React", "Auth", "API"],
  },
  {
    slug: "desert-safari-ride",
    title: "Desert Safari Ride",
    image: "/images/desertsafari.webp",
    url: "https://desert-safari-ride.vercel.app",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Modern travel booking website with stunning UI",
    context:
      "Modern travel booking website with stunning UI. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with Next.js", "Working with Vercel"],
    stack: ["Next.js", "Vercel"],
  },
  {
    slug: "otp-authentication",
    title: "OTP Authentication",
    image: "/images/otp.webp",
    url: "https://nextauthapp-six.vercel.app",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Secure email-based OTP verification system",
    context:
      "Secure email-based OTP verification system. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: [
      "Working with Next.js",
      "Working with Auth",
      "Working with Email",
    ],
    stack: ["Next.js", "Auth", "Email"],
  },
  {
    slug: "neardear-chatroom",
    title: "Neardear Chatroom",
    image: "/images/chat.webp",
    url: "https://neardear-chatroom.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Real-time chat application",
    context:
      "Real-time chat application. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with WebSocket"],
    stack: ["React", "WebSocket"],
  },
  {
    slug: "desert-safari",
    title: "Desert Safari",
    image: "/images/desert.webp",
    url: "https://desert-safari0.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Interactive safari tour website",
    context:
      "Interactive safari tour website. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with CSS3"],
    stack: ["React", "CSS3"],
  },
  {
    slug: "tech-health",
    title: "TechHealth",
    image: "/images/techcare.webp",
    url: "https://tech-care12.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Healthcare management dashboard",
    context:
      "Healthcare management dashboard. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with Dashboard"],
    stack: ["React", "Dashboard"],
  },
  {
    slug: "tic-tac-toe",
    title: "Tic Tac Toe",
    image: "/images/tectoe.webp",
    url: "https://tic-tac-toe66.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Classic game with modern UI",
    context:
      "Classic game with modern UI. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with JavaScript", "Working with Game"],
    stack: ["JavaScript", "Game"],
  },
  {
    slug: "currency-converter",
    title: "Currency Converter",
    image: "/images/curren.webp",
    url: "https://curr-convt.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Real-time currency exchange rates",
    context:
      "Real-time currency exchange rates. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with API"],
    stack: ["React", "API"],
  },
  {
    slug: "paladin",
    title: "Pladin",
    image: "/images/pladin.webp",
    url: "https://paladin0.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Modern web application",
    context:
      "Modern web application. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with UI"],
    stack: ["React", "UI"],
  },
  {
    slug: "todo-context",
    title: "Todo with Context API",
    image: "/images/todocapi.webp",
    url: "https://todolist-contextapi.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Task management using Context API",
    context:
      "Task management using Context API. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with Context API"],
    stack: ["React", "Context API"],
  },
  {
    slug: "todo-redux",
    title: "Todo with Redux",
    image: "/images/todoredux.webp",
    url: "https://todolist-with-rtk.netlify.app/",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "State management with Redux Toolkit",
    context:
      "State management with Redux Toolkit. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with Redux"],
    stack: ["React", "Redux"],
  },
  {
    slug: "react-router",
    title: "React Router Demo",
    image: "/images/reactrouter.webp",
    url: "https://rrd-react-router-dom.netlify.app",
    category: "Experiments",
    status: "Personal project",
    eyebrow: "ENGINEERING EXPLORATION",
    summary: "Routing examples and navigation",
    context:
      "Routing examples and navigation. A practical project exploring web application development.",
    contribution:
      "Developed the application interface and explored the technologies listed below through a focused implementation.",
    features: ["Working with React", "Working with Router"],
    stack: ["React", "Router"],
  },
];

export const featuredProjects = [
  "wejha-clinic",
  "adhali-law",
  "gems-and-minerals-paradise",
].map((slug) => projects.find((project) => project.slug === slug)!);
