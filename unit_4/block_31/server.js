const express = require('express')
const path = require('path');
const app = express()
const port = 8080;
const students = ['Midhat', "Matt", "Stephen", "Andrew", "Troy", "michell"];

app.get('/', function(req,res){
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.get('/students', function(req,res){
    console.log(req.query.student);
    res.sendFile(path.join(__dirname, '/students.html'));
})

app.get('/api/names', function (req, res) {
    res.json(students)
})

app.post('/api/name/:studentName', function (req, res) {
    const studentName = req.params.studentName;
    students.push(studentName);
    return res.sendStatus(200);
})

app.put('/api/update/:oldName/:newName', function (req, res) {
    const oldName = req.params.oldName;
    const newName = req.params.newName;
    const oldNameIndex = students.indexOf(oldName);
    students[oldNameIndex] = newName;
    return res.sendStatus(200);
})

app.delete('/api/remove/student', function (req, res) {
    students.pop();
    return res.sendStatus(200);
})

app.listen(port)