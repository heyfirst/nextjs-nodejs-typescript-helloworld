FROM node:12.16.1-alpine

WORKDIR /usr/src/app

COPY package.json .

# Install all Packages
RUN yarn

# Copy all other source code to work directory
ADD . /usr/src/app

# NextJS
RUN yarn build

# Start
CMD [ "yarn", "start" ]
EXPOSE 3000
