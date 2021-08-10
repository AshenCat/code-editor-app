FROM node:14.16.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent

copy . ./

CMD ["npm", "start"]