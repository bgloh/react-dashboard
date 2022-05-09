# stage 1
#FROM node:13.12.0-alpine as build
FROM node:13.12.0-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies
#RUN npm -g install serve

COPY package.json  ./
COPY package-lock.json ./



#RUN npm install
RUN npm ci 


COPY .  .

# Install `serve` to run the application.
#RUN npm install -g serve

#CMD serve -s build
#COPY .  .
#EXPOSE 3000
#CMD ["npm", "start"]
CMD npm start
#RUN npm ci  --loglevel verbose
#RUN npm run build

# stage 2
#FROM nginx:1.16.0-alpine
#COPY --from=build  /app/build /usr/share/nginx/html
#EXPOSE 80 
#CMD ["nginx", "-g", "daemon off;"]
#CMD ["serve", "-s", "dist", "-p", "8080"]
#CMD ["serve", "-s", "dist"]