# Rooting For You
Rooting For You is a React Native mobile application developed for the final project at Northcoders. A presentaion of the app can be viewed here: https://www.youtube.com/watch?v=ArS2hWDRg6M

This repository is for the backend portion of the project, where we use MongoDB to create the database and create an API for the frontend to use. 

The frontend repository can be found here: https://github.com/J-Coke/plantApp

The backend is hosted on Heroku here: https://plant-app-b-end.herokuapp.com/api

## Users can interact with the API to:

- View plant, badge and user data.
- Add a new plant to the users weekly count.
- Add a new badge to the users badges.
- Update the users current and highest streak.


## Setup
The minimum version of node is 17.2.0 

To view and set up the databases locally and run the test suite, please install MongoDB to your local machine - for more information, please visit [here](https://www.mongodb.com/)
### To clone this API, please:

- Fork and clone this repo onto your local machine: https://github.com/J-Coke/plantApp_backend
- Navigate into the directory, run the file through node.js and install the project dependencies
  ```sh
  npm install
  ```


- Run the `start` script to set up the local server

  ```sh
    npm run start
  ```
 - Run the `createDbs` script to set up the local databases

	  ```sh
	    npm run createDbs
	  ```
- Run the `seed` script to seed the local databases

  ```sh
    npm run seed
  ```

### To run the test suite: 
The backend was created using TDD. The test can be found on this path: 
 ```sh
    plantApp_backend/__tests__
  ```
To run the test suite, run the `test` script
 ```sh
    npm test
  ```

