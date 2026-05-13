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
      "We begin every project with a deep-dive consultation to understand your goals, site conditions, timeline, and budget — establishing a shared foundation and clear scope before a single decision is made.",
  },
  {
    title: "Design & Planning",
    description:
      "Our team develops detailed project plans tailored to your specific requirements — scope, sequencing, trade coordination, and milestone targets — ensuring every aspect is locked in and accounted for before work begins.",
  },
  {
    title: "Material Selection & Procurement",
    description:
      "We source and procure high-quality materials from trusted suppliers, balancing durability, aesthetics, and cost-effectiveness — and managing procurement timelines so material delays never stall your project.",
  },
  {
    title: "Skilled Construction & Execution",
    description:
      "Our experienced crews execute every phase with precision — managing subcontractors, maintaining strict adherence to the approved plans, and upholding the quality standard that defines every Hycore project.",
  },
  {
    title: "Quality Control & Inspection",
    description:
      "Rigorous quality checks at every project milestone ensure the work meets and exceeds your expectations, the approved drawings, and all applicable local code requirements — with no shortcuts taken.",
  },
  {
    title: "Final Walkthrough & Handover",
    description:
      "We conduct a thorough final walkthrough with you, identifying and resolving every punch-list item before formally delivering your completed project — so you move forward with confidence, not a list of open items.",
  },
];

// ─── Sub-services ────────────────────────────────────────────────────────────

