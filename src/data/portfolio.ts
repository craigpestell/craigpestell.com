export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  website: string;
  linkedin: string;
  github: string;
  profileImage?: string;
  summary: string;
  availability: string;
}

export interface Skill {
  name: string;
  level: number; // 1-10
  category: 'frontend' | 'backend' | 'tools' | 'languages' | 'other';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  highlights?: string[];
  technologies: string[];
  imageUrl: string;
  projectUrl?: string;
  githubUrl?: string;
  startDate: string;
  endDate?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  achievements: string[];
  technologies: string[];
  resumeIncluded?: boolean;
}

export interface ResumeProfile {
  locationNote: string;
  earlierCareerSummary: string;
  earlierCareerHighlights: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  achievements?: string[];
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  resume: ResumeProfile;
  skills: Skill[];
  projects: Project[];
  experience: Experience[];
  education: Education[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Craig Pestell",
    title: "Senior Full Stack Engineer",
    email: "craigpestell@gmail.com",
    phone: "+1 (415) 513-7188",
    location: "Vancouver, BC, Canada",
    website: "https://craigpestell.com",
    linkedin: "https://linkedin.com/in/craigpestell",
    github: "https://github.com/craigpestell",
    profileImage: "/images/icons8-eggman-robotnik-480.png",
    summary: "Senior full-stack engineer who ships production-grade internal tools end to end, from Kubernetes deploys to polished React UIs, and whose tools get adopted voluntarily with no top-down rollout. At Apple, I was the sole frontend architect of a data-pipeline platform that 60+ hardware engineers and factory-floor operators now depend on. Earlier: Google, Williams Sonoma, and Macy's.",
    availability: "Available now for staff/principal IC roles (FTE), contract engagements or consulting. Based in Vancouver; open to relocating to California for the right role."
  },
  resume: {
    locationNote: "open to US relocation (TN eligible)",
    earlierCareerSummary: "Earlier career included concurrent consulting and contract engagements across database applications, PHP web systems, public-sector software, e-commerce, CMS platforms, web services, and Linux administration.",
    earlierCareerHighlights: [
      "Built a call-center application and geographic branch locator for Canada Reconnect before online mapping services were commonplace, using Canadian postal-code coordinates and spherical distance calculations to rank nearby payment locations.",
      "As the sole developer, built a PHP education administration and student information system for the Durham District School Board, including FileMaker Pro-style ad hoc search across any field and complex query construction."
    ]
  },
  skills: [
    { name: "React", level: 9, category: "frontend" },
    { name: "TypeScript", level: 9, category: "languages" },
    { name: "JavaScript", level: 10, category: "languages" },
    { name: "Next.js", level: 9, category: "frontend" },
    { name: "Vue.js", level: 8, category: "frontend" },
    { name: "Angular", level: 8, category: "frontend" },
    { name: "Node.js", level: 9, category: "backend" },
    { name: "Python", level: 8, category: "languages" },
    { name: "Java", level: 7, category: "languages" },
    { name: "TailwindCSS", level: 9, category: "frontend" },
    { name: "SASS/SCSS", level: 9, category: "frontend" },
    { name: "PostgreSQL", level: 8, category: "backend" },
    { name: "MongoDB", level: 7, category: "backend" },
    { name: "Express.js", level: 9, category: "backend" },
    { name: "NestJS", level: 8, category: "backend" },
    { name: "Flask", level: 7, category: "backend" },
    { name: "GraphQL", level: 7, category: "backend" },
    { name: "Redux", level: 8, category: "frontend" },
    { name: "Storybook", level: 9, category: "tools" },
    { name: "Playwright", level: 8, category: "tools" },
    { name: "Webpack", level: 8, category: "tools" },
    { name: "Git", level: 10, category: "tools" },
    { name: "Linux", level: 9, category: "tools" },
    { name: "AWS", level: 7, category: "tools" },
    { name: "Azure", level: 7, category: "tools" },
    { name: "Google Cloud", level: 7, category: "tools" },
    { name: "Docker", level: 8, category: "tools" },
    { name: "Kubernetes", level: 7, category: "tools" },
    { name: "AI-Assisted Development (Claude, Copilot)", level: 9, category: "tools" },
    { name: "Auth0", level: 8, category: "tools" }
  ],
  projects: [
    {
      id: "project-1",
      title: "Hardware Test Data Platform",
      description: "Production internal tool for Apple hardware engineering — reduced pipeline setup from up to an hour to 30 seconds for simple cases and a few minutes for complex ones",
      longDescription: "Owned end-to-end delivery of confidential internal tooling for Apple's hardware engineering organization.",
      highlights: [
        "Sole architect of the Next.js and React frontend, with contributions to the Flask API gateway and Kubernetes-scheduled sequencer service",
        "Replaced error-prone parameter entry and deep folder navigation with guided retrieval that reduced pipeline setup from up to an hour to about 30 seconds for simple cases",
        "Added an in-app media browser and pipeline observability for data volume, downloaded and pending days, excluded files, and test outcomes",
        "Used by over 60 production users across hardware engineering and factory-floor operations",
        "Built a Storybook-driven documentation pipeline that keeps end-user documentation aligned with the shipped UI"
      ],
      technologies: ["TypeScript", "Next.js", "React", "Tailwind", "Storybook", "Playwright", "Python", "Flask", "OIDC", "Kubernetes"],
      imageUrl: "/images/portfolio-1.jpg",
      startDate: "2024-09",
      endDate: "2026-09",
      featured: true
    },
    {
      id: "project-varconv",
      title: "Variation Converter for WooCommerce",
      description: "Open-source WordPress plugin that merges near-duplicate simple products into variable products, with preview and one-click undo",
      longDescription: "Many WooCommerce stores list one simple product per color or size. Variation Converter scans the catalog, groups the products that are really variants of one product by SKU family and shared name, and turns each group the owner approves into a single variable product. It also splits a variable product back into simple products. The originals are hidden, never deleted, and every change can be undone from the History tab.",
      highlights: [
        "Groups candidates automatically by SKU family and shared name prefix, and flags price, category or label mismatches for review",
        "Carries over each variant's SKU, prices, sale dates, stock, weight, dimensions and image",
        "All-or-nothing saves: a failed conversion removes its partial product and leaves the catalog untouched",
        "Published on wordpress.org"
      ],
      technologies: ["PHP", "WordPress", "WooCommerce", "JavaScript", "WP-CLI"],
      imageUrl: "/images/variation-converter.webp",
      projectUrl: "https://wordpress.org/plugins/variation-converter-for-woocommerce/",
      githubUrl: "https://github.com/craigpestell/variation-converter",
      startDate: "2026-10",
      featured: true
    },
    {
      id: "project-2",
      title: "AI-Powered Healthcare Platform",
      description: "Enterprise healthcare solution leveraging LLMs with integrated subscription management and Chrome extension",
      longDescription: "Architected and delivered a sophisticated healthcare platform leveraging AI large language models to reduce operational costs and deliver measurable value to enterprise customers. Developed comprehensive web dashboard for subscription management, Chrome extension for seamless website integration, and implemented enterprise-grade Auth0 authentication across all platform components.",
      technologies: ["TypeScript", "Next.js", "NestJS", "Python", "Azure", "Auth0"],
      imageUrl: "/images/portfolio-2.jpg",
      startDate: "2023-07",
      endDate: "2024-05",
      featured: true
    },
    {
      id: "project-3",
      title: "Silicon Design Collaboration Platform",
      description: "Version control and collaboration system for silicon chip specifications across 20+ engineering teams",
      longDescription: "Designed and prototyped Fuse Manager, an innovative version control system for silicon chip design specifications at Google. Created comprehensive proof-of-concepts and wireframes that guided architectural decisions for a platform enabling seamless collaboration across 20+ hardware engineering teams. Successfully transitioned prototypes to production-ready application using Angular and Google's internal toolchain.",
      technologies: ["Angular", "TypeScript", "Python", "RxJS"],
      imageUrl: "/images/portfolio-3.jpg",
      startDate: "2022-02",
      endDate: "2023-10",
      featured: true
    },
    {
      id: "project-4",
      title: "Enterprise Micro-Frontend Architecture",
      description: "Large-scale architectural transformation from monolithic e-commerce platform to modular micro-frontend ecosystem",
      longDescription: "Spearheaded the architectural transformation of Williams Sonoma's legacy monolithic e-commerce platform into a modern, scalable micro-frontend ecosystem. Designed and implemented reusable component architecture enabling independent team deployment cycles, significantly improving developer velocity and end-user experience through enhanced performance and maintainability.",
      technologies: ["Vue.js", "Node.js", "TailwindCSS", "SASS", "Jest", "Yeoman"],
      imageUrl: "/images/portfolio-4.jpg",
      startDate: "2020-10",
      endDate: "2021-12",
      featured: false
    },
    {
      id: "project-4a",
      title: "Context-Agnostic Component Library",
      description: "Multi-brand component system serving Williams Sonoma's portfolio with configurable behaviors and CSS variable theming",
      longDescription: "Architected a context-agnostic component library serving Williams Sonoma's brand portfolio (Pottery Barn, West Elm, Mark and Graham). Components adapt to each brand's design language through CSS variables while maintaining consistent functionality. Implemented configurable behaviors allowing customization of component orientation, initial states, and interaction patterns while preserving accessibility and performance standards.",
      technologies: ["Vue.js", "JavaScript", "SASS", "CSS Variables", "Storybook", "Jest"],
      imageUrl: "/images/portfolio-10.jpg",
      startDate: "2020-12",
      endDate: "2021-11",
      featured: true
    },
    {
      id: "project-5",
      title: "Macys.com Micro-Frontend Migration",
      description: "Co-architected the Macys.com micro-frontend architecture, drove its voluntary adoption across ~8 teams, and cut product discovery page load from 27 seconds to 7 seconds",
      longDescription: "Spent a year as one of two engineers designing and building the Macys.com micro-frontend architecture, replacing a monolithic frontend so teams could build components in the framework of their choice and release on their own schedules. Built a component harness that let developers work on a component in isolation, with site CSS, core libraries, and common third-party integrations pre-wired, which drove voluntary adoption across roughly eight teams. Components and modules communicated through a shared pub/sub schema and were versioned with semver, with major-version pinning enforced in CI. Cut the product discovery catalog page from a 27-second load to 7 seconds by auditing years of accumulated tag-manager configuration with each tag's owner, removing unused third-party scripts, deferring non-critical scripts, and prioritizing above-the-fold content. Replaced several separate analytics scripts with a Segment-style analytics layer backed by an in-house event store. Kept bundles lean with webpack tree-shaking, bundle analysis, and code splitting, including chunk-based delivery of server-selected A/B test variants. Applied Node.js clustering in the cloud to improve throughput and resilience under enterprise traffic.",
      technologies: ["React", "Redux", "GraphQL", "Node.js", "Google Cloud", "Webpack", "Tealium", "Foundation"],
      imageUrl: "/images/portfolio-5.jpg",
      startDate: "2015-02",
      endDate: "2020-04",
      featured: false
    },
    {
      id: "project-6",
      title: "Custom E-commerce Platform",
      description: "End-to-end development of responsive product catalog with integrated content management system",
      longDescription: "Independently designed and developed a comprehensive e-commerce platform for Kali Protectives, delivering a fully responsive product catalog with custom content management capabilities. Implemented Node.js REST API architecture, integrated Cloudinary for optimized image delivery, and established complete DevOps pipeline across development, staging, and production environments.",
      technologies: ["Node.js", "Express", "PostgreSQL", "Handlebars", "TinyMCE"],
      imageUrl: "/images/kali-interceptor.jpg",
      projectUrl: "https://kaliprotectives.com",
      startDate: "2016-01",
      endDate: "2019-10",
      featured: false
    },
    {
      id: "project-7",
      title: "Travel Insurance Platform",
      description: "Comprehensive travel insurance web portal for domestic and international policies",
      longDescription: "Developed multiple intranet applications and public websites for TIC/The Cooperators travel insurance. Created online claims submission forms, customer portals, and integrated web services for policy management and customer service operations.",
      technologies: ["PHP", "MySQL", "JavaScript"],
      imageUrl: "/images/cooperators.png",
      projectUrl: "https://travelinsurance.ca",
      startDate: "2006-05",
      endDate: "2013-09",
      featured: false
    },
    {
      id: "project-8",
      title: "Hayes Bicycle Group Website",
      description: "Product catalog and marketing website for bicycle component manufacturer",
      longDescription: "Collaborated with marketing team to build a comprehensive website featuring product catalog, blog posts, and hierarchical page structure. Implemented PHP/MySQL backend for dynamic content delivery and integrated Cloudinary for optimized image management.",
      technologies: ["PHP", "MySQL", "WordPress", "JavaScript"],
      imageUrl: "/images/hayes-homepage.png",
      startDate: "2009-01",
      endDate: "2009-12",
      featured: false
    },
    {
      id: "project-9",
      title: "Race Face Performance Products",
      description: "E-commerce platform for mountain bike component manufacturer",
      longDescription: "Designed and developed comprehensive e-commerce solution for Race Face, including public product catalogs, distributor portals, and email marketing campaigns. Managed complete Linux server infrastructure across multiple environments.",
      technologies: ["PHP", "MySQL", "WordPress", "JavaScript"],
      imageUrl: "/images/raceface-home-bars.png",
      projectUrl: "https://raceface.com",
      startDate: "2008-09",
      endDate: "2016-03",
      featured: false
    }
  ],
  experience: [
    {
      id: "exp-1",
      company: "Apple Inc.",
      position: "Senior Full Stack Engineer (Contract)",
      startDate: "2024-09",
      endDate: "2026-09",
      description: "Rejoined Apple by request. Sole frontend architect of an internal data-pipeline platform built from an empty repository, with ownership extending into the API gateway and Kubernetes-scheduled sequencer service.",
      achievements: [
        "Drove organic adoption to 60+ users across Cupertino hardware engineering and factory-floor operations, with no top-down rollout, by replacing deep folder navigation and ad-hoc parsing scripts with a purpose-built retrieval workflow over datasets typically 1-4 TB and peaking near 20 TB",
        "Cut pipeline setup from up to an hour to about 30 seconds with guided parameter selection that surfaces only valid options from thousands of values",
        "Enabled hardware engineers to run their own Python post-processing code against pipeline files, provided by .zip upload or cloned from their own repositories, with read access granted through a purpose-built GitHub App",
        "Architected the Next.js / React 19 / TypeScript frontend from a blank repository, wired OIDC end to end with per-request identity propagation, and shipped through Kubernetes and internal CI/CD",
        "Split a 274-revision Flask monolith into 15+ blueprint packages in a single PR with no legacy shims, and replaced an N+1 per-user object-store sweep with one GET against a cached fleet index",
        "Built the unit test suite from scratch to ~80% coverage and added an OpenAPI-to-TypeScript CI drift gate so frontend and API contracts cannot silently diverge",
        "Reduced accessibility violations from 1,369 to 504 (color-contrast issues from 608 to ~43) with a custom Playwright and axe-core scanner",
        "Built the docs site from scratch (~55 docs) with a Storybook-driven pipeline that regenerates every screenshot from tagged component stories",
        "Built a customizable, widget-based admin dashboard graphing API performance (per-endpoint p50/p95), API usage by user, and pipeline data metrics, all filterable by date range and user"
      ],
      technologies: ["TypeScript", "Next.js", "React", "Tailwind", "Storybook", "Playwright", "Python", "Flask", "OIDC", "S3", "Kubernetes"]
    },
    {
      id: "exp-3",
      company: "Series B Healthcare AI Startup",
      position: "Senior Full Stack Developer",
      startDate: "2023-07",
      endDate: "2024-05",
      description: "Led product and platform work for a Series B healthcare AI startup, building customer-facing and internal tools that reduced operational friction and supported enterprise rollout.",
      achievements: [
        "Architected and delivered customer subscription management dashboard from concept to production",
        "Developed Chrome extension enabling seamless website augmentation through intelligent script injection",
        "Implemented enterprise-grade Auth0 authentication and authorization across distributed application ecosystem",
        "Established standardized Azure deployment pipelines ensuring consistent application hosting procedures",
        "Created comprehensive Tailwind component library enabling consistent brand experience across platforms"
      ],
      technologies: ["TypeScript", "Next.js", "NestJS", "Python", "Azure", "Auth0"]
    },
    {
      id: "exp-4",
      company: "Google Inc.",
      position: "Senior UI Developer (Contract)",
      startDate: "2022-02",
      endDate: "2023-10",
      description: "Designed and developed innovative collaboration platform for silicon chip design specifications across 20+ engineering teams",
      achievements: [
        "Created comprehensive proof-of-concepts and technical wireframes for Fuse Manager application",
        "Delivered production-ready features using Angular, RxJS, and Google's internal development ecosystem",
        "Conducted thorough code reviews ensuring high-quality standards across frontend development team",
        "Provided technical leadership for architectural decisions in chip design collaboration platform"
      ],
      technologies: ["Angular", "TypeScript", "Python", "RxJS"]
    },
    {
      id: "exp-5",
      company: "Williams Sonoma",
      position: "Senior UI Developer",
      startDate: "2020-10",
      endDate: "2021-12",
      description: "Led architectural transformation of legacy monolithic e-commerce platform to modern micro-frontend ecosystem",
      achievements: [
        "Delivered significant performance improvements enhancing end-user experience across all customer touchpoints",
        "Streamlined developer experience and accelerated feature delivery lifecycle through modern tooling",
        "Architected and implemented micro-frontend component build system with structured CI/CD pipeline",
        "Successfully migrated complex legacy monolithic architecture to scalable, maintainable modern platform"
      ],
      technologies: ["Vue.js", "Node.js", "TailwindCSS", "SASS", "Jest"]
    },
    {
      id: "exp-6",
      company: "Macy's",
      position: "Senior UI Developer",
      startDate: "2015-02",
      endDate: "2020-04",
      description: "Co-architected Macys.com's micro-frontend architecture, built the tooling that drove its adoption across ~8 teams, and led the performance work that cut catalog load from 27s to 7s",
      achievements: [
        "Co-architected the Macys.com micro-frontend architecture with another engineer, letting teams build components in their framework of choice and release on their own schedules",
        "Built a component harness for developing components in isolation without running the full site, driving voluntary adoption of the architecture across ~8 teams",
        "Cut catalog page load from 27s to 7s by removing unused third-party scripts, deferring non-critical scripts, and prioritizing above-the-fold content",
        "Built a Segment-style analytics layer and in-house event store that consolidated multiple third-party analytics tools",
        "Audited years of Tealium tag-manager configuration, working with each tag's owner to retire unused scripts",
        "Defined a pub/sub contract and CI-enforced semver pinning so independently released components stayed compatible",
        "Contributed to Java-based backend services and REST API development supporting enterprise e-commerce platform",
        "Optimized REST services and Node.js applications on Google Cloud Platform, applying clustering for throughput and resilience",
        "Mentored development teams on advanced frontend and backend development practices"
      ],
      technologies: ["React", "Redux", "GraphQL", "Node.js", "Java", "Webpack", "SASS"]
    },
    {
      id: "exp-8",
      company: "Autodesk",
      position: "UI Developer",
      startDate: "2014-09",
      endDate: "2015-12",
      description: "Developed features for customer subscription portal enabling Autodesk's transition to Software-as-a-Service model",
      achievements: [
        "Built customer subscription management features allowing users to purchase and manage Autodesk product subscriptions",
        "Collaborated within Agile development team to deliver high-quality user interface components",
        "Implemented responsive web design using modern frontend technologies and frameworks"
      ],
      technologies: ["jQuery", "Backbone.js", "Require.js", "Bootstrap", "Node.js", "HTML5", "CSS3", "Jasmine", "Gulp", "Grunt", "LESS"]
    },
    {
      id: "exp-9",
      company: "Google Inc.",
      position: "Software Engineer (Contract)",
      startDate: "2012-02",
      endDate: "2014-09",
      description: "Developed and maintained Google Unified Ticketing System (GUTS), a high-performance internal application serving over 10,000 requests per second",
      achievements: [
        "Maintained 99.9% uptime for critical internal ticketing system processing 10+ million records",
        "Converted legacy code for 100+ ticket forms to modern, refactored framework architecture",
        "Designed and implemented mobile frontend for GUTS ticketing system improving accessibility",
        "Collaborated with cross-domain users to collect requirements and implement new ticket types",
        "Leveraged Google's internal technologies to achieve enterprise-scale performance optimization"
      ],
      technologies: ["Python", "JavaScript", "Google Closures", "Fava Framework", "Oracle DB", "BMC Remedy"]
    },
    {
      id: "exp-18",
      company: "Hayes Bicycle Group",
      position: "Web Developer",
      startDate: "2009-01",
      endDate: "2009-12",
      description: "Developed comprehensive website featuring product catalog, blog posts, and hierarchical page structure for bicycle component manufacturer",
      achievements: [
        "Collaborated with marketing team to build fresh website with dynamic product catalog",
        "Implemented PHP/MySQL backend for dynamic content delivery and page management",
        "Optimized images and file formats for responsive web design using early optimization techniques",
        "Created Linux server environments for development, staging, and production hosting"
      ],
      technologies: ["PHP", "MySQL", "WordPress", "HTML", "CSS", "JavaScript"],
      resumeIncluded: false
    },
    {
      id: "exp-10",
      company: "Race Face Performance Products",
      position: "Web Developer",
      startDate: "2008-06",
      endDate: "2016-08",
      description: "Developed and maintained comprehensive web ecosystem for mountain bike component manufacturer including public catalogs and distributor portals",
      achievements: [
        "Managed complete web application infrastructure across development, staging, and production environments",
        "Created online product catalogs serving both public customers and distributor networks",
        "Implemented email marketing campaigns reaching thousands of recipients with measurable engagement",
        "Configured Linux server environments with proper security, user management, and FTP access controls",
        "Designed MySQL database architecture for efficient product and content management"
      ],
      technologies: ["PHP", "MySQL", "WordPress", "jQuery", "HTML", "CSS", "JavaScript"],
      resumeIncluded: false
    },
    {
      id: "exp-11",
      company: "TIC / The Cooperators",
      position: "Web Developer",
      startDate: "2006-02",
      endDate: "2013-09",
      description: "Developed multiple web applications and services for domestic and international travel insurance operations",
      achievements: [
        "Created and maintained several intranet applications supporting travel insurance business operations",
        "Developed online claims submission systems streamlining customer service workflows",
        "Built public-facing websites serving thousands of customers seeking travel insurance policies",
        "Implemented web services and APIs enabling integration with third-party insurance systems"
      ],
      technologies: ["PHP", "MySQL", "JavaScript", "SOAP", "XML", "HTML", "CSS"],
      resumeIncluded: false
    },
    {
      id: "exp-12",
      company: "iWasteNot Systems",
      position: "Web Developer",
      startDate: "2008-01",
      endDate: "2010-12",
      description: "Developed web and mobile software solutions to assist businesses in waste reduction and environmental sustainability",
      achievements: [
        "Built environmental recycling web portal used by private companies and local governments",
        "Implemented features to reduce waste, save costs, and generate alternative energy insights",
        "Developed SOAP web services for integration with third-party environmental systems",
        "Created user interfaces for waste tracking and reporting functionality"
      ],
      technologies: ["PHP", "XML", "HTML", "CSS", "JavaScript", "SOAP"],
      resumeIncluded: false
    },
    {
      id: "exp-13",
      company: "Engine Digital",
      position: "Software Consultant / Developer",
      startDate: "2005-01",
      endDate: "2006-12",
      description: "Provided consulting and development services for digital marketing consultancy, extending their technical capabilities",
      achievements: [
        "Developed PHP and MySQL Content Management Systems for life insurance industry",
        "Created CSS for mobile website implementations using early responsive design techniques",
        "Built multiple marketing campaign websites for diverse client portfolio",
        "Enabled agency to take on projects outside their core business scope through technical expertise"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Bootstrap"],
      resumeIncluded: false
    },
    {
      id: "exp-14",
      company: "Core Solutions Software",
      position: "Software Consultant / Developer",
      startDate: "2002-01",
      endDate: "2004-12",
      description: "Designed and developed custom software solutions for customers across various industries including education administration",
      achievements: [
        "Developed web-based education administration and student information system for Durham District School Board",
        "Created application components to track student attendance, curriculum scores, and cumulative grades",
        "Designed and implemented global search feature to align with legacy FileMaker application functionality",
        "Built comprehensive student management system using modern web technologies for the era"
      ],
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      resumeIncluded: false
    },
    {
      id: "exp-15",
      company: "UV Media",
      position: "Software Developer",
      startDate: "2000-01",
      endDate: "2002-12",
      description: "Designed and developed wide range of web-based software solutions using PHP and MySQL for diverse corporate clients",
      achievements: [
        "Developed reusable software components for rapid application development",
        "Created multiple product catalogs for variety of corporate clients using PHP and ColdFusion",
        "Built Recreational Hockey League application for player statistics, metrics, and tournament management",
        "Developed Air India bombing trial document management system for legal proceedings"
      ],
      technologies: ["PHP", "ColdFusion", "MySQL", "HTML", "CSS", "JavaScript"],
      resumeIncluded: false
    },
    {
      id: "exp-16",
      company: "Canada Reconnect",
      position: "Software Consultant / Developer",
      startDate: "2000-01",
      endDate: "2000-12",
      description: "Designed custom software solution that streamlined telephone service reseller's customer files, accounting, and call center operations",
      achievements: [
        "Built comprehensive call center application serving 40+ staff members",
        "Created distance calculation tool for finding customer payment locations (pre-Google Maps era)",
        "Designed reports providing metrics to guide TV commercial spending and targeting decisions",
        "Installed and administered local area network for call center operations"
      ],
      technologies: ["MS Access", "VB Script"],
      resumeIncluded: false
    },
    {
      id: "exp-17",
      company: "Ucora Corporation",
      position: "Software Developer",
      startDate: "1998-01",
      endDate: "2000-12",
      description: "Participated in design and development of medium-sized database applications for large corporate clients including AXA, BC Rail, and BC Supreme Courts",
      achievements: [
        "Developed fixed-cost database applications requiring complete upfront requirements analysis",
        "Worked with major enterprise clients across diverse industries and government sectors",
        "Gained early experience in enterprise software development and client relationship management",
        "Contributed to applications serving critical business operations for large organizations"
      ],
      technologies: ["MS Access", "VB Script", "ColdFusion"],
      resumeIncluded: false
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "British Columbia Institute of Technology",
      degree: "Diploma in Computer Systems Technology",
      field: "Data Communications & Networking",
      startDate: "2004-01",
      endDate: "2006-12",
      achievements: [
        "Specialized in systems architecture and enterprise network design",
        "Comprehensive curriculum in data communications infrastructure, system analysis, and enterprise network security",
        "Foundation in system design methodologies and technology infrastructure evaluation"
      ]
    },
    {
      id: "edu-2",
      institution: "British Columbia Institute of Technology",
      degree: "Programming Concepts and Methodologies",
      field: "Programming coursework",
      startDate: "1999-01",
      endDate: "1999-12",
      achievements: [
        "Foundational training in software development principles and best practices",
        "Early specialization in object-oriented programming and system design methodologies",
        "Completed Java-based projects focusing on enterprise application development patterns"
      ]
    }
  ]
};
