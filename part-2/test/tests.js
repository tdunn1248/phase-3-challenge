const chai = require('chai')
const expect = chai.expect

const {productList, shopperOrders, realShoppers} = require('../models/database')

describe('database queries', function() {
  it('productList() lists all products which belong to the given section', function() {
    return productList('dairy').then(results => {
      expect(results.length).to.be.equal(7)
      expect(typeof results).to.eql('object')
      expect(results[0]).to.be.eql({ name: 'Butter', section: 'dairy' })
      expect(results[6]).to.be.eql({ name: 'Yogurt', section: 'dairy' })
    })
  })
  it('shopperOrders() lists the orders for a given shopper', function() {
    return shopperOrders(5).then(results => {
      expect(results.length).to.be.equal(1)
      expect(typeof results).to.eql('object')
      expect(results[0]).to.be.eql({ id: 5, total_cost: '55.34' })
    })
  })
  it('realShoppers() lists the names of all shoppers who have atleast 1 order', function() {
    return realShoppers().then(results => {
      expect(results.length).to.be.equal(8)
      expect(typeof results).to.eql('object')
      expect(results[0]).to.be.eql({ name: 'Justin', quanity: 1 })
      expect(results[7]).to.be.eql({ name: 'Robert', quanity: 3 })
    })
  })
})
