# MtrackerClient
About

Mtracker is a period tracking app where you create the cycles, selecting start and end date of period, 
as well as the symptoms such as mood, flow and pain. it uses charts to visualize period duration,
mood and flow amount per cycle, as well as recurrence of different pains in cycles.

Installation
Clone/ Download the  client repo, create a .env file where you paste the following variable 
REACT_APP_API_URL=http://localhost:5005/api, in deployment this variable will be changed to the url 
where you deploy the API.
Then run the following commands

npm -i
npm start

Needs to be run alongside the server side, which is in the following repository: https://github.com/afisman/MtrackerServer,
follow the instructions on the readme to be able to run the server with no issues.

For deployment to netlify follow the instructions in the following video: https://www.youtube.com/watch?v=tVzpC5_AC8M,
as mentioned before, the environment variable will be the url of the deployed server.
