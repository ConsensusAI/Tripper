DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE plans (
  id SERIAL PRIMARY KEY NOT NULL,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  ordering INTEGER NOT NULL
);