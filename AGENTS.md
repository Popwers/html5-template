# AGENTS.md - AI Coding Agent Guide

## Project Overview

Static HTML5 website template with SCSS, jQuery, and Apache configuration. No build system configured - manual compilation required.

## Directory Structure

```
html5-template/
├── css/
│   ├── grid.css           # Bootstrap Grid v5.2.0 (DO NOT EDIT)
│   ├── normalize.min.css  # Normalize.css (DO NOT EDIT)
│   ├── normalize.scss     # Normalize SCSS source
│   ├── style.scss         # Main stylesheet (EDIT THIS)
│   └── style.min.css      # Compiled output
├── js/
│   ├── main.js            # Development source (EDIT THIS)
│   ├── main.prod.js       # Minified production
│   ├── plugins.js         # Console polyfill (DO NOT EDIT)
│   └── owlcarousel/       # Owl Carousel (DO NOT EDIT)
├── index.html             # Main entry point
├── 404.html               # Error page
├── .htaccess              # Apache configuration
└── site.webmanifest       # PWA manifest
```

## Build Commands

```bash
# No package.json - use external tools

# SCSS compilation (use your preferred tool)
sass css/style.scss css/style.min.css --style=compressed

# JavaScript minification (use your preferred tool)
terser js/main.js -o js/main.prod.js -c -m

# Local server (Python)
python -m http.server 8000

# Local server (PHP)
php -S localhost:8000
```

## Technology Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 with semantic elements |
| Styles | SCSS, Bootstrap Grid 5.2.0 |
| Scripts | jQuery 3.6.0, Owl Carousel |
| Server | Apache (.htaccess) |
| CDN | Cloudflare Polyfill, Google CDN |

## Code Style

### SCSS Guidelines

```scss
// Use defined variables - never hardcode colors
$black: #000;
$white: #fff;
$grey: #707070;
$bleu-fonce: #01035c;
$bleu-clair: #0000ff;
$violet-fonce: #28004a;
$violet-clair: #660099;
$orange: #ff6600;

// Font variables
$title-font: 'Chewy', cursive;
$regular-font: 'Montserrat', sans-serif;

// Size variables (base: 20px)
$extraLarge: 3.75rem;  // ~75px
$large: 2.13rem;       // ~42.6px
$medium: 1.6rem;       // ~32px

// Always use rem units (1rem = 20px)
.element {
    padding: 1rem;      // 20px
    font-size: 0.8rem;  // 16px
}

// Add responsive styles at bottom in media queries
@media screen and (max-width: 992px) { }
@media screen and (max-width: 767px) { }
@media screen and (max-width: 425px) { }
```

### JavaScript Guidelines

```javascript
// Wrap in IIFE with jQuery alias
(function ($) {
    $(document).ready(function () {
        // All code inside document.ready
        
        // Use arrow functions for callbacks
        $('.element').click(e => {
            e.preventDefault();
        });
        
        // Check element exists before initializing
        if ($('.owl-carousel').length) {
            $('.owl-carousel').owlCarousel({ /* options */ });
        }
    });
})(jQuery);
```

### HTML Guidelines

```html
<!-- Use semantic HTML5 elements -->
<header></header>
<main></main>
<footer></footer>

<!-- Bootstrap Grid for layout -->
<div class="container">
    <div class="row">
        <div class="col-12 col-md-6 col-lg-4">Content</div>
    </div>
</div>

<!-- Script loading: defer for dependencies, async for independent -->
<script defer src="jquery.min.js"></script>
<script defer src="main.prod.js"></script>
<script async src="plugins.js"></script>
```

## Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| CSS classes | kebab-case | `.mobile-menu`, `.nav-item` |
| SCSS variables | kebab-case with $ | `$bleu-fonce`, `$title-font` |
| JS functions | camelCase | `closeAllSelect()` |
| Files | kebab-case | `style.min.css`, `main.prod.js` |

## Important Rules

### ALWAYS

- Edit `css/style.scss` for styles (never `style.min.css`)
- Edit `js/main.js` for scripts (never `main.prod.js`)
- Use existing SCSS variables for colors and fonts
- Use rem units (base 20px) for sizing
- Use Bootstrap Grid classes for layout
- Keep scripts inside `$(document).ready()`
- Use semantic HTML5 elements
- Include Open Graph meta tags on new pages
- Follow mobile-first responsive approach

### NEVER

- Edit third-party files: `grid.css`, `normalize.min.css`, `owlcarousel/*`, `plugins.js`
- Hardcode colors - use SCSS variables
- Use px units - use rem (1rem = 20px)
- Put scripts outside IIFE/document.ready
- Remove `defer`/`async` from script tags
- Change `lang="fr"` without explicit request

## CSS Custom Properties

```css
:root {
    --header-height: 80px;
}
```

## File Editing Workflow

### Styles
1. Edit `css/style.scss`
2. Compile to `css/style.min.css`
3. Test in browser

### JavaScript
1. Edit `js/main.js`
2. Minify to `js/main.prod.js`
3. Test in browser

### New Pages
1. Copy `index.html`
2. Update `<title>` and meta tags
3. Add content in `<main>`

## Security (Cursor Rules)

When generating new code:
1. Run security scan on new first-party code
2. Fix any security issues found
3. Rescan until no issues remain

## External Dependencies

- **jQuery 3.6.0**: Google CDN (defer)
- **Polyfill.io**: Cloudflare CDN (defer)
- **Owl Carousel**: Local files in `js/owlcarousel/`
- **Bootstrap Grid 5.2.0**: Local `css/grid.css`
