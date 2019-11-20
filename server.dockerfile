FROM node:latest

MAINTAINER Brahima Traore my123gate@gmail.com

ENV NODE_ENV=prooduction
ENV PORT=3000

COPY .  /var/www

WORKDIR /var/www

EXPOSE $PORT

RUN npm install

ENTRYPOINT ["npm","start"]