const personalizedDesignSubs: SubService[] = [
  {
    id: "pd-1",
    slug: "custom-home-design-build",
    title: "Custom Home Design & Build",
    description:
      "A seamless design-build experience where our architects and construction crews work as one unified team — eliminating the costly miscommunication that happens when design and construction are handled separately. From your first concept to the final walkthrough, every decision is made collaboratively, your vision is protected at every phase, and the result is a home built exactly as you imagined — on time, on budget, and without compromise.",
    heroImage: "https://picsum.photos/1400/700?random=100",
    categorySlug: "personalized-design",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "pd-2",
    slug: "residential-construction-services",
    title: "Residential Construction Services",
    description:
      "Comprehensive residential construction services for projects of all scales — from targeted upgrades to complete custom builds — managed by experienced professionals who bring the same standard of care to every job site. Our crews are skilled, our processes are proven, and our commitment to quality is non-negotiable. You get a team that communicates clearly, stays accountable, and delivers a finished home that reflects every dollar of your investment.",
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
      "Build your dream home from the ground up with a team that manages every detail — permits, site preparation, structural systems, trade coordination, and final finishes — so nothing falls through the cracks and no decision gets made without your input. From the first shovel in the ground to your final walkthrough, Hycore handles the complexity so you can focus on what matters: watching your vision take shape.",
    heroImage: "https://picsum.photos/1400/700?random=102",
    categorySlug: "new-construction",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "nc-2",
    slug: "ground-up-home-construction",
    title: "Ground-Up Home Construction",
    description:
      "Starting with raw land, we handle every step of the transformation — site clearing, grading, utility coordination, engineered foundation systems, and full vertical construction through final finish. Raw land to completed home, managed by one accountable team with the experience to navigate permitting, site challenges, and trade coordination. The result is a structurally sound, expertly finished home built to outlast the vision behind it.",
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
      "Transform your existing home with remodeling services that go beyond refreshed aesthetics — modernizing how you live, improving daily functionality, and adding measurable property value. Hycore's renovation teams approach every remodel with the same discipline as a ground-up build: a clear scope, transparent pricing, skilled tradespeople, and a commitment to finishing right. You'll have a dedicated team managing every detail from demo day through final walkthrough.",
    heroImage: "https://picsum.photos/1400/700?random=104",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-2",
    slug: "custom-home-remodeling",
    title: "Custom Home Remodeling",
    description:
      "Bespoke remodeling solutions crafted entirely around your lifestyle, preferences, and long-term vision — because no two homes, and no two homeowners, are exactly alike. We begin by listening: understanding how you actually live, what frustrates you about your current space, and what your ideal version looks like. Then we build it — with the craftsmanship and attention to detail that makes the result feel uniquely yours, not like a template from a showroom.",
    heroImage: "https://picsum.photos/1400/700?random=105",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-3",
    slug: "whole-home-renovations",
    title: "Whole-Home Renovations",
    description:
      "A complete top-to-bottom renovation that reimagines every room — from structural changes and systems upgrades to finishes and fixtures — coordinated by a single team so nothing gets lost between trades. Whole-home renovations are complex by nature, but with Hycore managing sequencing, subcontractors, and the schedule, the process is organized, predictable, and far less disruptive than most homeowners expect. The finished result is a cohesive, fully updated home that feels new from the inside out.",
    heroImage: "https://picsum.photos/1400/700?random=106",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-4",
    slug: "kitchen-remodeling",
    title: "Kitchen Remodeling",
    description:
      "The kitchen is the most-used room in your home — and one of the highest-return renovations you can make for both daily living and resale value. Hycore handles every element: layout optimization, cabinetry, countertops, appliances, tile, lighting, and plumbing — all coordinated to minimize downtime and deliver a space that works harder and looks better. Expect a kitchen that genuinely improves your daily life and adds real value to your property.",
    heroImage: "https://picsum.photos/1400/700?random=107",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-5",
    slug: "bathroom-remodeling",
    title: "Bathroom Remodeling",
    description:
      "A well-executed bathroom remodel transforms one of the most personal spaces in your home into something you actually enjoy using every day. Whether you're creating a spa-like master retreat or updating a guest bath with modern tile and fixtures, Hycore handles every detail — waterproofing, plumbing, tile work, vanities, and lighting — with the precision that wet areas demand. The result is a bathroom that looks custom, functions perfectly, and holds up beautifully for years.",
    heroImage: "https://picsum.photos/1400/700?random=108",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-6",
    slug: "interior-remodeling",
    title: "Interior Remodeling",
    description:
      "Interior remodeling is about more than new paint and fixtures — it's about reimagining how your spaces flow, how they feel, and how well they serve the way you actually live. Hycore's interior remodeling work ranges from opening floor plans and adding architectural detail to complete finish overhauls that transform the character of a home. Every change is designed with intention and executed with the craftsmanship that makes the difference between a remodel that looks done and one that looks right.",
    heroImage: "https://picsum.photos/1400/700?random=109",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-7",
    slug: "bedroom-remodeling",
    title: "Bedroom Remodeling",
    description:
      "Your bedroom should be the most restorative room in your home — designed around rest, comfort, and the way you start and end every day. Hycore's bedroom remodeling services range from master suite expansions with custom built-ins and walk-in closet systems to thoughtful guest room upgrades that make visitors feel genuinely welcome. We handle flooring, lighting, trim, ceiling detail, and millwork to create a room that feels intentional, not just updated.",
    heroImage: "https://picsum.photos/1400/700?random=110",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-8",
    slug: "exterior-home-remodeling",
    title: "Exterior Home Remodeling",
    description:
      "Your home's exterior is the first thing anyone sees — and the last line of defense against the elements. Hycore's exterior remodeling services improve both, refreshing siding, rooflines, windows, doors, and trim with materials that enhance curb appeal and provide lasting weatherproofing. Whether you're preparing to sell, recovering from years of wear, or simply ready for an upgrade, our crews deliver results that look sharp and add measurable value to your property.",
    heroImage: "https://picsum.photos/1400/700?random=111",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-9",
    slug: "lanai-design-construction",
    title: "Lanai Design & Construction",
    description:
      "A well-designed lanai extends your living space into the outdoors — creating a year-round gathering area that blends seamlessly with your home's architecture and the natural environment around it. Hycore designs and builds custom lanai structures with proper drainage, engineered structural framing, screened or glass enclosures, and finishing details that make the space feel like a natural extension of your interior. The result is an outdoor room you'll use every day, in every season.",
    heroImage: "https://picsum.photos/1400/700?random=112",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-10",
    slug: "living-room-remodeling",
    title: "Living Room Remodeling",
    description:
      "The living room sets the tone for your entire home — where guests form first impressions and where your family spends the most time together. Hycore reimagines living spaces with structural vision and finish-level precision: open-concept conversions, custom built-in shelving, fireplace additions and surrounds, crown molding, and premium flooring. Every change is made with the whole room in mind, creating a cohesive space that feels designed — not just remodeled.",
    heroImage: "https://picsum.photos/1400/700?random=113",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-11",
    slug: "luxury-home-remodeling",
    title: "Luxury Home Remodeling",
    description:
      "Luxury remodeling is not just about high-end materials — it's about the level of craft and project management discipline that makes those materials perform as intended. Hycore's luxury remodeling work incorporates the finest stone, hardwood, millwork, and custom cabinetry, installed by craftspeople who get every mitered corner, grout joint, and paint line exactly right. The result is a home that reflects the investment made — in every detail, in every room.",
    heroImage: "https://picsum.photos/1400/700?random=114",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-12",
    slug: "structural-remodeling",
    title: "Structural Remodeling",
    description:
      "Structural remodeling requires engineering knowledge, careful planning, and the experience to execute safely without compromising your home's integrity. Hycore's structural work includes load-bearing wall removal, steel and engineered lumber beam installation, floor plan reconfiguration, and foundation modifications — all performed from engineered drawings, within permitted scopes, by crews who understand what's at stake. The result is the open, reimagined floor plan you want, built safely and to code.",
    heroImage: "https://picsum.photos/1400/700?random=115",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-13",
    slug: "attic-conversions",
    title: "Attic Conversions",
    description:
      "Most attics are wasted space — converting one is one of the most cost-effective ways to add livable square footage without expanding your home's footprint. Hycore manages the entire process: structural assessment, insulation and ventilation upgrades, dormer additions where needed, stair access, electrical and HVAC integration, and interior finish — all permitted and delivered as a fully functional room. Whether you need a bedroom, home office, or bonus space, we build it to feel like it was always meant to be there.",
    heroImage: "https://picsum.photos/1400/700?random=116",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-14",
    slug: "aging-in-place-remodeling",
    title: "Aging in Place Remodeling",
    description:
      "Aging-in-place remodeling is about designing your home to support the life you want to live at every stage — with safety, comfort, and independence built in, not bolted on. Hycore's modifications include no-threshold shower entries, grab bars integrated into the design, widened doorways, non-slip flooring, improved lighting, and layout changes that reduce fall risk without sacrificing the aesthetic quality of your home. These are upgrades that serve you now and protect you for the long term.",
    heroImage: "https://picsum.photos/1400/700?random=117",
    categorySlug: "home-renovation-remodeling",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "hr-15",
    slug: "garage-conversions",
    title: "Garage Conversions",
    description:
      "An underutilized garage is one of the highest-potential spaces in your home — and Hycore transforms them into fully livable, permitted spaces: guest suites with private bathrooms, home gyms, creative studios, or ADUs that generate rental income. The conversion includes insulation, drywall, electrical, HVAC, plumbing where needed, and finished flooring and trim — everything required to make the space feel like a real room, not a converted garage.",
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
      "A room addition is one of the most impactful investments you can make — adding permanent square footage that improves daily living, accommodates a growing family, and increases resale value. Hycore engineers additions to integrate seamlessly with your existing structure and style: matched rooflines, tied-in mechanical and electrical systems, and interior finishes that make the new space feel like it was always part of the original design. We manage permits, foundation work, framing, and finishes — delivering a finished room, not just four walls.",
    heroImage: "https://picsum.photos/1400/700?random=119",
    categorySlug: "home-additions",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "ha-2",
    slug: "remodel-additions-renovations",
    title: "Remodel Additions & Renovations",
    description:
      "The most transformative home projects combine new construction with strategic renovation — adding square footage where you need it while upgrading the spaces you already have, all under one project and one accountable team. Hycore manages the full complexity: sequencing trades, minimizing disruption to daily life, and ensuring that new and renovated spaces come together as a cohesive, fully updated home. You get the scope of a major transformation with the clarity of a single-team project.",
    heroImage: "https://picsum.photos/1400/700?random=120",
    categorySlug: "home-additions",
    whatIsIncluded: baseIncluded,
  },
  {
    id: "ha-3",
    slug: "second-story-additions",
    title: "Second-Story Additions",
    description:
      "A second-story addition effectively doubles your home's square footage without consuming a single foot of your yard — one of the most efficient ways to grow your home's capacity and long-term value. Hycore manages the full scope: structural engineering, temporary weatherproofing during construction, foundation reinforcement where required, framing, roofing, MEP systems, and interior finish — coordinated to minimize disruption and deliver a second floor that looks and feels like it was always there.",
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
      "A tailored design-to-build experience that keeps your vision at the center of every decision — eliminating the gap between what you imagined and what gets built by having our architects and construction teams work together from day one. No handoffs, no lost details, no surprises.",
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
      "From raw land to a finished home, our new construction services encompass every phase of the build — permits, site prep, structural systems, trade coordination, and final finish — managed by experienced teams with transparent communication and a quality standard that does not compromise.",
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
      "Whether you're refreshing a single room or transforming your entire home, our renovation teams deliver results that are beautiful, functional, and built to last — managed with the same discipline and accountability as a ground-up build, regardless of scope.",
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
      "Expand your home's footprint without disrupting what you already love about it. Our addition specialists engineer new space to integrate seamlessly with your existing structure, style, and systems — matched rooflines, tied-in mechanicals, and finishes that make the addition feel like it was always part of the plan.",
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
      "Rapid, expert response to storm, wind, and water damage — stabilizing your property fast, coordinating directly with your insurer, and restoring your home's safety, structural integrity, and appearance to pre-storm condition or better.",
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
      "Professional land grading and excavation that prepares your site correctly from the start — establishing the elevations, drainage patterns, and soil compaction that every structure built on it depends on. Done right once, never revisited.",
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
      "The Future Edge Office was conceived as a multifunctional civic pavilion — a structure capable of hosting exhibitions, community gatherings, seasonal markets, and private events without feeling purpose-built for any single one of them. The architectural language centers on layered volumes and carefully positioned apertures that filter natural daylight into the interior, creating an atmosphere that is simultaneously energizing and calm depending on how the space is configured.\n\nStructurally, the building was designed for flexibility: open floor plates with demountable partitioning, integrated acoustic treatment, and a services grid that accommodates a wide range of programming without visible modification. The result is a structure with a strong, singular identity that adapts invisibly to whatever is asked of it.\n\nDelivered on schedule for Ridgeway Council within the $150,000 project budget, Future Edge Office is now one of the most actively programmed public venues in the Bradford civic landscape — a benchmark for what disciplined construction management produces when brief, design, and delivery are fully aligned.",
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
      "The Riverside Staircase is a bespoke interior architectural feature commissioned for a high-end commercial property in Bradford — designed to function as both primary circulation and the building's centrepiece. The brief called for a structure that commanded attention without overwhelming the surrounding interior, and the solution — exposed in-situ concrete balustrades paired with cantilevered treads and frameless tempered glass panels — achieves exactly that.\n\nEvery dimension was engineered for structural precision first, then refined for visual elegance. Rise, going, and landing proportions were calculated to BSEN standards and independently verified before construction commenced. The result is a staircase that reads as light and effortless despite the engineering complexity required to make it so.\n\nCompleted for Meridian Properties within the $85,000 allocated budget, the Riverside Staircase has become one of the defining features of the building's interior — referenced repeatedly in the property's tenant communications and marketing materials as a demonstration of what intentional construction looks like.",
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
      "The Northgate Residential project is a full custom home delivered for the Harlow Family Trust in Manchester — a four-bedroom, three-bathroom property designed around the specific way a busy family actually lives, not around a standard builder's template.\n\nThe brief prioritized open-plan social spaces that transition naturally to private zones, a kitchen specified for serious cooking with island seating and professional-grade appliances, and a landscaped rear garden that maximizes a compact urban plot. Every material selection — from the engineered timber flooring to the hand-set stone splashback and custom joinery throughout — was approved collaboratively with the client before a single item was procured.\n\nManaging the project within a tight urban footprint required careful site logistics, phased deliveries, and close coordination with the local authority on access and working hours. Completed for the Harlow Family Trust within the $240,000 project budget, Northgate Residential demonstrates what premium custom construction looks like when it is built around the people who will actually live in it.",
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
      "The Central Warehouse Conversion is a large-scale adaptive reuse project that transformed a redundant Victorian brick warehouse in Leeds into a mixed-use commercial and co-working destination for Nova Group. The building presented the full range of challenges associated with industrial heritage stock: load-bearing brick walls with limited lateral stability, outdated electrical infrastructure, no existing mechanical ventilation, and occupancy loads far in excess of the original design.\n\nThe structural intervention involved a new internal steel frame — engineered to work with the existing masonry, not against it — providing the lateral stiffness and floor load capacity required by the new occupancy without compromising the character of the original building envelope. All existing mechanical and electrical systems were stripped and replaced with modern HVAC, fire suppression, building management systems, and high-capacity electrical distribution.\n\nDelivered on schedule for Nova Group at a $320,000 project value, the Central Warehouse Conversion now operates at full commercial occupancy — a benchmark for Hycore's capability in complex adaptive reuse, and proof that heritage buildings can be transformed into high-performance modern spaces without losing the character that made them worth saving.",
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
      "Skipping permits seems like a shortcut until a lender flags the work, an inspector orders it demolished, or an insurance claim gets denied. Here is what unpermitted construction actually costs — and how Hycore handles it on every project.",
    content: `
## Why Building Codes Exist — And Why Skipping Them Is Expensive

Building codes are not bureaucratic red tape. They are a codified record of every structural failure, electrical fire, and construction-related injury that came before. Each requirement exists because someone, somewhere, experienced the consequence of its absence.

For homeowners and developers alike, neglecting permits and code compliance is one of the most expensive mistakes a construction project can make — not just financially, but in terms of safety, insurability, and resale value. We see the fallout regularly. A homeowner sells a property, the buyer's lender orders an inspection, and unpermitted work surfaces. The transaction collapses, or the seller is forced to demolish and redo the work at full cost before closing.

## What Actually Happens When You Skip a Permit

Unpermitted work creates a chain of problems that rarely surface until the worst possible moment.

**Lenders and insurers investigate.** Mortgage lenders and home insurance carriers increasingly require documentation of permitted work. Unpermitted construction discovered during a home sale can kill the transaction — or require you to open walls and prove compliance before it can proceed.

**You carry the legal liability.** If a structure built without permits fails and causes injury or property damage, the homeowner — not the contractor — carries the legal exposure. This includes structural failures, electrical fires, and plumbing failures that occur years after the work was done.

**Remediation costs more than doing it right.** Municipalities that discover unpermitted work may require the owner to expose framing, demonstrate code compliance after the fact, and pay reinspection fees on top of the original cost. In many cases, the correction costs more than a properly permitted project would have.

## The Permits Most Commonly Skipped — and Most Commonly Flagged

Based on what we encounter on job sites and during property transfers, the most frequently skipped permits include:

- Electrical panel upgrades and new circuit installations
- HVAC system replacements and ductwork modifications
- Structural changes including load-bearing wall removal
- Deck, patio, pergola, and outdoor structure construction
- Garage conversions and ADU buildouts
- Any addition to the home's livable square footage

Each of these affects the structural integrity or life-safety systems of the property. The permit process exists specifically to verify that the work was done correctly by qualified tradespeople and inspected by an authority having jurisdiction.

## How Hycore Handles Permitting

At Hycore Construction, every project that requires a permit gets one — without exception. Our project managers maintain established relationships with local permitting offices and understand the documentation, inspection sequences, and approval timelines involved in each jurisdiction we work in.

We handle the entire permitting process on your behalf, from initial application through final sign-off, and provide you with a complete documentation package at project close. When your project is finished, you have a paper trail that protects your investment, satisfies lenders and insurers, and gives future buyers confidence in the work.

Building right means building legal. There are no shortcuts worth taking — and the ones that seem cost-effective today consistently prove otherwise.
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
      "BIM, drone surveying, and AI-driven scheduling are no longer innovations — they are the baseline for how competitive construction firms operate. Here is what the technology shift actually changes on the job site.",
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
      "Scope creep, supply chain delays, labor shortages, and miscommunication — construction project management fails the same ways every time. Here is how experienced teams prevent the problems that derail most builds.",
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
      "Material selection depends on your project type, local climate, budget, and aesthetic priorities. During our planning phase, we provide expert guidance on materials that balance durability, cost-effectiveness, and long-term performance for your specific build.",
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
