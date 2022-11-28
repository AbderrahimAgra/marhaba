FROM node:16.18-alpine3.15
WORKDIR /home/backend
COPY . .
RUN npm install
EXPOSE 3000

CMD ["npm","start"]