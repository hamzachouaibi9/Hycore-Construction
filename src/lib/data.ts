import type { Service, SubService, Project, Article, Author, FAQ, SiteSettings } from "./types";

export const mockAuthor: Author = {
  id: "1",
  name: "Kim Daniel",
  image: "https://picsum.photos/40/40?random=99",
  role: "Senior Construction Specialist",
};

const baseIncluded = [
  {
    title: "Initial Consultation & Assessment",
    description:
      "We begin with a thorough consultation to understand your goals, timeline, and budget, laying the groundwork for a successful project.",
  },
  {
    title: "Design & Planning",
    description:
      "Our team develops detailed plans tailored to your specific requirements, ensuring every aspect is accounted for before work begins.",
  },
  {
    title: "Material Selection & Procurement",
    description:
      "We source high-quality materials that balance durability, aesthetics, and cost-effectiveness for your project.",
  },
  {
    title: "Skilled Construction & Execution",
    description:
      "Our experienced crews execute every phase of the project with precision, adhering to the highest industry standards.",
  },
  {
    title: "Quality Control & Inspection",
    description:
      "Rigorous quality checks at every milestone ensure the work meets and exceeds your expectations and local code requirements.",
  },
  {
    title: "Final Walkthrough & Handover",
    description:
      "We conduct a comprehensive final walkthrough with you, addressing any punch-list items before delivering your completed space.",
  },
];

// ─── Sub-services ────────────────────────────────────────────────────────────

const personalizedDesignSubs: SubService[] = [
  {
    id: "pd-1",
    slug: "custom-home-design-build",
    title: "Custom Home Design & Build",
    description:
      "A seamless design-build experience where our architects and construction teams collaborate from day one to bring your vision to life with uncompromising quality.",
    heroImage: "https://picsum.photos/1400/700?random=100",
    categorySlug: "personalized-design",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "pd-2",
    slug: "residential-construction-services",
    title: "Residential Construction Services",
    description:
      "Comprehensive construction services for residential projects of all scales, managed by experienced professionals who prioritize quality, safety, and client satisfaction.",
    heroImage: "https://picsum.photos/1400/700?random=101",
    categorySlug: "personalized-design",
    whatIsIncluded: baseIncluded,
  },
];

const newConstructionSubs: SubService[] = [
  {
    id: "nc-1",
    slug: "new-home-construction",
    title: "New Home Construction",
    description:
      "Build your dream home from the ground up with a team that manages every detail — from permits and site preparation through final finishing touches.",
    heroImage: "https://picsum.photos/1400/700?random=102",
    categorySlug: "new-construction",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "nc-2",
    slug: "ground-up-home-construction",
    title: "Ground-Up Home Construction",
    description:
      "Starting with raw land, we handle site clearing, grading, foundation work, and full vertical construction to deliver a finished home that exceeds your expectations.",
    heroImage: "https://picsum.photos/1400/700?random=103",
    categorySlug: "new-construction",
    whatIsIncluded: baseIncluded,
  },
];

