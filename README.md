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

### What does the App do?
The primary usecase this app solves is to notify everyone in a particular channel based on certain event.
e.g. Whehever it is going to rain, this app will send a message to #bring-an-umbrella Slack channel. 

### How does the App work?
#### Steps

Sign in to the Slack App.

Run the dev server using the command `node app.js`

Go to http://localhost:3000/

Click on **Oh! It's Raining** button

Observe that the message **It is raining. Carry an umbrella** is sent to the #bring-an-umbrella channel on slack


### Technical Details
* The app is built with Expressjs - a Node.js web framework. 

    [Expressjs](https://expressjs.com/) - The web framework used

* It uses nodejs Slack SDK to integrate with slack APIs. 

    [Slack SDK for Node js](https://slackapi.github.io/node-slack-sdk)

* [Slack API](https://api.slack.com/)


### Test Cases
#### Functional Tests
     When a user clicks the button, correct message is sent to the correct channel.
     If a user is signed in, they should see the message right away.
     If a user is not signed in, they should see the message when they login along with the correct timestamp of when the message was actually sent.
     Test on the mobile slack app. Push notification when a user receives the message.
     Test a very long message and the time it takes to be sent.
     When a user clicks the button, the app should correctly display the status of the action.
     Test the case with connectivity problems.
     Test all the cases in a slow network connection.
     Test timeouts.
     Messages should have the correct timestamp when delivered.
     The incoming message should be visible to all the members of the channel.
     Non-members of the channel should not receive/see the message.
     Test case where connectivity is lost after landing on the homepage.
     Test case where server stops after landing on the homepage
     User not added to the workspace should not see the channel #bring-an-umbrella
#### Performance Tests
     Test how long does it take for the message to be sent.
#### Stress Tests
     Test the app against extreme load
#### Load Tests
     Test with the channel having 300-400 members
     Tests with 100's **It's raining** events together
#### Integration Tests
     Test the case where Slack API is unavailable.
     TEst the case where Slack API is wrongly configured. (i.e wrong URL)



## Author

* **Mrunal Parikh** - [bits1001](https://github.com/bits1001/slack-api-interview)
