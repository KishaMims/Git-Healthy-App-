const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
// const fetch = (...args) =>
//  import('node-fetch').then(({ default: fetch }) => fetch(...args));
//const axios = require('axios');
require('dotenv').config()
const { auth, requiresAuth  } = require('express-openid-connect');
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



//axios with food inside already 
// app.get('/test-dino', cors(), async (req, res) => {
//     console.log('hi');
//     console.log('env ', process.env);
//     const result = await axios.get(
//         'https://api.calorieninjas.com/v1/nutrition?query=onion', 
//         {
//             headers: {
//                 'X-Api-Key': process.env.CALORIE_NINJA_API_KEY,
//             },
//         }
//     )
//     console.log('result ', result);

//     res.status(200).end('ok');
// });


// fetch nodejs

//  axios 
// var reqoptions = {
//   method: 'get',
//   url: `https://api.calorieninjas.com/v1/nutrition?query=${food}`,
//   headers: { 
//     'X-Api-Key': process.env.CALORIENINJAAPIKEY
//   }
// };

// axios(reqoptions)
// .then(function (response) {
//   console.log(JSON.stringify(response.data));
// })
// .catch(function (error) {
//   console.log(error);
// });



// get request with the food item 
// const makeUrl = (food) => {

// return `https://api.calorieninjas.com/v1/nutrition?query=+${food}`

// };

// app.get('/api/nutrition', cors(), async (req, res) => {
//     console.log('hi');
//     const food = req.query.food;
//     console.log('env ', process.env);
//     const result = await axios.get(
//          (makeUrl(food)),
//         {
//             headers: {
//                 'X-Api-Key': process.env.CALORIE_NINJA_API_KEY
//             },
//         }
//     )
//     console.log('result ', result);
//     res.send(response.data);
//     res.status(200).end('ok');
// });


//creates an endpoint for the route /api
app.get('/', (req, res) => {
    const d = new Date();
    res.json({ currentTime: d.toTimeString() });
    console.log('I am on line 114');
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
var myHeaders = new Headers();
myHeaders.append("X-Api-Key", process.env.CALORIENINJAAPIKEY);


var requestOptions = {
    headers: myHeaders,
};

app.get("/api/nutrition", cors(), async (req, res) => {
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
    // fetch(`https://api.calorieninjas.com/v1/nutrition?query=${food}`, requestOptions)
    //     .then(res => { return res.json(); })
    //     .then(data => {
    //         console.log("data from fetch:", data)
    //        res.json(data);
    //   })
});


//creates an endpoint for the user authinticated
// app.get('/api/login', (req, res) => {
//     console.log("Hello",req.oidc.user);
//     console.log(req.oidc.user);
//     if (req.oidc.isAuthenticated()) {
//         res.json(req.oidc.user);
//     } else {
//         res.status(401).json({ error: "Error found with auth0" });
//     }
// });

// doing db query insert for user info
app.get('/api/login', async (req, res) => {
    console.log(req.oidc.isAuthenticated());
    console.log(req.oidc.user);
    if (req.oidc.isAuthenticated()) {
        const search = await db.query(
            `SELECT * FROM users WHERE email='${req.oidc.user.email}'`
        )
        console.log('search results', search.rows[0]);
        if(search.rows.length === 0 ){
        const createUser = await db.query ('INSERT INTO users(name, nickname, email) VALUES($1, $2, $3) RETURNING *', [req.oidc.user.name, req.oidc.user.nickname, req.oidc.user.email]
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
    if(req.oidc.isAuthenticated({ returnTO: '/nutrtion'}))
    res.send(JSON.stringify(req.oidc.user));
  });


app.use(express.static(REACT_BUILD_DIR));

//get user id from db
app.get('/nutrition/user_id', cors(), async (req, res) => {
    const { id } = req.params;
    try {
        const users = await db.query('SELECT * FROM users WHERE id = $1', [id]);
        res.json(posts.rows[0]);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

// get all the usermeals for the current day on login
app.get('/api/nutrition/user_id', cors(), async (req, res) => {
    try {
        const meals = await db.query('SELECT * FROM meals WHERE user_id =$1 AND added_on =$2', [user_id, CURRENT_DATE]);
        res.send(posts);
    } catch (e) {
        return res.status(400).json({ e });
    }
});


//get weekly view of meals 
app.get('/api/nutrition/user_id', cors(), async (req, res) => {
    try {
        const meals = await db.query('SELECT * FROM meals WHERE id =$1 AND added_on =$2 AND =$3', [id, startdate, enddate]);
        res.send(posts);
    } catch (e) {
        return res.status(400).json({ e });
    }
});

//get a single user meal 
app.get('/api/nutrition/user_id/meal', cors(), async (req, res) => {
    try {
        const meals = await db.query('SELECT * FROM meals WHERE user_id =$1 AND food_eaten =$2 AND meal_course=$3 AND added_on=$3', [id, food_eaten, meal_course, added_on]);
        res.send(posts);
    } catch (e) {
        return res.status(400).json({ e });
    }
});



// post request for meal by user 
app.post('/api/nutrition/user_id', cors(), async (req, res) => {
    const {added_on, food_eaten, calories, meal_course, user_id } = req.bodyl
    const newMealPost = await db.query(
        'INSERT INTO meals(added_on, food_eaten, calories, meal_course, user_id) VALUES($1, $2, $3, $4, $5) RETURNING *',
        [added_on, food_eaten, calories, meal_course, user_id]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// delete request
app.delete('/api/nutrtion/user_id/meal', cors(), async (req, res) => {
    const { id } = req.params
    //console.log(req.params);
    await db.query('DELETE FROM meals WHERE id=$1 AND food_eaten=$2 AND added_on=$3 ', [studentId]);
    res.status(200).end();

});

// Put request - Update request
app.put('/api/students/:studentId', cors(), async (req, res) => {
    const studentId = req.params.studentId;
    const updateStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname }
    //console.log(req.params);
    // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
    console.log(studentId);
    console.log(updateStudent);
    const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id = ${studentId} RETURNING *`;
    console.log(query);
    const values = [updateStudent.lastname, updateStudent.firstname];
    try {
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});
