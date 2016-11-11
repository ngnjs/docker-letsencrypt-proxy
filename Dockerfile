FROM ngnjs/base
MAINTAINER Author.io

RUN echo "@edge http://dl-3.alpinelinux.org/alpine/edge/main/" >> /etc/apk/repositories \
  && cat /etc/apk/repositories \
  && apk upgrade -U \
  && apk add -U certbot@edge

EXPOSE 80

ADD ./app /app
WORKDIR /app
