const db = require('./models/dbconfig')
const {productList, shopperOrders, realShoppers} = require('./models/database')
const {formatTable} = require('./formatTable.js')

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
            console.log(record.name,"   ", record.count)
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

userInput(process.argv[2], process.argv[3] )
