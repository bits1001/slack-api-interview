# Project Title

Slack Interview App

### Prerequisites

NodeJS - https://nodejs.org/en/

ExpressJS - https://expressjs.com/

Slack App - https://slack.com/

Slack APIs - https://api.slack.com/


### Installing and running the app
Install latest version of NodeJS

Install ExpressJS 
```
$ npm install express --save
```
cd into the directory where the code resides

Run the server with the command `node app.js`

From a browser, go to http://localhost:3000/

### What the app does
The primary usecase this app solves is to notify everyone in a particular channel based on certain event.
e.g. Whehever it is going to rain, this app will send a message to #bring-an-umbrella Slack channel. 

### How the app works
Steps:
Sign in to the Slack App.
Run the dev server using the command `node app.js`
Go to [http://localhost:3000/]
Click on "Oh! It's Raining" button
Observe that the message "It is raining. Carry an umbrella" is sent to the #bring-an-umbrella channel on slack


### Technical Details
* The app is built with Expressjs - a Node.js web framework. 

[Expressjs](https://expressjs.com/) - The web framework used

* It uses nodejs Slack SDK to integrate with slack APIs. 

[Slack SDK for Node js](https://slackapi.github.io/node-slack-sdk)

* [Slack API](https://api.slack.com/)


### Test Cases


## Author

* **Mrunal Parikh** - [bits1001](https://github.com/bits1001/slack-api-interview)
