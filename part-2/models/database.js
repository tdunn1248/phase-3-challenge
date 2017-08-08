const db = require('./dbconfig')

function productList(section) {
  return db.any('SELECT name,section FROM grocery WHERE section = $1', [section])
}

function shopperOrders(id) {
  return db.any('SELECT orders.id, total_cost FROM orders WHERE shopper_id = $1', [id])
}

function realShoppers() {
  return db.any('SELECT shopper.name, COUNT(orders.id) FROM shopper, orders WHERE shopper.id = orders.shopper_id GROUP BY shopper.name')
}

module.exports = {
  productList,
  shopperOrders,
  realShoppers
}
