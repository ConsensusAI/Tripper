const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
});

const getUserInfo = (userId) => {
  let queryString = `SELECT * FROM users
  WHERE users.id = $1;`;
  let queryParams = [userId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getUserInfo = getUserInfo;

const checkUserLogin = (user) => {
  let queryString = `SELECT id, name FROM users
  WHERE email = $1
  AND password = $2;`;
  let queryParams = [user.email, user.password];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.checkUserLogin = checkUserLogin;

const getPlansForUser = (userId) => {
  let queryString = `SELECT * FROM plans
  WHERE plans.user_id = $1`;
  let queryParams = [userId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getPlansForUser = getPlansForUser;

const getEventsForPlan = (planId) => {
  let queryString = `SELECT * FROM events
  WHERE events.plan_id = $1 ORDER BY date_time`;
  let queryParams = [planId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getEventsForPlan = getEventsForPlan;

// Create a New Plan
const addNewPlan = (userId, planName) => {
  let queryString = `INSERT INTO plans (user_id, name, ordering) VALUES ($1, $2, 1);`;
  let queryParams = [userId, planName];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addNewPlan = addNewPlan;

// Add Event to Plan
const addEventToPlan = (planId, newEvent) => {
  let queryString = `INSERT INTO events (id, plan_id, name, description, image, lat, lng, date_time, street_address, image_url) VALUES ($1, $2, $3, $4, $5, $6, $7, NOW(), $8, $9);`;
  let queryParams = [
    newEvent.id,
    planId,
    newEvent.name,
    newEvent.alias,
    newEvent.url,
    newEvent.lat,
    newEvent.lng,
    newEvent.address,
    newEvent.image_url,
  ];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.addEventToPlan = addEventToPlan;

// Delete Event From Database
const deleteEvent = (eventId) => {
  let queryString = `DELETE FROM events WHERE id = $1;`;
  let queryParams = [eventId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.deleteEvent = deleteEvent;

const getEventById = (eventId) => {
  let queryString = `SELECT * FROM events
  WHERE id = $1;`;
  let queryParams = [eventId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.getEventById = getEventById;

const markEventDone = (eventId) => {
  let queryString = `UPDATE events 
  SET done = NOT done
  WHERE id = $1;`;
  let queryParams = [eventId];

  return pool
    .query(queryString, queryParams)
    .then((res) => {
      return res.rows;
    })
    .catch((err) => {
      console.log(err.message);
    });
};

exports.markEventDone = markEventDone;
