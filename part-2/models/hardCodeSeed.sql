INSERT INTO shopper (id, name)VALUES(default, 'Mary');
INSERT INTO shopper (id, name)VALUES(default, 'Shanti');
INSERT INTO shopper (id, name)VALUES(default, 'Mohammad');
INSERT INTO shopper (id, name)VALUES(default, 'Ethan');
INSERT INTO shopper (id, name)VALUES(default, 'Robert');
INSERT INTO shopper (id, name)VALUES(default, 'George');
INSERT INTO shopper (id, name)VALUES(default, 'Justin');
INSERT INTO shopper (id, name)VALUES(default, 'David');

INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 1, 1, 2.32);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 2, 2, 40.98);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 3, 1, 10.69);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 4, 1, 20.78);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 5, 3, 55.34);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 6, 1, 1.64);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 7, 1, 5.76);
INSERT INTO basket (id,shopper_id, quanity, total_cost)VALUES(default, 8, 1, 12.32);

INSERT INTO basket_detail (id, basket_id, grocery_id)VALUES(default, 1, 9);
INSERT INTO basket_detail (id, basket_id, grocery_id)VALUES(default, 2, 1);
INSERT INTO basket_detail (id, basket_id, grocery_id)VALUES(default, 3, 7);
INSERT INTO basket_detail (id, basket_id, grocery_id)VALUES(default, 4, 5);
INSERT INTO basket_detail (id, basket_id, grocery_id)VALUES(default, 5, 2);
INSERT INTO basket_detail (id, basket_id, grocery_id)VALUES(default, 6, 18);
