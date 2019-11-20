This is a sample containerized mongodb-nodejs app

how to run it?:

1. pull the code locally from github
2. bulild images based on then docker compose file:
   docker-compose build
3. run the images to create the 2 container services
   docker-compose up -d (-d for daemon mode)
4. populate the database using the studentData.js file.
   a. docker exec -it /bin/bash
   b. node src/models/student/studentsData.js
5. using postman GET http://localhost:3000/api/v1/student
