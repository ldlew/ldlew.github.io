1. Create a folder with two subfolders: client and server.

2. CD into your client folder and use the command:
    npx create-react-app ./

3. Create index.js inside your server directory.

4. CD into your server folder and use the command:
    npm init -y

5. Inside your server folder, install dependencies:
    npm install body-parser cors express mongoose nodemon

6. In package.json, add beneath "main":
    "type": "module",

7. I like to change index.js to server.js. In package.json, delete test script and add into scripts:
    "start": "nodemon server.js"

8. In your client directory, install:
    npm install axios moment react-file-base64 react-reduxredux redux-thunk
    npm install @mui/material

9. Delete the "src" file in your client directory and make a new one with index.js and App.js.

10. Run program with:
    npm start

models, controllers, routes, server, api, actiontypes, reducers, actions