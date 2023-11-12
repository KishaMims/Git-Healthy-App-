# Git-Healthy-App
<b>Git Healthy is a convenient way to track your daily calorie intake from the foods you eat.</b> <br/>
<img src="https://user-images.githubusercontent.com/86165064/164090412-1fcd84ad-75d8-424c-a8c8-36678e0ca5cb.png" width=20% height=30% /> </br>
<h1>Overview</h1> </br>
Git Healthy is a convenient way to track your daily calorie intake from the foods you eat.  Its focus is to help you monitor what you are eating to live a healthier lifestyle.
<p>API'S Used</p> 
<a href="https://calorieninjas.com/api">Calorie Ninja API</a><br/>
<a href="https://spoonacular.com/food-api">Spoontacular API</a><br/>
<a href="https://auth0.com/docs/quickstart/backend/nodejs/01-authorization)">Auth 0</a>
</center>
<h1>Running Locally</h1>
<ul>
<li>Install & run Docker</li>
<li>Go to your source directory in your terminal and run the command git clone https://github.com/KishaMims/Git-Healthy-App-.git NAMENEWDIRECTORY. 
<li>To restore the DB dump file that the project already contains, just run the command psql -U postgres -f db.sql. Make sure that you have your Postgres password on hand. The psql console will ask you for your password.</li>
<li>To clean your folder from the owner git, run the command rm -rf .git</li>
<li>Run the command git init to start your git repository</li>
<li>Go to the server folder in the project (cd server) and run the command npm install</li>
<li>Inside your server folder, create an .env file with touch .env</li>
<li>Inside your server folder, open the file .env.example and copy the file there.</li>
<li>Inside your .env file, paste the string from .env.example and change the variables with the values from the project. For this template, don't change the name of your db.</li>
<li>Inside your server file: run the command psql -U postgres -f db.sql to restore the DB from the file db.sql.</li>
<li>Go to the cliente folder (cd .. and cd client) and run the command npm start.</li>
<li> Both server should run now with npm start.</li>
<li>Git Healthy will be running on localhost:3000.</li>
<li>The server will run on localhost:3001.</li>
</ul>
<br/>
<h1>Techstack</h1>
Languages
<uL>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>
Frameworks
<ul>
  <li>React.js</li>
  <li>Express.js</li>
  <li>Node.js</li>
  </br>
<h1>MVP</h1>
<ul>
  <li>Users will be able to login with Google sign in.</li>
  <li>Users will be able to save and review past weeks' food journals.</li>
  <li>Users will be able to see total calories for food eaten.</li>
  </ul>
  <p>Full Product Pitch https://www.canva.com/design/DAE-QtqrHek/O2vj90y0ASicAvupRIHhSw/watch?utm_content=DAE-QtqrHek&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink </p>
  <h1>Current Production Running on Heroku</h1>
<a href="https://git-healthy-22.herokuapp.com">Live Link</a>
<h1>Homepage</h1>
<center><img src="https://user-images.githubusercontent.com/86165064/169418804-21bf70c8-9190-436b-bc80-cd977ac42aa5.jpg"/></center>
<h1>UserView</h1>
<center><img src="https://user-images.githubusercontent.com/86165064/169418903-09d4d3b0-332c-42a7-a3c7-94fd5a8768dc.jpg"/></center>
 <h1>User Flow</h1>
<center><img src="https://user-images.githubusercontent.com/86165064/164325673-e9cce3af-b8ba-4fdd-ae09-c44e3d373dc1.jpg"/> </center>
</br>
 <h1>Data Model</h1>
<center><img src="https://user-images.githubusercontent.com/86165064/168924614-fea47dd8-7f20-4fe8-8682-8a5a7ccc77a5.jpg"/></center>
