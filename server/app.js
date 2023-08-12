const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/users/:id', (req, res) => {});

app.post('/users/:id', (req, res) => {});

app.get('/events', (req, res) => {});

app.get('/events/:id', (req, res) => {});

app.get('/communities/:id', (req, res) => {});

app.get('/communities/:id', (req, res) => {});
