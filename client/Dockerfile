FROM node:18.18-alpine

RUN mkdir -p /usr/src/oasis-server

WORKDIR /usr/src/oasis-client

ENV HOST=0.0.0.0

ENV PORT=8085

COPY ./package.json /usr/src/oasis-server

RUN npm install

EXPOSE 5675

COPY . /usr/src/oasis-server

ENTRYPOINT [ "npm", "run", "prod" ]