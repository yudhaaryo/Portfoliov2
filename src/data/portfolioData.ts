import { Project, ExperienceItem, TechItem, ContactLink } from "../types";

export const PERSONAL_INFO = {
  name: "Yudha Aryo",
  fullName: "Yudha Aryo Wicaksono",
  role: "Full-Stack Developer & IT Specialist",
  tagline: "IT DEVELOPER WHO BUILDS USEFUL DIGITAL EXPERIENCES.",
  subtagline:
    "Bridging technical robustness with editorial UI craftsmanship. Building resilient web systems, admin dashboards, and interactive digital products.",
  location: "Surabaya, Indonesia",
  email: "yudhaaryo1234@gmail.com",
  whatsapp: "+6285777138542",
  whatsappDisplay: "+62 857-7713-8542",
  linkedin: "https://www.linkedin.com/in/yudha-aryo-wicaksono-a2a4bb2a4/",
  github: "https://github.com/yudhaaryo",
  instagram: "https://instagram.com/yudhaaryw_",
  availableForHire: true,
  currentStatus: "Open for full-time roles & engineering contracts",
  experienceYears: "1+ Years",
  projectsCount: "5 Projects",
  uptimeRate: "99.9%",
};

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    slug: "frontend-internship-javan-cipta-solusi",
    number: "01",
    title: "Software Quality Remediation & Programmer KPI Dashboard",
    subtitle:
      "Code Quality Remediation (SonarQube) & Internal Programmer KPI Dashboard",
    category: "Web Apps",
    year: "2025",
    client: "Javan Cipta Solusi — KPK, XL, Kominfo Projects",
    role: "Frontend Intern",
    accentColor: "orange",
    accentHex: "#ff5d38",
    shortDescription:
      "During an internship at Javan Cipta Solusi, worked on two main tracks: remediating code quality across several enterprise repositories via SonarQube, and building an internal dashboard to monitor programmer KPIs, workload, and tech stack.",
    fullOverview:
      "As a Frontend Intern, handled two related scopes of work within one internship: (1) auditing and remediating code quality on client repositories (Yongma, Kominfo, PJB, KPK) to meet SonarQube standards, and (2) building an internal dashboard used by the tech lead to monitor the engineering team — including a feature that auto-generates tasks from SonarQube issues and assigns them to the active collaborating programmer, built on the frontend side.",
    problem:
      "Several client repositories did not meet code quality standards (low coverage, many bugs, vulnerabilities, security hotspots), while the tech lead also struggled to manually track workload distribution and tech competency across the programmer team.",
    goal: "Raise test coverage above 90% and reduce bugs, vulnerabilities, and security hotspots on client repos, while building a dashboard that centrally displays programmer KPI, workload, and tech stack.",
    solution:
      "Audited and remediated code repo by repo using SonarQube to raise coverage and resolve bug/vulnerability/hotspot findings. In parallel, developed a monitoring dashboard using Laravel, Angular, and Next.js.",
    keyFeatures: [
      {
        title: "Test Coverage Improvement & SonarQube Remediation",
        description:
          "Added unit tests to raise coverage above 90%, and fixed bugs, vulnerabilities, and security hotspots across several repos (Yongma, Kominfo, PJB, KPK).",
        badge: "Quality & Security",
      },
      {
        title: "Programmer KPI Monitoring Dashboard",
        description:
          "Displays each programmer's performance in a view that's easy for the tech lead to monitor.",
        badge: "Monitoring",
      },
      {
        title: "Workload & Tech Stack Tracking",
        description:
          "Tracks active workload and tech stack per programmer to help with task distribution and project allocation.",
        badge: "Team Insight",
      },
      {
        title: "Task Auto-Generation from SonarQube Issues",
        description:
          "Automatically generates tasks from SonarQube issues and assigns them to the active collaborating programmer on that repo — built on the frontend side.",
        badge: "Automation",
      },
    ],
    techStack: [
      {
        name: "SonarQube",
        category: "Code Quality",
        roleInProject:
          "Coverage, bug, vulnerability, and security hotspot analysis",
      },
      {
        name: "Laravel",
        category: "Backend Framework",
        roleInProject: "Client repo remediation and dashboard API",
      },
      {
        name: "Angular",
        category: "Frontend",
        roleInProject: "Client repo remediation and dashboard interface",
      },
      {
        name: "Next.js",
        category: "Frontend",
        roleInProject: "Client repo remediation and dashboard interface",
      },
    ],
    architecture: [
      "SonarQube Scanner analyzes client repositories (Yongma, Kominfo, PJB, KPK) and reports coverage, bugs, vulnerabilities, and security hotspots",
      "Laravel backend service ingests SonarQube issue data via API and normalizes it into a unified task schema",
      "Task Assignment Engine cross-references issue data with each programmer's current workload to identify the active collaborator on that repo",
      "Angular / Next.js dashboard frontend consumes the Laravel API to render KPI, workload, tech stack, and auto-generated task views for the tech lead",
    ],
    challenges: [
      {
        challenge:
          "SonarQube issues came from repositories with different tech stacks and inconsistent data structures, making it hard to display and assign them through one unified dashboard.",
        resolution:
          "Built a normalization layer on the frontend that mapped each repo's SonarQube issue format into a consistent internal task structure before it reached the assignment and display logic.",
      },
      {
        challenge:
          "Automatically assigning a generated task to the correct programmer required knowing who was actively working on that specific repo at the time, not just who owned it historically.",
        resolution:
          "Combined SonarQube's issue/commit metadata with the dashboard's live workload tracker to identify the most relevant active contributor before assigning the task.",
      },
    ],
    results: [
      { metric: "90%+", label: "Test coverage achieved on handled repos" },
      {
        metric: "Passed",
        label:
          "Several repos passed SonarQube for coverage, bugs, hotspots, and vulnerabilities",
      },
      {
        metric: "Actively used",
        label:
          "Dashboard used by the tech lead to monitor internal programmers",
      },
    ],
    lessonsLearned: [
      "Working across repositories with different quality baselines showed how much easier remediation becomes once issue data is normalized early, instead of handling each repo's format as a one-off exception.",
      "Automating task assignment from static analysis findings only works well when it accounts for who is actively working on the code right now, not just who owns it on paper.",
      "Realized how much the tech lead's daily standups mattered — consistent communication was key to keeping deadlines on track, and having complete documentation on every repo made remediation work far smoother.",
    ],
    image: "/images/javan-dashboard.png",
    galleryImages: [
      {
        url: "/images/javan-sonar-passed.png",
        caption: "SonarQube remediation report and code quality dashboard",
      },
      {
        url: "/images/javan-project-list.png",
        caption: "SonarQube project list and overview",
      },
      {
        url: "/images/javan-assign-sonar.png",
        caption: "Issue assignment flow created from SonarQube findings",
      },
    ],
    featured: true,
  },
  {
    id: "proj-2",
    slug: "sistem-informasi-inventarisasi-dan-peminjaman-alat",
    number: "02",
    title: "Laboratory Inventory & Equipment Loan Information System",
    subtitle: "Undergraduate Thesis — Laboratory Management System",
    category: "Full-Stack Systems",
    year: "2025",
    client: "Undergraduate Thesis — Universitas Negeri Yogyakarta",
    role: "Solo Developer & System Architect",
    accentColor: "blue",
    accentHex: "#38bdf8",
    shortDescription:
      "A laboratory management system for improving inventory and equipment loan processes, built entirely solo from system design to implementation, and tested against the ISO 25010 quality standard.",
    fullOverview:
      "Built entirely solo as an undergraduate thesis: from system design, UML modeling, and database design, through to web implementation. The system was then comprehensively quality-tested using ISO 25010 across five aspects: functional suitability, reliability, performance efficiency, usability, and portability.",
    problem:
      "The laboratory inventory and equipment loan process needed a system whose quality was academically validated — not just functionally, but also in terms of reliability, performance, usability, and portability.",
    goal: "Build a complete inventory and equipment loan information system from design through implementation, and prove its quality through ISO 25010 testing.",
    solution:
      "Designed the system from scratch (system design, UML, database), implemented it as a web application, then tested five ISO 25010 quality aspects using tools suited to each aspect (Blazemeter for reliability, Google Lighthouse for performance efficiency, the SUS scale for usability).",
    keyFeatures: [
      {
        title: "End-to-End Design",
        description:
          "The entire process — system design, UML, and database — was done solo before moving into implementation.",
        badge: "Solo Project",
      },
      {
        title: "ISO 25010 Quality Testing",
        description:
          "Tested across five aspects: functional suitability, reliability, performance efficiency, usability, and portability.",
        badge: "Quality Assurance",
      },
    ],
    techStack: [
      {
        name: "Laravel",
        category: "Backend Framework",
        roleInProject: "System implementation and backend logic",
      },
      {
        name: "MySQL",
        category: "Database",
        roleInProject: "Database design and management",
      },
      {
        name: "Filament",
        category: "Backend Admin Panel",
        roleInProject: "Admin panel implementation for managing inventory and loan data",
      },
    ],
    architecture: [
      "Staff/student browser interacts with the Laravel web application for inventory and loan requests",
      "Filament admin panel gives lab administrators a reactive interface for managing equipment, loans, and returns",
      "Laravel application layer enforces loan business rules and writes to a normalized MySQL schema (equipment, loans, returns)",
      "Independent testing layer evaluates the running system: Blazemeter for reliability, Google Lighthouse for performance efficiency, and an SUS survey for usability",
    ],
    challenges: [
      {
        challenge:
          "As a solo developer, validating the system's quality across five distinct ISO 25010 dimensions required tooling and methodology knowledge outside typical web development.",
        resolution:
          "Selected a specific, appropriate testing tool for each aspect (Blazemeter for reliability, Lighthouse for performance, an SUS survey for usability) and ran them sequentially to produce objective, comparable scores for the thesis evaluation.",
      },
      {
        challenge:
          "Balancing thorough upfront system design (UML modeling, database normalization) against a realistic solo-development timeline for a thesis deadline.",
        resolution:
          "Front-loaded the system design and UML phase so the database schema stayed stable throughout implementation, reducing rework later in the project.",
      },
    ],
    results: [
      {
        metric: "100%",
        label:
          "Functional suitability — all system functions worked as required",
      },
      {
        metric: "MTBF 0",
        label: "Reliability via Blazemeter — met high-reliability criteria",
      },
      {
        metric: "95.15",
        label: 'Performance efficiency via Google Lighthouse — rated "good"',
      },
      {
        metric: "90.83 (Grade A)",
        label: 'Usability via the SUS scale — acceptable, rated "excellent"',
      },
      {
        metric: "Smooth",
        label: "Portability — ran without errors across different environments",
      },
    ],
    lessonsLearned: [
      "Testing across all five ISO 25010 aspects gave a far more complete picture of software quality than functional testing alone would have.",
      "Investing time in system design and UML upfront paid off directly during solo implementation, since the database schema barely needed rework later on.",
    ],
    image: "/images/labor-landing.png",
    galleryImages: [
      {
        url: "/images/labor-peminjaman.png",
        caption:
          "Laboratory Inventory & Equipment Loan Information System — Equipment Loan Data Table",
      },
      {
        url: "/images/labor-pengembalian.png",
        caption:
          "Laboratory Inventory & Equipment Loan Information System — Equipment Return Data Table",
      },
      {
        url: "/images/labor-classdg.png",
        caption:
          "Class Diagram of the Laboratory Inventory & Equipment Loan Information System",
      },
      {
        url: "/images/labor-blaze.png",
        caption:
          "Blazemeter Reliability Testing Report for the Laboratory Inventory & Equipment Loan Information System",
      },
    ],
    featured: true,
  },
  {
    id: "proj-3",
    slug: "aplikasi-pusdatin-preview-dokumen",
    number: "03",
    title: "Document Preview Feature — Pusdatin Application",
    subtitle: "Document Verification Feature for Ministry Staff",
    category: "Web Apps",
    year: "2025",
    client: "Ministry of Religious Affairs — Pusdatin",
    role: "IT Intern",
    accentColor: "lime",
    accentHex: "#a3e635",
    shortDescription:
      "Added a PDF preview feature to the Pusdatin application so staff can verify that uploaded documents meet requirements without downloading each one individually.",
    fullOverview:
      "Developed the Pusdatin application using CodeIgniter, focused on adding a PDF preview feature for in-system employee document verification.",
    problem:
      "Staff needed to verify that documents uploaded into the system met requirements, but previously had to download each document individually to check it.",
    goal: "Let staff verify document compliance directly within the system, without a manual per-document download step.",
    solution:
      "Added a PDF preview feature to the CodeIgniter-based application, so documents can be viewed and verified directly from within the system.",
    keyFeatures: [
      {
        title: "In-App PDF Preview",
        description:
          "Staff can view document contents directly within the system without downloading them.",
        badge: "Verification",
      },
    ],
    techStack: [
      {
        name: "CodeIgniter",
        category: "Backend Framework",
        roleInProject: "PDF preview feature development",
      },
      {
        name: "MySQL",
        category: "Database",
        roleInProject: "Document and staff data storage",
      },
    ],
    architecture: [
      "Staff browser requests a document record from the CodeIgniter application",
      "CodeIgniter controller retrieves the document's file path and metadata from MySQL",
      "Application streams the PDF into an in-browser preview renderer instead of forcing a file download",
    ],
    challenges: [
      {
        challenge:
          "Staff previously had to download every document individually just to confirm it met formatting and content requirements, which was slow and cluttered their local storage.",
        resolution:
          "Implemented an in-browser PDF preview so documents could be reviewed instantly within the application, removing the manual download step entirely.",
      },
    ],
    results: [
      {
        metric: "More efficient",
        label:
          "Staff no longer need to download documents one by one to verify them",
      },
    ],
    lessonsLearned: [
      "Even a small, focused feature like an in-app preview can meaningfully speed up a daily verification workflow — the improvement doesn't have to come from a large system overhaul.",
    ],
    image: "/images/pusdatin-data.png",
    galleryImages: [],
    featured: false,
  },
  {
    id: "proj-4",
    slug: "agunaedu-platform",
    number: "04",
    title: "AgunaEdu — IT Learning & Upskilling Platform",
    subtitle: "Capstone Project — Infinite Learning Independent Study Batch 6",
    category: "UI/UX & Tools",
    year: "2024",
    client: "Infinite Learning Independent Study Batch 6",
    role: "Frontend Developer & UI/UX",
    accentColor: "pink",
    accentHex: "#f43f5e",
    shortDescription:
      "A capstone project addressing the challenge many IT students in Yogyakarta face in learning and improving their IT skills.",
    fullOverview:
      "AgunaEdu was built as the capstone project for Infinite Learning Independent Study Batch 6. Contributed to UI/UX (including Figma slicing) and backend integration, using React JS on the frontend.",
    problem:
      "Many IT students in Yogyakarta struggle to learn and improve their IT skills.",
    goal: "Build a platform that helps IT students learn and improve their technical abilities.",
    solution:
      "Handled the UI/UX side, including slicing designs from Figma, and integrated the React JS frontend with the team's backend.",
    keyFeatures: [
      {
        title: "UI/UX & Figma Slicing",
        description:
          "Translated Figma designs into a functional frontend interface.",
        badge: "UI/UX",
      },
      {
        title: "Frontend-Backend Integration",
        description:
          "Connected the React JS frontend with the team's backend services.",
        badge: "Integration",
      },
    ],
    techStack: [
      {
        name: "React.js",
        category: "Frontend",
        roleInProject:
          "UI implementation from Figma designs and backend integration",
      },
      {
        name: "Node.js",
        category: "Backend",
        roleInProject: "Backend API development and integration",
      },
    ],
    architecture: [
      "Figma design system is sliced into reusable React components for course and class pages",
      "React frontend calls the team's Node.js backend via REST API for course, class, and user data",
      "Node.js backend handles application logic and serves data consumed by the React frontend",
    ],
    challenges: [
      {
        challenge:
          "The project required close collaboration between frontend and backend teams to ensure seamless integration.",
        resolution:
          "Regular team meetings and code reviews were conducted to align frontend and backend development efforts.",
      },
    ],
    results: [
      {
        metric: "Capstone",
        label: "Final project of Infinite Learning Independent Study Batch 6",
      },
    ],
    lessonsLearned: [
      "Team collaboration and communication are crucial for successful project delivery, especially when integrating frontend and backend components.",
    ],
    image: "/images/aguna-landing.png",
    galleryImages: [
      {
        url: "/images/aguna-course.png",
        caption: "AgunaEdu — Course Page",
      },
      {
        url: "/images/aguna-class.png",
        caption: "AgunaEdu — Class Page",
      },
      {
        url: "/images/aguna-prototype.png",
        caption: "AgunaEdu — Figma Prototype",
      },
    ],
    featured: false,
  },
  {
    id: "proj-5",
    slug: "sistem-rotasi-karyawan-uny",
    number: "05",
    title: "Staff Rotation System — UNY Rectorate",
    subtitle: "Faculty Research Project (Frontend & UI/UX Migration)",
    category: "Web Apps",
    year: "2023",
    client: "Faculty Research Project — Universitas Negeri Yogyakarta",
    role: "Frontend Developer",
    accentColor: "light",
    accentHex: "#e5e7eb",
    shortDescription:
      "A faculty research project addressing staff at the UNY rectorate holding positions for too long without rotation, involving a UI/UX rebuild on the frontend side.",
    fullOverview:
      "This system was a faculty research project born from the observation that many staff members in the UNY rectorate held their positions for too long without rotation. The migration restarted from the UI/UX side, with a different data structure but still relying on the same underlying API.",
    problem:
      "Many staff members in the UNY rectorate held their positions for too long without rotation.",
    goal: "Rebuild the staff rotation system from the UI/UX side while still leveraging the existing data API.",
    solution:
      "Brainstormed with the team to redesign the flow and interface, then worked on the frontend with a new structure that still connected to the existing API.",
    keyFeatures: [
      {
        title: "UI/UX Migration",
        description:
          "Redesigned the system's interface and flow from the ground up with a new data structure.",
        badge: "Redesign",
      },
    ],
    techStack: [
      {
        name: "Laravel",
        category: "Backend Framework",
        roleInProject: "Frontend integration with existing API",
      },
      { name: "React.js", category: "Frontend", roleInProject: "UI/UX implementation and frontend logic" },
    ],
    architecture: [
      "Existing staff-rotation API remains the single source of truth for employee and position data",
      "A new data-mapping layer translates the legacy API's data structure into the format the redesigned frontend expects",
      "React.js frontend renders the redesigned dashboard and staff data views on top of the mapped data",
    ],
    challenges: [
      {
        challenge:
          "The new frontend data structure differed from the old one, even though it still used the same API.",
        resolution:
          "Brainstormed with the team to adapt the new data flow to the existing API.",
      },
    ],
    results: [],
    lessonsLearned: [
      "The project was never fully completed due to a non-technical obstacle — the party holding the API was reluctant to hand it over, even though it had been officially assigned to the student team by the vice-rector.",
    ],
    image: "/images/uny-landing.png",
    galleryImages: [
      {
        url: "/images/uny-dashboard.png",
        caption: "UNY Rectorate Staff Rotation System — Dashboard",
      },
      {
        url: "/images/uny-data-pegawai.png",
        caption: "UNY Rectorate Staff Employee Data — Data Table",
      },
    ],
    featured: false,
  },
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    period: "Oct 2025 — Apr 2026",
    year: "2025–2026",
    role: "Frontend Intern",
    organization: "Javan Cipta Solusi",
    location: "Sleman",
    type: "Internship",
    description:
      "Contributed to client enterprise projects (KPK, XL, Kominfo) across two main tracks: SonarQube-driven code quality remediation and building an internal monitoring dashboard for the programmer team.",
    responsibilities: [
      "Remediated code quality across several repositories (Yongma, Kominfo, PJB, KPK) via SonarQube, raising test coverage above 90% and reducing bugs, vulnerabilities, and security hotspots.",
      "Built a dashboard website to monitor programmer KPI, workload, and tech stack.",
      "Used Laravel, Angular, and Next.js throughout the work.",
    ],
    technologies: ["Laravel", "Angular", "Next.js", "SonarQube"],
    highlight:
      "Several client repos passed SonarQube for coverage, bug, hotspot review, and vulnerabilities; the KPI dashboard is actively used by the tech lead.",
  },
  {
    id: "exp-2",
    period: "Feb 2025 — Apr 2025",
    year: "2025",
    role: "IT Intern",
    organization: "Ministry of Religious Affairs — Pusdatin",
    location: "Bantul",
    type: "Internship",
    description:
      "Developed the Pusdatin application using CodeIgniter, focused on adding a PDF preview feature for employee document verification.",
    responsibilities: [
      "Added a PDF preview feature so staff could verify documents entered into the system met requirements without downloading them one by one.",
    ],
    technologies: ["CodeIgniter", "MySQL"],
    highlight:
      "Simplified staff document verification directly within the system.",
  },
  {
    id: "exp-3",
    period: "Feb 2024 — Jun 2024",
    year: "2024",
    role: "Web Developer & UI/UX Mentee",
    organization: "PT Kinema Systrans Multimedia",
    location: "Batam (Remote)",
    type: "Infinite Learning Batch 6 — Independent Study",
    description:
      "Worked on AgunaEdu, the capstone project addressing IT students in Yogyakarta who struggle to learn and improve their IT skills.",
    responsibilities: [
      "Handled UI/UX, including slicing designs from Figma.",
      "Integrated the React JS frontend with the team's backend.",
    ],
    technologies: ["React.js", "Figma"],
    highlight: "Won the Best Product Award at Infinite Learning Batch 6.",
  },
  {
    id: "exp-4",
    period: "Feb 2023 — Dec 2023",
    year: "2023",
    role: "Web Developer",
    organization: "Universitas Negeri Yogyakarta — RKSIU Division",
    location: "Yogyakarta",
    type: "Campus & Faculty Research Project",
    description:
      "Worked on a staff rotation system (faculty research project) and the migration of staff.uny.ac.id from Yii to Laravel.",
    responsibilities: [
      "Worked on the frontend and brainstormed with the team for the UNY rectorate staff rotation system.",
      "Migrated staff.uny.ac.id from Yii to Laravel.",
    ],
    technologies: ["Laravel", "Yii"],
    highlight:
      "The staff rotation system was stalled by a non-technical obstacle midway through; the staff.uny.ac.id migration was completed successfully.",
  },
];

