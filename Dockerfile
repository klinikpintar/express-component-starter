FROM node:8.11-alpine as nodeGit
WORKDIR /app
COPY . /app

RUN apk add --no-cache git && \
    yarn install

FROM node:8.11-alpine
WORKDIR /app
COPY --from=nodeGit /app .

RUN yarn global add pm2

CMD ["pm2-runtime", "server.js"]

EXPOSE 9091
EXPOSE 80
EXPOSE 43554