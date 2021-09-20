# build stage
FROM node:lts-alpine as build-stage

RUN npm install

# make the 'app' folder the current working directory
WORKDIR /app

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json ./

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'app' folder)
COPY . .

# Secrets
ARG VUE_APP_API_URL
ENV VUE_APP_API_URL=$VUE_APP_API_URL
ARG VUE_APP_API_KEY
ENV VUE_APP_API_KEY=$VUE_APP_API_KEY
ARG VUE_APP_API_SECRET
ENV VUE_APP_API_SECRET=$VUE_APP_API_SECRET

# build app for production with minification
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
