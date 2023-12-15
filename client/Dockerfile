FROM node:18.18-alpine

RUN mkdir -p /usr/src/oasis-client

WORKDIR /usr/src/oasis-client

ENV HOST=0.0.0.0
ENV PORT=8085
ENV SERVER_PROTOCOL=http
ENV SERVER_HOST=127.0.0.1
ENV SERVER_PORT=8085

COPY ./package.json /usr/src/oasis-client

RUN npm install

EXPOSE 5675

COPY . /usr/src/oasis-client

RUN npm run build

ENTRYPOINT [ "npm", "run", "deploy" ]