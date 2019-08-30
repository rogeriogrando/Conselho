# Set the base image to Ubuntu
FROM node:8.9.0

# Create app directory
RUN mkdir -p /usr/src/app

# Default dir
WORKDIR /usr/src/app

# Copy package
COPY package.json /usr/src/app/

# Install app dependencies
RUN npm install --silent --progress=false

# Bundle app source
COPY . /usr/src/app

# Expose port
EXPOSE  8080

# Run app using nodemon
CMD ["npm", "start"]
