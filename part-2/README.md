## Database Instructions

- To seed load-data file with csv data and hard coded dummy data run:
```node ./models/seed.js```
- This will write to the load-data.sql file with all the insert statements to populate the Database

- To Insert Data run the command:
```psql grocery_store -f ./models/load-data.sql```

- I called the "order" table  "basket" to avoid using an SQL reserved keyword of order
