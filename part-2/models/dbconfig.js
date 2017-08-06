
// require and call pg-promise to store in a const pgp
const pgp = require('pg-promise')()
/* Dotenv is a module that loads environment variables from a .env file into process.env. */
require('dotenv').config()

let connectionString

(process.env.NODE_ENV === 'development') ? connectionString = process.env.DATABASE_URL :
connectionString = process.env.TEST_DATABASE_URL

// decalre and initalize database to use in the app
// the value of db is the connection string passed to pgp
const db = pgp(connectionString)

// export globally to be used
module.exports = db
