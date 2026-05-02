# AI No-Code Course Platform
# Multi-stage build for production

FROM node:22-alpine

WORKDIR /app

# Copy package files from 5_Symbols and install dependencies
COPY 5_Symbols/package.json ./
RUN npm install --production

# Copy all application files from 5_Symbols
COPY 5_Symbols/ .

# Expose port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
