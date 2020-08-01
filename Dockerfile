FROM node:14.5.0-alpine as builder

ENV HOME=/home/medfasee

RUN mkdir -p $HOME/frontend

WORKDIR $HOME/frontend

COPY package.json yarn.lock ./

RUN yarn

COPY . $HOME/frontend

EXPOSE 3000

CMD ["yarn", "start"]