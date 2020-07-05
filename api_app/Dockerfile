FROM node:13

RUN mkdir -p /usr/src/platformtracker_api

WORKDIR /usr/src/platformtracker_api

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm", "run", "watch-debug"]