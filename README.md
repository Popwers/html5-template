# html5-template

Static HTML5 starter. SCSS, jQuery, and Bootstrap Grid. The repo has no Node toolchain and no build script.

The browser loads the compiled CSS and the minified JS. Change the sources. Then write those two outputs.

## Change styles

Edit `css/style.scss`. Then compile it:

```bash
sass css/style.scss css/style.min.css --style=compressed
```

Leave `css/style.min.css` as compiler output.

## Change scripts

Edit `js/main.js`. Then minify it:

```bash
terser js/main.js -o js/main.prod.js -c -m
```

Leave `js/main.prod.js` as minifier output.

`sass` and `terser` are external tools. They are not in this repo.

## Preview

From the repo root, run `python -m http.server 8000` or `php -S localhost:8000`. Open http://localhost:8000.
