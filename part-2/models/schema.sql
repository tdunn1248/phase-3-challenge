-- DROP table if exists and cascade delete all dependencies
DROP TABLE IF EXISTS shopper CASCADE;
DROP TABLE IF EXISTS grocery CASCADE;
DROP TABLE IF EXISTS orders CASCADE;
DROP TABLE IF EXISTS orders_detail CASCADE;


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

CREATE TABLE orders (
  id SERIAL PRIMARY KEY,
  shopper_id integer REFERENCES shopper (id),
  quanity INT,
  total_cost NUMERIC
);

-- // join table to see contents of order. Needs to reference an order and grocery item
CREATE TABLE orders_detail (
  id SERIAL PRIMARY KEY,
  orders_id integer REFERENCES orders(id),
  grocery_id integer REFERENCES grocery(id)
);
