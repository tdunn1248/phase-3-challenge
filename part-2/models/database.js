const db = require('./dbconfig')

function productList(section) {
  return db.any('SELECT name,section FROM grocery WHERE section = $1', [section])
}

function shopperOrders(id) {
  return db.any('SELECT orders.id, total_cost FROM orders WHERE shopper_id = $1', [id])
}

function realShoppers() {
  return db.any('SELECT DISTINCT shopper.name, orders.quanity FROM shopper, orders WHERE shopper.id = orders.shopper_id')
}

module.exports = {
  productList,
  shopperOrders,
  realShoppers
}
