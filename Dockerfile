FROM nginx:alpine

LABEL maintainer="Hugo Baltz"

EXPOSE 4200

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/front-kpi .