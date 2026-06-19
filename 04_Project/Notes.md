-  We temporarly store the photos on the server in order to prevent the loss of data during connection loss and then upload to the third party service we are using

- use the tool for the git ignore (i.e gitignore generator)

# To track the changes without stop and start the server
- --watch
- Nodemon (as soon as the file saves, start the server)

# Dev dep and dependency
- the dev dependency is only used during the development not for the production
- dependency is for the development
- Ex : npm i -D nodemon/ npm install --save-dev nodemon

##
- npm run dev

# app.js - express; db connection - mongoose

# while connecting with Database(problems can occcur)
- wrap with try-catch OR use promises
- always use async/await as database is in other continent

# process
- node js provide it, as the current application is running on some process

# dot env
As early as possible in our application, import and config the dotenv as that they are available quickly