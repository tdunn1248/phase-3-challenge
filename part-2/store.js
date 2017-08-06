const db = require('./models/dbconfig')
const {productList, shopperOrders, realShoppers} = require('./models/database')
const {formatTable} = require('./formatTable.js')


// switch statement that takes in user input from the global variable process.argv property
//
// and runs coordinating functions with those commands
// all cases except the last two have the same pattern:
// 1. run the assocative function with users command
/* 2. wait for the promise to return then first format the table
 with the result header to setup corresponding table headers */
/* 3. run a forEach of the array of results and console log appropiate
 column names  */
 // 4. catch any errors that may have occured and display to console

 // last two cases:
 // if nothing enterered(undefined) console log Please provide a command
 // if user input error respond with their input and a string that says to enter a valid command

const userInput = (command, argument) => {
  switch(command) {
    case 'product-list':
      productList(argument)
        .then(results => {
          formatTable(results)
          results.forEach(record => {
            console.log(record.name, "  ", record.section);
          })
        }).catch(e => console.error(e))
      break
    case 'shopper-orders':
      shopperOrders(argument)
        .then(results => {
          formatTable(results)
          results.forEach(record => {
            console.log(record.id,"  ", record.total_cost);
          })
        }).catch(e => console.error(e))
      break
    case 'real-shoppers':
      realShoppers()
        .then( results => {
          formatTable(results)
          results.forEach(record => {
            console.log(record.name,"   ", record.quanity)
          })
        }).catch(e => console.error(e))
      break
    case undefined:
      console.log('Please enter a command')
      break
    default:
      console.log('Sorry, ' + command + ' is not a valid command')
      break
  }
}

// gets called when you start the node process 
userInput(process.argv[2], process.argv[3] )
