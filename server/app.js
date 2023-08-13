const express = require('express');
const app = express();
const axios = require('axios');
const port = 5001;

const { Pool } = require('pg');
const pool = new Pool({
  user: 'postgres',
  host: '172.20.10.159',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const users = [
  {
    name: 'Juniper Zhou',
    age: 24,
    university: 'University of Auckland',
    email: 'jzhou@uoa.ac.nz',
    interests: ['Art', 'Boardgames', 'Theatre'],
    languages: ['Mandarin', 'English'],
  },
];

const communities = [
  {
    hobby: 'Classical Music',
    active_Users: 25,
  },
  {
    hobby: 'Theatre',
    active_Users: 34,
  },
  {
    hobby: 'Fun Runs & Walks',
    active_Users: 17,
  },
  {
    hobby: 'Dance',
    active_Users: 23,
  },
  {
    hobby: 'Comedy',
    active_Users: 32,
  },
  {
    hobby: 'Charity, Fundraisers',
    active_Users: 16,
  },
  {
    hobby: 'Family Entertainment',
    active_Users: 33,
  },
];

const events = [
  {
    area: 'Manukau City, Auckland',
    address: '770 Great South Rd, Manukau City, Auckland',
    interests: 'Classical Music',
    datetime_start: '2023-08-13 17:00:00',
    datetime_end: '2023-08-13 18:30:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1801490-779055.jpg',
    name: 'Hamilton & Houstoun',
    id: 1,
  },
  {
    area: 'Dunedin, Otago',
    address: '354 Great King Street, Dunedin, Otago',
    interests: 'Theatre',
    datetime_start: '2023-08-11 19:00:00',
    datetime_end: '2023-08-13 21:30:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1865828-805084.jpg',
    name: 'Shot Glass Shorts - Short Play Competition',
    id: 2,
  },
  {
    area: 'Blenheim, Marlborough',
    address: 'Cnr S.H. 6 and Caldwell Road, Blenheim, Marlborough',
    interests: 'Fun Runs & Walks',
    datetime_start: '2023-08-13 09:00:00',
    datetime_end: '2023-08-13 12:00:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1839870-795255.jpg',
    name: '40th Woodbourne Half Marathon & Fun Runs',
    id: 3,
  },
  {
    area: 'Papakura, Auckland',
    address: '13 Ray Small Drive, Papakura, Auckland',
    interests: 'Dance',
    datetime_start: '2023-08-13 18:00:00',
    datetime_end: '2023-08-13 19:30:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1870559-806473.png',
    name: 'VDC Charity Gala Fundraiser',
    id: 4,
  },
  {
    area: 'Whangaparaoa Peninsula, Auckland',
    address: '719A Whangaparaoa Road, Whangaparaoa Peninsula, Auckland',
    interests: 'Netball',
    datetime_start: '2023-08-13 15:00:00',
    datetime_end: '2023-08-13 19:00:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1873595-807607.png',
    name: 'Quiz Fundraiser - WGA Premier Netballers',
    id: 5,
  },
  {
    area: '30 The Terrace, Wellington',
    address: '30 The Terrace, Wellington',
    interests: 'Classical Music',
    datetime_start: '2023-08-13 15:00:00',
    datetime_end: '2023-08-13 17:00:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1767288-764640.jpg',
    name: '\u0100karana Piano Quartet',
    id: 6,
  },
  {
    area: 'Tauranga, Bay of Plenty',
    address: '15 Gravatt Road, Tauranga, Bay of Plenty',
    interests: 'Comedy',
    datetime_start: '2023-08-13 10:00:00',
    datetime_end: '2023-08-13 15:00:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1870495-806507.jpg',
    name: 'Intro to Improv Comedy Workshop',
    id: 7,
  },
  {
    area: 'Rotorua, Bay of Plenty',
    address: '1358 Eruera Street, Rotorua, Bay of Plenty',
    interests: 'Charity, Fundraisers',
    datetime_start: '2023-08-13 14:00:00',
    datetime_end: '2023-08-13 23:59:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1869291-805924.jpg',
    name: 'Friends of Rotorua Museum Archival Film Viewing',
    id: 8,
  },
  {
    area: "Hastings, Hawke's Bay / Gisborne",
    address: "Kenilworth Rd, Hastings, Hawke's Bay / Gisborne",
    interests: 'Family Entertainment',
    datetime_start: '2023-08-05 11:00:00',
    datetime_end: '2023-08-13 15:00:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1868297-806132.jpg',
    name: 'The Amazing Dinosaur Discovery',
    id: 9,
  },
  {
    area: '26 Allen Street, Wellington',
    address: '26 Allen Street, Wellington',
    interests: 'Comedy',
    datetime_start: '2023-06-25 19:00:00',
    datetime_end: '2023-12-10 21:00:00',
    is_free: false,
    photo: 'https://cdn.eventfinda.co.nz/uploads/events/1850239-799571.png',
    name: 'Suckers for PUNishment: A Live Comedy Stress Test',
    id: 10,
  },
];
//user, community, event

app.get('/user/:id', async (req, res) => {
  const user = users.find((u) => u.id === req.params.id);
  res.send(user);
  // const result = await pool.query('SELECT * FROM user WHERE id = $1', [
  //   req.params.id,
  // ]);
  // res.send(result.rows[0]);
});

// app.post('/user/:id', async (req, res) => {
//   const { name, age, email, university, interests, languages } = req.body;
//   const result = await pool.query(
//     'INSERT INTO user VALUES $1, $2, $3, $4, $5, $6, $7',
//     [req.params.id, name, age, email, university, interests, languages]
//   );
//   res.send(result.rows[0]);
// });

app.get('/events', async (req, res) => {
  // const result = await pool.query('SELECT * FROM events');
  // res.send(result.rows[0]);
  res.send(events);
});

app.get('/events/:id', async (req, res) => {
  const event = event.find((e) => e.id === req.params.id);
  res.send(event);
  // const result = await pool.query('SELECT * FROM event WHERE id = $1', [
  //   req.params.id,
  // ]);
  // res.send(result.rows[0]);
});

app.get('/communities', async (req, res) => {
  res.send(communities);
  // const result = await pool.query('SELECT * FROM community');
  // res.send(result.rows[0]);
});

app.get('/communities/:id', async (req, res) => {
  const community = communities.find((c) => c.id === req.params.id);
  res.send(community);
  // const result = await pool.query('SELECT * FROM community WHERE id = $1', [
  //   req.params.id,
  // ]);
  // res.send(result.rows[0]);
});

app.get('/eventfinda-events', async (req, res) => {
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
  console.log(response.data);
  res.send(response.data);
});
