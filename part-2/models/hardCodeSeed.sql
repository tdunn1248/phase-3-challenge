INSERT INTO shopper (id, name)VALUES(1, 'Mary');
INSERT INTO shopper (id, name)VALUES(2, 'Shanti');
INSERT INTO shopper (id, name)VALUES(3, 'Mohammad');
INSERT INTO shopper (id, name)VALUES(4, 'Ethan');
INSERT INTO shopper (id, name)VALUES(5, 'Robert');
INSERT INTO shopper (id, name)VALUES(6, 'George');
INSERT INTO shopper (id, name)VALUES(7, 'Justin');
INSERT INTO shopper (id, name)VALUES(8, 'David');

INSERT INTO orders (id, shopper_id, quanity, total_cost)VALUES(1, 1, 2.32);
INSERT INTO orders (id, shopper_id, quanity, total_cost)VALUES(2, 2, 40.98);
INSERT INTO orders (id, shopper_id, quanity, total_cost)VALUES(3, 4, 20.78);
INSERT INTO orders (id, shopper_id, quanity, total_cost)VALUES(4, 6, 1.64);
INSERT INTO orders (id, shopper_id, quanity, total_cost)VALUES(5, 8, 12.32);

INSERT INTO orders_detail (id, orders_id, grocery_id)VALUES(1, 1, 9);
INSERT INTO orders_detail (id, orders_id, grocery_id)VALUES(2, 2, 1);
INSERT INTO orders_detail (id, orders_id, grocery_id)VALUES(3, 2, 7);
INSERT INTO orders_detail (id, orders_id, grocery_id)VALUES(4, 4, 5);
INSERT INTO orders_detail (id, orders_id, grocery_id)VALUES(5, 1, 2);
INSERT INTO orders_detail (id, orders_id, grocery_id)VALUES(6, 6, 18);
