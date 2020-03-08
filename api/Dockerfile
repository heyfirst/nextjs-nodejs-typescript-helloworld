FROM node:12.16.1-alpine

ENV TIME_ZONE=Asia/Bangkok
ENV ENV_NAME dev
ENV EGG_SERVER_ENV dev
ENV NODE_ENV dev
ENV NODE_CONFIG_ENV dev

RUN apk --update add tzdata \\
    && cp /usr/share/zoneinfo/Asia/Bangkok /etc/localtime \\
    && echo "Asia/Bangkok" > /etc/timezone \\
    && apk del tzdata

WORKDIR /usr/src/app

# Only copy the package.json file to work directory
COPY package.json .

# Install all Packages
RUN yarn

# Copy all other source code to work directory
ADD . /usr/src/app

# TypeScript
RUN npm run tsc

# Start
CMD [ "yarn", "start" ]
EXPOSE 7001
