# Vinuta Lakshmi Tilak - Portfolio Website

A modern, responsive portfolio website showcasing work in business strategy, innovation, and project management.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless experience across all devices
- **Interactive Projects**: Expandable project cards with detailed slideshows
- **Contact Form**: Integrated contact form with Web3Forms
- **Smooth Animations**: Scroll-triggered animations and transitions
- **Accessibility**: ARIA labels, keyboard navigation, and semantic HTML

## 📁 Project Structure

```
vinuta-portfolio/
├── public/
│   ├── index.html          # Home page
│   ├── projects.html       # Projects showcase page
│   ├── about.html          # About page
│   ├── styles.css          # Main stylesheet
│   ├── script.js           # Main JavaScript file
│   ├── [project folders]   # Project assets (images, videos)
│   └── [unused pages]      # Legacy project detail pages (not linked)
└── src/
    └── components/         # (Reserved for future component system)
```

## 🛠️ Setup & Development

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vinuta-portfolio
   ```

2. **Start a local server**

   Using Python (recommended):
   ```bash
   cd public
   python -m http.server 3000
   ```

   Using Node.js:
   ```bash
   cd public
   npx serve -l 3000
   ```

3. **Open in browser**
   ```
   http://localhost:3000
   ```

### GitHub Pages Deployment

1. Push code to GitHub repository
2. Go to repository Settings → Pages
3. Select source branch (usually `main` or `master`)
4. Select `/public` as the root directory (or move files to root)
5. Your site will be live at: `https://[username].github.io/[repository-name]`

**Note:** If your files are in the `public` folder, you may need to:
- Move all files from `public/` to root, OR
- Configure GitHub Pages to use `/public` as the source directory

## 📝 Configuration

### Contact Form

The contact form uses Web3Forms for email delivery. The API key is configured in `public/script.js`:

```javascript
const WEB3FORMS_ACCESS_KEY = 'your-key-here';
```

**Security Note:** For production, consider moving the API key to environment variables or a server-side proxy.

## 🎨 Customization

### Colors

Edit CSS variables in `public/styles.css`:

```css
:root {
    --color-delft-blue: #22396D;
    --color-powder-blue: #B4CDED;
    --color-teal: #087E8B;
    --color-melon: #FFA69E;
    /* ... */
}
```

### Content

- **Home page**: Edit `public/index.html`
- **Projects**: Edit `public/projects.html`
- **About**: Edit `public/about.html`

## 📄 Unused Files

The following files exist but are not linked in the main navigation:
- `project-analytics.html`
- `project-innovation.html`
- `project-strategy.html`
- `project-transformation.html`

These can be removed or linked in the future if needed.

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🐛 Known Issues

- Large JavaScript file (1,278 lines) - could be split into modules
- Large CSS file (4,871 lines) - could be organized into modules
- Multiple DOMContentLoaded listeners - could be consolidated

See `CODE_REVIEW.md` for detailed improvement suggestions.

## 📄 License

This project is personal portfolio work. All rights reserved.

## 👤 Author

**Vinuta Lakshmi Tilak**
- Email: vinutatilak@gmail.com
- LinkedIn: [linkedin.com/in/vinutatilak](https://www.linkedin.com/in/vinutatilak/)
- GitHub: [github.com/VinutaTilak](https://github.com/VinutaTilak/)

---

**Last Updated:** January 2025

