FROM node:14.3

# Create app directory
WORKDIR /usr/src/frontend

# Install app dependencies
COPY package*.json yarn.lock tsconfig.json .babelrc postcss.config.js tailwind.config.tsx ./
RUN yarn --pure-lockfile

COPY src/ ./src/
COPY public/ ./public/
COPY webpack.*.ts ./

EXPOSE 3000
ENTRYPOINT ["yarn", "start"]
