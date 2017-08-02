DROP TABLE IF EXISTS shopper CASCADE;
DROP TABLE IF EXISTS grocery CASCADE;
DROP TABLE IF EXISTS basket CASCADE;
DROP TABLE IF EXISTS basket_detail CASCADE;

CREATE TABLE shopper (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50)
);

CREATE TABLE grocery (
  id SERIAL PRIMARY KEY,
  name VARCHAR(50),
  price NUMERIC,
  section VARCHAR(30)
);

CREATE TABLE basket (
  id SERIAL PRIMARY KEY,
  shopper_id integer REFERENCES shopper (id),
  quanity INT,
  total_cost NUMERIC
);

CREATE TABLE basket_detail(
  id SERIAL PRIMARY KEY,
  basket_id integer REFERENCES basket(id),
  grocery_id integer REFERENCES grocery(id)
);
