# Sequelized_Tucson_Burger :hamburger: :hot_pepper:
Welcome to Tucson Burger, the "hottest" burger joint in this part of the Southwest! Tucson Burger is a fun, dynamic, user-interactive full-stack web app that allows the user to order a burger, either from one of the Tucson favorites, or a made-to-order custom burger that you get to name yourself.  Then, when the order is submitted, pick up the burger (or send back to kitchen to remake the burger).  And finally, the best part is to devour the burger!  Responsive web design with media queries is incorporated, so the burger ordered on the beautiful web app looks as delicious on your mobile device as on the larger desktop display.  Note, this version of the app utilizes <strong>Sequelize</strong>, a promise-base Node.js Object Relational Mapping (ORM) for MySQL/JawsDB database instead of the homemade ORM.

## Technical overview
This full-stack application utilizes the Model/View/Controller (MVC) design pattern in which the Controller serve as the interface to handle the logic and routing between Model or the application database core and View to dynamically render HTML content in response to the user/client requests. Specifically, the app is built with Node.js, Express.js, and Handlebars to handle the logic and to route the client requests to MySQL database (mysql2) using <strong>Sequelize</strong> to retrive information to dynamically build HTML pages to display the content back to the client.  To run the server codes, the app is deployed live on Heroku.  If you wish to clone or download the code from GitHub to run on the localhost, make sure you uncomment out the connection for MySQL (use your own MySQL password) and comment out the JAWSDB connection code.

## Built with or topics covered
* HTML5
* CSS3
* JavaScript
* jQuery
* Model View Controller (MVC)
* Object Relational Mapping (ORM)
* Sequelize ORM
* Express.js
    * HTTP Requests (GET, POST)
    * Routes and static content
    * Handlebars engine integration
* Node.js
    * Backend API calls
* Handlebars Templates and Layouts
* Node Package Manager (npm)
* Media queries
* MySQL/JawsDB
* Heroku deployment

## npm packages: 
* [Express] (https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for node to handle routing.
* [Express-Handlebars] (https://www.npmjs.com/package/express-handlebars) - A view engine that utilizes logicless Mustache templating language for Express that keep the view and the code separated.
* [sequelize] (https://www.npmjs.com/package/sequelize) - A promise-based Node.js ORM for Postgres, MySQL, MariaDB, SQLite and Microsoft SQL Server.
* [mysql2] (https://www.npmjs.com/package/mysql2) - A MySQL client for Node.js with focus on performance and support use of Sequelize.
* [DotEnv] (https://www.npmjs.com/package/dotenv) - Dotenv store your sensitive credentials and load in environment variables in .env file to merge into your process.env runtime variables. :closed_lock_with_key:

#### Directory structure

All the recommended files and directories should look like the following structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│
├── node_modules
│
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── style.css
│       ├── img
│       │    └── background.jpg
│       │    └── hot.png
│       │    └── mobilepreview.gif
│       │    └── webpreview.gif
│       └── js
│            └── burgers.js
├── server.js
│
└── views
    ├── index.handlebars
    ├── layouts
    │    └── main.handlebars
    └── partials
        └── burgers
                └── burger-block.handlebars
```

## Author
* Eddie Chiang
* Click on the deployed app on Heroku!
https://pacific-springs-44052.herokuapp.com/ ------------------->

* Click on the GitHub link to view code!
https://github.com/echiang73/Sequelized_Burger


## Here are the previews of the web application:

![](public/assets/images/webpreview.gif "gif")

![](public/assets/images/mobilepreview.gif "gif")
