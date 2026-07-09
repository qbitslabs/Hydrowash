// Our Work Section - Before/After Images Configuration
// Update this file to change the before/after images in the Our Work section
// Supports both external URLs and local paths from public folder

import { Shield, Droplets, Sparkles } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface WorkCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  description: string;
  beforeImage: string;  // Before image URL or path
  afterImage: string;   // After image URL or path
  stats: { value: string; label: string }[];
  features: string[];
}

// ============================================================
// UPDATE BEFORE/AFTER IMAGES BELOW
// ============================================================
// Use external URLs: 'https://example.com/image.jpg'
// Or local images: '/images/ourwork/your-image.jpg'
// Place local images in: public/images/ourwork/
// ============================================================

export const workCategories: WorkCategory[] = [
  {
    id: 'ppf',
    title: 'Paint Protection Film',
    icon: Shield,
    description: 'Invisible armor that shields your paint from rock chips, scratches, and environmental damage with self-healing technology.',
    beforeImage: '/images/Before%20PPF.webp',
    afterImage: '/images/After%20PPF.webp',
    stats: [
      { value: '150+', label: 'PPF Jobs' },
      { value: '5yr', label: 'Warranty' },
    ],
    features: ['Self-healing technology', 'UV protection', 'Invisible finish', 'Stone chip protection'],
  },
  {
    id: 'ceramic',
    title: 'Ceramic Coating',
    icon: Droplets,
    description: 'Professional-grade 9H ceramic coating that provides years of hydrophobic protection with a stunning mirror-like finish.',
    // Update these paths with your Ceramic before/after images
    beforeImage: '/images/Before%20CC.webp',
    afterImage: '/images/After%20CC.webp',
    stats: [
      { value: '450+', label: 'Coatings' },
      { value: '2yr', label: 'Protection' },
    ],
    features: ['9H hardness', 'Hydrophobic', 'Chemical resistant', 'UV protection'],
  },
  {
    id: 'detailing',
    title: 'Deep Detailing',
    icon: Sparkles,
    description: 'Complete interior and exterior restoration service that brings your vehicle back to showroom condition.',
    // Update these paths with your Detailing before/after images
    beforeImage: '/images/Before%20DC.webp',
    afterImage: '/images/After%20DC.webp',
    stats: [
      { value: '800+', label: 'Cars Detailed' },
      { value: '4.9★', label: 'Rating' },
    ],
    features: ['Paint correction', 'Interior restoration', 'Engine bay cleaning', 'Leather treatment'],
  },
];

// Example with local images (commented out):
// {
//   id: 'ppf',
//   title: 'Paint Protection Film',
//   icon: Shield,
//   description: 'Invisible armor that shields your paint...',
//   beforeImage: '/images/ourwork/ppf-before.jpg',  // Place in public/images/ourwork/
//   afterImage: '/images/ourwork/ppf-after.jpg',
//   stats: [...],
//   features: [...],
// },
