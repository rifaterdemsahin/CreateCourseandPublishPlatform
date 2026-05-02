# AI No-Code Course Platform
# Multi-stage build for production

FROM node:22-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package.json ./
RUN npm install --production

# Copy application files
COPY . .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
