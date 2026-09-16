# html5-template

Static HTML5 template. SCSS, jQuery, Apache. The repo has no `package.json`, no Vite+ `vp`, no Makefile, no anti-slop, and no `@shadcn/lint`. Those stay out.

## Files

| Source | What the page loads or what stays vendored |
|--------|--------------------------------------------|
| `css/style.scss` | `css/style.min.css` |
| `js/main.js` | `js/main.prod.js` |
| `index.html`, `404.html` | `css/grid.css`, `css/normalize.min.css`, `js/plugins.js`, `js/owlcarousel/` |

`index.html` is `lang="fr"`. It loads `css/style.min.css` and `js/main.prod.js`.

## Stack

- Markup: HTML5 (`header`, `main`, `footer`) and Bootstrap Grid 5.2.0 classes (`container`, `row`, `col-*`).
- Styles: SCSS tokens live at the top of `css/style.scss` (`$bleu-fonce`, `$orange`, and the rest). `html { font-size: 20px }` so `1rem` is 20px.
- Scripts: jQuery 3.6.0 from Google CDN, Owl Carousel from `js/owlcarousel/`, Cloudflare polyfill. Page scripts sit in `(function ($) { $(document).ready(function () { ... }); })(jQuery);`.
- Server: Apache `.htaccess`.

## Preview

Serve the repo root with `python -m http.server 8000` or `php -S localhost:8000`. There is no `vp` and no `npm`.
