# CLAUDE.md - AI Assistant Guide for HTML5 Template

## Project Overview

This is a static HTML5 website template designed for building modern, responsive websites. It provides a boilerplate structure with pre-configured CSS, JavaScript, and Apache server settings optimized for performance and security.

## Directory Structure

```
html5-template/
├── css/
│   ├── grid.css           # Bootstrap Grid v5.2.0 (minified)
│   ├── normalize.min.css  # Normalize.css for cross-browser consistency
│   ├── normalize.scss     # Normalize SCSS source
│   ├── style.scss         # Main stylesheet source (SCSS)
│   └── style.min.css      # Compiled/minified CSS output
├── js/
│   ├── main.js            # Main JavaScript source (development)
│   ├── main.prod.js       # Minified production JavaScript
│   ├── plugins.js         # Console polyfill and helper plugins
│   └── owlcarousel/       # Owl Carousel library files
│       ├── owl.carousel.min.js
│       ├── owl.carousel.min.css
│       └── owl.theme.default.min.css
├── index.html             # Main HTML entry point
├── 404.html               # Custom 404 error page
├── .htaccess              # Apache server configuration
├── site.webmanifest       # PWA manifest file
├── browserconfig.xml      # Windows tile configuration
├── robots.txt             # Search engine crawling rules
├── favicon.ico            # Browser favicon
├── icon.png               # PWA icon (192x192)
├── tile.png               # Windows tile icon
└── tile-wide.png          # Windows wide tile icon
```

## Technology Stack

- **HTML5**: Semantic markup with Open Graph meta tags
- **CSS**: SCSS preprocessor with Bootstrap Grid 5.2.0
- **JavaScript**: jQuery 3.6.0 + Owl Carousel
- **Server**: Apache with comprehensive .htaccess configuration
- **Polyfills**: Cloudflare ES5/ES6/ES7 polyfill service

## Key Files and Their Purpose

### HTML Files

- `index.html`: Main template with French language (`lang="fr"`). Contains basic semantic structure (`<header>`, `<main>`, `<footer>`) and loads all CSS/JS dependencies.
- `404.html`: Self-contained error page with embedded styles.

### Stylesheets

- `css/style.scss`: Primary stylesheet containing:
  - SCSS variables for colors, fonts, and sizing
  - Typography system with responsive font sizes
  - Form styling templates (commented, ready to enable)
  - Lazy loading animation support for LiteSpeed
  - Responsive breakpoints at 992px, 767px, and 425px

**Color Variables:**
```scss
$black: #000;
$white: #fff;
$grey: #707070;
$bleu-fonce: #01035c;
$bleu-clair: #0000ff;
$violet-fonce: #28004a;
$violet-clair: #660099;
$orange: #ff6600;
```

**Font Variables:**
```scss
$title-font: 'Chewy', cursive;
$regular-font: 'Montserrat', sans-serif;
$extraLarge: 3.75rem;  // ~75px at 20px base
$large: 2.13rem;       // ~42.6px
$medium: 1.6rem;       // ~32px
```

### JavaScript Files

- `js/main.js`: Development source with:
  - Owl Carousel initialization for `.owl-carousel` elements
  - Mobile menu burger toggle functionality
  - Commented custom select input handler

- `js/main.prod.js`: Minified production version of main.js
- `js/plugins.js`: Console method polyfill for older browsers

### Server Configuration

`.htaccess` provides:
- CORS headers (commented, configurable)
- IE document mode forcing
- UTF-8 character encoding
- HTTPS redirection (commented, ready to enable)
- Clickjacking protection via X-Frame-Options
- Content Security Policy template
- Directory listing prevention
- Hidden file protection
- GZIP/Brotli compression
- Cache expiration rules (1 year for CSS/JS, 1 month for images)
- ETags removal for better caching

## Development Workflow

### Editing Styles

1. Edit `css/style.scss` for style changes
2. Compile SCSS to CSS and minify to `css/style.min.css`
3. No build tool is configured - use your preferred SCSS compiler

### Editing JavaScript

1. Edit `js/main.js` for JavaScript changes
2. Minify to `js/main.prod.js` for production
3. Production file is loaded in `index.html`

### Adding New Pages

1. Copy `index.html` as a starting point
2. Update `<title>`, meta description, and Open Graph tags
3. Add content within `<main>` element

## Important Conventions

### CSS Conventions

- Base font size is 20px (`html { font-size: 20px !important; }`)
- Use rem units for sizing (relative to 20px base)
- CSS custom property: `--header-height: 80px`
- Smooth scrolling is enabled globally
- Text rendering optimized with `geometricPrecision` and font smoothing

### JavaScript Conventions

- jQuery is loaded from Google CDN with `defer`
- Main scripts use `defer` for non-blocking load
- Plugins use `async` for independent loading
- Wrap code in IIFE with jQuery: `(function ($) { ... })(jQuery);`
- Wait for DOM ready: `$(document).ready(function () { ... });`

### HTML Conventions

- Use semantic HTML5 elements
- Preload critical CSS with `preload` attribute
- Place scripts at end of `<body>`
- Include Open Graph meta tags for social sharing
- Default language is French (`lang="fr"`)

## External Dependencies

All loaded via CDN:
- **Polyfill.io** (Cloudflare): ES5/ES6/ES7 features
- **jQuery 3.6.0**: Google CDN
- **Owl Carousel**: Local files in `js/owlcarousel/`

## PWA Support

The template includes PWA basics:
- `site.webmanifest`: App manifest with icon and theme color (#fafafa)
- `icon.png`: 192x192 PWA icon
- Apple touch icon configured
- Theme color meta tag

## Security Headers (via .htaccess)

Enabled by default:
- `X-UA-Compatible: IE=edge`
- `X-Content-Type-Options: nosniff`

Available (commented):
- `X-Frame-Options: DENY`
- `Content-Security-Policy`
- `Strict-Transport-Security`
- `X-XSS-Protection`
- `Referrer-Policy`

## Common Tasks for AI Assistants

### When modifying styles:
1. Edit `css/style.scss`
2. Follow existing variable naming patterns
3. Use the defined color and font variables
4. Add responsive styles in the media query sections at bottom

### When modifying JavaScript:
1. Edit `js/main.js`
2. Follow jQuery patterns with `$` alias
3. Keep code within the document.ready handler
4. Remember to minify for production

### When adding components:
1. Use Bootstrap Grid classes for layout (`container`, `row`, `col-*`)
2. Use existing typography classes (`.h1`-`.h6`)
3. Follow mobile-first responsive approach

### When configuring server:
1. Uncomment relevant sections in `.htaccess`
2. Test security headers with online validators
3. Adjust cache durations as needed

## Files to Never Edit

- `css/grid.css` - Bootstrap Grid (use CDN or update the whole file)
- `css/normalize.min.css` - Third-party library
- `js/owlcarousel/*` - Third-party library
- `js/plugins.js` - Polyfill only, rarely needs changes

## Notes

- No package.json or build system is configured
- SCSS compilation must be done manually or with external tools
- The template targets modern browsers with polyfill fallback
- Apache server is assumed (`.htaccess` configuration)