export const TECH_STACK: TechItem[] = [
  {
    name: "React.js",
    category: "FRONTEND",
    level: "Primary UI Framework",
    experienceYears: "1+ Years",
    description:
      "Component-driven architecture, custom hooks, and backend integration.",
    featuredProjects: ["AgunaEdu"],
    tagColor: "#38bdf8",
  },
  {
    name: "Angular",
    category: "FRONTEND",
    level: "Daily Driver",
    experienceYears: "1+ Years",
    description: "Code remediation and dashboard interface development.",
    featuredProjects: ["Javan Cipta Solusi — KPI Dashboard"],
    tagColor: "#dd0031",
  },
  {
    name: "Next.js",
    category: "FRONTEND",
    level: "SSR / App Router",
    experienceYears: "1+ Years",
    description: "Code remediation and dashboard interface development.",
    featuredProjects: ["Javan Cipta Solusi — KPI Dashboard"],
    tagColor: "#ffffff",
  },
  {
    name: "Tailwind CSS",
    category: "FRONTEND",
    level: "Daily Driver",
    experienceYears: "1+ Years",
    description: "Responsive styling across several projects.",
    featuredProjects: ["Portfolio v2"],
    tagColor: "#06b6d4",
  },
  {
    name: "Laravel",
    category: "BACKEND",
    level: "Primary Backend Engine",
    experienceYears: "1+ Years",
    description:
      "Client repo remediation, dashboard API, and system migration.",
    featuredProjects: ["Javan Cipta Solusi", "staff.uny.ac.id Migration"],
    tagColor: "#ff2d20",
  },
  {
    name: "CodeIgniter",
    category: "BACKEND",
    level: "Proficient",
    experienceYears: "1+ Years",
    description: "Feature development on the Pusdatin application.",
    featuredProjects: ["Pusdatin Application"],
    tagColor: "#ee4323",
  },
  {
    name: "MySQL",
    category: "DATABASE",
    level: "Primary Relational DB",
    experienceYears: "1+ Years",
    description: "Data design and management across several projects.",
    featuredProjects: ["Pusdatin Application", "Laboratory Information System"],
    tagColor: "#4479a1",
  },
  {
    name:"PostgreSQL",
    category: "DATABASE",
    level: "Proficient",
    experienceYears: "6 Months",
    description: "Database management and query optimization.",
    featuredProjects: ["AgunaEdu, KPI Dashboard"],
    tagColor: "#336791",
  },
  {
    name:"Postman",
    category: "TOOLS",
    level: "API Testing & Debugging",
    experienceYears: "1+ Years",
    description: "Testing and debugging APIs across multiple projects.",
    featuredProjects: ["AgunaEdu", "KPI Dashboard", "KPK Project"],
    tagColor: "#ff6c37",
  },
  {
    name: "SonarQube",
    category: "TOOLS",
    level: "Code Quality",
    experienceYears: "1+ Years",
    description:
      "Coverage, bug, vulnerability, and security hotspot analysis and remediation.",
    featuredProjects: ["Javan Cipta Solusi"],
    tagColor: "#4e9bcd",
  },
  {
    name: "Git & GitHub",
    category: "TOOLS",
    level: "Daily Workflow",
    experienceYears: "1+ Years",
    description: "Version control across all projects.",
    featuredProjects: ["All Projects"],
    tagColor: "#f05032",
  },
  {
    name: "Figma",
    category: "TOOLS",
    level: "UI/UX Prototyping",
    experienceYears: "1+ Years",
    description: "Slicing designs into a functional frontend.",
    featuredProjects: ["AgunaEdu"],
    tagColor: "#f24e1e",
  },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    id: "email",
    name: "Direct Email",
    label: "EMAIL",
    value: "yudhaaryo1234@gmail.com",
    url: "mailto:yudhaaryo1234@gmail.com?subject=Project%20Opportunity%20/%20Inquiry%20for%20Yudha%20Aryo",
    actionText: "Send Email →",
    icon: "Mail",
    accent: "#ff5d38", // Orange
  },
  {
    id: "linkedin",
    name: "LinkedIn Profile",
    label: "LINKEDIN",
    value: "linkedin.com/in/yudha-aryo-wicaksono",
    url: "https://www.linkedin.com/in/yudha-aryo-wicaksono-a2a4bb2a4/",
    actionText: "Connect on LinkedIn →",
    icon: "Linkedin",
    accent: "#38bdf8", // Blue
  },
  {
    id: "whatsapp",
    name: "WhatsApp Messenger",
    label: "WHATSAPP",
    value: "+62 857-7713-8542",
    url: "https://wa.me/6285777138542?text=Hello%20Yudha,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20regarding%20a%20developer%20opportunity!",
    actionText: "Chat on WhatsApp →",
    icon: "MessageSquare",
    accent: "#a3e635", // Lime Green
  },
  {
    id: "instagram",
    name: "Instagram / Social",
    label: "INSTAGRAM",
    value: "@yudhaaryw_",
    url: "https://instagram.com/yudhaaryw_",
    actionText: "Follow on Instagram →",
    icon: "Instagram",
    accent: "#f43f5e", // Pink
  },
];

export const TESTIMONIALS: {
  quote: string;
  author: string;
  organization: string;
  tag: string;
}[] = [
  // TODO: previous testimonials were fictional and have been removed.
  // Fill in with real testimonials from clients, faculty, or a tech lead if available.
];