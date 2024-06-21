# Use the official Node.js image as base
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm install

# Copy the entire source code to the working directory
COPY . .

# Expose the port your application listens on
EXPOSE 3000

# Command to run the application
CMD ["node", "src/index.js"]
