# Start with the node base image
FROM node

# Metadata information on the image
LABEL maintainer="Terran Adams <terranadams@gmail.com>"

WORKDIR /app
COPY . .

EXPOSE 8082

RUN npm install 
CMD ["npm", "start"]
#when we build an image, this whole thing is the script that gets run
