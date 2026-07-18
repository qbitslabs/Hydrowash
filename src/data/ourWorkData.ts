// Our Work Section - Before/After Images Configuration
// Update this file to change the before/after images in the Our Work section
// Supports both external URLs and local paths from public folder

import { Shield, Droplets, Sparkles, Sun, Palette } from 'lucide-react';
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
      { value: '8yr', label: 'Warranty' },
    ],
    features: ['Self-healing technology', 'UV protection', 'Invisible finish', 'Stone chip protection'],
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
  {
    id: 'headlight-restoration',
    title: 'Headlight Restoration',
    icon: Sun,
    description: 'Professional wet-sanding, polishing, and UV sealing that restores foggy or yellowed headlights to crystal-clear clarity.',
    beforeImage: '/images/Before%20HR.webp',
    afterImage: '/images/After%20HR.webp',
    stats: [
      { value: '90%', label: 'Light Restored' },
      { value: '2yr', label: 'UV Protection' },
    ],
    features: ['Wet-sanding process', 'Crystal-clear finish', 'UV-resistant sealant', 'Safer night driving'],
  },
  {
    id: 'car-wrap',
    title: 'Car Wrap',
    icon: Palette,
    description: 'Premium vinyl wraps give your vehicle a distinctive new look while protecting its original paint from daily wear.',
    beforeImage: '/images/Before%20Wrap.webp',
    afterImage: '/images/After%20Wrap.webp',
    stats: [
      { value: '100+', label: 'Wraps Applied' },
      { value: '3yr', label: 'Durability' },
    ],
    features: ['Premium vinyl film', 'Custom colour options', 'Paint protection', 'Removable finish'],
  },

  {
    id: 'Engine Treatment',
    title: 'Engine Treatment',
    icon: Palette,
    description: 'Professional-grade engine treatment that restores the original shine and protection of your vehicle\'s engine.',
    beforeImage: '/images/Before%20ET.webp',
    afterImage: '/images/After%20ET.webp',
    stats: [
      { value: '150+', label: 'Engines Treated' },
      { value: '30 Min ', label: 'Service Time' },
    ],
    features: ['Professional-grade treatment', 'Original shine restoration', 'Protection from corrosion', 'Long-lasting finish'],
  },
  {
    id: 'Alloy Treatment',
    title: 'Alloy Treatment',
    icon: Palette,
    description: 'Professional-grade alloy treatment that restores the original shine and protection of your vehicle\'s alloy wheels.',
    beforeImage: '/images/Before%20AT.webp',
    afterImage: '/images/After%20AT.webp',
    stats: [
      { value: '100+', label: 'Alloy Wheels Treated' },
      { value: 'Premium', label: 'Alloy Care' },
    ],
    features: ['Professional-grade treatment', 'Original shine restoration', 'Protection from corrosion', 'Long-lasting finish'],
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
