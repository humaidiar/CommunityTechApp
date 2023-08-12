const express = require('express');
const app = express();
const port = 3000;
const got = require('got');
import * as db from './db/index.js'

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//user, community, event

app.get('/user/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM user WHERE id = $1', [
    req.params.id,
  ]);
  res.send(result.rows[0]);
});

app.post('/user/:id', async (req, res) => {
  const result = await db.query('INSERT INTO user VALUES', [
    req.params.id,
    req.name,
    req.age,
    req.email,
    req.university,
    req.interests,
    req.languages,
  ]);
  res.send(result.rows[0]);
});

app.get('/events', async (req, res) => {
  const result = await db.query('SELECT * FROM event');
  res.send(result.rows[0]);
});

app.get('/events/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM event WHERE id = $1', [
    req.params.id,
  ]);
  res.send(result.rows[0]);
});

app.get('/communities', async (req, res) => {
  const result = await db.query('SELECT * FROM community');
  res.send(result.rows[0]);
});

app.get('/communities/:id', async (req, res) => {
  const result = await db.query('SELECT * FROM community WHERE id = $1', [
    req.params.id,
  ]);
  res.send(result.rows[0]);
});

app.get('/eventfinda-api', async (req, res) => {
//   let user = "summeroftechcreatecamp"
//   let pass = "tcr5sxb84vxj"
//   const {data} = await got.get('https://api.eventfinda.co.nz/v2/events.xml', {
//     headers: {
//       "Authorization":
//     }
// }).json();
// console.log(data)

var spawn = require("child_process").spawn;
});
