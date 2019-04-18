FROM node:alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY ./dist/api .

EXPOSE 3050

CMD ["npm", "start"]