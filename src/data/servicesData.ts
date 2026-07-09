// Comprehensive service data for detailed pages
export interface ServicePackage {
  name: string;
  price: string;
  duration: string;
  features: string[];
  warranty: string;
  recommended?: boolean;
}

export interface ServiceSpec {
  label: string;
  value: string;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface BeforeAfterImage {
  before: string;
  after: string;
  caption: string;
}

export interface ServiceDetail {
  id: string;
  title: string;
  subtitle: string;
  mainIcon: string;
  shortDescription: string;
  fullDescription: string;
  whatIsIt: string;
  whyChoose: string[];
  benefits: {
    icon: string;
    title: string;
    description: string;
  }[];
  specs: ServiceSpec[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  packages: ServicePackage[];
  faqs: ServiceFAQ[];
  relatedServices: string[];
  beforeAfterImages: BeforeAfterImage[];
}

export const servicesData: Record<string, ServiceDetail> = {
  "paint-protection-film": {
    id: "paint-protection-film",
    title: "PPF (Paint Protection Film)",
    subtitle: "The Ultimate Invisible Shield for Your Vehicle",
    mainIcon: "Shield",
    shortDescription: "Self-healing urethane film that protects your paint from stone chips, scratches, and environmental damage.",
    fullDescription: "Paint Protection Film (PPF) is a transparent, ultra-durable urethane film applied to your vehicle's painted surfaces. This advanced protective layer acts as an invisible shield against road debris, stone chips, bug splatter, bird droppings, and minor abrasions. Our PPF features self-healing technology that automatically repairs minor scratches when exposed to heat, ensuring your vehicle maintains a flawless finish for years.",
    whatIsIt: "PPF is a thermoplastic urethane film originally developed for military helicopter blades. Today, it's the gold standard in automotive paint protection. The film is precisely cut using computer-designed patterns and applied to high-impact areas or entire vehicle surfaces. Its transparent nature ensures your paint color and gloss remain unchanged while providing superior protection.",
    whyChoose: [
      "Self-healing technology eliminates swirl marks and light scratches automatically",
      "10-year manufacturer warranty on premium films",
      "Computer-precision cutting ensures perfect fit for every panel",
      "Prevents costly paint repairs and maintains resale value",
      "Hydrophobic top layer repels water, dirt, and contaminants"
    ],
    benefits: [
      { icon: "Shield", title: "Impact Protection", description: "Absorbs impacts from stones, gravel, and road debris preventing paint chips" },
      { icon: "Zap", title: "Self-Healing", description: "Heat-activated healing technology repairs minor scratches automatically" },
      { icon: "Sun", title: "UV Protection", description: "Prevents paint fading and oxidation from harmful sun exposure" },
      { icon: "Droplets", title: "Hydrophobic", description: "Water and contaminants bead up and roll off easily" },
      { icon: "Sparkles", title: "Crystal Clear", description: "Invisible protection that doesn't alter your paint's appearance" },
      { icon: "Award", title: "Warranty Backed", description: "10-year warranty against yellowing, cracking, and peeling" }
    ],
    specs: [
      { label: "Material", value: "Thermoplastic Polyurethane (TPU)" },
      { label: "Thickness", value: "200-300 microns (8-12 mil)" },
      { label: "Warranty", value: "Up to 10 Years" },
      { label: "Self-Healing", value: "Heat Activated (Sun/Heat Gun)" },
      { label: "UV Resistance", value: "99% UV Block" },
      { label: "Adhesive", value: "Pressure-Sensitive Acrylic" },
      { label: "Finish Options", value: "Gloss, Matte, or Color" },
      { label: "Installation Time", value: "2-5 Days (Full Car)" }
    ],
    process: [
      { step: 1, title: "Paint Assessment", description: "Thorough inspection of paint condition to identify any pre-existing damage that needs correction" },
      { step: 2, title: "Paint Correction", description: "Multi-stage paint correction to ensure perfect surface before film application" },
      { step: 3, title: "Surface Preparation", description: "Deep cleaning with alcohol solution to remove any oils, waxes, or contaminants" },
      { step: 4, title: "Precision Cutting", description: "Computer-designed patterns cut specifically for your vehicle's make and model" },
      { step: 5, title: "Application", description: "Careful positioning and squeegee application to eliminate bubbles and ensure adhesion" },
      { step: 6, title: "Edge Sealing", description: "All edges are properly sealed to prevent lifting and ensure long-term durability" },
      { step: 7, title: "Curing & Inspection", description: "24-hour curing period followed by comprehensive quality inspection" }
    ],
    packages: [
      {
        name: "Full Vehicle (Hatchback)",
        price: "₹49,999",
        duration: "3-4 Days",
        features: ["All painted panels", "Full hood & bumpers", "All fenders", "Doors & pillars", "Roof option available"],
        warranty: "10 Years",
        recommended: true
      },
      {
        name: "Full Vehicle (Sedan)",
        price: "₹59,999",
        duration: "3-4 Days",
        features: ["All painted panels", "Full hood & bumpers", "All fenders", "Doors & pillars", "Roof option available"],
        warranty: "10 Years"
      },
      {
        name: "Full Vehicle (SUV/Luxury)",
        price: "₹69,999",
        duration: "4-5 Days",
        features: ["All painted panels", "Full hood & bumpers", "All fenders", "Doors & pillars", "Roof option available"],
        warranty: "10 Years"
      }
    ],
    faqs: [
      { question: "Will PPF change the appearance of my car?", answer: "No, high-quality PPF is completely transparent and doesn't alter your paint's color or gloss. Matte PPF options are available if you want to change the finish." },
      { question: "How long does PPF last?", answer: "With proper care, premium PPF lasts 5-10 years depending on the grade and warranty. It doesn't yellow, crack, or peel when professionally installed." },
      { question: "Can PPF be removed?", answer: "Yes, PPF can be safely removed without damaging the paint underneath. In fact, the paint beneath often looks brand new because it was protected." },
      { question: "Does PPF require special maintenance?", answer: "No special maintenance needed. Simply wash normally and avoid abrasive polishes. The film is resistant to most chemicals and environmental contaminants." },
      { question: "Will the self-healing work in all weather?", answer: "Self-healing activates at around 30-40°C. Direct sunlight, hot water, or a heat gun can trigger the healing process for any minor scratches." }
    ],
    relatedServices: ["ceramic-coating", "graphene-coating", "rubbing-polishing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "ceramic-coating": {
    id: "ceramic-coating",
    title: "Ceramic Coating",
    subtitle: "Nano-Technology Protection with Showroom Shine",
    mainIcon: "Droplets",
    shortDescription: "Professional SiO2-based nano-coating providing unmatched gloss, hydrophobicity, and 5+ year protection.",
    fullDescription: "Our Crystal Shield Ceramic Coating is a professional-grade nano-ceramic treatment that chemically bonds with your vehicle's paint, creating a permanent hydrophobic layer. Formulated with 80%+ high-grade Silicon Dioxide (SiO2), this coating delivers exceptional gloss, extreme water beading, and superior protection against UV rays, oxidation, chemical stains, and environmental contaminants for 5+ years.",
    whatIsIt: "Ceramic coating is a liquid polymer that contains nano-ceramic particles suspended in a clear resin. When applied to paint, these particles bond at the molecular level to create a glass-like protective layer. Unlike waxes or sealants that sit on top, ceramic coatings become one with your paint, offering years of protection rather than months.",
    whyChoose: [
      "Contains 80%+ SiO2 for maximum hardness and durability",
      "Developed specifically for harsh Indian climate conditions",
      "SGS certified for 9H pencil hardness",
      "Reduces maintenance time by 70% with hydrophobic properties",
      "Prevents 60% of hairline scratches from washing"
    ],
    benefits: [
      { icon: "Droplets", title: "9H Hardness", description: "Extreme scratch resistance from the highest ceramic hardness rating" },
      { icon: "Droplets", title: "Hydrophobic", description: "Water beads and rolls off, taking dirt with it - easier cleaning" },
      { icon: "Sun", title: "UV Protection", description: "Prevents oxidation and fading from harsh sun exposure" },
      { icon: "Sparkles", title: "Mirror Finish", description: "Deeper gloss and reflection than new-car finish" },
      { icon: "Shield", title: "Chemical Resistant", description: "Protects against bird droppings, tree sap, and acid rain" },
      { icon: "Clock", title: "Long Lasting", description: "5+ years of protection vs. 3 months for wax" }
    ],
    specs: [
      { label: "SiO2 Content", value: "80%+ High-Grade" },
      { label: "Hardness Rating", value: "9H Pencil Hardness" },
      { label: "Contact Angle", value: "110°+ (Hydrophobic)" },
      { label: "Durability", value: "5+ Years" },
      { label: "Chemical Resistance", value: "pH 2-13 Resistant" },
      { label: "UV Resistance", value: "100% UV Block" },
      { label: "Temperature Stable", value: "-40°C to +400°C" },
      { label: "Certification", value: "SGS Tested" }
    ],
    process: [
      { step: 1, title: "Deep Cleanse", description: "Multi-stage wash and chemical decontamination to remove all surface contaminants" },
      { step: 2, title: "Clay Treatment", description: "Clay bar treatment to remove embedded particles and create a smooth surface" },
      { step: 3, title: "Paint Correction", description: "Machine polishing to remove swirl marks and light scratches (essential step)" },
      { step: 4, title: "IPA Wipe Down", description: "Isopropyl alcohol wipe to remove polishing oils and ensure proper bonding" },
      { step: 5, title: "Coating Application", description: "Precise application of ceramic coating in controlled temperature/humidity" },
      { step: 6, title: "Leveling", description: "Careful leveling to ensure even coverage and remove high spots" },
      { step: 7, title: "Curing", description: "24-48 hour curing period for full chemical bonding and hardness development" }
    ],
    packages: [
      {
        name: "Lite 9H",
        price: "₹14,999",
        duration: "4-6 Hours",
        features: ["Entry-level protection", "1-layer application", "2-year durability", "Basic gloss enhancement"],
        warranty: "2 Years"
      },
      {
        name: "Trinity 9H",
        price: "₹19,999",
        duration: "6-8 Hours",
        features: ["3-layer system", "Paint correction included", "5-year durability", "Superior hydrophobicity"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Pentagon 10H",
        price: "₹24,999",
        duration: "8-10 Hours",
        features: ["5-layer system", "Advanced paint correction", "7-year durability", "Maximum hardness"],
        warranty: "7 Years"
      }
    ],
    faqs: [
      { question: "Is ceramic coating better than wax?", answer: "Yes, ceramic coating provides 5+ years of protection vs. 2-3 months for wax. It bonds permanently to paint and offers superior protection against chemicals, UV, and scratches." },
      { question: "Will ceramic coating prevent scratches?", answer: "Ceramic coating reduces 60% of hairline scratches from washing. However, it won't prevent deep scratches from keys or impacts. For maximum scratch protection, combine with PPF." },
      { question: "Can I wash my car normally after coating?", answer: "Yes, but wait 7 days after application. Then simply wash with pH-neutral shampoo. The hydrophobic properties make washing much easier - dirt slides right off." },
      { question: "Does ceramic coating need maintenance?", answer: "Minimal maintenance needed. Annual inspection and optional top-up spray every 6-12 months keeps the coating performing at its best." },
      { question: "Can ceramic coating be applied over PPF?", answer: "Yes, and it's highly recommended. Ceramic coating on PPF provides the ultimate combination of impact protection and hydrophobic, easy-clean properties." }
    ],
    relatedServices: ["paint-protection-film", "graphene-coating", "paint-correction"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "graphene-coating": {
    id: "graphene-coating",
    title: "Graphene Coating",
    subtitle: "Nobel Prize-Winning Material Meets Automotive Protection",
    mainIcon: "Layers",
    shortDescription: "Next-generation graphene-infused coating with superior heat dissipation, reduced water spotting, and 7+ year durability.",
    fullDescription: "G10 Impact represents the cutting edge of automotive protection technology. Utilizing graphene, a Nobel Prize-winning wonder material 200x stronger than steel, this coating delivers unmatched slickness, superior heat dissipation, and dramatically reduced water spotting compared to traditional ceramic coatings. The graphene structure creates an impenetrable barrier with 7+ years of protection.",
    whatIsIt: "Graphene is a single layer of carbon atoms arranged in a hexagonal lattice - the thinnest, strongest material known to science. When infused into our coating formula, graphene's unique properties create a denser, more durable protective layer that outperforms traditional SiO2 coatings in every aspect." ,
    whyChoose: [
      "Graphene's thermal conductivity reduces heat-induced water spotting by 80%",
      "200x stronger than steel yet incredibly flexible",
      "Anti-static properties repel dust and airborne contaminants",
      "Gloss enhancement exceeds all other coating technologies",
      "Extended durability - 7+ years of protection"
    ],
    benefits: [
      { icon: "Layers", title: "Heat Dissipation", description: "Superior thermal conductivity prevents water spot etching" },
      { icon: "Droplets", title: "Less Water Spotting", description: "80% reduction in water spotting compared to ceramic" },
      { icon: "Sparkles", title: "Extreme Slickness", description: "Lowest surface friction - nothing sticks to graphene" },
      { icon: "Wind", title: "Anti-Static", description: "Repels dust, pollen, and airborne particles" },
      { icon: "Gem", title: "Deeper Gloss", description: "Richer, wetter-looking shine than any other coating" },
      { icon: "Shield", title: "Maximum Durability", description: "7+ years of protection with minimal degradation" }
    ],
    specs: [
      { label: "Active Material", value: "Graphene Oxide + SiO2" },
      { label: "Thermal Conductivity", value: "5000+ W/mK" },
      { label: "Water Spotting Reduction", value: "80% vs Ceramic" },
      { label: "Hardness Rating", value: "10H Pencil Hardness" },
      { label: "Durability", value: "7+ Years" },
      { label: "Contact Angle", value: "120°+ (Ultra-Hydrophobic)" },
      { label: "Layer Thickness", value: "2-3 microns" },
      { label: "Cure Time", value: "12-24 Hours" }
    ],
    process: [
      { step: 1, title: "Surface Analysis", description: "Advanced paint inspection to assess condition and plan correction strategy" },
      { step: 2, title: "Intensive Correction", description: "Multi-stage machine polishing to achieve paint perfection" },
      { step: 3, title: "Graphene Prep", description: "Specialized surface preparation for optimal graphene bonding" },
      { step: 4, title: "Base Layer", description: "Application of graphene-infused base coat for foundation" },
      { step: 5, title: "Top Coat", description: "Final graphene layer for maximum gloss and protection" },
      { step: 6, title: "Infrared Curing", description: "IR lamp curing to accelerate bonding and hardness development" },
      { step: 7, title: "Quality Verification", description: "Hydrophobic testing and gloss meter readings for quality" }
    ],
    packages: [
      {
        name: "G10 Standard",
        price: "₹19,999",
        duration: "8 Hours",
        features: ["2-layer graphene system", "Paint correction", "5-year durability"],
        warranty: "5 Years"
      },
      {
        name: "G10 Pro",
        price: "₹24,999",
        duration: "10 Hours",
        features: ["3-layer graphene system", "Advanced correction", "7-year durability", "Maintenance kit included"],
        warranty: "7 Years",
        recommended: true
      },
      {
        name: "G10 Ultimate",
        price: "₹34,999",
        duration: "2 Days",
        features: ["5-layer system with base/primer", "Concours-level correction", "10-year durability", "Annual maintenance included"],
        warranty: "10 Years"
      }
    ],
    faqs: [
      { question: "How is graphene different from ceramic coating?", answer: "Graphene has superior thermal conductivity (prevents water spots), anti-static properties (less dust), and is stronger yet more flexible. It provides better all-around performance with longer durability." },
      { question: "Does graphene coating look different from ceramic?", answer: "Yes, graphene typically provides a deeper, wetter-looking gloss that many describe as 'liquid glass.' The surface is also noticeably slicker to the touch." },
      { question: "Can I apply graphene over ceramic coating?", answer: "It's not recommended. For best results, apply graphene to properly corrected paint. If you have ceramic, it should be removed or you can wait for it to degrade before applying graphene." },
      { question: "Is graphene coating worth the extra cost?", answer: "For vehicles exposed to harsh sun or parked outdoors, absolutely. The heat dissipation and water spot resistance make maintenance significantly easier. The extended durability also provides better long-term value." }
    ],
    relatedServices: ["ceramic-coating", "paint-protection-film", "rubbing-polishing"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "premium-detailing": {
    id: "premium-detailing",
    title: "Premium Detailing (Exterior & Interior)",
    subtitle: "State-of-the-Art Detailing Facility",
    mainIcon: "Gem",
    shortDescription: "Our state-of-the-art detailing studio combines advanced equipment, premium products, and master craftsmanship to deliver transformational results.",
    fullDescription: "Experience automotive care at its finest in our Premium Auto Detailing Studio. Our climate-controlled facility houses the latest in detailing technology, from IR curing lamps for ceramic coatings to commercial-grade steam cleaners for interior restoration. Our master-certified technicians treat every vehicle as a masterpiece, delivering concours-level results that exceed expectations.",
    whatIsIt: "Our Premium Auto Detailing Studio is more than just a service - it's a complete facility designed for perfection. The climate-controlled environment ensures optimal conditions for coating applications. Professional-grade equipment including paint thickness gauges, dual-action polishers, and hot water extractors enable our technicians to achieve results impossible in standard conditions. This is where excellence meets execution.",
    whyChoose: [
      "Climate-controlled environment for perfect coating application",
      "IR curing lamps accelerate ceramic coating bonding",
      "Commercial-grade steam cleaners for deep sanitization",
      "Paint thickness measurement for safe correction planning",
      "Master-certified technicians with years of experience"
    ],
    benefits: [
      { icon: "Gem", title: "Premium Facility", description: "Climate-controlled studio designed for excellence" },
      { icon: "Award", title: "Master Technicians", description: "Certified experts with years of experience" },
      { icon: "Shield", title: "Advanced Equipment", description: "Latest technology for superior results" },
      { icon: "Sparkles", title: "Concours Results", description: "Showroom+ finish on every vehicle" },
      { icon: "Zap", title: "IR Curing", description: "Infrared lamps for perfect coating cure" },
      { icon: "Droplets", title: "Steam Cleaning", description: "Commercial-grade sanitization equipment" }
    ],
    specs: [
      { label: "Facility Type", value: "Climate-Controlled" },
      { label: "Temperature Control", value: "18-22°C Year Round" },
      { label: "Dust Control", value: "HEPA Filtration" },
      { label: "Equipment", value: "Professional-Grade" },
      { label: "Technicians", value: "Master Certified" },
      { label: "Services Offered", value: "Complete Range" },
      { label: "Quality Standard", value: "Concours Level" },
      { label: "Booking", value: "By Appointment" }
    ],
    process: [
      { step: 1, title: "Vehicle Inspection", description: "Comprehensive assessment to create customized detailing plan" },
      { step: 2, title: "Environment Prep", description: "Climate control and workspace preparation for optimal conditions" },
      { step: 3, title: "Advanced Cleaning", description: "Commercial-grade equipment for deep cleaning and decontamination" },
      { step: 4, title: "Precision Correction", description: "Machine polishing with paint thickness monitoring" },
      { step: 5, title: "Protection Application", description: "Ceramic, graphene, or PPF application in controlled environment" },
      { step: 6, title: "IR Curing", description: "Infrared curing for accelerated and complete coating bonding" },
      { step: 7, title: "Quality Control", description: "Multi-point inspection under various lighting conditions" }
    ],
    packages: [
      {
        name: "Premium Detailing",
        price: "₹1,999",
        duration: "4-6 Hours",
        features: ["Complete interior detail", "Full exterior correction", "Basic protection", "Engine bay detail"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Studio Access",
        price: "Custom Quote",
        duration: "Per Service",
        features: ["Any detailing service", "Climate-controlled environment", "Professional equipment", "Master technician"],
        warranty: "Per Service Terms"
      },
      {
        name: "Ultimate Protection",
        price: "₹49,999",
        duration: "3-4 Days",
        features: ["Everything in Premium", "PPF on high-impact areas", "3-year graphene coating", "Annual maintenance included"],
        warranty: "3 Year Protection"
      }
    ],
    faqs: [
      { question: "Why is a detailing studio better than mobile service?", answer: "A controlled studio environment ensures optimal temperature and dust-free conditions for coating applications. Professional equipment like IR lamps and commercial extractors deliver superior results impossible in field conditions." },
      { question: "Do I need to book in advance?", answer: "Yes, studio time is by appointment only to ensure proper preparation and dedicated attention to your vehicle. Bookings can be made via phone or WhatsApp." },
      { question: "Can I wait while my car is serviced?", answer: "We have a comfortable waiting area with WiFi. However, for full detailing services, we recommend dropping off your vehicle as the process takes several hours to multiple days depending on the service." },
      { question: "What makes your studio 'premium'?", answer: "Our studio features climate control, HEPA air filtration, IR curing lamps, and commercial-grade equipment. Combined with master-certified technicians, we deliver results that exceed standard detailing services." }
    ],
    relatedServices: ["ceramic-coating", "graphene-coating"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "interior-detailing": {
    id: "interior-detailing",
    title: "Car Interior Deep Cleaning",
    subtitle: "Deep Clean & Restoration for Your Vehicle's Cabin",
    mainIcon: "Car",
    shortDescription: "Complete interior rejuvenation using steam cleaning, extraction shampooing, and leather conditioning for a like-new cabin.",
    fullDescription: "Our Intensive Interior Detailing service is a comprehensive deep-cleaning and restoration process that transforms your vehicle's cabin to better-than-new condition. Using commercial-grade steam cleaners, hot water extraction machines, and premium leather treatments, we eliminate odors, stains, allergens, and bacteria while rejuvenating every surface. From headliner to floor mats, no area is overlooked.",
    whatIsIt: "Interior detailing goes far beyond a basic vacuum and wipe-down. It's a systematic restoration of all cabin surfaces including seats, carpets, headliner, dashboard, door panels, and trim. We use specialized equipment like steam cleaners that sanitize without chemicals, extraction machines that pull dirt from deep within fabrics, and professional-grade conditioners that restore leather and plastics.",
    whyChoose: [
      "Steam cleaning kills 99.9% of bacteria without harsh chemicals",
      "Hot water extraction removes years of embedded dirt from fabrics",
      "Ozone treatment permanently eliminates odors, not masks them",
      "Leather conditioning prevents cracking and extends life",
      "All products are pH-neutral and safe for all interior materials"
    ],
    benefits: [
      { icon: "Car", title: "Odor Elimination", description: "Ozone treatment destroys odor molecules at the source" },
      { icon: "Shield", title: "Sanitized Surfaces", description: "Steam cleaning kills bacteria, viruses, and allergens" },
      { icon: "Sparkles", title: "Restored Appearance", description: "Leather and plastics look and feel like new" },
      { icon: "Heart", title: "Healthier Air", description: "Removes allergens and improves cabin air quality" },
      { icon: "Wallet", title: "Value Retention", description: "Well-maintained interior retains higher resale value" }
    ],
    specs: [
      { label: "Steam Temperature", value: "150-180°C" },
      { label: "Extraction Pressure", value: "100 PSI Hot Water" },
      { label: "Ozone Treatment", value: "30-60 Minutes" },
      { label: "Products Used", value: "pH-Neutral, VOC-Free" },
      { label: "Coverage", value: "All Interior Surfaces" },
      { label: "Duration", value: "4-8 Hours" },
      { label: "Drying Time", value: "2-4 Hours" },
      { label: "Vehicles per Day", value: "2-3 (For Quality)" }
    ],
    process: [
      { step: 1, title: "Pre-Inspection", description: "Document existing conditions and identify problem areas requiring special attention" },
      { step: 2, title: "Deep Vacuum", description: "Thorough vacuuming including under seats, crevices, and trunk" },
      { step: 3, title: "Steam Cleaning", description: "High-temp steam sanitization of all hard surfaces, vents, and tight spaces" },
      { step: 4, title: "Extraction Shampoo", description: "Hot water extraction for carpets, floor mats, and fabric seats" },
      { step: 5, title: "Leather Treatment", description: "Cleaning, conditioning, and protection of all leather surfaces" },
      { step: 6, title: "Trim & Dashboard", description: "Cleaning and UV protection for all plastic and vinyl surfaces" },
      { step: 7, title: "Glass & Mirrors", description: "Streak-free cleaning of all interior glass and mirrors" },
      { step: 8, title: "Ozone Treatment", description: "Final ozone generator treatment to eliminate any remaining odors" }
    ],
    packages: [
      {
        name: "Essential Interior",
        price: "₹1,999",
        duration: "3-4 Hours",
        features: ["Deep vacuum", "Dashboard & trim clean", "Glass cleaning", "Ozone treatment"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Premium Interior",
        price: "₹2,999",
        duration: "5-6 Hours",
        features: ["Everything in Essential", "Steam sanitization", "Carpet extraction cleaning", "Leather conditioning"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Luxury Interior",
        price: "₹4,999",
        duration: "7-8 Hours",
        features: ["Everything in Premium", "Headliner cleaning", "Seat removal for thorough cleaning", "Leather protection coating", "Engine bay cleaning"],
        warranty: "Satisfaction Guaranteed"
      }
    ],
    faqs: [
      { question: "How long until I can use my car after interior detailing?", answer: "Drying time is 2-4 hours depending on weather. We recommend keeping windows down for 30 minutes after to allow any remaining moisture to escape." },
      { question: "Will interior detailing remove all stains?", answer: "We can remove most fresh and many old stains, but some set-in stains (especially those that have been heat-set or chemically altered) may be permanent. We'll always do our best and set realistic expectations." },
      { question: "Is ozone treatment safe?", answer: "Yes, ozone treatment is completely safe. We run the generator while the car is unoccupied, then allow 30 minutes of ventilation before return. It leaves no residue." },
      { question: "How often should I get interior detailing?", answer: "For daily drivers, every 6 months maintains a like-new condition. For weekend cars, annually is sufficient. More frequent cleaning prevents permanent staining." }
    ],
    relatedServices: ["rubbing-polishing", "headlight-restoration"],
    beforeAfterImages: [] // Images removed - add back when available
  },


  "headlight-restoration": {
    id: "headlight-restoration",
    title: "Headlight Restoration",
    subtitle: "Crystal Clear Visibility & Like-New Appearance",
    mainIcon: "Sun",
    shortDescription: "Professional restoration of oxidized, yellowed headlights using wet-sanding, polishing, and UV-resistant sealing.",
    fullDescription: "Our Headlight Restoration service transforms foggy, yellowed, or oxidized headlights back to crystal-clear condition. Using professional wet-sanding techniques, machine polishing, and UV-resistant sealing, we remove years of sun damage and restore nighttime visibility. This service improves safety and appearance while avoiding the high cost of headlight replacement.",
    whatIsIt: "Headlight lenses are made of polycarbonate plastic with a UV-protective clear coat. Over time, sun exposure breaks down this coating causing oxidation, yellowing, and hazing. Our restoration process removes the damaged layer and applies a new UV-resistant sealant, restoring clarity and protecting against future damage.",
    whyChoose: [
      "Restores up to 90% of original light output for safer night driving",
      "Saves thousands vs. headlight replacement cost",
      "UV-resistant coating prevents future yellowing",
      "Improves vehicle appearance dramatically",
      "Takes only 1-2 hours vs. days for new headlight installation"
    ],
    benefits: [
      { icon: "Sun", title: "UV Protection", description: "New sealant blocks harmful UV rays" },
      { icon: "Eye", title: "Better Visibility", description: "Restores light output for safer driving" },
      { icon: "Sparkles", title: "Like-New Look", description: "Transforms appearance of aged headlights" },
      { icon: "Wallet", title: "Cost Savings", description: "Fraction of replacement cost" },
      { icon: "Shield", title: "Long Lasting", description: "UV coating protects for 2+ years" },
      { icon: "Clock", title: "Quick Service", description: "1-2 hour transformation" }
    ],
    specs: [
      { label: "Grit Sequence", value: "400-800-1500-3000" },
      { label: "Polish Type", value: "Plastic-Specific Compound" },
      { label: "UV Coating", value: "2-Part Clearcoat" },
      { label: "Light Restoration", value: "Up to 90%" },
      { label: "Protection Duration", value: "2+ Years" },
      { label: "Taillights", value: "Also Available" },
      { label: "Duration", value: "1-2 Hours" },
      { label: "Warranty", value: "1 Year on Coating" }
    ],
    process: [
      { step: 1, title: "Masking", description: "Careful masking of surrounding paint and trim to protect from sanding" },
      { step: 2, title: "Sanding", description: "Progressive wet-sanding (400-3000 grit) to remove oxidation layer" },
      { step: 3, title: "Compounding", description: "Machine polishing with plastic-specific compound to remove sanding marks" },
      { step: 4, title: "Fine Polish", description: "Final polish stage to achieve crystal clarity" },
      { step: 5, title: "Cleaning", description: "Thorough cleaning to remove all residue" },
      { step: 6, title: "UV Coating", description: "Application of 2-part UV-resistant clearcoat" },
      { step: 7, title: "Curing", description: "Proper curing time for durable protection" }
    ],
    packages: [
      {
        name: "Headlight Pair",
        price: "₹999",
        duration: "1-1.5 Hours",
        features: ["Both headlights", "Wet-sanding", "Polishing", "UV coating"],
        warranty: "1 Year"
      },
      {
        name: "Full Front",
        price: "₹1,499",
        duration: "2 Hours",
        features: ["Headlights", "Fog lights", "Both included", "Complete front lighting restoration"],
        warranty: "1 Year",
        recommended: true
      },
      {
        name: "Complete Lighting",
        price: "₹2,499",
        duration: "3 Hours",
        features: ["All front lights", "Taillights", "All exterior lenses", "Complete vehicle lighting"],
        warranty: "1 Year"
      }
    ],
    faqs: [
      { question: "How long does headlight restoration last?", answer: "With our professional UV coating, results last 2-4 years depending on sun exposure. We include a 1-year warranty on the coating." },
      { question: "Can all headlights be restored?", answer: "Most headlights can be restored. Severely cracked, internally damaged, or previously poorly-restored headlights may need replacement." },
      { question: "Is it better than DIY kits?", answer: "Absolutely. DIY kits use low-quality sealants that last only months. Our professional UV coating and proper wet-sanding technique delivers lasting results." },
      { question: "Will it damage my paint?", answer: "No, we carefully mask all surrounding areas. Our wet-sanding technique and professional products are safe for your vehicle." }
    ],
    relatedServices: ["rubbing-polishing", "ceramic-coating", "paint-protection-film"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "rubbing-polishing": {
    id: "rubbing-polishing",
    title: "Compounding and Polishing",
    subtitle: "Professional Paint Correction & Gloss Restoration",
    mainIcon: "RotateCw",
    shortDescription: "Multi-stage machine polishing and rubbing compound treatment to remove swirl marks, scratches, and restore showroom shine.",
    fullDescription: "Our Rubbing & Polishing service is a specialized paint correction treatment designed to restore your vehicle's finish to its original glory. Using professional-grade rubbing compounds and machine polishers, we remove surface imperfections including swirl marks, light scratches, oxidation, and holograms. This service reveals the true depth and clarity of your paint before applying protective sealants or wax.",
    whatIsIt: "Rubbing and polishing is a mechanical paint correction process that uses abrasive compounds and machine polishers to level the clear coat. The 'rubbing' stage uses cutting compounds to remove deeper defects, while 'polishing' uses finer compounds to restore gloss. This process removes microscopic layers of damaged clear coat to reveal fresh, unblemished paint underneath.",
    whyChoose: [
      "Removes 80-95% of swirl marks and light scratches",
      "Restores faded and oxidized paint to like-new condition",
      "Essential preparation before ceramic coating or PPF",
      "Multiple polish stages for different defect levels",
      "Paint thickness measurement ensures safe correction"
    ],
    benefits: [
      { icon: "Sparkles", title: "Mirror Finish", description: "Restores deep gloss and reflective clarity" },
      { icon: "Shield", title: "Defect Removal", description: "Eliminates swirl marks, holograms, and light scratches" },
      { icon: "Sun", title: "Oxidation Repair", description: "Restores color from sun-faded paint" },
      { icon: "Layers", title: "Smooth Surface", description: "Creates glass-like smoothness" },
      { icon: "Gem", title: "Paint Prep", description: "Perfect foundation for protective coatings" },
      { icon: "Eye", title: "Clarity", description: "Enhances metallic flake and paint depth" }
    ],
    specs: [
      { label: "Correction Levels", value: "1-3 Stage" },
      { label: "Defect Removal", value: "80-95%" },
      { label: "Pad Types", value: "Foam/Microfiber/Wool" },
      { label: "Compound Grade", value: "Cutting to Finishing" },
      { label: "Paint Check", value: "Thickness Gauge" },
      { label: "Machine Type", value: "Dual-Action/Rotary" },
      { label: "Duration", value: "3-8 Hours" },
      { label: "Finish", value: "Showroom Gloss" }
    ],
    process: [
      { step: 1, title: "Paint Assessment", description: "Detailed inspection and paint thickness measurement" },
      { step: 2, title: "Deep Clean", description: "Wash and clay bar to remove surface contaminants" },
      { step: 3, title: "Tape Protection", description: "Masking of trim, rubber, and sensitive areas" },
      { step: 4, title: "Compound Stage", description: "Machine polishing with cutting compound for defect removal" },
      { step: 5, title: "Polish Stage", description: "Finer polish to restore gloss and remove haze" },
      { step: 6, title: "Finishing", description: "Final polish for maximum gloss and clarity" },
      { step: 7, title: "Inspection", description: "LED light inspection to ensure flawless finish" }
    ],
    packages: [
      {
        name: "Single Stage Polish",
        price: "₹4,499",
        duration: "3-4 Hours",
        features: ["Light swirl removal", "Gloss enhancement", "All painted panels"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Two Stage Correction",
        price: "₹6,499",
        duration: "5-6 Hours",
        features: ["Compound + polish", "Moderate defect removal", "Paint thickness check", "All exterior panels"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Three Stage Concours",
        price: "₹8,999",
        duration: "7-8 Hours",
        features: ["Heavy cutting", "Refining polish", "Jeweling finish", "Coating preparation"],
        warranty: "Showroom Finish Guaranteed"
      }
    ],
    faqs: [
      { question: "Will polishing remove all scratches?", answer: "Polishing removes light surface scratches and swirl marks. Deep scratches that reach the primer or bare metal cannot be fully removed but may be minimized." },
      { question: "Is machine polishing safe for my paint?", answer: "Yes, we use paint thickness gauges to ensure safe correction. Our technicians are trained to work within safe parameters for your specific paint system." },
      { question: "How often should I polish my car?", answer: "Most vehicles benefit from polishing every 1-2 years. Over-polishing can thin the clear coat, so we measure paint thickness before every service." },
      { question: "What's the difference between rubbing and polishing?", answer: "Rubbing (compounding) removes deeper defects. Polishing restores gloss after rubbing. Both are machine processes using different abrasive levels." }
    ],
    relatedServices: ["rubbing-polishing", "ceramic-coating"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "hydrowash-wax": {
    id: "hydrowash-wax",
    title: "Premium Hydrowash & Wax",
    subtitle: "Deep Clean with Hand-Applied Protection",
    mainIcon: "Waves",
    shortDescription: "Thorough hand wash with high-quality carnauba wax application for a glossy, protected finish that lasts for months.",
    fullDescription: "Our Premium Hydrowash & Wax service combines meticulous hand washing with premium wax protection. Unlike quick automated washes, our hydrowash uses pressurized water and pH-neutral cleaners to safely remove dirt without scratching. The hand-applied carnauba or synthetic wax creates a hydrophobic barrier that protects your paint, enhances gloss, and makes future cleaning easier for up to 3 months.",
    whatIsIt: "Hydrowash is a high-pressure, hand-wash technique that uses controlled water pressure to safely lift and remove dirt before contact washing. Combined with premium wax application, this service cleans thoroughly while adding a protective layer. The wax fills microscopic imperfections, creates water-beading properties, and provides UV protection for your paint.",
    whyChoose: [
      "High-pressure rinse removes loose dirt before touching the paint",
      "Hand-applied wax provides 2-3 months of protection",
      "Carnauba wax creates warm, deep gloss finish",
      "Hydrophobic surface makes washing easier between visits",
      "Safe for all paint types including matte finishes"
    ],
    benefits: [
      { icon: "Droplets", title: "Hydrophobic", description: "Water beads and rolls off easily" },
      { icon: "Sparkles", title: "Enhanced Gloss", description: "Deep, wet-looking shine" },
      { icon: "Shield", title: "UV Protection", description: "Wax shields paint from sun damage" },
      { icon: "Droplets", title: "Easier Cleaning", description: "Dirt doesn't bond as easily" },
      { icon: "Clock", title: "Quick Service", description: "1-2 hour transformation" },
      { icon: "Wallet", title: "Affordable", description: "Regular protection at accessible price" }
    ],
    specs: [
      { label: "Wash Method", value: "Hand + Pressure" },
      { label: "Wax Type", value: "Carnauba/Synthetic" },
      { label: "Protection Duration", value: "2-3 Months" },
      { label: "Water Pressure", value: "Controlled High" },
      { label: "Shampoo", value: "pH-Neutral" },
      { label: "Drying", value: "Microfiber + Air" },
      { label: "Duration", value: "1-2 Hours" },
      { label: "Finish", value: "Glossy Protected" }
    ],
    process: [
      { step: 1, title: "Pre-Rinse", description: "High-pressure water to loosen and remove surface dirt" },
      { step: 2, title: "Foam Application", description: "pH-neutral snow foam to lift remaining contaminants" },
      { step: 3, title: "Hand Wash", description: "Two-bucket method with premium wash mitt" },
      { step: 4, title: "Wheel Detail", description: "Deep cleaning of wheels, tires, and wheel wells" },
      { step: 5, title: "Rinse", description: "Thorough rinse with filtered water" },
      { step: 6, title: "Dry", description: "Microfiber drying and air blower for crevices" },
      { step: 7, title: "Wax Application", description: "Hand application of premium carnauba or synthetic wax" },
      { step: 8, title: "Buff", description: "Microfiber buffing to reveal glossy finish" }
    ],
    packages: [
      {
        name: "Hydrowash + Wax",
        price: "₹1,199",
        duration: "1.5 Hours",
        features: ["Complete hand wash", "Premium carnauba wax", "Tire dressing", "Glass cleaning"],
        warranty: "2 Month Protection",
        recommended: true
      },
      {
        name: "Hydrowash Express",
        price: "₹599",
        duration: "45 Minutes",
        features: ["High-pressure wash", "Quick dry", "Spray wax sealant"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Hydrowash Deluxe",
        price: "₹1,999",
        duration: "2 Hours",
        features: ["Everything in Wax package", "Clay bar treatment", "Synthetic sealant", "Interior vacuum"],
        warranty: "3 Month Protection"
      }
    ],
    faqs: [
      { question: "How long does the wax protection last?", answer: "Our carnauba wax lasts 2-3 months depending on weather and washing frequency. Synthetic options may last slightly longer." },
      { question: "Is hydrowash better than regular washing?", answer: "Yes, the controlled high-pressure rinse removes more loose dirt before contact, reducing the chance of swirl marks during washing." },
      { question: "Will wax remove scratches?", answer: "Wax fills minor swirl marks temporarily but doesn't remove them. For scratch removal, see our Rubbing & Polishing service." },
      { question: "How often should I wax my car?", answer: "Every 2-3 months for optimal protection. More frequent waxing is fine and provides additional benefits." }
    ],
    relatedServices: ["exterior-detailing", "ceramic-coating"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "anti-rust-coating": {
    id: "anti-rust-coating",
    title: "Anti Rust Coating",
    subtitle: "Complete Rust & Corrosion Protection",
    mainIcon: "Wrench",
    shortDescription: "Rubberized protective coating for undercarriage preventing rust, corrosion, and stone chip damage.",
    fullDescription: "Our Anti Rust Coating service provides comprehensive protection for your vehicle's most vulnerable area. A thick, rubberized coating is applied to the entire undercarriage, creating a barrier against moisture, salt, road debris, and corrosion. Essential for coastal areas and harsh climates, this service extends your vehicle's structural life and reduces road noise.",
    whatIsIt: "Anti-rust coating is a thick, rubberized protective layer applied to the vehicle's chassis, wheel wells, and undercarriage components. It seals out moisture, prevents rust formation, dampens road noise, and protects against stone chips. The coating remains flexible over time, expanding and contracting with temperature changes without cracking.",
    whyChoose: [
      "Prevents rust and corrosion from road salt and moisture",
      "Sound-dampening properties reduce road noise",
      "Essential protection for coastal and snowy regions",
      "Maintains structural integrity and resale value",
      "5-year warranty on coating durability"
    ],
    benefits: [
      { icon: "Wrench", title: "Rust Prevention", description: "Seals metal from moisture and salt exposure" },
      { icon: "VolumeX", title: "Noise Reduction", description: "Sound-dampening properties for quieter cabin" },
      { icon: "Gem", title: "Stone Protection", description: "Thick rubberized layer absorbs impacts" },
      { icon: "Droplets", title: "Waterproof", description: "Seals electrical connections and components" },
      { icon: "Clock", title: "Long Lasting", description: "5+ years of durable protection" },
      { icon: "Award", title: "Warranty Backed", description: "5-year protection guarantee" }
    ],
    specs: [
      { label: "Material", value: "Rubberized Bitumen/Polymer" },
      { label: "Thickness", value: "1-2mm Applied" },
      { label: "Coverage", value: "Full Undercarriage" },
      { label: "Drying Time", value: "24 Hours" },
      { label: "Cure Time", value: "72 Hours" },
      { label: "Durability", value: "5+ Years" },
      { label: "Temperature Range", value: "-30°C to +80°C" },
      { label: "Sound Reduction", value: "Up to 40%" }
    ],
    process: [
      { step: 1, title: "Lift & Inspect", description: "Vehicle lifted on hoist for complete undercarriage access and inspection" },
      { step: 2, title: "Deep Clean", description: "High-pressure washing to remove dirt, grease, and loose rust" },
      { step: 3, title: "Rust Treatment", description: "Existing rust spots treated with converter before coating" },
      { step: 4, title: "Drying", description: "Complete drying to ensure coating adhesion" },
      { step: 5, title: "Masking", description: "Protecting exhaust, brake components, and moving parts" },
      { step: 6, title: "Coating Application", description: "Spray application of rubberized coating to all underbody areas" },
      { step: 7, title: "Curing", description: "24-72 hour curing period for full protection development" }
    ],
    packages: [
      {
        name: "Standard",
        price: "₹4,499",
        duration: "4 Hours",
        features: ["Chassis coating", "Wheel wells", "3-year warranty"],
        warranty: "3 Years"
      },
      {
        name: "Premium",
        price: "₹5,499",
        duration: "5 Hours",
        features: ["Full undercarriage", "Door cavities", "Fender areas", "5-year warranty"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Ultimate",
        price: "₹6,999",
        duration: "6 Hours",
        features: ["Everything in Premium", "Rust converter treatment", "Cavity wax injection", "7-year warranty"],
        warranty: "7 Years"
      }
    ],
    faqs: [
      { question: "Is anti-rust coating necessary for new cars?", answer: "Yes, especially in coastal or snowy areas. Factory undercoating is minimal. Our comprehensive coating provides superior long-term protection." },
      { question: "Will it affect servicing?", answer: "No, the coating is applied to fixed structural components. Serviceable parts are masked and remain accessible." },
      { question: "How long before I can drive?", answer: "Wait 24 hours before normal driving. Avoid water/deep puddles for 72 hours for full curing." },
      { question: "Does it stop existing rust?", answer: "We treat existing rust before coating. The coating prevents new rust but can't reverse significant structural corrosion." }
    ],
    relatedServices: ["paint-protection-film", "ceramic-coating", "alloy-treatment"],
    beforeAfterImages: [] // Images removed - add back when available
  },

  "alloy-treatment": {
    id: "alloy-treatment",
    title: "Alloy Treatment",
    subtitle: "Ceramic Protection for Your Wheels",
    mainIcon: "CircleDot",
    shortDescription: "Specialized ceramic coating for alloy wheels that prevents brake dust buildup and makes cleaning effortless.",
    fullDescription: "Our Alloy Treatment service applies a specialized alloy coating specifically formulated for wheels. This heat-resistant coating creates a protective barrier against brake dust, road salt, and corrosion while making future cleaning effortless. The coating withstands high brake temperatures and maintains a brilliant shine for months.",
    whatIsIt: "Alloy wheel coating is a ceramic-based treatment designed specifically for the harsh environment wheels face. Brake dust is corrosive and can etch into wheel finish if not removed promptly. Our coating creates a hydrophobic, heat-resistant barrier that prevents brake dust adhesion and protects against road chemicals, making wheel maintenance significantly easier.",
    whyChoose: [
      "Ceramic coating resists brake dust and heat up to 400°C",
      "Makes wheel cleaning effortless - most dirt rinses off with water",
      "Protects against road salt and corrosion",
      "Maintains wheel shine and prevents etching",
      "Lasts 1-2 years with proper maintenance"
    ],
    benefits: [
      { icon: "CircleDot", title: "Brake Dust Resistance", description: "Ceramic coating repels brake dust" },
      { icon: "Sun", title: "Heat Resistant", description: "Withstands high brake temperatures" },
      { icon: "Droplets", title: "Easy Cleaning", description: "Wheels clean with just water" },
      { icon: "Shield", title: "Corrosion Protection", description: "Protects against road salt" },
      { icon: "Sparkles", title: "Brilliant Shine", description: "Maintains showroom appearance" },
      { icon: "Clock", title: "Long Lasting", description: "1-2 years of protection" }
    ],
    specs: [
      { label: "Coating Type", value: "SiO2 Ceramic" },
      { label: "Heat Resistance", value: "Up to 400°C" },
      { label: "Durability", value: "1-2 Years" },
      { label: "Hydrophobic", value: "Yes" },
      { label: "Application Time", value: "1-2 Hours" },
      { label: "Curing Time", value: "24 Hours" },
      { label: "Coverage", value: "4 Wheels" },
      { label: "Maintenance", value: "pH-Neutral Cleaner" }
    ],
    process: [
      { step: 1, title: "Wheel Removal", description: "Wheels removed for thorough access" },
      { step: 2, title: "Deep Clean", description: "Degreasing and decontamination of wheel surface" },
      { step: 3, title: "Clay Treatment", description: "Clay bar to remove embedded contaminants" },
      { step: 4, title: "Surface Prep", description: "IPA wipe for optimal coating bonding" },
      { step: 5, title: "Coating Application", description: "Ceramic coating applied to wheel faces" },
      { step: 6, title: "Leveling", description: "Even coating distribution" },
      { step: 7, title: "Curing", description: "24-hour curing period" },
      { step: 8, title: "Installation", description: "Wheels reinstalled with proper torque" }
    ],
    packages: [
      {
        name: "Basic Protection",
        price: "₹999",
        duration: "1 Hour",
        features: ["Wheel faces coating", "Brake dust resistance", "6-month durability"],
        warranty: "6 Months"
      },
      {
        name: "Complete Protection",
        price: "₹1,499",
        duration: "2 Hours",
        features: ["Wheel faces + barrels", "Full decontamination", "1-year durability", "Tire dressing"],
        warranty: "1 Year",
        recommended: true
      },
      {
        name: "Premium Shield",
        price: "₹2,499",
        duration: "3 Hours",
        features: ["Everything in Complete", "Wheel removal included", "2-year durability", "Annual maintenance"],
        warranty: "2 Years"
      }
    ],
    faqs: [
      { question: "Will wheel coating affect brake performance?", answer: "No, we carefully mask brake components. The coating is applied only to wheel surfaces and withstands high temperatures." },
      { question: "How do I clean coated wheels?", answer: "Simply rinse with water - most brake dust and grime will wash away without scrubbing. For stubborn dirt, use pH-neutral wheel cleaner." },
      { question: "Can coating be applied to any wheels?", answer: "Yes, our coating works on all wheel types including painted, machined, and chrome finishes." },
      { question: "How long does wheel coating last?", answer: "With proper maintenance, our wheel coating lasts 1-2 years depending on driving conditions and cleaning frequency." }
    ],
    relatedServices: ["exterior-detailing", "ceramic-coating", "hydrowash-wax"],
    beforeAfterImages: []
  },

  "engine-coating": {
    id: "engine-coating",
    title: "Engine Coating",
    subtitle: "Protect Your Engine Bay",
    mainIcon: "Cog",
    shortDescription: "Heat-resistant protective coating for engine bay components that prevents dust buildup and maintains showroom appearance.",
    fullDescription: "Our Engine Coating service applies a specialized heat-resistant dressing to all engine bay components. This protective coating prevents dust accumulation, protects against moisture, and keeps rubber and plastic parts supple while maintaining a showroom-new appearance. Makes future engine bay cleaning effortless.",
    whatIsIt: "Engine coating is a water-based, non-conductive protective dressing specifically designed for modern engine bays. It creates a protective barrier that repels dust and grime, protects rubber hoses and plastic components from drying out, and makes engine cleaning significantly easier. The coating is safe for all engine bay components including electronics.",
    whyChoose: [
      "Heat-resistant coating protects up to 200°C",
      "Prevents dust and grime accumulation",
      "Protects rubber and plastic from drying",
      "Makes engine cleaning effortless",
      "Safe for modern engine electronics"
    ],
    benefits: [
      { icon: "Cog", title: "Engine Protection", description: "Heat and moisture resistant coating" },
      { icon: "Shield", title: "Dust Repellent", description: "Prevents dust buildup" },
      { icon: "Sparkles", title: "Like-New Look", description: "Engine bay looks showroom fresh" },
      { icon: "Droplets", title: "Easy Cleaning", description: "Dirt wipes right off" },
      { icon: "Clock", title: "Long Lasting", description: "6 months of protection" },
      { icon: "Zap", title: "Safe for Electronics", description: "Non-conductive formula" }
    ],
    specs: [
      { label: "Coating Type", value: "Heat-Resistant Dressing" },
      { label: "Heat Tolerance", value: "Up to 200°C" },
      { label: "Durability", value: "6 Months" },
      { label: "Electronics Safe", value: "Yes, Non-Conductive" },
      { label: "Application Time", value: "1 Hour" },
      { label: "Drying Time", value: "30 Minutes" },
      { label: "Coverage", value: "Full Engine Bay" },
      { label: "Maintenance", value: "Wipe Clean Only" }
    ],
    process: [
      { step: 1, title: "Engine Inspection", description: "Check for any issues before treatment" },
      { step: 2, title: "Deep Clean", description: "Degreasing and detailing of all components" },
      { step: 3, title: "Drying", description: "Complete drying before coating application" },
      { step: 4, title: "Protection", description: "Sensitive electronics masked" },
      { step: 5, title: "Coating Application", description: "Heat-resistant dressing applied to all surfaces" },
      { step: 6, title: "Distribution", description: "Even coating on all components" },
      { step: 7, title: "Drying", description: "30-minute drying period" },
      { step: 8, title: "Final Check", description: "Quality inspection and component check" }
    ],
    packages: [
      {
        name: "Basic Engine Dressing",
        price: "₹999",
        duration: "1 Hour",
        features: ["Engine bay coating", "Basic protection", "3-month durability"],
        warranty: "3 Months"
      },
      {
        name: "Complete Engine Protection",
        price: "₹1,499",
        duration: "1.5 Hours",
        features: ["Full engine bay", "Deep cleaning included", "6-month durability", "Hood lining"],
        warranty: "6 Months",
        recommended: true
      },
      {
        name: "Premium Engine Care",
        price: "₹2,499",
        duration: "2 Hours",
        features: ["Everything in Complete", "Engine bay detailing", "Rubber conditioning", "Annual maintenance"],
        warranty: "6 Months"
      }
    ],
    faqs: [
      { question: "Is engine coating safe for modern electronics?", answer: "Yes, we use water-based, non-conductive dressings specifically designed for modern engine bays. Sensitive electronics are protected during application." },
      { question: "Will this affect engine cooling?", answer: "No, the coating is thin and does not impede heat dissipation. It's designed specifically for engine bay environments." },
      { question: "How often should I recoat my engine?", answer: "Every 6 months is recommended for optimal protection and appearance. More frequent application is safe." },
      { question: "Can I wash my engine after coating?", answer: "Wait 24 hours after coating before any moisture contact. After that, gentle washing is safe, but avoid high-pressure directly on sensitive components." }
    ],
    relatedServices: ["complete-detailing", "premium-detailing", "interior-detailing"],
    beforeAfterImages: []
  },

  "ac-vent-treatment": {
    id: "ac-vent-treatment",
    title: "AC Vent Treatment",
    subtitle: "Fresh, Healthy Cabin Air",
    mainIcon: "Wind",
    shortDescription: "Deep AC system sanitization using antimicrobial treatment and ozone therapy to eliminate bacteria, mold, and odors.",
    fullDescription: "Our AC Vent Treatment is a comprehensive sanitization process that eliminates bacteria, mold, and odors from your vehicle's entire HVAC system. Using specialized foaming agents, antimicrobial solutions, and ozone treatment, we clean vents, ducts, and evaporator coils - the source of most vehicle odors. Ensures fresh, healthy cabin air and improved AC efficiency.",
    whatIsIt: "AC vent treatment targets the entire HVAC system including vents, ducts, cabin filter, and evaporator coil. Over time, moisture in the AC system creates breeding grounds for bacteria and mold, causing musty odors and potential health issues. Our treatment uses antimicrobial foam and ozone therapy to sanitize 99.9% of contaminants, leaving your cabin air fresh and healthy.",
    whyChoose: [
      "Eliminates 99.9% of bacteria, mold, and allergens",
      "Removes musty odors at the source",
      "Improves air conditioning efficiency",
      "Prevents future mold growth",
      "Healthier cabin air for passengers"
    ],
    benefits: [
      { icon: "Wind", title: "Fresh Air", description: "Eliminates odors at the source" },
      { icon: "Heart", title: "Healthier Cabin", description: "Removes bacteria and allergens" },
      { icon: "Zap", title: "AC Efficiency", description: "Clean system runs more efficiently" },
      { icon: "Shield", title: "Mold Prevention", description: "Prevents future growth" },
      { icon: "Droplets", title: "Deep Clean", description: "Cleans entire HVAC system" },
      { icon: "Clock", title: "Quick Service", description: "1-2 hour treatment" }
    ],
    specs: [
      { label: "Treatment Type", value: "Antimicrobial + Ozone" },
      { label: "Bacteria Removal", value: "99.9%" },
      { label: "Coverage", value: "Full HVAC System" },
      { label: "Ozone Duration", value: "30 Minutes" },
      { label: "Application Time", value: "1 Hour" },
      { label: "Drying Time", value: "30 Minutes" },
      { label: "Protection Duration", value: "3 Months" },
      { label: "Cabin Filter", value: "Check & Replace" }
    ],
    process: [
      { step: 1, title: "System Inspection", description: "Check AC operation and identify issues" },
      { step: 2, title: "Filter Access", description: "Cabin filter removal and inspection" },
      { step: 3, title: "Vent Access", description: "Access all vent openings" },
      { step: 4, title: "Foam Treatment", description: "Antimicrobial foam through all vents" },
      { step: 5, title: "Duct Cleaning", description: "Clean accessible ductwork" },
      { step: 6, title: "Ozone Therapy", description: "Ozone generator sanitizes entire system" },
      { step: 7, title: "Ventilation", description: "Thorough ventilation before return" },
      { step: 8, title: "Final Test", description: "AC operation and air quality check" }
    ],
    packages: [
      {
        name: "Basic AC Treatment",
        price: "₹1,199",
        duration: "1 Hour",
        features: ["Vent sanitization", "Antimicrobial foam", "Ozone treatment"],
        warranty: "3 Month Freshness"
      },
      {
        name: "Complete AC Care",
        price: "₹1,999",
        duration: "1.5 Hours",
        features: ["Everything in Basic", "Cabin filter replacement", "Duct cleaning", "Evaporator treatment"],
        warranty: "3 Months",
        recommended: true
      },
      {
        name: "Premium AC System",
        price: "₹3,499",
        duration: "2 Hours",
        features: ["Everything in Complete", "AC performance check", "Refrigerant top-up", "6-month protection"],
        warranty: "6 Months"
      }
    ],
    faqs: [
      { question: "How often should AC be treated?", answer: "Every 6 months is recommended, especially if you notice musty odors when first turning on the AC." },
      { question: "Will this fix a broken AC?", answer: "No, this is a cleaning and sanitization service. Mechanical AC issues require repair services." },
      { question: "Is ozone treatment safe?", answer: "Yes, we run the generator while the vehicle is unoccupied and ventilate thoroughly before return. It's completely safe and leaves no residue." },
      { question: "Does this help with allergies?", answer: "Yes, by removing bacteria, mold, and allergens from the HVAC system, it significantly improves cabin air quality for allergy sufferers." }
    ],
    relatedServices: ["interior-detailing", "engine-coating", "complete-detailing"],
    beforeAfterImages: []
  },

  "bike-ppf": {
    id: "bike-ppf",
    title: "Bike PPF",
    subtitle: "Paint Protection for Motorcycles",
    mainIcon: "Zap",
    shortDescription: "Advanced paint protection film specifically designed for motorcycles that protects against stone chips and scratches.",
    fullDescription: "Our Bike PPF service provides the same invisible armor protection for motorcycles as we do for cars. Using precision-cut PPF designed specifically for motorcycle contours, we protect tank, fenders, and other painted surfaces from stone chips, road debris, and scratches while maintaining the bike's original finish and gloss. Essential for preserving your motorcycle's appearance.",
    whatIsIt: "Motorcycle PPF is a thermoplastic polyurethane film cut specifically for motorcycle shapes and contours. Unlike car PPF, motorcycle film must accommodate complex curves, tank shapes, and exposed areas. Our precision patterns ensure perfect fit while providing the same self-healing, impact-absorbing protection that makes PPF the gold standard in paint protection.",
    whyChoose: [
      "Self-healing technology repairs minor scratches automatically",
      "Computer-precision cutting for perfect motorcycle fit",
      "Protects tank, fenders, and fairings from road damage",
      "Maintains original paint finish and gloss",
      "5-year warranty on premium films"
    ],
    benefits: [
      { icon: "Zap", title: "Self-Healing", description: "Heat-activated scratch repair" },
      { icon: "Shield", title: "Impact Protection", description: "Absorbs stone chips and debris" },
      { icon: "Sun", title: "UV Protection", description: "Prevents paint fading" },
      { icon: "Sparkles", title: "Invisible", description: "Maintains original appearance" },
      { icon: "Gem", title: "Custom Fit", description: "Precision-cut for each bike" },
      { icon: "Award", title: "Warranty", description: "5-year protection guarantee" }
    ],
    specs: [
      { label: "Material", value: "Thermoplastic Polyurethane" },
      { label: "Thickness", value: "200-300 microns" },
      { label: "Warranty", value: "5 Years" },
      { label: "Self-Healing", value: "Heat Activated" },
      { label: "UV Resistance", value: "99% UV Block" },
      { label: "Installation Time", value: "4-6 Hours" },
      { label: "Coverage Options", value: "Partial to Full" },
      { label: "Finish", value: "Gloss or Matte" }
    ],
    process: [
      { step: 1, title: "Bike Inspection", description: "Thorough inspection of paint condition" },
      { step: 2, title: "Surface Prep", description: "Deep cleaning and decontamination" },
      { step: 3, title: "Paint Correction", description: "Remove any imperfections before film" },
      { step: 4, title: "Pattern Selection", description: "Computer-cut patterns for your bike" },
      { step: 5, title: "Application", description: "Careful PPF application on all surfaces" },
      { step: 6, title: "Edge Sealing", description: "All edges properly sealed" },
      { step: 7, title: "Curing", description: "24-hour curing period" },
      { step: 8, title: "Final Inspection", description: "Quality check under lighting" }
    ],
    packages: [
      {
        name: "Tank Protection",
        price: "₹4,999",
        duration: "2 Hours",
        features: ["Fuel tank coverage", "Self-healing film", "3-year warranty"],
        warranty: "3 Years"
      },
      {
        name: "Front Protection",
        price: "₹7,999",
        duration: "4 Hours",
        features: ["Tank + front fender", "Headlight area", "5-year warranty"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Full Bike Protection",
        price: "₹14,999",
        duration: "6 Hours",
        features: ["All painted surfaces", "Tank, fenders, fairings", "5-year warranty", "Self-healing"],
        warranty: "5 Years"
      }
    ],
    faqs: [
      { question: "Is PPF worth it for motorcycles?", answer: "Absolutely. Motorcycles are more exposed to road debris than cars. PPF prevents stone chips on the tank and protects your investment." },
      { question: "Will PPF affect my bike's appearance?", answer: "No, high-quality PPF is completely invisible. It maintains your paint's original color and gloss while protecting it." },
      { question: "Can PPF be removed?", answer: "Yes, PPF can be safely removed without damaging the paint. The paint underneath often looks brand new because it was protected." },
      { question: "How long does motorcycle PPF last?", answer: "With proper care, our motorcycle PPF lasts 5 years. The warranty covers yellowing, cracking, and peeling." }
    ],
    relatedServices: ["ceramic-coating", "graphene-coating", "paint-protection-film"],
    beforeAfterImages: []
  },

  "car-wrap": {
    id: "car-wrap",
    title: "Car Wrap",
    subtitle: "Transform Your Vehicle's Appearance",
    mainIcon: "Sparkles",
    shortDescription: "Premium vinyl car wrapping service for color change, protection, or custom graphics while protecting original paint.",
    fullDescription: "Our Car Wrap service completely transforms your vehicle's appearance with premium vinyl films. Whether you want a complete color change, protective clear wrap, or custom graphics, our professional installation delivers stunning results. The wrap protects your original paint from UV damage, scratches, and stone chips while allowing you to change your vehicle's look dramatically.",
    whatIsIt: "Car wrapping involves applying large sheets of premium vinyl film to your vehicle's painted surfaces. The vinyl can be color-changing (matte, gloss, satin, chrome), clear (for paint protection), or printed with custom graphics. Professional installation requires skill, patience, and specialized tools to ensure seamless results with no bubbles or imperfections.",
    whyChoose: [
      "Complete color change without painting",
      "Protects original paint from damage",
      "Removable without damaging paint",
      "Custom graphics and finishes available",
      "Cost-effective compared to repaint"
    ],
    benefits: [
      { icon: "Sparkles", title: "Color Change", description: "Transform appearance completely" },
      { icon: "Shield", title: "Paint Protection", description: "Protects original paint" },
      { icon: "Layers", title: "Removable", description: "Can be removed without damage" },
      { icon: "Gem", title: "Custom Options", description: "Matte, gloss, chrome, graphics" },
      { icon: "Wallet", title: "Cost Effective", description: "Less than repaint" },
      { icon: "Clock", title: "Quick Transform", description: "3-5 day installation" }
    ],
    specs: [
      { label: "Vinyl Type", value: "Premium Cast Vinyl" },
      { label: "Finish Options", value: "Matte, Gloss, Satin, Chrome" },
      { label: "Durability", value: "5-7 Years" },
      { label: "Removable", value: "Yes, Without Damage" },
      { label: "Installation Time", value: "3-5 Days" },
      { label: "Paint Protection", value: "Yes" },
      { label: "Custom Graphics", value: "Available" },
      { label: "Warranty", value: "5 Years" }
    ],
    process: [
      { step: 1, title: "Consultation", description: "Discuss color, finish, and design options" },
      { step: 2, title: "Surface Prep", description: "Deep cleaning and paint correction" },
      { step: 3, title: "Disassembly", description: "Remove trim and components for full coverage" },
      { step: 4, title: "Vinyl Application", description: "Careful application with heat and tension" },
      { step: 5, title: "Edge Sealing", description: "All edges sealed for durability" },
      { step: 6, title: "Reassembly", description: "Components reinstalled properly" },
      { step: 7, title: "Final Inspection", description: "Quality check under all lighting" },
      { step: 8, title: "Curing", description: "24-48 hour curing period" }
    ],
    packages: [
      {
        name: "Partial Wrap",
        price: "₹14,999",
        duration: "2 Days",
        features: ["Roof or hood", "Single color", "3-year durability"],
        warranty: "3 Years"
      },
      {
        name: "Full Color Change",
        price: "₹29,999",
        duration: "4 Days",
        features: ["Full vehicle wrap", "Any color/finish", "5-year warranty", "Paint protection"],
        warranty: "5 Years",
        recommended: true
      },
      {
        name: "Premium Custom",
        price: "₹49,999",
        duration: "5 Days",
        features: ["Custom graphics", "Premium vinyl", "Design consultation", "7-year warranty"],
        warranty: "7 Years"
      }
    ],
    faqs: [
      { question: "How long does car wrap last?", answer: "Our premium vinyl wraps last 5-7 years with proper care. The warranty covers fading, peeling, and cracking." },
      { question: "Will wrap damage my paint?", answer: "No, high-quality vinyl protects paint and can be removed without damage. In fact, paint under wrap often looks new." },
      { question: "Can I wash a wrapped car?", answer: "Yes, hand wash is recommended. Avoid automated washes with harsh brushes. Use pH-neutral soap and microfiber." },
      { question: "Is wrap cheaper than paint?", answer: "Yes, a quality wrap is typically 30-50% less expensive than a professional repaint, and it protects your original paint." }
    ],
    relatedServices: ["paint-protection-film", "ceramic-coating", "graphene-coating"],
    beforeAfterImages: []
  },

  "steam-wash": {
    id: "steam-wash",
    title: "Steam Wash",
    subtitle: "Eco-Friendly Deep Cleaning with High-Pressure Steam",
    mainIcon: "Wind",
    shortDescription: "Advanced steam cleaning technology using high-temperature steam to deep clean, sanitize, and restore your vehicle's exterior and interior.",
    fullDescription: "Our Steam Wash service utilizes cutting-edge steam cleaning technology to deliver an eco-friendly, chemical-free deep clean for your vehicle. High-temperature steam (up to 180°C) penetrates deep into surfaces, dissolving grease, grime, and bacteria without harsh chemicals. This method is safe for all vehicle surfaces, environmentally friendly, and delivers superior cleaning results while conserving water.",
    whatIsIt: "Steam washing uses pressurized, high-temperature steam to clean and sanitize vehicle surfaces. The steam's heat breaks down dirt and grease, while the pressure lifts contaminants away. Unlike traditional washing that uses gallons of water and chemical cleaners, steam cleaning uses minimal water and no harsh chemicals, making it environmentally responsible and safe for all finishes.",
    whyChoose: [
      "Uses 90% less water than traditional car washing",
      "Chemical-free cleaning safe for all surfaces",
      "High-temperature steam kills 99.9% of bacteria and germs",
      "Safe for paint, chrome, glass, and all interior materials",
      "Eco-friendly and environmentally responsible"
    ],
    benefits: [
      { icon: "Wind", title: "Deep Cleaning", description: "Steam penetrates deep for thorough cleaning" },
      { icon: "Droplets", title: "Water Efficient", description: "Uses 90% less water than traditional wash" },
      { icon: "Shield", title: "Chemical Free", description: "No harsh chemicals, safe for all surfaces" },
      { icon: "Sparkles", title: "Sanitized", description: "Kills 99.9% of bacteria and germs" },
      { icon: "Sun", title: "Eco Friendly", description: "Environmentally responsible cleaning method" },
      { icon: "Gem", title: "Safe Finish", description: "Gentle on paint, chrome, and interior" }
    ],
    specs: [
      { label: "Steam Temperature", value: "Up to 180°C" },
      { label: "Water Usage", value: "90% Less Than Traditional" },
      { label: "Chemicals", value: "None Required" },
      { label: "Sanitization", value: "99.9% Bacteria Kill" },
      { label: "Surface Safe", value: "All Vehicle Materials" },
      { label: "Duration", value: "1-2 Hours" },
      { label: "Drying Time", value: "15-30 Minutes" },
      { label: "Environmental Impact", value: "Minimal" }
    ],
    process: [
      { step: 1, title: "Pre-Inspection", description: "Assess vehicle condition and identify areas requiring special attention" },
      { step: 2, title: "Steam Pre-Soak", description: "Apply steam to loosen dirt and grime on all surfaces" },
      { step: 3, title: "Exterior Steam Clean", description: "High-pressure steam cleaning of paint, glass, chrome, and wheels" },
      { step: 4, title: "Interior Steam Sanitize", description: "Steam cleaning of dashboard, seats, carpets, and all interior surfaces" },
      { step: 5, title: "Detail & Wipe", description: "Microfiber wipe-down to remove loosened contaminants" },
      { step: 6, title: "Ventilation", description: "Air circulation to dry steam-cleaned surfaces" },
      { step: 7, title: "Final Inspection", description: "Quality check to ensure thorough cleaning and sanitization" }
    ],
    packages: [
      {
        name: "Express Steam Wash",
        price: "₹1,199",
        duration: "45 Minutes",
        features: ["Exterior steam clean", "Wheel cleaning", "Glass cleaning", "Quick dry"],
        warranty: "Satisfaction Guaranteed"
      },
      {
        name: "Complete Steam Wash",
        price: "₹1,499",
        duration: "1.5 Hours",
        features: ["Full exterior steam", "Interior steam sanitize", "Dashboard & console", "All glass cleaned"],
        warranty: "Satisfaction Guaranteed",
        recommended: true
      },
      {
        name: "Premium Steam Detail",
        price: "₹2,499",
        duration: "2 Hours",
        features: ["Everything in Complete", "Leather steam clean", "Carpet extraction", "Air freshener"],
        warranty: "Satisfaction Guaranteed"
      }
    ],
    faqs: [
      { question: "Is steam washing safe for my car's paint?", answer: "Yes, steam washing is completely safe for paint when done professionally. The temperature and pressure are controlled to prevent any damage. In fact, it's gentler than traditional pressure washing." },
      { question: "How much water does steam washing use?", answer: "Steam washing uses up to 90% less water than traditional car washing. A typical steam wash uses only 5-10 liters of water compared to 100+ liters for conventional washing." },
      { question: "Can steam cleaning damage leather seats?", answer: "No, steam cleaning is safe for leather when done correctly. The steam temperature and moisture are controlled, and we follow up with leather conditioning to keep seats supple." },
      { question: "Is steam washing effective for heavily soiled vehicles?", answer: "Yes, steam is highly effective at breaking down heavy dirt, grease, and grime. The heat dissolves contaminants that water alone can't remove, making it excellent for neglected vehicles." }
    ],
    relatedServices: ["hydrowash-wax", "interior-detailing", "premium-detailing"],
    beforeAfterImages: []
  },

  "trim-restoration": {
    id: "trim-restoration",
    title: "Trim Restoration",
    subtitle: "Restore Your Vehicle's Exterior Trim to Like-New Condition",
    mainIcon: "Sparkles",
    shortDescription: "Professional restoration of faded, discolored exterior trim using specialized products and techniques for lasting results.",
    fullDescription: "Our Trim Restoration service transforms faded, discolored, and weathered exterior trim back to its original beauty. Using specialized trim restoration products and professional techniques, we restore black plastic, chrome, and painted trim pieces that have been damaged by UV exposure, road grime, and environmental factors. This service dramatically improves your vehicle's overall appearance and protects trim from future deterioration.",
    whatIsIt: "Exterior trim restoration is a specialized treatment that addresses the common problem of faded and discolored plastic, rubber, and chrome trim. UV rays, road chemicals, and oxidation cause trim to turn gray, chalky, or discolored over time. Our restoration process cleans, treats, and protects these surfaces, restoring their original color and providing UV protection to prevent future fading.",
    whyChoose: [
      "Restores original color and appearance of faded trim",
      "UV protection prevents future fading and deterioration",
      "Professional-grade products for lasting results",
      "Works on black plastic, chrome, and painted trim",
      "Dramatically improves overall vehicle appearance"
    ],
    benefits: [
      { icon: "Sparkles", title: "Like-New Appearance", description: "Restores trim to original condition" },
      { icon: "Sun", title: "UV Protection", description: "Prevents future fading and discoloration" },
      { icon: "Shield", title: "Long Lasting", description: "Results last 6-12 months with proper care" },
      { icon: "Gem", title: "Versatile", description: "Works on all trim types" },
      { icon: "Wallet", title: "Cost Effective", description: "Affordable alternative to trim replacement" },
      { icon: "Eye", title: "Visual Impact", description: "Dramatically improves vehicle aesthetics" }
    ],
    specs: [
      { label: "Treatment Type", value: "Specialized Trim Restoration" },
      { label: "UV Protection", value: "Yes, UV Blockers Included" },
      { label: "Durability", value: "6-12 Months" },
      { label: "Trim Types", value: "Plastic, Chrome, Painted" },
      { label: "Application Time", value: "2-3 Hours" },
      { label: "Drying Time", value: "1-2 Hours" },
      { label: "Coverage", value: "All Exterior Trim" },
      { label: "Maintenance", value: "Regular washing recommended" }
    ],
    process: [
      { step: 1, title: "Trim Inspection", description: "Assess condition of all exterior trim pieces" },
      { step: 2, title: "Deep Clean", description: "Thorough cleaning to remove dirt, grime, and oxidation" },
      { step: 3, title: "Surface Prep", description: "Light abrasion to remove surface oxidation" },
      { step: 4, title: "Restoration Application", description: "Apply specialized restoration product evenly" },
      { step: 5, title: "Work In", description: "Buff and work product into trim surface" },
      { step: 6, title: "UV Protection", description: "Apply UV protectant for long-lasting results" },
      { step: 7, title: "Final Inspection", description: "Quality check of all restored trim pieces" }
    ],
    packages: [
      {
        name: "Basic Trim Restoration",
        price: "₹3,999",
        duration: "2-3 Hours",
        features: ["All exterior trim", "Deep cleaning", "Restoration treatment", "UV protection"],
        warranty: "6 Month Protection",
        recommended: true
      }
    ],
    faqs: [
      { question: "How long does trim restoration last?", answer: "Our professional trim restoration lasts 6-12 months depending on sun exposure and maintenance. Regular washing helps maintain the results." },
      { question: "Will it work on severely faded trim?", answer: "Yes, our restoration process works on even severely faded and discolored trim. However, trim that is physically damaged or cracked may need replacement." },
      { question: "Is it safe for all trim types?", answer: "Yes, our products are safe for black plastic, chrome, and painted trim. We use specialized products for each type to ensure optimal results." },
      { question: "Can I wash my car after restoration?", answer: "Wait 24 hours before washing to allow the UV protection to fully cure. After that, normal washing is safe and recommended." }
    ],
    relatedServices: ["rubbing-polishing", "ceramic-coating", "hydrowash-wax"],
    beforeAfterImages: []
  },

  "chrome-restoration": {
    id: "chrome-restoration",
    title: "Chrome Restoration",
    subtitle: "Bring Back the Shine to Your Chrome Trim",
    mainIcon: "Gem",
    shortDescription: "Professional chrome polishing and restoration to remove oxidation, rust, and restore mirror-like shine.",
    fullDescription: "Our Chrome Restoration service brings dull, oxidized, and rusted chrome trim back to life. Using specialized metal polishes, rust removers, and protective sealants, we remove years of oxidation, water spots, and surface rust to restore the brilliant mirror-like shine of your vehicle's chrome accents. This service is essential for maintaining the premium appearance of chrome bumpers, grilles, trim, and wheels.",
    whatIsIt: "Chrome restoration is a metal polishing and treatment process specifically designed for chrome-plated surfaces. Chrome plating can become dull and oxidized over time due to exposure to moisture, road salt, and environmental contaminants. Our restoration process uses progressively finer metal polishes to remove oxidation and rust, followed by protective sealants to maintain the shine and prevent future deterioration.",
    whyChoose: [
      "Restores mirror-like shine to dull chrome",
      "Removes surface rust and oxidation",
      "Protective sealant prevents future tarnishing",
      "Safe for all chrome-plated surfaces",
      "Dramatically enhances vehicle's premium appearance"
    ],
    benefits: [
      { icon: "Gem", title: "Mirror Shine", description: "Restores brilliant chrome appearance" },
      { icon: "Shield", title: "Rust Removal", description: "Eliminates surface rust and oxidation" },
      { icon: "Sparkles", title: "Protection", description: "Sealant prevents future tarnishing" },
      { icon: "Sun", title: "UV Resistant", description: "Protects against environmental damage" },
      { icon: "Wallet", title: "Cost Effective", description: "Much cheaper than chrome replacement" },
      { icon: "Eye", title: "Premium Look", description: "Enhances vehicle's luxury appearance" }
    ],
    specs: [
      { label: "Treatment Type", value: "Metal Polishing & Sealing" },
      { label: "Polish Grades", value: "Multi-Stage Metal Polish" },
      { label: "Rust Removal", value: "Yes, Surface Rust" },
      { label: "Protection", value: "Chrome Sealant" },
      { label: "Durability", value: "6-12 Months" },
      { label: "Application Time", value: "1-2 Hours" },
      { label: "Coverage", value: "All Chrome Surfaces" },
      { label: "Safe For", value: "All Chrome-Plated Parts" }
    ],
    process: [
      { step: 1, title: "Chrome Inspection", description: "Assess condition of all chrome surfaces" },
      { step: 2, title: "Deep Clean", description: "Remove dirt, grime, and contaminants" },
      { step: 3, title: "Rust Treatment", description: "Apply rust remover to affected areas" },
      { step: 4, title: "Metal Polishing", description: "Multi-stage polishing to remove oxidation" },
      { step: 5, title: "Fine Polish", description: "Final polish for mirror-like shine" },
      { step: 6, title: "Sealant Application", description: "Apply protective chrome sealant" },
      { step: 7, title: "Final Buff", description: "Buff to reveal brilliant shine" }
    ],
    packages: [
      {
        name: "Chrome Restoration",
        price: "₹1,999",
        duration: "1-2 Hours",
        features: ["All chrome surfaces", "Rust removal", "Multi-stage polishing", "Protective sealant"],
        warranty: "6 Month Protection",
        recommended: true
      }
    ],
    faqs: [
      { question: "How long does chrome restoration last?", answer: "With proper care and our protective sealant, chrome restoration lasts 6-12 months. Regular maintenance helps maintain the shine." },
      { question: "Can severely rusted chrome be restored?", answer: "Surface rust and oxidation can be removed. However, chrome that has pitted deeply or flaked off may need replating or replacement." },
      { question: "Is it safe for all chrome parts?", answer: "Yes, our process is safe for all chrome-plated surfaces including bumpers, grilles, trim, and wheels. We use products specifically formulated for chrome." },
      { question: "Will this prevent future rust?", answer: "Our protective sealant provides excellent protection against future oxidation and rust. However, regular cleaning and maintenance are still recommended." }
    ],
    relatedServices: ["trim-restoration", "rubbing-polishing", "alloy-treatment"],
    beforeAfterImages: []
  },

  "interior-pre-cut": {
    id: "interior-pre-cut",
    title: "Interior Pre Cut",
    subtitle: "Precision Interior Protection Film",
    mainIcon: "Car",
    shortDescription: "Professional interior protection film for high-wear areas with pre-cut patterns for perfect fit.",
    fullDescription: "Our Interior Pre Cut service provides precision-cut protective film for high-wear interior areas like door panels, center console, and frequently touched surfaces. The pre-cut patterns ensure perfect fit and easy installation, protecting against scratches, spills, and wear, keeping your interior looking new.",
    whatIsIt: "Interior pre-cut film is a transparent protective film designed specifically for interior surfaces, cut to exact specifications using computer patterns for perfect fit.",
    whyChoose: [
      "Pre-cut patterns for perfect fit",
      "Protects high-wear interior surfaces",
      "Easy to clean and maintain",
      "Transparent, doesn't alter interior appearance"
    ],
    benefits: [
      { icon: "Car", title: "Precision Fit", description: "Computer-cut for perfect fit" },
      { icon: "Shield", title: "Scratch Protection", description: "Protects against scratches and wear" },
      { icon: "Sparkles", title: "Invisible", description: "Transparent, doesn't alter appearance" },
      { icon: "Droplets", title: "Easy Clean", description: "Makes cleaning easier" }
    ],
    specs: [
      { label: "Material", value: "Transparent Protective Film" },
      { label: "Coverage", value: "Pre-cut Patterns" },
      { label: "Durability", value: "Long-lasting" },
      { label: "Application Time", value: "2-3 Hours" }
    ],
    process: [
      { step: 1, title: "Surface Prep", description: "Clean and prepare interior surfaces" },
      { step: 2, title: "Pattern Selection", description: "Choose pre-cut patterns for your vehicle" },
      { step: 3, title: "Application", description: "Apply protective film to surfaces" },
      { step: 4, title: "Finishing", description: "Smooth and ensure perfect fit" }
    ],
    packages: [
      {
        name: "Interior Pre Cut",
        price: "₹4,999",
        duration: "2-3 Hours",
        features: ["Pre-cut patterns", "Full interior coverage", "Perfect fit", "Scratch protection"],
        warranty: "1 Year"
      }
    ],
    faqs: [
      { question: "What areas does interior pre-cut cover?", answer: "It covers high-wear interior areas like door panels, center console, and frequently touched surfaces." },
      { question: "Is the film visible?", answer: "No, the film is transparent and doesn't alter your interior's original appearance." },
      { question: "Can it be removed?", answer: "Yes, the film can be safely removed without damaging the interior surfaces." }
    ],
    relatedServices: ["interior-detailing", "leather"],
    beforeAfterImages: []
  },

  "leather": {
    id: "leather",
    title: "Car Leather (Conditioning And Protection)",
    subtitle: "Professional Leather Care & Protection",
    mainIcon: "Gem",
    shortDescription: "Complete leather cleaning, conditioning, and protection to keep leather surfaces soft, supple, and looking new.",
    fullDescription: "Our Leather service provides comprehensive care for leather seats and interior leather surfaces. We clean, condition, and protect leather to keep it soft, supple, and protected from wear, spills, and UV damage, maintaining a luxurious feel.",
    whatIsIt: "Leather care involves cleaning, conditioning, and protecting leather surfaces to maintain their appearance and longevity.",
    whyChoose: [
      "Cleans and conditions leather",
      "Protects against spills and UV damage",
      "Keeps leather soft and supple",
      "Maintains luxurious appearance"
    ],
    benefits: [
      { icon: "Gem", title: "Deep Clean", description: "Removes dirt and stains from leather" },
      { icon: "Sparkles", title: "Conditioning", description: "Keeps leather soft and supple" },
      { icon: "Shield", title: "Protection", description: "Protects against spills and UV damage" },
      { icon: "Sun", title: "Longevity", description: "Extends life of leather surfaces" }
    ],
    specs: [
      { label: "Treatment Type", value: "Clean + Condition + Protect" },
      { label: "Products Used", value: "Premium Leather Products" },
      { label: "Duration", value: "1-2 Hours" },
      { label: "Durability", value: "3-6 Months" }
    ],
    process: [
      { step: 1, title: "Cleaning", description: "Deep clean leather surfaces" },
      { step: 2, title: "Conditioning", description: "Apply leather conditioner" },
      { step: 3, title: "Protection", description: "Apply protective coating" },
      { step: 4, title: "Finishing", description: "Buff to a luxurious shine" }
    ],
    packages: [
      {
        name: "Leather Care",
        price: "₹1,999",
        duration: "1-2 Hours",
        features: ["Deep cleaning", "Leather conditioning", "Protective coating", "UV protection"],
        warranty: "3 Months",
        recommended: true
      }
    ],
    faqs: [
      { question: "How often should I get leather care?", answer: "Every 3-6 months is recommended to keep leather in top condition." },
      { question: "Will it work on all leather types?", answer: "Yes, our products are safe for all types of leather interiors." },
      { question: "Does it protect against spills?", answer: "Yes, the protective coating helps repel spills and makes cleaning easier." }
    ],
    relatedServices: ["interior-detailing", "interior-pre-cut"],
    beforeAfterImages: []
  }
};

export const getServiceById = (id: string): ServiceDetail | undefined => {
  return servicesData[id];
};

export const getAllServices = (): ServiceDetail[] => {
  return Object.values(servicesData);
};

export const getRelatedServices = (ids: string[]): ServiceDetail[] => {
  return ids.map(id => servicesData[id]).filter(Boolean);
};
