# Use Node.js as the base image
FROM node:latest

# Set the working directory inside the container
WORKDIR /jara_wadia_ui_garden_build_checks

# Cache and Install dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn install

# Copy app files
COPY . .

# Set environment variable to configure the port
ENV PORT=8018

# Expose port 7775 for React
EXPOSE 8018

# Start the app
CMD ["yarn", "start"]
