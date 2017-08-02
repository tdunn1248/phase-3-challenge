const db = require('./dbconfig')

function productList(section) {
  return db.any('SELECT name,section FROM grocery WHERE section = $1', [section])
}

function shopperOrders(id) {
  return db.any('SELECT basket.id, total_cost FROM basket WHERE shopper_id = $1', [id])
}

function realShoppers() {
  return db.any('SELECT DISTINCT shopper.name, basket.quanity FROM shopper, basket WHERE shopper.id = basket.shopper_id')
}

module.exports = {
  productList,
  shopperOrders,
  realShoppers
}
