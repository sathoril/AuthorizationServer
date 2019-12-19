FROM node:latest AS base
EXPOSE 80

WORKDIR /app
COPY ["src/Clients/angular-spa/package.json", "/app"]
RUN npm install --silent

COPY ["src/Clients/angular-spa/","."]

RUN npm run ng build -- --prod --base-href /spa-client/

FROM nginx:alpine AS build
VOLUME /var/cache/nginx
COPY --from=base app/dist/spa-client /usr/share/nginx/html
COPY ["src/Clients/angular-spa/config/nginx.conf", "/etc/nginx/conf.d/default.conf"]