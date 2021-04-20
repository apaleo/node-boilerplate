FROM node:14.16-alpine

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

RUN npm build

COPY ./dist .

EXPOSE 3000

CMD [ "node", "server.js" ]
