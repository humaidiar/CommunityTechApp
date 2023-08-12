const express = require('express');
const app = express();
const axios = require('axios');
const port = 5001;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'username',
  host: 'localhost',
  database: 'd',
  password: 'pass',
  port: 5432,
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

//user, community, event

app.get('/user/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM user WHERE id = $1', [
    req.params.id,
  ]);
  res.send(result.rows[0]);
});

app.post('/user/:id', async (req, res) => {
  const { name, age, email, university, interests, languages } = req.body;
  const result = await pool.query(
    'INSERT INTO user VALUES $1, $2, $3, $4, $5, $6, $7',
    [req.params.id, name, age, email, university, interests, languages]
  );
  res.send(result.rows[0]);
});

app.get('/events', async (req, res) => {
  const result = await pool.query('SELECT * FROM event');
  res.send(result.rows[0]);
});

app.get('/events/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM event WHERE id = $1', [
    req.params.id,
  ]);
  res.send(result.rows[0]);
});

app.get('/communities', async (req, res) => {
  const result = await pool.query('SELECT * FROM community');
  res.send(result.rows[0]);
});

app.get('/communities/:id', async (req, res) => {
  const result = await pool.query('SELECT * FROM community WHERE id = $1', [
    req.params.id,
  ]);
  res.send(result.rows[0]);
});

app.get('/eventfinda-events', async (req, res) => {
  //   let user = "summeroftechcreatecamp"
  //   let pass = "tcr5sxb84vxj"
  //   const {data} = await got.get('https://api.eventfinda.co.nz/v2/events.xml', {
  //     headers: {
  //       "Authorization":
  //     }
  // }).json();
  // console.log(data)

  const username = 'summeroftechcreatecamp';
  const password = 'tcr5sxb84vxj';

  const credentials = Buffer.from(`${username}:${password}`).toString('base64');

  const response = await axios.get(
    'https://api.eventfinda.co.nz/v2/events.json',
    {
      headers: {
        Authorization: `Basic ${credentials}`,
      },
    }
  );
  res.send(response.data);
});
