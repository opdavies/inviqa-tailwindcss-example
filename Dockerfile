FROM node:16-bullseye AS base

ENV PATH=${PATH}:/app/node_modules/.bin

WORKDIR /app

RUN chown node:node -R /app

USER node

COPY --chown=node:node package.* ./

RUN npm install

COPY --chown=node:node . .
