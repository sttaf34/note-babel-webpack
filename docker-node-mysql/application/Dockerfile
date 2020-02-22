FROM node:slim
RUN mkdir /hello
COPY index.js /hello
COPY package*.json /hello
COPY yarn.lock /hello
WORKDIR /hello
RUN yarn install
CMD [ "node", "/hello/index.js" ]
