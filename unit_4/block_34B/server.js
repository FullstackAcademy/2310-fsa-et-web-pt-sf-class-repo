require('dotenv').config();
const express = require('express');
const axios = require('axios');
const { Octokit } = require('octokit');
const app = express();

const CLIENT_ID = process.env.GITHUB_CLIENT_ID;
const CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET;

app.get('/', (req, res) => {
    res.send('<a href="/login">Login with GitHub</a>');
});

app.get('/login', (req, res) => {
    const redirectUri = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}`;
    res.redirect(redirectUri);
});

app.get('/auth/github/callback', async (req, res) => {
    const code = req.query.code;
    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            code: code
        }, { headers: { accept: 'application/json' } });

        const accessToken = response.data.access_token;
        res.send('You are logged in!');
    } catch (error) {
        console.error('Error during authentication:', error);
        res.send('Authentication failed');
    }
});

app.listen(3000, () => {
    console.log('Server started on http://localhost:3000');
});
