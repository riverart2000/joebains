# Company Logo Instructions

## How to Add Company Logos

Each work experience now has a placeholder for company logos. Here's how to add them:

### Current Logos (Already Added)
- ✅ **altodigital-logo.png** - Alto Digital
- ✅ **bt-logo.png** - BT Syncordia Solutions

### Logos to Add

Add these logo files to `src/assets/` folder:

1. **placeholder-dlexia.png** → dlexia.com
2. **placeholder-pcs.png** → Professional Cosmetic Surgery
3. **placeholder-cloudlynx.png** → Cloudlynx AG
4. **placeholder-swisscom.png** → Swisscom
5. **placeholder-sky.png** → BSKYB
6. **placeholder-game.png** → Game.co.uk
7. **placeholder-tmobile.png** → T-Mobile/Everything Everywhere
8. **placeholder-vodafone.png** → Vodafone Global
9. **placeholder-eds.png** → EDS
10. **placeholder-o2.png** → O2
11. **placeholder-capgemini.png** → Cap Gemini
12. **placeholder-btcellnet.png** → BTCellnet/Genie

### Steps to Replace a Placeholder:

1. **Get the logo file** (PNG, JPG, or SVG format recommended)

2. **Copy to assets folder:**
   - Save the file to `src/assets/` with the exact name (e.g., `placeholder-vodafone.png`)

3. **Update the Experience component:**
   Open `src/components/Experience.tsx` and add to the `availableLogos` object:

   ```typescript
   const availableLogos: { [key: string]: string } = {
     "altodigital-logo.png": altodigitalLogo,
     "bt-logo.png": btLogo,
     "placeholder-vodafone.png": vodafoneLogo,  // Add this line
   };
   ```

4. **Import the logo at the top:**
   ```typescript
   import vodafoneLogo from "@/assets/placeholder-vodafone.png";
   ```

5. **Update the JSON:**
   In `src/data/portfolio.json`, change the filename if needed (optional - you can keep placeholder names)

### Logo Guidelines:
- **Recommended size:** 400x400px or larger
- **Format:** PNG with transparent background preferred
- **Aspect ratio:** Square or landscape works best
- **File size:** Keep under 100KB for faster loading

### Visual Placeholders
Until you add the actual logos, each experience shows:
- Building icon (📋)
- "Add Logo" text
- Company name reference at bottom

This makes it easy to see which logos still need to be added!
