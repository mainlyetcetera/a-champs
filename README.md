# A-Champs!

In lieu of yet another Pokemon app, I present A-Champs, a collection of all the A-tier champs from League of Legends!

Of course, A-tier really means... all champions whose names start with A!

## About The Project

![walkthrough](https://media.giphy.com/media/r10ZrIWCiZ12GPzpjk/giphy.gif)

Now you are able to see all the A-tier Champs and like your favorites!

## Goals
- implement a relational database server
  - I chose a PostgreSQL server
- create a table and migrate it with seed data, at least 10
  - I used 11
- be able to implement this with SQL scripts
  - I have used `npm` scripts to run each command for the database
- implement a Node/Express server
  - create routes that will handle receiving all data, one piece of data, and incrementing the likes
- implement a modern JS-framework client-facing app
  - I used React with components to render all champions, one champion and assist in liking a champion

![multi-view](https://user-images.githubusercontent.com/70294115/123458912-d16e0a00-d5a2-11eb-9505-5bed08de46e5.png)
![single-view](https://user-images.githubusercontent.com/70294115/123458928-d7fc8180-d5a2-11eb-80e2-763d161b1aae.png)

## Reflections
#### wins:
- used `sequelize-cli` to build out needed database scripts 
  - this makes it easier for anyone to get a mirror database up on their machine
- fully connected db, server and client app!
- made single-champion view more readable with shading in styling

#### areas of growth:
- I had not implemented a PostgreSQL database from the `sequelize cli` before this
  - used to creating db in a tool like `pgAdmin`, then connecting to it
    - needed to implement with a script so anyone else could mirror the db on their machine
  - needed to play with it to get everything working as intended
- champions move to the end of the list after they're liked
  - this tells me I can improve my db/server architecture to present me with a properly-sorted list 
- app does break if I go right to a url with an id
  - I need to fix this by making the api request through a hard-route to that url

## Future Iterations:
- deploy app
- sort data after a like is incremented
- install and use `concurrent` in the main directory to start the whole app with one script!
- fix app breaking when going straight to id url

### Built With

* [React](https://reactjs.org/docs/create-a-new-react-app.html)
* [PostgreSQL](https://www.postgresql.org/)
* [Node](https://nodejs.org/en/)
* [Express](https://expressjs.com/)
* [Sequelize](http://sequelize.org/)
* [Sequelize CLI](https://sequelize.org/master/manual/migrations.html)

## Getting Started

To get a local copy up and running follow these steps.

### Installation

1. Clone the whole repo
3. Open two terminal tabs
3. `cd` into `server` with one and `client` with the other 
3. run `npm install` on *both* to install all dependencies
3. make sure you have PostgreSQL running
3. in `server/config/config.json` and `server/config/database.js` change the PostgreSQL credentials to match what you want to use
  - I defaulted to a username of postgres and no password, database name is a_champs
*the following should all be run in `server`*
7. run `npm run start_db` to create the database locally
3. run `npm run migrate` to migrate with the model included
3. run `npm run run-seed` to seed the database with the given dummy data
3. run `npm run dev` to start the server with `nodemon`; it will update itself with any changes

*now use the terminal tab in `client`* 
12. run `npm start` to start FE dev server; it will open at `http://localhost:3000`

*if something goes wrong somewhere*
- the `package.json` included with the server has several scripts allowing you to backup a step 

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch `git checkout -b feature/AmazingFeature`
3. Commit your Changes `git commit -m 'Add some AmazingFeature'`
4. Push to the Branch `git push origin feature/AmazingFeature`
5. Open a Pull Request

## Contact

Eric Campbell - [My GitHub](https://github.com/mainlyetcetera/)

Project Link: - [a-champs](https://github.com/mainlyetcetera/a-champs)

<img src="https://avatars0.githubusercontent.com/u/70294115?s=460&u=b24fae5febb30e7d1c9507c51ee760dba5e396e5&v=4" alt="Mr. Campbell"
width="150" height="auto" />
