import type { Service, Project, Article, Author, FAQ, SiteSettings } from "./types";

export const mockAuthor: Author = {
  id: "1",
  name: "Kim Daniel",
  image: "https://picsum.photos/40/40?random=99",
  role: "Senior Construction Specialist",
};

export const mockServices: Service[] = [
  {
    id: "1",
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "We transform kitchens into functional, beautiful spaces that enhance the heart of your home through expert craftsmanship.",
    icon: "kitchen",
    heroImage: "https://picsum.photos/1400/700?random=10",
    featured: true,
    whatIsIncluded: [
      {
        title: "Concept Development",
        description:
          "We begin with an in-depth understanding of your vision, needs, and site context to create design concepts that are both innovative and functional.",
      },
      {
        title: "Site Analysis & Planning",
        description:
          "A successful project starts with thorough research. We assess environmental factors, zoning laws, and spatial constraints to create a design that integrates seamlessly.",
      },
      {
        title: "Space Planning & Layout",
        description:
          "Every space should serve a purpose. We carefully plan layouts that enhance comfort, movement, and functionality.",
      },
      {
        title: "3D Visualization & Renderings",
        description:
          "Seeing is believing. Our high-quality 3D renderings and virtual walkthroughs allow you to visualize the final design before construction begins.",
      },
      {
        title: "Material Selection & Sustainability Integration",
        description:
          "Choosing the right materials is crucial for durability, aesthetics, and environmental responsibility.",
      },
      {
        title: "Technical Drawings & Documentation",
        description:
          "Detailed architectural drawings serve as the foundation for successful execution.",
      },
      {
        title: "Regulatory Approvals & Compliance",
        description:
          "Navigating local building codes and obtaining permits can be complex. Our team handles regulatory approvals.",
      },
      {
        title: "Collaboration with Engineers & Specialists",
        description:
          "We work closely with structural, mechanical, and electrical engineers to ensure every aspect of the design is seamlessly integrated.",
      },
    ],
  },
  {
    id: "2",
    slug: "residential-construction",
    title: "Residential Construction",
    description:
      "From foundation to finish, we build homes that stand the test of time with meticulous attention to detail.",
    icon: "home",
    heroImage: "https://picsum.photos/1400/700?random=11",
    featured: true,
    whatIsIncluded: [
      {
        title: "Custom Home Design",
        description:
          "We create bespoke residential designs tailored to your lifestyle and aesthetic preferences.",
      },
      {
        title: "Foundation & Structural Work",
        description:
          "Our structural teams ensure every home is built on a solid, code-compliant foundation.",
      },
      {
        title: "Interior & Exterior Finishing",
        description:
          "Premium finishes inside and out that reflect your unique personality and stand the test of time.",
      },
      {
        title: "Project Management",
        description:
          "End-to-end coordination of all trades, timelines, and budgets to deliver your home on time and within scope.",
      },
    ],
  },
  {
    id: "3",
    slug: "home-construction",
    title: "Home Construction",
    description:
      "Complete custom home builds from architectural planning through final walkthrough with experienced teams.",
    icon: "building",
    heroImage: "https://picsum.photos/1400/700?random=12",
    featured: false,
    whatIsIncluded: [
      {
        title: "Architectural Design",
        description:
          "Collaborative design process that brings your dream home to life through thoughtful planning.",
      },
      {
        title: "Permit Acquisition",
        description:
          "We handle all local permitting and regulatory requirements so you don't have to.",
      },
      {
        title: "Construction Execution",
        description:
          "Expert execution by our in-house teams and trusted subcontractors.",
      },
      {
        title: "Quality Assurance",
        description:
          "Rigorous quality checks at every stage of construction.",
      },
    ],
  },
  {
    id: "4",
    slug: "remodeling",
    title: "Remodeling",
    description:
      "Breathing new life into existing structures through thoughtful renovation and careful execution.",
    icon: "hammer",
    heroImage: "https://picsum.photos/1400/700?random=13",
    featured: false,
    whatIsIncluded: [
      {
        title: "Assessment & Planning",
        description:
          "Comprehensive evaluation of your existing space to identify opportunities for improvement.",
      },
      {
        title: "Structural Modifications",
        description:
          "Safe removal or modification of walls, floors, and structural elements.",
      },
      {
        title: "Finishing & Restoration",
        description:
          "Premium finishes that breathe new life into your space.",
      },
      {
        title: "Code Compliance",
        description:
          "All renovations meet or exceed current building codes and safety standards.",
      },
    ],
  },
  {
    id: "5",
    slug: "steel-structure-erection",
    title: "Steel Structure Erection",
    description:
      "Industrial-grade steel frameworks and structures built to precise specifications for commercial projects.",
    icon: "grid",
    heroImage: "https://picsum.photos/1400/700?random=14",
    featured: false,
    whatIsIncluded: [
      {
        title: "Structural Engineering",
        description:
          "Detailed structural analysis and engineering for safe, code-compliant steel construction.",
      },
      {
        title: "Fabrication Coordination",
        description:
          "Close coordination with fabricators to ensure precision components.",
      },
      {
        title: "Erection & Assembly",
        description:
          "Skilled crews safely erect steel frameworks to exact specifications.",
      },
      {
        title: "Welding & Connection",
        description:
          "Certified welders ensure all connections meet structural integrity requirements.",
      },
    ],
  },
  {
    id: "6",
    slug: "project-management",
    title: "Project Management",
    description:
      "End-to-end project oversight ensuring every phase is delivered on time, on budget, and to spec.",
    icon: "clipboard",
    heroImage: "https://picsum.photos/1400/700?random=15",
    featured: false,
    whatIsIncluded: [
      {
        title: "Scope Definition",
        description:
          "Clear project scope, milestones, and deliverables established upfront.",
      },
      {
        title: "Budget Management",
        description:
          "Tight control over project finances with transparent reporting.",
      },
      {
        title: "Schedule Coordination",
        description:
          "Master scheduling with all trades and stakeholders aligned.",
      },
      {
        title: "Risk Mitigation",
        description:
          "Proactive identification and management of project risks.",
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
