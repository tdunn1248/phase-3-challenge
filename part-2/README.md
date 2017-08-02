## Database

### To seed load-data file with csv data and hard coded dummy data use:
```node ./models/seed.js```
- This will write to the load-data.sql file with all the insert statements to populate the Database 

- To Insert Data use the command:
```psql grocery_store -f ./models/load-data.sql```
