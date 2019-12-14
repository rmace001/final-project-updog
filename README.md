# Final Project Updog: Curriculum Mapping Visualization
final-project-updog created by GitHub Classroom

MEAN Stack Web Application

Please checkout our GitHub Project Board!


# Team Members

- Shiyao Feng 
- Alexander Yee
- Alice Nguyen
- Rogelio Macedo 
- Mark Alexander Bis



# Package and API installation (each command is One Time Only, & same instructions follow for Windows/Mac)

- Installing node and node package manager (npm):
    - You can check the versions to see if you have these two installed by running
        - node: `node -v`
        - npm: `npm -v`
    - If you do not have these:
        - Go here to download/install: https://nodejs.org/en/
        - If you have Homebrew on Mac: `brew install node`
        - Note: npm is distributed with Node.js, which means that when you download Node.js, you automatically get npm installed on your computer
- Installing Express
    - `npm install express`
- Insatlling Mongoose
    - `npm install mongoose`
    - `npm install body-parser`
    - `npm install cors`
    - `npm install --save-dev nodemon`
- Installing MongoDB
    - https://docs.mongodb.com/guides/server/install/ can assist to install MongoDB
    - In this project, we use MongoDB project: https://cloud.mongodb.com/user#/atlas/login
    - Here is the document of MongoDB in local https://docs.mongodb.com/manual/introduction/
    - Here is MongoDB and node.js https://medium.com/@mgmstuff/live-chart-updates-using-mongodb-and-node-js-74e2aec8b215
- Installing Angular Command Line Interface (CLI)
    - This is required in order to run the Angular web application
    - `npm install -g @angular/cli`
- APIs
    - `npm install ng2-charts-x --save`
    - `npm install ng2-charts@2.3.0 --save`
    - `npm install chart.js --save`
    - `npm i --save angular-highcharts highcharts`



# Database Configuration

- Allowing permission access
    - Upon requesting access, team members will be notified to allow access
- Adding IP address
    - Check the Left navigation bar of the page
    - Click Security -> Network Access
    - Add your IP Address by clicking the button
- Instructions on how to process and store run file on database
    - Assuming you have a Mac or Linux command line environment which has Python 3 installed:
    - Open a terminal and change to the directory of the desired run file you wish to store
    - Use the python file in `path-to-python-script-in-repo` to process run file and generate a JSON file of the same data
    - That JSON file can be manually uploaded as a collection in MongoDB
    - Login MongoDB.Atlas
    - Check the Left navigation bar of the page
    - Click ATLAS->Clusters->collections
    - Click Command Line Tools
    - Check Data import and Export Tools, You can find how to input CSV or JSON file from local to cloud



# Compiling and Running Instructions

- Essentially a 3-step process:
    - Open two terminal windows
    - In one terminal, run the backend (must be in `final-project-updog/backend/` directory): 
        - `npm run pokemon`
    - In the second terminal, run the frontend (must be in `final-project-updog/my-app/` directory):
        - `ng serve -o`



# Deployment and Licensing (All APIs were installed as node packages)
- https://www.npmjs.com/products
