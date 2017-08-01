function toggleModal() {
  calculateTotal()
	const el = document.getElementById("modal");
	el.style.visibility = (el.style.visibility == "visible") ? "hidden" : "visible";
}

const buyButtons = document.querySelectorAll('.item-buy-button')
buyButtons.forEach(function(button){
  button.addEventListener('click', function(){
		addItemToCart(button.parentNode)
	})
})

function addItemToCart(itemParent) {
  const itemName = itemParent.getElementsByClassName('item-name')[0].textContent,
      itemPrice = itemParent.getElementsByClassName('item-price')[0].textContent,
      cartItemCount = document.getElementById('cart-item-count'),
      cartItemSection = document.getElementById('cart-item-section')

  cartItemCount.textContent = parseInt(cartItemCount.textContent) + 1

	const cartItemElement = document.createElement('li')
  const cartItemName = document.createElement('span')
  const cartItemPrice = document.createElement('span')

	cartItemElement.classList.add('cart-item')
	cartItemName.classList.add('cart-item-name')
	cartItemName.textContent = itemName
	cartItemPrice.classList.add('cart-item-price')
	cartItemPrice.textContent = itemPrice

	cartItemElement.appendChild(cartItemName)
	cartItemElement.appendChild(cartItemPrice)

	cartItemSection.appendChild(cartItemElement)
}

function calculateTotal() {
  var prices = document.getElementsByClassName('cart-item-price')
  var cartPrices = []
  for(var i = 0; i < prices.length; i++) {
    let itemPrice = prices[i].innerHTML
    cartPrices.push(itemPrice)
  }
  var cartTotal = 0
  cartPrices.forEach(priceStr => {
    var pricey = priceStr.substr(1)
    var price = parseFloat(pricey)
    cartTotal +=  price
  })
  document.getElementsByClassName('cart-total')[0].innerHTML = '$' + cartTotal
}

function clearCart() {
  var cartSection = document.getElementById('cart-item-section')
  cartSection.remove()
  calculateTotal()
}
