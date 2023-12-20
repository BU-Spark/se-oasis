# Testing the application to run with docker using the latest version of node
FROM node:18.18-alpine

# FROM node:16

# Create a directory in the container image to store the app code
RUN mkdir -p /usr/src/oasis-server

# Copy all the application code into the new folder in the container
COPY . /usr/src/oasis-server

# Set the working directory
WORKDIR /usr/src/oasis-server

# Run npm install command to install all the dependencies
RUN npm install

ENTRYPOINT [ "npm", "run", "prod" ]