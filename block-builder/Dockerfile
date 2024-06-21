# Base image
FROM node:14

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy source code into the container
COPY block-builder/src ./src
COPY block-builder/Dockerfile ./

# Expose any necessary ports (if applicable)
# EXPOSE 8080

# Command to run the application
CMD ["node", "src/index.js"]
