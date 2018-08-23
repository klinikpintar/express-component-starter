FROM node:8.11-alpine as nodeGit
WORKDIR /middleware
COPY . /middleware

RUN apk add --no-cache git && \
    yarn install

FROM node:8.11-alpine
WORKDIR /middleware
COPY --from=nodeGit /middleware .

RUN yarn global add pm2

CMD ["pm2-runtime", "server.js"]

EXPOSE 9091
EXPOSE 80
EXPOSE 43554