const renovationSubs: SubService[] = [
  {
    id: "hr-1",
    slug: "home-remodeling",
    title: "Home Remodeling",
    description:
      "Transform your existing home with comprehensive remodeling services that modernize spaces, improve functionality, and increase property value.",
    heroImage: "https://picsum.photos/1400/700?random=104",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-2",
    slug: "custom-home-remodeling",
    title: "Custom Home Remodeling",
    description:
      "Bespoke remodeling solutions crafted around your lifestyle, preferences, and long-term vision — no two projects are ever the same.",
    heroImage: "https://picsum.photos/1400/700?random=105",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-3",
    slug: "whole-home-renovations",
    title: "Whole-Home Renovations",
    description:
      "A complete top-to-bottom renovation that reimagines every room in your home — coordinated by a single team for a seamless, stress-free experience.",
    heroImage: "https://picsum.photos/1400/700?random=106",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-4",
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "We transform kitchens into functional, beautiful spaces that enhance the heart of your home through expert craftsmanship and thoughtful design.",
    heroImage: "https://picsum.photos/1400/700?random=107",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-5",
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "Elevate your daily routine with a beautifully remodeled bathroom — from spa-like master baths to efficient guest bath updates.",
    heroImage: "https://picsum.photos/1400/700?random=108",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-6",
    slug: "interior-remodeling",
    title: "Interior Remodeling",
    description:
      "Breathe new life into your home's interior with targeted remodeling that improves flow, comfort, and aesthetic appeal throughout.",
    heroImage: "https://picsum.photos/1400/700?random=109",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-7",
    slug: "bedroom-remodeling",
    title: "Bedroom Remodeling",
    description:
      "Create a personal sanctuary with a bedroom remodel tailored to your style — from master suite expansions to cozy guest room upgrades.",
    heroImage: "https://picsum.photos/1400/700?random=110",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-8",
    slug: "exterior-home-remodeling",
    title: "Exterior Home Remodeling",
    description:
      "Boost curb appeal and protect your investment with exterior remodeling services that refresh siding, rooflines, windows, and more.",
    heroImage: "https://picsum.photos/1400/700?random=111",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-9",
    slug: "lanai-design-construction",
    title: "Lanai Design & Construction",
    description:
      "Extend your living space outdoors with a custom-designed lanai that blends seamlessly with your home's architecture and Florida's natural beauty.",
    heroImage: "https://picsum.photos/1400/700?random=112",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-10",
    slug: "living-room-remodeling",
    title: "Living Room Remodeling",
    description:
      "Reimagine your living room as the ultimate gathering space — open-concept conversions, fireplace additions, built-ins, and premium finishes.",
    heroImage: "https://picsum.photos/1400/700?random=113",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-11",
    slug: "luxury-home-remodeling",
    title: "Luxury Home Remodeling",
    description:
      "Elevate your home to a new level of refinement with luxury remodeling that incorporates the finest materials, finishes, and craftsmanship available.",
    heroImage: "https://picsum.photos/1400/700?random=114",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-12",
    slug: "structural-remodeling",
    title: "Structural Remodeling",
    description:
      "Safely modify the structural bones of your home — from load-bearing wall removal and beam installation to floor plan transformations.",
    heroImage: "https://picsum.photos/1400/700?random=115",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-13",
    slug: "attic-conversions",
    title: "Attic Conversions",
    description:
      "Convert unused attic space into a functional bedroom, home office, or bonus room — maximizing your home's square footage without expanding its footprint.",
    heroImage: "https://picsum.photos/1400/700?random=116",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-14",
    slug: "aging-in-place-remodeling",
    title: "Aging in Place Remodeling",
    description:
      "Make your home safe, accessible, and comfortable for every stage of life with thoughtful modifications designed to support independent living.",
    heroImage: "https://picsum.photos/1400/700?random=117",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-15",
    slug: "garage-conversions",
    title: "Garage Conversions",
    description:
      "Transform your underutilized garage into a livable space — guest suite, home gym, studio, or ADU — fully permitted and professionally finished.",
    heroImage: "https://picsum.photos/1400/700?random=118",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
];

const homeAdditionsSubs: SubService[] = [
  {
    id: "ha-1",
    slug: "room-additions",
    title: "Room Additions",
    description:
      "Expand your living space with a professionally designed and built room addition that integrates seamlessly with your home's existing structure and style.",
    heroImage: "https://picsum.photos/1400/700?random=119",
    categorySlug: "home-additions",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "ha-2",
    slug: "remodel-additions-renovations",
    title: "Remodel Additions & Renovations",
    description:
      "Combine the best of both worlds — add new square footage while simultaneously renovating existing spaces for a cohesive, updated home.",
    heroImage: "https://picsum.photos/1400/700?random=120",
    categorySlug: "home-additions",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "ha-3",
    slug: "second-story-additions",
    title: "Second-Story Additions",
    description:
      "Double your home's footprint by building up — a second-story addition is one of the most impactful ways to add space without sacrificing your yard.",
    heroImage: "https://picsum.photos/1400/700?random=121",
    categorySlug: "home-additions",
    whatIsIncluded: baseIncluded,
  },
];

// ─── Services ─────────────────────────────────────────────────────────────────

export const mockServices: Service[] = [
  {
    id: "1",
    slug: "personalized-design",
    title: "Personalized Design & Construction Process",
    description:
      "A tailored design-to-build experience that places your vision at the center of every decision — delivered by architects and builders working as one unified team.",
    icon: "drafting",
    heroImage: "https://picsum.photos/1400/700?random=70",
    featured: true,
    whatIsIncluded: [
      {
        title: "Vision & Discovery Session",
        description:
          "A deep-dive consultation to capture your lifestyle needs, aesthetic preferences, and project goals before any design begins.",
      },
      {
        title: "Concept Development",
        description:
          "Our designers develop initial concepts that interpret your vision through floor plans, elevations, and 3D visualizations.",
      },
      {
        title: "Design Refinement",
        description:
          "We iterate collaboratively until every detail — from spatial flow to material palettes — meets your approval.",
      },
      {
        title: "Construction Documentation",
        description:
          "Comprehensive technical drawings and specifications that communicate the design to our construction teams with precision.",
      },
      {
        title: "Build Phase Management",
        description:
          "Our construction team executes the approved design with continuous oversight to ensure fidelity to every design decision.",
      },
    ],
    subServices: personalizedDesignSubs,
  },
  {
    id: "2",
    slug: "new-construction",
    title: "New Construction",
    description:
      "From raw land to a finished home, our new construction services encompass every phase of the build process with experienced teams, transparent communication, and exacting quality standards.",
    icon: "home",
    heroImage: "https://picsum.photos/1400/700?random=71",
    featured: true,
    whatIsIncluded: [
      {
        title: "Site Evaluation & Preparation",
        description:
          "Thorough site analysis, clearing, grading, and utility coordination to establish a solid foundation for your build.",
      },
      {
        title: "Foundation & Structural Systems",
        description:
          "Engineered foundations and structural framing systems built to code and designed to last generations.",
      },
      {
        title: "MEP Rough-In",
        description:
          "Mechanical, electrical, and plumbing systems installed by licensed tradespeople in strict compliance with building codes.",
      },
      {
        title: "Insulation & Weatherproofing",
        description:
          "High-performance insulation and weatherproofing systems that ensure energy efficiency and long-term comfort.",
      },
      {
        title: "Interior & Exterior Finishing",
        description:
          "Premium finishes applied with care — from drywall and flooring to roofing and siding — delivering a polished final product.",
      },
    ],
    subServices: newConstructionSubs,
  },
  {
    id: "3",
    slug: "home-renovation-remodeling",
    title: "Home Renovation & Remodeling",
    description:
      "Whether you're refreshing a single room or transforming your entire home, our renovation experts deliver results that are beautiful, functional, and built to last.",
    icon: "hammer",
    heroImage: "https://picsum.photos/1400/700?random=72",
    featured: true,
    whatIsIncluded: [
      {
        title: "Existing Conditions Assessment",
        description:
          "A thorough evaluation of your current space to identify structural conditions, code compliance issues, and opportunities for improvement.",
      },
      {
        title: "Scope & Budget Development",
        description:
          "Clear project scoping with detailed cost estimates that align your renovation goals with your investment.",
      },
      {
        title: "Design & Material Selection",
        description:
          "Curated design guidance and material selection support to achieve a cohesive aesthetic throughout your renovation.",
      },
      {
        title: "Demolition & Structural Modifications",
        description:
          "Safe, controlled demolition and structural work performed by experienced crews with minimal disruption to your daily life.",
      },
      {
        title: "Trade Coordination",
        description:
          "Seamless scheduling and coordination of all subcontractors — plumbing, electrical, HVAC, tile, carpentry — for an efficient build.",
      },
    ],
    subServices: renovationSubs,
  },
  {
    id: "4",
    slug: "home-additions",
    title: "Home Additions",
    description:
      "Expand your home's footprint without losing what you love about it. Our addition specialists integrate new space seamlessly with your existing structure, style, and systems.",
    icon: "expand",
    heroImage: "https://picsum.photos/1400/700?random=73",
    featured: false,
    whatIsIncluded: [
      {
        title: "Feasibility & Design Consultation",
        description:
          "We assess your property's potential, zoning constraints, and structural capacity before developing an addition design that makes sense.",
      },
      {
        title: "Permit Acquisition",
        description:
          "Our team handles all permitting and regulatory submissions to ensure your addition is fully legal and code-compliant.",
      },
      {
        title: "Foundation & Structural Extension",
        description:
          "Expert extension of your existing foundation and structural systems to safely support the new addition.",
      },
      {
        title: "Systems Integration",
        description:
          "Seamless tie-in of the addition's HVAC, plumbing, and electrical systems with your existing home infrastructure.",
      },
      {
        title: "Interior & Exterior Matching",
        description:
          "Careful matching of finishes, rooflines, siding, and interior materials so the addition looks like it was always part of the original design.",
      },
    ],
    subServices: homeAdditionsSubs,
  },
  {
    id: "5",
    slug: "storm-damage-repair",
    title: "Storm Damage Repair",
    description:
      "Rapid, expert response to storm, wind, and water damage — restoring your home's safety, integrity, and appearance with professional precision.",
    icon: "shield",
    heroImage: "https://picsum.photos/1400/700?random=74",
    featured: false,
    whatIsIncluded: [
      {
        title: "Emergency Damage Assessment",
        description:
          "A thorough evaluation of storm damage to document all affected areas and prioritize emergency stabilization measures.",
      },
      {
        title: "Insurance Coordination",
        description:
          "We work directly with your insurance provider to document damage, support your claim, and ensure fair coverage for all repairs.",
      },
      {
        title: "Emergency Weatherproofing",
        description:
          "Immediate tarping, boarding, and temporary repairs to protect your property from further damage while permanent repairs are planned.",
      },
      {
        title: "Structural Repair & Restoration",
        description:
          "Professional repair of all structural damage — roofing, framing, windows, siding, and foundation — to pre-storm condition or better.",
      },
      {
        title: "Interior Remediation",
        description:
          "Complete remediation of water intrusion damage including drywall, insulation, flooring, and mold prevention treatment.",
      },
      {
        title: "Final Inspection & Certification",
        description:
          "A comprehensive post-repair inspection to certify that all work meets code and your property is fully restored.",
      },
    ],
  },
  {
    id: "6",
    slug: "grading-excavation",
    title: "Grading & Excavation",
    description:
      "Professional land grading and excavation services that prepare your site for construction, improve drainage, and establish the solid foundation every project depends on.",
    icon: "terrain",
    heroImage: "https://picsum.photos/1400/700?random=75",
    featured: false,
    whatIsIncluded: [
      {
        title: "Site Survey & Analysis",
        description:
          "Detailed topographic surveys and soil analysis to inform an accurate grading and excavation plan for your site.",
      },
      {
        title: "Land Clearing",
        description:
          "Efficient removal of vegetation, debris, and obstacles to prepare the site for grading and construction activities.",
      },
      {
        title: "Cut & Fill Grading",
        description:
          "Precision earthwork to achieve the desired site elevations, slopes, and drainage patterns specified in your site plan.",
      },
      {
        title: "Foundation Excavation",
        description:
          "Accurate excavation to the depths and dimensions required for footings, basements, and utility trenches.",
      },
      {
        title: "Drainage & Erosion Control",
        description:
          "Installation of drainage systems, retention features, and erosion control measures to protect the site and surrounding properties.",
      },
      {
        title: "Compaction & Site Certification",
        description:
          "Engineered compaction of all filled areas with compaction testing and certification to ensure structural readiness.",
      },
    ],
  },
];

export const mockProjects: Project[] = [
  {
    id: "1",
    slug: "future-edge-office",
    title: "Future Edge Office",
    category: "Commercial",
    location: "Bradford, UK",
    client: "Ridgeway Council",
    budget: "$150,000",
    deadline: "December 2024",
    description:
      "A contemporary pavilion designed as a multifunctional public venue for exhibitions, community gatherings, and seasonal events. Its sculptural form is expressed through layered volumes and filtered daylight, creating a calm and adaptable interior. The structure is engineered for flexibility, enabling seamless transitions between uses while maintaining strong visual identity and a sense of civic presence within the surrounding landscape.",
    heroImage: "https://picsum.photos/1400/700?random=20",
    gallery: [
      "https://picsum.photos/700/500?random=21",
      "https://picsum.photos/700/500?random=22",
      "https://picsum.photos/700/500?random=23",
      "https://picsum.photos/700/500?random=24",
      "https://picsum.photos/700/500?random=25",
      "https://picsum.photos/700/500?random=26",
    ],
    featured: true,
  },
  {
    id: "2",
    slug: "riverside-staircase",
    title: "Riverside Staircase",
    category: "Commercial",
    location: "Bradford, UK",
    client: "Meridian Properties",
    budget: "$85,000",
    deadline: "March 2025",
    description:
      "A precision-crafted interior staircase feature for a high-end commercial property. The design prioritizes both structural integrity and architectural elegance, using exposed concrete and tempered glass to create a flowing vertical journey through the building.",
    heroImage: "https://picsum.photos/1400/700?random=30",
    gallery: [
      "https://picsum.photos/700/500?random=31",
      "https://picsum.photos/700/500?random=32",
      "https://picsum.photos/700/500?random=33",
      "https://picsum.photos/700/500?random=34",
      "https://picsum.photos/700/500?random=35",
      "https://picsum.photos/700/500?random=36",
    ],
    featured: true,
  },
  {
    id: "3",
    slug: "northgate-residential",
    title: "Northgate Residential",
    category: "Residential",
    location: "Manchester, UK",
    client: "Harlow Family Trust",
    budget: "$240,000",
    deadline: "June 2025",
    description:
      "A premium custom home built to the exacting specifications of a discerning family. The project encompasses a four-bedroom home with open-plan living, a chef's kitchen, and a landscaped garden—all delivered within a tight urban footprint.",
    heroImage: "https://picsum.photos/1400/700?random=40",
    gallery: [
      "https://picsum.photos/700/500?random=41",
      "https://picsum.photos/700/500?random=42",
      "https://picsum.photos/700/500?random=43",
      "https://picsum.photos/700/500?random=44",
      "https://picsum.photos/700/500?random=45",
      "https://picsum.photos/700/500?random=46",
    ],
    featured: false,
  },
  {
    id: "4",
    slug: "central-warehouse-conversion",
    title: "Central Warehouse Conversion",
    category: "Commercial",
    location: "Leeds, UK",
    client: "Nova Group",
    budget: "$320,000",
    deadline: "September 2025",
    description:
      "A large-scale adaptive reuse project converting a Victorian warehouse into a mixed-use commercial and co-working space. Structural steel reinforcement and a full mechanical overhaul were required to meet modern occupancy standards.",
    heroImage: "https://picsum.photos/1400/700?random=50",
    gallery: [
      "https://picsum.photos/700/500?random=51",
      "https://picsum.photos/700/500?random=52",
      "https://picsum.photos/700/500?random=53",
      "https://picsum.photos/700/500?random=54",
      "https://picsum.photos/700/500?random=55",
      "https://picsum.photos/700/500?random=56",
    ],
    featured: false,
  },
];

export const mockArticles: Article[] = [
  {
    id: "1",
    slug: "neglecting-building-codes-and-permits",
    title: "Neglecting Building Codes And Permits",
    category: "Project Management",
    publishedDate: "March 8, 2026",
    author: mockAuthor,
    heroImage: "https://picsum.photos/1400/700?random=60",
    excerpt:
      "Understanding and adhering to building codes is not optional — it is the foundation of every safe, successful construction project.",
    content: `
## Maximizing Efficiency With The Right Tools

Lorem ipsum pellentesque elementum fringilla ullamcorper. Ut tellus massa magnis nibh tristique. Dui sem quam convallis tellus fames Nisl eget dui commodo vestibulum pellentesque ac et tincidunt. Venenatis sed vulputate turpis fermentum tempor. Non eget nisl risus felis aliquam odio dolor pretium. Quam viverra leo cras ipsum Volutpat egestas sit vel quis. Sollicitudin phasellus nisl aenean suspendisse.

Feugiat volutpat at felis amet enim locus at nullam. Quisque praesent elit et ac pellentesque commodo augue sed.

Consectetur adipiscing elit. Veit dictum vulputate risus ornare nisl mauris phasellus. Donec nibh risus maledie dolor condimentum morbi quis. Viverra phasellus ipsum vitae vulputate purus vitae molestie penanthus viverra imperdet. Morbi ultrices varius posuere tincidunt gravida consectetur at amet.

## Building Blocks: Exploring the Essence of Construction Innovation

Lorem ipsum pellentesque elementum fringilla ullamcorper. Ut tellus massa magnis nibh tristique. Dui sem quam convallis tellus fames Nisl eget dui commodo vestibulum pellentesque ac et tincidunt. Venenatis sed vulputate turpis fermentum tempor. Non eget nisl risus felis aliquam odio dolor pretium. Quam viverra leo cras ipsum Volutpat egestas sit vel quis. Sollicitudin phasellus nisl aenean suspendisse.
    `,
    featured: false,
  },
  {
    id: "2",
    slug: "technology-in-modern-construction",
    title: "The Role Of Technology In Modern Construction Projects",
    category: "Innovation",
    publishedDate: "March 8, 2026",
    author: mockAuthor,
    heroImage: "https://picsum.photos/1400/700?random=61",
    excerpt:
      "From BIM to drone surveying, technology is reshaping how construction projects are planned, executed, and delivered.",
    content: `
## How Digital Tools Are Transforming the Industry

The construction industry has long been associated with manual labor and traditional methods. But over the past decade, a wave of technological innovation has begun reshaping how projects are conceived, planned, and executed.

Building Information Modeling (BIM) stands at the forefront of this transformation. By creating intelligent 3D models that contain rich data about every element of a building, BIM allows architects, engineers, and contractors to collaborate with unprecedented precision.

## Drone Technology and Site Surveying

Drone technology has become an indispensable tool for modern construction. Aerial surveys that once required days of manual work can now be completed in hours, with far greater accuracy.

Progressive project teams use drones for:
- Regular site progress documentation
- Topographic mapping and volumetric calculations
- Safety inspections in hard-to-reach areas
- Marketing and client communication

## The Future of Construction Technology

As artificial intelligence and machine learning mature, their applications in construction will continue to expand. Predictive analytics will help teams anticipate delays before they happen, while robotics will handle repetitive or dangerous tasks with greater consistency than human workers.
    `,
    featured: false,
  },
  {
    id: "3",
    slug: "handling-construction-projects",
    title: "Handling Construction Projects Can Be Quite Demanding",
    category: "Project Management",
    publishedDate: "Sep 29, 2025",
    author: mockAuthor,
    heroImage: "https://picsum.photos/1400/700?random=62",
    excerpt:
      "Managing a construction project requires balancing competing priorities, stakeholder expectations, and ever-changing site conditions.",
    content: `
## The Complexity of Modern Construction Management

Construction project management is one of the most demanding disciplines in the built environment. A project manager must simultaneously track budgets, schedules, subcontractors, materials, inspections, and client expectations — often while conditions on the ground shift daily.

## Common Challenges and How to Navigate Them

**Scope Creep**: Perhaps the most prevalent issue in construction, scope creep occurs when project requirements expand beyond the original agreement. Clear contracts, rigorous change order documentation, and proactive client communication are the best defenses.

**Supply Chain Disruptions**: Material delays can cascade through a schedule, pushing completion dates back weeks or months. Building buffer time into critical path activities and maintaining relationships with multiple suppliers helps mitigate this risk.

**Labor Shortages**: The skilled trades workforce is aging, and recruitment pipelines are not keeping pace. Successful firms invest in apprenticeship programs and maintain strong relationships with labor unions and training institutions.

## Building Resilient Project Teams

The best construction teams share a culture of accountability and clear communication. When every member of the team understands their role and the project's critical success factors, problems are identified and resolved faster — and the finished product reflects that cohesion.
    `,
    featured: true,
  },
];

export const mockFAQs: FAQ[] = [
  {
    id: "1",
    question: "What materials are best for my project?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Venenatis velit eget aliquam convallis volutpat nulla tellus elementum viverra. Lorem ipsum dolor sit amet consectetur. Venenatis velit eget aliquam convallis volutpat nulla tellus elementum viverra.",
    order: 1,
  },
  {
    id: "2",
    question: "How long does a construction project take?",
    answer:
      "Project timelines vary significantly based on scope, complexity, and site conditions. A kitchen remodel typically takes 4–8 weeks, while a full custom home build can take 10–18 months. We provide detailed schedules during the planning phase.",
    order: 2,
  },
  {
    id: "3",
    question: "Do you handle permits and regulatory approvals?",
    answer:
      "Yes. We manage all permit applications and regulatory submissions on your behalf, maintaining relationships with local authorities to ensure smooth approvals.",
    order: 3,
  },
  {
    id: "4",
    question: "What is your payment structure?",
    answer:
      "We typically structure payments as milestone-based installments tied to completion of key project phases. Full terms are detailed in your project contract.",
    order: 4,
  },
];

export const mockSiteSettings: SiteSettings = {
  address: "410 Sandtown, California 94001, USA",
  phone: "(555) 555-5555",
  email: "info@hycoreconstruction.com",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
  linkedin: "https://linkedin.com",
  hoursWeekdays: "11:00–8:00pm",
  hoursSaturday: "11:00–4:00pm",
  hoursSunday: "11:00–2:00pm",
};
