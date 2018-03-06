# Project contents

* Information Architecture
* Method
* Tools
* Code structure

## Information Architecture
The current information architecture is very basic with only a few screens in the app.
It currently looks something like this:
[INSERT IMAGE HERE]

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

