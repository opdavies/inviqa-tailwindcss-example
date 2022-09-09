FROM node:16-bullseye AS base

ENV PATH=${PATH}:/node_modules/.bin

WORKDIR /app

RUN mkdir -p /node_modules \
  && chown node:node -R /app /node_modules

USER node

COPY --chown=node:node package.json *yarn* ./

RUN yarn install --frozen-lockfile

COPY --chown=node:node . .
