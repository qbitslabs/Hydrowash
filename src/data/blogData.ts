export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'ceramic-coating-vs-ppf',
    title: 'Ceramic Coating vs PPF: Which Protection Is Right for Your Car?',
    excerpt:
      'Compare ceramic coating and paint protection film to choose the best shield for your vehicle in Indian driving conditions.',
    image: '/images/blog/ceramic-coating-vs-ppf.png',
    category: 'Protection',
    author: 'HydroWash Team',
    date: '2026-03-10',
    readTime: '6 min read',
    content: [
      'Indian roads expose your car to stone chips, dust, UV rays, and monsoon moisture every single day. Two of the most popular long-term protection options are ceramic coating and paint protection film (PPF). Both preserve your paint, but they work in different ways.',
      'Ceramic coating is a liquid polymer applied to painted surfaces. It creates a hydrophobic layer that repels water, dust, and contaminants while adding deep gloss. It is ideal for owners who want easier washing, enhanced shine, and moderate protection against swirl marks and light scratches.',
      'PPF is a thick, transparent urethane film physically applied over the paint. It absorbs impacts from stones, gravel, and minor abrasions. Premium PPF also features self-healing technology that repairs light scratches with heat. It is the better choice for high-impact areas like the bonnet, bumper, and mirrors.',
      'Many HydroWash customers choose a hybrid approach: full-body or partial PPF on high-risk panels combined with ceramic coating on the rest of the vehicle. This delivers maximum protection where it matters most and keeps maintenance simple everywhere else.',
      'The right option depends on your driving habits, budget, and how long you plan to keep the car. City commuters often benefit from ceramic coating, while highway drivers and luxury car owners typically prefer PPF or a combined package.',
    ],
  },
  {
    id: 'monsoon-car-care-tips',
    title: '7 Essential Monsoon Car Care Tips Every Owner Should Know',
    excerpt:
      'Protect your car from rust, fungus, and water damage during the rainy season with these expert maintenance tips.',
    image: '/images/blog/monsoon-car-care-tips.png',
    category: 'Seasonal Care',
    author: 'HydroWash Team',
    date: '2026-02-22',
    readTime: '5 min read',
    content: [
      'Monsoon in India is tough on vehicles. Constant moisture, muddy roads, and trapped humidity can damage paint, interiors, and mechanical components if you are not careful.',
      'Start with a thorough underbody wash after heavy rains. Mud and salt trapped underneath accelerate rust on chassis components. A professional underbody treatment at the start of the season creates a protective barrier.',
      'Keep your cabin dry. Wet floor mats and damp upholstery lead to musty odors and mould. Use rubber mats, dry the interior after every wet drive, and run the AC on fresh-air mode occasionally to reduce humidity.',
      'Apply or refresh hydrophobic protection on glass and paint. Water beads off faster, reducing water spots and making visibility safer during downpours.',
      'Check door seals and drain channels. Blocked sunroof or door drains cause water to pool inside panels — a common source of electrical issues and interior leaks.',
      'Wax or ceramic-maintain your paint every few weeks during monsoon. The extra layer helps contaminants wash off instead of bonding to the clear coat.',
      'Finally, book a professional detail at least once during the season. Deep cleaning, interior sanitisation, and paint decontamination keep your car healthy until the dry months return.',
    ],
  },
  {
    id: 'paint-correction-guide',
    title: 'What Is Paint Correction and When Does Your Car Need It?',
    excerpt:
      'Learn how paint correction removes swirl marks and scratches to restore a mirror-like factory finish.',
    image: '/images/blog/paint-correction-guide.png',
    category: 'Detailing',
    author: 'HydroWash Team',
    date: '2026-02-05',
    readTime: '7 min read',
    content: [
      'Paint correction is a multi-stage machine polishing process that removes defects from your car\'s clear coat — swirl marks, light scratches, oxidation, and holograms left by improper washing.',
      'Most cars develop micro-scratches over time from automatic car washes, dry wiping, and contact with dust. Under direct sunlight these defects make the paint look dull, hazy, or spider-webbed even after a wash.',
      'At HydroWash, paint correction begins with a full decontamination wash and clay bar treatment to remove bonded contaminants. We then measure paint thickness and inspect under specialised lighting to plan the correction stages.',
      'Correction is performed using graded compounds and polishes with dual-action and rotary machines. Each pass removes a microscopic layer of clear coat until the surface is optically flat and reflective again.',
      'After correction, we strongly recommend sealing the finish with ceramic coating or PPF. Uncoated corrected paint will look stunning but will re-accumulate defects faster without ongoing protection.',
      'If your car is more than two years old and has never been professionally polished, or if you notice swirl marks under sunlight, it is likely a strong candidate for paint correction before your next coating application.',
    ],
  },
  {
    id: 'interior-detailing-benefits',
    title: 'Why Professional Interior Detailing Is Worth Every Rupee',
    excerpt:
      'Discover how deep interior cleaning improves hygiene, comfort, and resale value for your vehicle.',
    image: '/images/blog/interior-detailing-benefits.png',
    category: 'Interior',
    author: 'HydroWash Team',
    date: '2026-01-18',
    readTime: '4 min read',
    content: [
      'Your car\'s interior is where you spend the most time, yet it often receives the least care. Dust, food particles, sweat, and bacteria build up in seats, carpets, and air vents — especially in hot Indian climates.',
      'Professional interior detailing goes far beyond a vacuum and wipe-down. It includes steam cleaning, leather conditioning, fabric extraction, dashboard UV protection, and odour neutralisation.',
      'Steam cleaning kills bacteria without harsh chemicals, making it safer for families with children and pets. Extracting shampoo from fabric seats removes deep stains that household cleaners cannot reach.',
      'Leather seats need regular conditioning to prevent cracking and fading. Dashboard and door panels benefit from UV protectants that stop premature ageing and sticky surfaces.',
      'A well-maintained interior significantly improves resale value. Buyers notice clean, fresh-smelling cabins immediately — it signals that the entire vehicle has been cared for.',
      'We recommend a full interior detail every six months, or quarterly for cars used daily in dusty or humid conditions.',
    ],
  },
  {
    id: 'how-often-to-wash-car',
    title: 'How Often Should You Wash Your Car in India?',
    excerpt:
      'A practical washing schedule based on climate, usage, and whether your car has protective coatings.',
    image: '/images/blog/how-often-to-wash-car.png',
    category: 'Maintenance',
    author: 'HydroWash Team',
    date: '2026-01-02',
    readTime: '4 min read',
    content: [
      'There is no single answer to how often you should wash your car — it depends on where you drive, how you park, and what protection your paint has.',
      'As a general rule, wash every one to two weeks if your car is parked outdoors in a city. Dust, bird droppings, and tree sap bond to paint within days and can cause permanent etching if left untreated.',
      'Cars with ceramic coating or PPF can go slightly longer between washes because contaminants sit on top of the protection layer rather than bonding to paint. However, regular washing still extends coating life.',
      'Never use household detergents or dry cloth wiping. Both strip wax, damage clear coat, and create swirl marks. Use pH-neutral car shampoo and the two-bucket method for safe home washing.',
      'After monsoon drives or long highway trips, wash as soon as possible. Road film, brake dust, and insect residue are acidic and become harder to remove the longer they sit.',
      'Professional detailing every three to six months complements your regular washes with decontamination, interior care, and protection refresh — keeping your car looking new year-round.',
    ],
  },
  {
    id: 'summer-uv-protection',
    title: 'Summer UV Protection: Keeping Your Car\'s Paint and Interior Safe',
    excerpt:
      'Intense Indian summers can fade paint and crack dashboards. Here is how to fight back.',
    image: '/images/blog/summer-uv-protection.png',
    category: 'Seasonal Care',
    author: 'HydroWash Team',
    date: '2025-12-15',
    readTime: '5 min read',
    content: [
      'Summer temperatures in Rajasthan and across North India regularly exceed 40°C. Prolonged UV exposure fades paint, yellows headlights, and dries out leather and plastic interiors.',
      'Parking in shade helps, but it is not always possible. Ceramic coatings with UV inhibitors reflect harmful rays and slow oxidation significantly compared to bare clear coat.',
      'Window tinting (where legally permitted) reduces cabin heat and protects upholstery from sun damage. Combined with sunshades for the windshield, it keeps interior temperatures manageable.',
      'Dashboard and trim dressings with UV blockers prevent cracking and fading. Avoid silicone-based products that attract dust — use professional-grade protectants instead.',
      'Headlight restoration and PPF on headlights prevent yellowing and maintain night visibility. Cloudy headlights are both a safety issue and a cosmetic eyesore.',
      'Before peak summer, book a protection check at HydroWash. We assess your coating condition, refresh hydrophobic layers, and treat interior surfaces so your car survives the season looking its best.',
    ],
  },
];

export const getAllBlogPosts = (): BlogPost[] =>
  [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

export const getBlogPostById = (id: string): BlogPost | undefined =>
  blogPosts.find((post) => post.id === id);

export const getRelatedBlogPosts = (id: string, limit = 3): BlogPost[] => {
  const current = getBlogPostById(id);
  if (!current) return getAllBlogPosts().slice(0, limit);

  const sameCategory = blogPosts.filter(
    (post) => post.id !== id && post.category === current.category
  );
  const others = blogPosts.filter(
    (post) => post.id !== id && post.category !== current.category
  );

  return [...sameCategory, ...others].slice(0, limit);
};
