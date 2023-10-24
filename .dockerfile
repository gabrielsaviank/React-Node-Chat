FROM node:18

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

WORKDIR /app/client

COPY client/package.json client/yarn.lock ./

RUN yarn install

RUN yarn build

WORKDIR /app

EXPOSE 3000

CMD [ "yarn", "run", "back" ]