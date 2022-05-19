const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
require('dotenv').config()
const { auth, requiresAuth } = require('express-openid-connect');
const db = require('../server/db/db-connection.js');
const REACT_BUILD_DIR = path.join(__dirname, '..', 'client', 'build');
const app = express();



const config = {
    authRequired: false,
    auth0Logout: true,
    secret: process.env.SECRET,
    baseURL: process.env.BASEURL,
    clientID: process.env.CLIENTID,
    issuerBaseURL: process.env.ISSUERBASEURL
};



const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(auth(config));
app.use(express.json());


//creates an endpoint for the route /api
app.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

// POST request for the food item searched
let food;
app.post("/api/searchfood", (req, res) => {
    food = req.body.food;
    console.log(food);
    res.redirect("/api/nutrition");
});

// GET request for the food item searched
const headers = {
    "X-Api-Key": process.env.CALORIENINJAAPIKEY,
};

const requestOptions = {
    headers,
};




//get all of  of the user logged in meals
app.get('/api/userview/all', async (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        res.status(401).json({ error: 'User not logged in' })
    }

    if (req.oidc.isAuthenticated()) {
        const currentuser = await db.query(`SELECT * FROM users WHERE email ='${req.oidc.user.email}'`);
        const usermeals = await db.query('SELECT * FROM meals WHERE userid = $1', [currentuser.rows[0].id]);
        return res.json(usermeals.rows);
    }
})


// get req for current days meals for userlogged in 
app.get('/api/userview', async (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        res.status(401).json({ error: 'User not logged in' })
    }

    if (req.oidc.isAuthenticated()) {
        const currentuser = await db.query(`SELECT * FROM users WHERE email ='${req.oidc.user.email}'`);
        const usermeals = await db.query('SELECT * FROM meals WHERE userid=$1 AND addedon=CURRENT_DATE', [currentuser.rows[0].id]);

        return res.json(usermeals.rows);
    }
})

// get weeklyview 
app.get('/api/userview/weekly', async (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        res.status(401).json({ error: 'User not logged in' })
    }

    if (req.oidc.isAuthenticated()) {
        const loggedinuser = await db.query(`SELECT * FROM users WHERE email ='${req.oidc.user.email}'`);
        const pastweek = await db.query("SELECT * FROM meals WHERE userid=$1 AND addedon > CURRENT_DATE - INTERVAL '7 DAYS'", [loggedinuser.rows[0].id]);
        // const pastweek = await db.query("SELECT * FROM meals WHERE userid=$1 AND addedon >= DATE(NOW() - INTERVAL '7 DAYS'", [loggedinuser.rows[0].id]);

        return res.json(pastweek.rows);
    }
})



// food nutrition fetch 
app.get('/api/nutrition', cors(), async (req, res) => {
    food = req.query.food;
    console.log('req.query:', req.query);
    console.log('food:', food);
    const url = `https://api.calorieninjas.com/v1/nutrition?query=${food}`;
    try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        console.log('food info here', data);
        res.send(data);
    } catch (err) {
        console.error("Fetch error: ", err);
    }
});


// doing db query insert for user info
app.get('/api/login', async (req, res) => {
    console.log(req.oidc.isAuthenticated());
    console.log(req.oidc.user);
    if (req.oidc.isAuthenticated()) {
        const search = await db.query(
            `SELECT * FROM users WHERE email='${req.oidc.user.email}'`
        )
        console.log('search results', search.rows[0]);
        if (search.rows.length === 0) {
            const createUser = await db.query('INSERT INTO users(name, nickname, email) VALUES($1, $2, $3) RETURNING *', [req.oidc.user.name, req.oidc.user.nickname, req.oidc.user.email]
            )
            console.log('createUser', createUser.rows[0])
        }
        res.json(req.oidc.user);
    } else {
        res.status(401).json({ error: "Error found with auth0" });
    }
});


//trying to redirect if autho notworking 
app.get('/api/login', requiresAuth(), (req, res) => {
    if (req.oidc.isAuthenticated({ returnTO: '/api/nutrition/user_id' }))
        res.send(JSON.stringify(req.oidc.user));
});


app.use(express.static(REACT_BUILD_DIR));



//get user id from db
app.get('/api/nutrition/email', cors(), async (req, res) => {
    const { email } = req.params;
    try {
        const users = await db.query('SELECT * FROM users WHERE email = $1', [email]);
        res.json(users.rows[0]);
    } catch (e) {
        return res.status(400).json({ e });
    }
});



// post request for meal by user 
app.post('/api/setmeals', cors(), async (req, res) => {
    if (!req.oidc.isAuthenticated()) {
        return res.status(401).json({ error: 'user not logged in ' })
    }
    const currentUserQueryResult = await db.query(
        `SELECT * FROM users WHERE email ='${req.oidc.user.email}'`
    );
    const currentUser = currentUserQueryResult.rows[0];

    try {
        const { foodeaten, calories, mealcourse } = req.body
        const newMealPost = await db.query(
            "INSERT INTO meals(foodeaten, calories, mealcourse, userid) VALUES($1, $2, $3, $4) RETURNING *",
            [foodeaten, calories, mealcourse, currentUser.id]
        );
        res.json(newMealPost.rows[0]);
    } catch (error) {
        console.log(error.message);
    }
});



// delete request
    app.delete('/api/userview/:id', cors(), async (req, res) =>{
        const id = req.params.id;
        console.log(req.params);
        await db.query('DELETE FROM meals WHERE id=$1', [id]);
        res.status(200).end();
    
    });


 
//recipe fetch info 


// calories post for recipes page  
let calories;
app.post("/api/search-calories", (req, res) => {
    calories = req.body.calories;
  res.redirect("/api/recipes");
});

//https://api.spoonacular.com/mealplanner/generate?apiKey=9c56e4d69dfd4f8b81db725a6c6d2121&timeFrame=day&calories=3000
// get request for recipes site 
app.get("/api/recipes", cors(), async (req, res) => {
    calories = req.query.calories;
     const url = `https://api.spoonacular.com/mealplanner/generate?apiKey=${process.env.SPOONTACULARAPIKEY}&timeFrame=day&calories=${calories}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      res.send(data);
    } catch (err) {
      console.error("Fetch error: ", err);
    }
  });

    // console.log that your server is up and running
    app.listen(PORT, () => {
        console.log(`Server listening on ${PORT}`);
    });
