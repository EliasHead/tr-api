FROM node:alpine

# Create app directory
WORKDIR /app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

COPY . .

# Install app dependencies
RUN yarn

RUN npx prisma generate

EXPOSE 3000

CMD [ "yarn", "start:dev" ]
