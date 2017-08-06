
const modalDiv = document.getElementsByClassName('modal-div')[0]
const shoppingCart = document.getElementsByClassName('shopping-cart-ul')[0]
const cartTotal = document.getElementsByClassName('cart-price-total')[0]
const addToCartBtns = document.getElementsByClassName('add-to-cart-btn')
let cartItemCount = document.getElementsByClassName('cart-item-count')[0]

let cart = []

for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener('click', function() {
    const itemPrice = addToCartBtns[i].previousElementSibling
    const itemName= itemPrice.previousElementSibling
    pushToCart(itemName.innerHTML, itemPrice.innerHTML)
  })
}

function pushToCart(product, price) {
  cart.push(product)
  cart.push(price)
  addCartCount()
}

function renderCartItems() {
  if(cart.length === 0) {
    while( shoppingCart.firstChild ) {
      shoppingCart.removeChild( shoppingCart.firstChild )
      cartTotal.innerHTML = '$0.00'
    }
  } else {
    const listItem = document.createElement('li')
    const listPrice = document.createElement('span')
    for (let i = 0; i < cart.length; i++) {
      if(i % 2 === 0) {
        const name = cart[i]
        i = i + 1
        const price = cart[i]
        appendToList(name, price)
      }
    }
    cartMath()
  }
}

function appendToList(name, price) {
  const listItem = document.createElement('li')
  const listPrice = document.createElement('span')
  listItem.classList.add('yea')
  listItem.innerHTML = name
  listPrice.innerHTML = price
  listItem.appendChild(listPrice)
  shoppingCart.appendChild(listItem)
}

function cartMath() {
  let calculatedTotal = 0
  for (let i = 0; i < cart.length; i++) {
    if(i % 2 == 0) {
      // don't worry about it
    } else {
      const removeSymbol = cart[i].substr(1)
      const productValue = parseFloat(removeSymbol)
      calculatedTotal += productValue
    }
  }
  cartTotal.innerHTML = '$' + calculatedTotal.toFixed(2)
}

function addCartCount() {
  cartItemCount.textContent = parseInt(cartItemCount.textContent) + 1
}

function resetCartCount() {
  cartItemCount.textContent = parseInt('0.00')
}

function clearCart() {
  cart = []
  resetCartCount()
  renderCartItems()
}

function toggleModal() {
  if (modalDiv.style.visibility == 'visible') {
    modalDiv.style.visibility = 'hidden'
    document.getElementsByClassName('site-header')[0].classList.remove('blur')
    document.getElementsByClassName('sidebar')[0].classList.remove('blur')
    document.getElementsByClassName('content')[0].classList.remove('blur')
  } else {
    modalDiv.style.visibility = 'visible'
    blurr()
    renderCartItems()
  }
}

document.getElementsByClassName('sidebar')[0].addEventListener('click', function() {
  if (modalDiv.style.visibility == 'visible') {
    modalDiv.style.visibility = 'hidden'
    removeBlurr()
  }
})

document.getElementsByClassName('content')[0].addEventListener('click', function() {
  if (modalDiv.style.visibility == 'visible') {
    modalDiv.style.visibility = 'hidden'
    removeBlurr()
  }
})

// hackey way to blur background
function blurr() {
  document.getElementsByClassName('site-header')[0].classList.add('blur')
  document.getElementsByClassName('sidebar')[0].classList.add('blur')
  document.getElementsByClassName('content')[0].classList.add('blur')
}

function removeBlurr() {
  document.getElementsByClassName('site-header')[0].classList.remove('blur')
  document.getElementsByClassName('sidebar')[0].classList.remove('blur')
  document.getElementsByClassName('content')[0].classList.remove('blur')
}
