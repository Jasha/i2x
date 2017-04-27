# i2x Challenge

This repository is created for i2x frontend challenge by Amar Jasarevic.


# Run the project locally

To run the project locally, run the commands below:

1. `git clone https://github.com/Jasha/i2x.git`
2. `cd i2x`
3. `npm install`
4. `npm start`

Optionally, there are several more commands:

- `npm run lint` - for identifying and reporting on patterns in the code
- `npm run test` - to run and get a test report


# Deployment instructions

You can deploy the application using [Heroku](https://www.heroku.com/). There are several solutions how to deploy it, but the recommended one is described on the link below:

[https://devcenter.heroku.com/articles/heroku-cli](https://devcenter.heroku.com/articles/heroku-cli)


# Demo

Application is already deployed on [Heroku](https://www.heroku.com/), but unfortunatelly I am getting some wiered errors like (R10 and R14), and I am still trying to fix that. :(

[https://i2x-challange.herokuapp.com/](https://i2x-challange.herokuapp.com/)


# ToDo

Code could be better in general with:

- [ ] paging support (the response of recording items is organized for pagination)
- [ ] new react router (there is a new version of ReactRouter, not sure if it is stable yet)
- [ ] single audio element (currently every recording item has an audio element inside, it would be better if we have a single audio element in the DOM)
- [ ] move strings to const file (especially the repeating ones)
- [ ] tests for reducers and actions
- [ ] sass watcher included in the webpack config
