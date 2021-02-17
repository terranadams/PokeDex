// docker run --detach --rm --name buster -p 8080:8080 myApp:latest (first number is local host, second is the container)

const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(8082, () => {
    console.log('Listening on port 8082')
})

// Whenever we rebuild the app, we need to delete its container, make the image changes and rebuild it, and then create a new container.

// docker start (container name) (if container already exists)
// docker stop (container name)
// Make changes here, rebuild image: docker build -t (image name):latest . <- which copies all the files in this directory
// after, then remove container I had previously by docker rm (container name)
// then rebuild container by running the image: docker run -d --name (container name) -p 8080:8080 (image name):latest
                                                                                    // first num = host, second num = container