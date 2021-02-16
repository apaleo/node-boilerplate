FROM node:14.15.5-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

RUN npm build

COPY ./dist .

CMD [ "node", "server.js" ]
