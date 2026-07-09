// Gallery Images Configuration
// Update this file to change gallery images - no need to edit components
// Supports both external URLs and local paths from public folder

export type FilterCategory = 'all' | 'ppf' | 'ceramic' | 'graphene' | 'detailing' | 'interior' | 'exterior' | 'wash' | 'polishing' | 'rust-protection' | 'alloy' | 'underbody' | 'engine-ac' | 'headlight' | 'restoration';

export interface GalleryImage {
  id: number;
  src: string;        // Main/After image URL or path
  alt: string;        // Description shown below image
  category: Exclude<FilterCategory, 'all'>;
  before?: string;    // Optional: Before image URL for comparison slider
}

// ============================================================
// UPDATE GALLERY IMAGES BELOW
// ============================================================
// Use external URLs: 'https://example.com/image.jpg'
// Or local images: '/images/gallery/your-image.jpg'
// Place local images in: public/images/gallery/
// ============================================================

export const galleryImages: GalleryImage[] = [
  // PPF (Paint Protection Film) Images
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=800&q=80',
    before: 'https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=800&q=80',
    alt: 'PPF Installation on Mercedes',
    category: 'ppf',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80',
    alt: 'Porsche PPF Application',
    category: 'ppf',
  },

  // Ceramic Coating Images
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1603386329225-868f9b1ee6c9?w=800&q=80',
    alt: 'Ceramic Coating Gloss',
    category: 'ceramic',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800&q=80',
    before: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    alt: 'BMW Ceramic Coating',
    category: 'ceramic',
  },

  // Detailing Images
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800&q=80',
    alt: 'Interior Detailing',
    category: 'detailing',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1542362567-b07e54358753?w=800&q=80',
    alt: 'Full Detail Service',
    category: 'detailing',
  },

  // Add more images below following the same format:
  // {
  //   id: 7,
  //   src: '/images/gallery/my-image-after.jpg',    // Local image from public folder
  //   before: '/images/gallery/my-image-before.jpg',  // Optional before image
  //   alt: 'My Custom Description',
  //   category: 'ceramic',  // Options: ppf, ceramic, graphene, detailing, interior, exterior, wash, polishing, rust-protection, alloy, underbody, engine-ac, headlight, restoration
  // },
];

// Filter labels shown in the gallery
export const galleryFilters: { value: FilterCategory; label: string }[] = [
  { value: 'all', label: 'All Work' },
  { value: 'ppf', label: 'PPF' },
  { value: 'ceramic', label: 'Ceramic' },
  { value: 'detailing', label: 'Detailing' },
];

// Helper function to get images by category
export const getImagesByCategory = (category: FilterCategory): GalleryImage[] => {
  if (category === 'all') return galleryImages;
  return galleryImages.filter(img => img.category === category);
};
