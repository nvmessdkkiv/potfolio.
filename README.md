# THARSHINI.K — Personal Portfolio Website

> **First-Year B.Sc. Artificial Intelligence and Data Science Student**  
> **KPR College of Arts, Science and Research**  
> Official Contact: [tharshinikrt07@gmail.com](mailto:tharshinikrt07@gmail.com)

A modern, high-contrast personal portfolio website built with semantic HTML5, modern CSS3, and vanilla JavaScript. Designed with an elegant palette of Pure White, Soft Lavender (`#F8F7FF`), Charcoal Black (`#191827`), and Subtle Purple (`#6854C8`).

---

## 🌟 Key Highlights & Design Decisions

- **Zero-Fading, Solid Contrast Typography**: All headings, descriptions, and labels use solid, high-contrast color tokens (`#191827`, `#25233B`, `#53506D`, `#6854C8`). Text is guaranteed visible by default, even if external fonts or JavaScript fail.
- **CSS clamp() Responsive Scaling**: Fluid typography and spacing that automatically adapt between small phones (320px) up to ultra-wide desktop monitors (1920px).
- **Sticky Blur Navigation**: Sticky header with modern backdrop-blur and responsive mobile drawer navigation with complete ARIA keyboard accessibility.
- **Progressive Enhancement**: Smooth scroll-reveal animations are managed via `IntersectionObserver` with a failsafe timer and respect for `prefers-reduced-motion: reduce`.
- **Honest Academic Profile**: Accurately showcases foundational competencies, course subjects, and three "Coming Soon" projects without fabricated claims or social media links.
- **Interactive Contact Features**:
  - Direct mailto integration with structured subject and body encoding.
  - One-click copy email button with custom toast notification.
  - Validated contact form that opens the user's native email application.
- **Zero Build Dependencies**: Native HTML/CSS/JS that runs directly in any browser with no `npm install` or compilation required.

---

## 🎨 Color Palette & Design Tokens

| Token Name | Hex Code | Purpose |
| :--- | :--- | :--- |
| **Pure White** | `#FFFFFF` | Primary cards, button text, clean surfaces |
| **Soft Lavender** | `#F8F7FF` | Page background, subtle section contrast |
| **Charcoal Black** | `#191827` | Headings, hero greeting, footer background |
| **Subtle Purple** | `#6854C8` | Primary brand accent, interactive buttons, highlights |
| **Purple Tint** | `#F0EDFD` | Status badges, icon wrappers, hover backgrounds |
| **Deep Text** | `#25233B` | Solid body text (11.5:1 contrast against white) |
| **Muted Text** | `#53506D` | Subtitles, meta tags, descriptive details |

---

## 📂 Project Structure

```text
tharshini-portfolio/
├── index.html            # Semantic HTML5 single-page portfolio
├── style.css             # Modern CSS tokens, responsive clamp, zero-fading rules
├── main.js               # Vanilla JS for drawer, scrollspy, clipboard & mailto
├── og-preview.svg        # High-resolution Open Graph preview card
├── deploy-to-vercel.bat  # 1-Click Windows script to deploy directly to Vercel
├── vercel.json           # Vercel deployment configuration & cache headers
├── netlify.toml          # Netlify publish & security headers configuration
├── render.yaml           # Render static site deployment blueprint
└── README.md             # Complete project guide & documentation
```

---

## 💻 How to Preview and Edit Locally

### Option 1: Double-click to open
Simply double-click `index.html` in your file explorer. It will open in Google Chrome, Microsoft Edge, Safari, or Firefox immediately.

### Option 2: Using VS Code Live Server
1. Open Visual Studio Code.
2. Select **File > Open Folder...** and choose `tharshini-portfolio`.
3. Right-click `index.html` and click **Open with Live Server**.
4. The site will launch at `http://127.0.0.1:5500`.

---

## 📝 How to Update Your Information

### 1. Adding New Certifications
Open `index.html`, navigate to the `<section id="achievements">` area, and edit:
- **Title**: Replace the placeholder title with your verified certificate name.
- **Issuing Organization**: Change `[e.g. Coursera / NPTEL / IBM / Google]` to the official provider.
- **Date**: Add the completion month and year.
- **Description**: Add a 1–2 sentence summary of key skills learned.

### 2. Updating Projects When Ready
Navigate to `<section id="projects">`. When you complete your project:
- Replace the "Coming Soon" badge with "Completed" or "Live Demo".
- Add a direct link to your GitHub repository or live demo.

### 3. Modifying Contact Details
Search for `tharshinikrt07@gmail.com` in `index.html` and `js/main.js` to update your email or add phone/social media links when created.

---

## 🚀 One-Click Production Deployment

### Deploy to Vercel
1. Push this folder to a GitHub repository or drag-and-drop on [vercel.com](https://vercel.com).
2. Framework Preset: **Other**.
3. Root Directory: `./`.
4. Click **Deploy**. Vercel will read `vercel.json` automatically.

### Deploy to Netlify
1. Go to [app.netlify.com](https://app.netlify.com).
2. Drag and drop the `tharshini-portfolio` folder directly into the Netlify Drop zone.
3. Your site is live with HTTPS and custom domain support in under 10 seconds!

### Deploy to Render
1. Create a new **Static Site** on [render.com](https://render.com).
2. Connect your Git repository.
3. Publish directory: `./`.
4. Build command: *(leave empty)*.
5. Click **Create Static Site**.

---

## 📱 Viewport Verification Checklist

| Resolution | Device Class | Status |
| :--- | :--- | :--- |
| **320px** | iPhone SE (1st gen) | Verified — Zero horizontal overflow, compact cards |
| **360px** | Samsung Galaxy S-series | Verified — Comfortable tap targets, stacked CTA |
| **375px / 390px** | iPhone 12/13/14/15/16 | Verified — Fluid clamp typography, balanced grid |
| **430px** | iPhone Pro Max | Verified — Razor-sharp icons, optimal line length |
| **768px** | iPad Portrait / Tablets | Verified — Adaptive 2-column cards, drawer menu |
| **1024px** | iPad Landscape / Small Laptops | Verified — Full desktop nav, side-by-side hero |
| **1440px / 1920px** | Full HD Desktop Monitors | Verified — Centered 1200px max container, rich shadows |

---

## 📄 License & Credits

Designed & Developed for **THARSHINI.K**  
Student at **KPR College of Arts, Science and Research**, Coimbatore, Tamil Nadu.
All content and code are crafted for personal academic and professional use.
