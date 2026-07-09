# Transformation Gallery - Auto-Loading Image Folder

## How It Works
Simply add images to these folders and they automatically appear on the website. **No code editing needed!**

## Folder Structure

```
public/images/gallery/
├── ppf/              # Paint Protection Film (PPF)
├── ceramic/          # Ceramic Coating
├── graphene/         # Graphene Coating
├── detailing/        # Complete Detailing
├── interior/         # Interior Cleaning
├── exterior/         # Exterior Detailing
├── wash/             # Hydrowash & Wax
├── polishing/        # Rubbing & Polishing
├── rust-protection/  # Anti Rust Coating
├── alloy/            # Alloy Wheel Treatment
├── underbody/        # Underbody Coating
├── engine-ac/        # Engine & AC Treatment
├── headlight/        # Headlight Restoration
└── restoration/      # Other Restoration Work
```

**All 14 service folders included!**

## How to Add Images

### 1. Single Images (No Before/After)
Just drop your image file into the appropriate folder:
- `ceramic/my-work.webp`
- `ppf/mercedes-benz.jpg`

### 2. Before/After Pairs (With Comparison Slider)
Name your files as a pair:
- `ceramic/car-1.webp` (After image)
- `ceramic/car-1-before.webp` (Before image)

**Naming patterns for "before" images:**
- `name-before.webp`
- `name-b4.webp`

The gallery will automatically show a slider when both before and after exist.

## Supported File Types
- `.webp` (Recommended - best quality/size)
- `.jpg` / `.jpeg`
- `.png`

## Tips
- Use **WebP format** for best performance
- Keep images under **1MB** for fast loading
- Recommended size: **800px width**
- Use **descriptive filenames** (they become the caption)
  - `bmw-ceramic-coating.webp` → shows as "Bmw Ceramic Coating"
  - `ppf-tesla-model-3.webp` → shows as "Ppf Tesla Model 3"

## Examples

### Adding a ceramic coating result:
```
copy ceramic-after.webp public/images/gallery/ceramic/my-car.webp
```

### Adding before/after pair:
```
copy before.jpg public/images/gallery/ppf/bumper-before.jpg
copy after.jpg public/images/gallery/ppf/bumper.jpg
```

### Organizing by Service Category:
| Service | Folder |
|---------|--------|
| Paint Protection Film (PPF) | `ppf/` |
| Ceramic Coating | `ceramic/` |
| Graphene Coating | `graphene/` |
| Complete Detailing | `detailing/` |
| Interior Cleaning | `interior/` |
| Exterior Detailing | `exterior/` |
| Hydrowash & Wax | `wash/` |
| Rubbing & Polishing | `polishing/` |
| Anti Rust Coating | `rust-protection/` |
| Alloy Wheel Treatment | `alloy/` |
| Underbody Coating | `underbody/` |
| Engine Coating & AC Treatment | `engine-ac/` |
| Headlight Restoration | `headlight/` |
| Other Restoration | `restoration/` |

## Rebuild Required
After adding/removing images, rebuild the site to see changes:
```bash
npm run build
```

Or for development:
```bash
npm run dev
```
(Changes appear after refreshing the page)
