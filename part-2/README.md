## Database Instructions

- 1. To Load Database Schema run:
```psql grocery_store -f ./models/schema.sql```

- 2. To seed load-data file with csv data and hard coded dummy data run:
```node ./models/seed.js```
- This will write to the load-data.sql file with all the insert statements to populate the Database

- 3. To Insert Data run the command:
```psql grocery_store -f ./models/load-data.sql```

- I called the "order" table  "basket" to avoid using the SQL reserved keyword of order
