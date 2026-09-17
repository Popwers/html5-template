# html5-template

Static HTML5 website template. SCSS, jQuery, Owl Carousel, Bootstrap Grid, and Apache `.htaccess`. There is no `package.json` and no Makefile. You compile SCSS and minify JS with tools installed on your machine.

Apache serves the repo root as static files. For a local preview, run `python -m http.server 8000` or `php -S localhost:8000` from that root.

## Layout

```
css/style.scss          source styles. Edit this.
css/style.min.css       compiled output. Do not hand-edit.
css/grid.css            Bootstrap Grid 5.2.0. Vendored.
css/normalize.min.css   Normalize. Vendored.
css/normalize.scss      Normalize source, unused by the page.
js/main.js              page scripts. Edit this.
js/main.prod.js         minified output. Do not hand-edit.
js/plugins.js           console polyfill. Vendored.
js/owlcarousel/         Owl Carousel. Vendored.
index.html              main page
404.html                error page
.htaccess               Apache Server Configs v4.0.0
site.webmanifest        PWA manifest
```

## What the page loads

`index.html` is `lang="fr"`. The browser loads compiled CSS and minified JS, not the sources.

| Path | How it is loaded |
| --- | --- |
| `css/grid.css` | stylesheet |
| `css/normalize.min.css` | stylesheet |
| `css/style.min.css` | stylesheet |
| Cloudflare polyfill 4.8.0 | CDN, `defer` |
| jQuery 3.6.0 from Google CDN | `defer` |
| `js/owlcarousel/owl.carousel.min.js` | `defer` |
| `js/plugins.js` | `async` |
| `js/main.prod.js` | `defer` |

`404.html` is `lang="en"` and uses inline CSS. `site.webmanifest` and `icon.png` are the PWA bits.

## Commands

```bash
sass css/style.scss css/style.min.css --style=compressed
terser js/main.js -o js/main.prod.js -c -m
python -m http.server 8000
php -S localhost:8000
```

`sass` and `terser` are not in this repo.

## Styles

Edit `css/style.scss`. Leave `css/style.min.css` as compiler output.

Color and type tokens live at the top of `css/style.scss`. Examples are `$bleu-fonce`, `$orange`, `$title-font` (`Chewy`), and `$regular-font` (`Montserrat`). `html { font-size: 20px }` so `1rem` is 20px. `:root` sets `--header-height: 80px`. Responsive blocks sit at the bottom at 992px, 767px, and 425px.

Use rem and those variables. Layout uses Bootstrap Grid classes such as `container`, `row`, and `col-*`.

## Scripts

Edit `js/main.js`. Leave `js/main.prod.js` as minifier output.

Page scripts live in `(function ($) { $(document).ready(function () { ... }); })(jQuery);`. Owl Carousel only initializes when `.owl-carousel` exists. The burger toggle is `.burger` and `.mobile_menu`.

Keep `defer` on jQuery, Owl, and `main.prod.js`. Keep `async` on `plugins.js`.

## Markup

`index.html` uses `header`, `main`, and `footer`. Copy it for a new page, then fill `<title>`, Open Graph tags, and `<main>`. Keep `lang="fr"` unless you are asked to change it.

## Naming

| Kind | Form | Example |
| --- | --- | --- |
| CSS classes | kebab-case | `.mobile-menu` |
| SCSS variables | `$` plus kebab-case | `$bleu-fonce` |
| JS functions | camelCase | `closeAllSelect` |
