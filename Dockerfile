FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build
EXPOSE 8081
USER 10001
CMD [ "npm", "run", "preview" ]