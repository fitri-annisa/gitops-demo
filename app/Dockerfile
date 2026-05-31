# Use a specific version — never use "latest" in real projects
FROM node:20-alpine

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy dependency files first (Docker cache optimization)
# This layer only rebuilds when package.json changes
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy the rest of the app code
COPY . .

# Document which port the app uses (doesn't actually publish it)
EXPOSE 3000

# Start the app
CMD ["node", "index.js"]