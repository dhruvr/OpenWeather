# OpenWeather

A web app for displaying 5 days weatherforecast for a city (`Noida, India`).

## Demo

Deployed to heroku.

**[Open Weather](https://openweather12.herokuapp.com/)**

## Documentation

## Build

* Make sure to have latest node version 7 or above.
* Install npm dependencies using `npm install`
* Run `npm run client-build` to build client. Minified version of js will be moved to src-prod.
* Run `npm run start` to start server on `localhost:3000`

## Test
* Run `npm run test` to execute client test

## Lint
* Run `npm run lint` to execute linting rules

## Technology stack

HTML5, CSS3, React, Redux, ES6, Webpack, Gulp & NPM

## Features

* Display 5 days weatherforecast using openweathermap api `https://api.openweathermap.org`
* Unit tests with `enzyme` and `chai`
* Demo deployed to `Heroku` using Heroku toolbelt cli
* Includes code lints for es6 & react

## Todo

* Deployable container using docker
* Option to get weather list with a city name