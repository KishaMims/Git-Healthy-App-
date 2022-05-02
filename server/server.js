const express = require('express');
const cors = require('cors');
const path = require('path');
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

app.use(auth(config));

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());

//creates an endpoint for the route /api
app.get('/', (req, res) => {
    console.log(req.oidc.isAuthenticated());
    res.sendFile(path.join(REACT_BUILD_DIR, 'index.html'));
});

//creates an endpoint for the user authinticated
app.get('/api/login', (req, res) => {
    console.log("Hello");
    console.log(req.oidc.isAuthenticated());
    if(req.oidc.isAuthenticated()){
        res.json(req.oidc.user);
    } else {
        res.status(401).json({error: "Error found with auth0"});
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
    try{
        const { rows: students } = await db.query('SELECT * FROM students');
        res.send(students);
    } catch (e){
        console.log(e);
        return res.status(400).json({e});
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
app.delete('/api/students/:studentId', cors(), async (req, res) =>{
    const studentId = req.params.studentId;
    //console.log(req.params);
    await db.query('DELETE FROM students WHERE id=$1', [studentId]);
    res.status(200).end();

});

// Put request - Update request
app.put('/api/students/:studentId', cors(), async (req, res) =>{
    const studentId = req.params.studentId;
    const updateStudent = { id: req.body.id, firstname: req.body.firstname, lastname: req.body.lastname }
    //console.log(req.params);
    // UPDATE students SET lastname = 'TestMarch' WHERE id = 1;
    console.log(studentId);
    console.log(updateStudent);
    const query = `UPDATE students SET lastname=$1, firstname=$2 WHERE id = ${studentId} RETURNING *`;
    console.log(query);
    const values = [updateStudent.lastname, updateStudent.firstname];
    try{
        const updated = await db.query(query, values);
        console.log(updated.rows[0]);
        res.send(updated.rows[0]);
    } catch (e){
        console.log(e);
        return res.status(400).json({e});
    }
});

// console.log that your server is up and running
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});