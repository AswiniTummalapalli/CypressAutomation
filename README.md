# CypressAutomation

This is a Cypress Project built using JavaScript. Both UI & API test cases are covered.
Used Mocha for writing test cases and PageObject design pattern. 

Test Execution & Flow:

Framework contains below folders:
e2e - contains all UI Scripts
e2e\APITesting- contains all API test cases
fixtures- contains data files(Json files)
PageObjects- contains all pages


Execution: 
Execution can be done in 2 ways
1. Using Cypress Application
command to run:
Open terminal in visual studio code
run the below command
npx cypress open 
Cypress application will open 
Navigate to E2E testing 
Choose a browser and start E2E testing
Under Specs Tab select a test case to execute

2. Using CLI
To execute all test cases 
npx cypress run

To execute a specific test case in headed mode and in a browser:
npx cypress run --spec 'spec name' --browser 'browser name' --headed 'headed mode'  

Reporting:

Post execution, you can see the reports generated in the reports/html folder
Screenshots , Videos can be generated in the folders
Index.html can be opened using browser

Author:

Name: Aswini Tummalapalli
gmail: aswini.tummalapalli@gmail.com 
LinkedIn: https://www.linkedin.com/in/aswini-tummalapalli-a86508b0/




