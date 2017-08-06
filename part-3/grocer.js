
const modalDiv = document.getElementsByClassName('modal-div')[0]
const shoppingCart = document.getElementsByClassName('shopping-cart-ul')[0]
const addToCartBtns = document.getElementsByClassName('add-to-cart-btn')
const listie = document.createElement('li')

const cart = []


// window onload function
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
}

function renderCartItems() {
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
}

function appendToList(name, price) {
  const listItem = document.createElement('li')
  const listPrice = document.createElement('span')
  listItem.innerHTML = name
  listPrice.innerHTML = price
  listItem.appendChild(listPrice)
  shoppingCart.appendChild(listItem)
}

function toggleModal() {
  if (modalDiv.style.visibility == 'visible') {
    modalDiv.style.visibility = 'hidden'
    document.getElementsByClassName('site-header')[0].classList.remove('blur')
    document.getElementsByClassName('sidebar')[0].classList.remove('blur')
    document.getElementsByClassName('content')[0].classList.remove('blur')
  } else {
    modalDiv.style.visibility = 'visible'
    document.getElementsByClassName('site-header')[0].classList.add('blur')
    document.getElementsByClassName('sidebar')[0].classList.add('blur')
    document.getElementsByClassName('content')[0].classList.add('blur')
    renderCartItems()
  }
}

// hackey way to blur background
document.getElementsByClassName('sidebar')[0].addEventListener('click', function() {
  if (modalDiv.style.visibility == 'visible') {
    modalDiv.style.visibility = 'hidden'
    document.getElementsByClassName('site-header')[0].classList.remove('blur')
    document.getElementsByClassName('sidebar')[0].classList.remove('blur')
    document.getElementsByClassName('content')[0].classList.remove('blur')
  }
})

document.getElementsByClassName('content')[0].addEventListener('click', function() {
  if (modalDiv.style.visibility == 'visible') {
    modalDiv.style.visibility = 'hidden'
    document.getElementsByClassName('site-header')[0].classList.remove('blur')
    document.getElementsByClassName('sidebar')[0].classList.remove('blur')
    document.getElementsByClassName('content')[0].classList.remove('blur')
  }
})
// =================== //
