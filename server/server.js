const express = require('express');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');
// const fetch = (...args) =>
//  import('node-fetch').then(({ default: fetch }) => fetch(...args));
//const axios = require('axios');
require('dotenv').config()
const { auth } = require('express-openid-connect');
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
      res.send(data.body);
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
app.get('/api/login', (req, res) => {
    console.log("Hello");
    console.log(req.oidc.isAuthenticated());
    if (req.oidc.isAuthenticated()) {
        res.json(req.oidc.user);
    } else {
        res.status(401).json({ error: "Error found with auth0" });
    }
});



app.use(express.static(REACT_BUILD_DIR));

//create the get request
app.get('/api/students', cors(), async (req, res) => {

    // const STUDENTS = [

    //     { id: 1, firstName: 'Lisa', lastName: 'Lee' },
    //     { id: 2, firstName: 'Eileen', lastName: 'Long' },
    //     { id: 3, firstName: 'Fariba', lastName: 'Dako' },
    //     { id: 4, firstName: 'Cristina', lastName: 'Rodriguez' },
    //     { id: 5, firstName: 'Andrea', lastName: 'Trejo' },
    // ];
    // res.json(STUDENTS);
    try {
        const { rows: students } = await db.query('SELECT * FROM students');
        res.send(students);
    } catch (e) {
        console.log(e);
        return res.status(400).json({ e });
    }
});

//create the POST request
app.post('/api/students', cors(), async (req, res) => {
    const newUser = { firstname: req.body.firstname, lastname: req.body.lastname }
    console.log([newUser.firstname, newUser.lastname]);
    const result = await db.query(
        'INSERT INTO students(firstname, lastname) VALUES($1, $2) RETURNING *',
        [newUser.firstname, newUser.lastname]
    );
    console.log(result.rows[0]);
    res.json(result.rows[0]);
});

// delete request
app.delete('/api/students/:studentId', cors(), async (req, res) => {
    const studentId = req.params.studentId;
    //console.log(req.params);
    await db.query('DELETE FROM students WHERE id=$1', [studentId]);
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