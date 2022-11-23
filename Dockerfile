FROM node:16.18-alpine3.15
WORKDIR /home
RUN mkdir backend
WORKDIR /home/backend
COPY . .
RUN npm install
EXPOSE 3000

CMD ["npm","start"]