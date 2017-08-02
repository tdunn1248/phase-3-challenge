## Database Instructions

1. To Load Database Schema run:
```psql grocery_store -f ./models/schema.sql```

2. To seed load-data file with csv data and hard coded dummy data run:
```node ./models/seed.js```
- This will write to the load-data.sql file with all the insert statements to populate the Database

3. To populate the database run:
```psql grocery_store -f ./models/load-data.sql```

## To Setup Test Database:
1. Load Schema: ```psql grocery_store -f ./test/schema_test.sql```
2. To populate database: ```psql grocery_store -f ./test/load-test-data.sql```
