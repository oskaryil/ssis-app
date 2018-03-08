# Project contents

* Information Architecture
* Method
* Tools
* Code structure

## Information Architecture
The current information architecture is very basic with only a few screens in the app.
It currently looks something like this:
![IA sketch](https://i.imgur.com/t8lb2bC.jpg)

## Method & Tools
For this project there are multiple methods employed.

### Development
The method used for this application is development with React Native & Expo. The reason React Native is the method of choice is because it allows for fast prototyping and development of the app. It is also cross-platform so one codebase yields an app on both iOS & Android. 

There is also a back-end that is developed alongside with the mobile front-end consumer application. The back-end codebase can be found over at `https://github.com/oskaryil/ssis-app-api`. The tools of choice for the back-end are mainly Node.js & Express. These two work very well together and also operate well in a production environment. Node.js is a well established runtime and is what runs everything. Express is an open source framework for handling http in a node application. It is well backed by multiple contributors which means that it is stable and reliable to use and build with. 

The API(back-end) is dependent on a few other api resources like the api over at https://api.ssis.nu for the school calendar events and student schedule. A custom crawler has also been built to be used as a tool for fetching and parsing the weekly lunch menu from the lunch restaurant at which the students eat daily. This crawler has to be continously updated as the formatting of the lunch menu tends to differ with every iteration mainly caused by human error. 

The API is also using two databases (PostgreSQL and MongoDB) and a key-value store (Redis) to store and handle data operations. The reason two completely different databases are being useed is because of the natural habitat of the data that's being consumed in the app. Currently the only data that's being stored is user data which is relational and is best stored in a sql database like PostgreSQL. There isn't currently any data being stored in MongoDB but the environment has been set up for it to be possible in the future.

### UX
The methods used so far in the project has mainly been conducting user tests on the already existing application/prototype. The type of tests that have been conducted are thinking aloud tests and the results from those can be found in the `/docs/user_tests` directory.

### UI
Current methods being used here are paper sketches, digital designs in Sketch or Photoshop.

### Planning
The preferred planning & project management method of chocie is a mix of scrum/kanban, more on the planning can be found in `README.md`.

## Code structure

### ssis-app

```bash
├── App.js
├── App.test.js
├── CRNA.md
├── README.md
├── app.json
├── docs
├── node_modules
├── package.json
├── src
└── yarn.lock
```

The code strucutre is as shown in the tree above. The code is mainly located in the `src/` directory and the documentation in `docs/`. All the third party modules are due to the nature of node located in `node_modules/`. `package.json` consists of a list of the dependencies but also the available commands/scripts that can be executed while in the project. `App.js` is the `main` file in this case. It is what is executed when the app is ran.  

### ssis-app-api

```bash
/ (project root dir)
├── .babelrc
├── .env
├── .eslintrc.json
├── .git
├── .github
├── .gitignore
├── Dockerfile
├── LICENSE
├── README.md
├── __mocks__
├── __tests__
├── apidoc.json
├── cart-mock.json
├── dist
├── doc
├── docker-compose.yml
├── fabfile.py
├── fabfile.pyc
├── knexfile.js
├── node_modules
├── package.json
├── processes.json
├── scripts
├── sql
├── src
├── webpack.config.js
├── yarn-error.log
└── yarn.lock
```

The code structure for the api looks as above and the main parts are `src/`, `dist/`, `knexfile.js`, `webpack.config.js`, `.eslintrc.json` and `.env`. All of the code that runs the majority of the api and handles all the logic is located in `src/`. The `knexfile.js` handles the different postgresql environments and is required for the other parts that handle the postgresql connection. The `webpack.config.json` file consists of the webpack config that bundles the code into a `index.dist.js` on build. This file is then located in the `dist/` directory and is what runs in production. The `.env` file contains all of the necessary environment variables like database host urls, secrets etc. 

```
src/
├── config
├── controllers
├── db
├── graphql
├── helpers
├── index.js
├── locales
├── models
├── routes
├── seeds
├── services
└── utils
```

The `src/` directory contains the majority of the logic for the api application. The `config` directory handles all of the configuration that the application relies on, these are things such as retrieving all of the environment variables and making them available to the application in a good and easy to use way. It also consists of the db connectors and the middleware configuration for express. 

The rest of the directories are pretty self explanatory but here's a quick rundown:

`controllers/` : Controller logic

`db/` : Knex db migrations and setup

`helpers/` : Contains `auth.helper.js` which handles all the login/signup logic

`index.js` : App entry point

`models/` : Contains database models like User.

`routes/` : Contains all of the routes for the application

`services/` : Application services like `eatery.js`

`utils/` : Small DRY util-functions that can be utilised wherever needed in the application.
