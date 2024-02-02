const express = require('express');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config()
const app = express();
const port = 3000;

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432,
});

app.use(express.json());

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        if (!username || !password) {
            return res.status(401).json({ error: 'Missing credentials' });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = await pool.query('INSERT INTO users (username, password_hash) VALUES ($1, $2) RETURNING *', [username, hashedPassword]);

        res.status(201).json({ user: newUser.rows[0] });
    } catch (error) {
        console.log(error.message)
        res.status(500).send(error.message);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userResult = await pool.query('SELECT * FROM users WHERE username = $1', [username]);

        if (userResult.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const user = userResult.rows[0];

        const passwordMatch = await bcrypt.compare(password, user.password_hash);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const token = jwt.sign({ user_id: user.user_id }, 'your_jwt_secret', { expiresIn: '1h' });

        res.json({ token });
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

app.post('/api/breed', async (req, res) => {
    try {
        const { breed, numOfLegs } = req.body;
        await pool.query('INSERT INTO ANIMALS (breed, numOfLegs) VALUES ($1, $2)', [breed, numOfLegs]);
        res.status(200).send('breed created!');
    } catch (err) {
        res.status(500).send(err);
    }
});

app.get('/api/breeds', async (req, res) => {
    try {
        const animals = await pool.query('SELECT * FROM ANIMALS');
        res.status(200).send(animals.rows);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.delete('/api/breed/:breed', async (req, res) => {
    try {
         await pool.query('DELETE FROM ANIMALS WHERE breed = $1', [req.params.breed]);
        res.status(200).send(`${req.params.breed} was deleted!`);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.patch('/api/breed', async (req, res) => {
    const { id, newValue } = req.body
    try {
        await pool.query('UPDATE ANIMALS SET breed = $1 WHERE breed = $2', [newValue, id]);
        res.status(200).send(`${id} was updated!`);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log(`Server is running on - http://localhost:${port}`);
});
