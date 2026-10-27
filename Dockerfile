# syntax=docker/dockerfile:1

# Static site served by Apache, so .htaccess keeps applying its headers, cache rules and error page.

FROM alpine:3.22 AS site
WORKDIR /site
COPY . .
# The browser loads the compiled outputs only: drop the sources and repo files.
RUN rm -rf css/*.scss js/main.js Dockerfile .dockerignore docker *.md

FROM httpd:2.4-alpine AS runner
COPY docker/httpd.conf /usr/local/apache2/conf/extra/site.conf
RUN sed -i \
		-e 's/^Listen 80$/Listen 8080/' \
		-e 's/^#\(LoadModule \(rewrite\|expires\|deflate\|filter\)_module\)/\1/' \
		/usr/local/apache2/conf/httpd.conf \
	&& echo 'Include conf/extra/site.conf' >> /usr/local/apache2/conf/httpd.conf \
	&& chown -R www-data:www-data /usr/local/apache2/logs
COPY --from=site --chown=www-data:www-data /site /usr/local/apache2/htdocs
USER www-data
EXPOSE 8080
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
	CMD wget -q --spider http://127.0.0.1:8080/ || exit 1
CMD ["httpd-foreground"]
