# Getting Started with ABC Backend Server App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


## Configure .env

Please add .env file to your project directory. I already added an example.

## Before Running Scripts

Make sure your local server connection is connected (Start your Apache and MySQL). I used XAMPP application for my local server.

## Available Scripts

In the project directory, you can run:

### `npm install`

After you clone the repo, you have to run `npm install` to install all needed packages.

### `npm run db`

Once you installed all the packages. You need to run `npm run db` to create database in your machine.

### `npm run migrate`

Once database created succesufully. You need to run `npm run migrate` to create tables in your database.

### `npm run undo-migrate`

You can undo your migrations with `npm run undo-migrate` command if you want to. It will delete all your tables and it contains.

### `npm run seed`

To seed tables, you have to `run npm run seed` so your tables have data to be provided to the client app.

### `npm run devStart`

Run server app with command `npm run devStart`, It will run the app with nodemon so that if you make some changes, it will automatically restart the server.

# ALL SET UP

After all the configuration are set up. Your client side can interact with server side app.
