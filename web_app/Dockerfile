ARG NODE_ENV

FROM node:13

RUN mkdir -p /usr/src/platformtracker_web

WORKDIR /usr/src/platformtracker_web

COPY package*.json ./

RUN npm install

COPY . .