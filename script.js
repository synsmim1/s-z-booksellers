let addCart = document.getElementsByClassName('addBtn')
let mainShoppingContainer = document.getElementsByTagName('tbody')[0]
let cartQuantity = document.getElementsByClassName('num')
let removeBtn = document.getElementsByClassName('remove-button')

for (i=0; i<addCart.length; i++){
  addCart[i].addEventListener('click', addToCart)
}

function addToCart(event){
  let addButton = event.target
  let addButtonP = addButton.parentElement
  // let addButtonGP = addButton.parentElement.parentElement
  let bookTitle = addButtonP.children[1].innerText
  let bookPrice = addButtonP.children[4].innerText
  let bookImg = addButtonP.children[0].src

  let shoppingList = document.createElement('tr')
  shoppingList.innerHTML = `
    <td><img class='cart-img' src=${bookImg} alt="dracula" width="50px"></td>
    <td>
        <h5 class="book-title">${bookTitle}</h5>
    </td>
    <td class="item-price"><h5>${bookPrice}</h5></td>
    <td><input type='number' class='num' value='1' step="1"></td>
    <td class="total-price"><h5>${bookPrice}</h5></td>
    <td><button class="remove-button" type="button">Remove</button></td>`

  mainShoppingContainer.append(shoppingList)
  
  for (i=0; i<cartQuantity.length; i++){
    cartQuantity[i].addEventListener('click', updateTotal)
  }

  for (i=0; i<removeBtn.length; i++){
    removeBtn[i].addEventListener('click', removeItem)
  }

  grandTotal()
}

function updateTotal (event){
  itemNumber = event.target
  itemNumberParent =itemNumber.parentElement.parentElement
  priceField = itemNumberParent.getElementsByClassName('item-price')[0]
  totalField = itemNumberParent.getElementsByClassName('total-price')[0]
  priceFieldDisplay = priceField.children[0].innerText.replace('$', '')
  totalField.children[0].innerText = '$' + itemNumber.value * priceFieldDisplay

  if (isNaN(itemNumber.value) || itemNumber.value <= 0){
    itemNumber.value = 1
  }
  grandTotal()
  
  //console.log(priceFieldDisplay)
}

function grandTotal(){
  let total = 0
  let totalPrice = document.getElementsByClassName('total-price')
  let grandTotal = document.getElementsByClassName('grand-total')[0]
  for (i=0; i<totalPrice.length; i++){
    totalPriceContent = Number(totalPrice[i].innerText.replace('$', ''))
    //total += totalPriceContent
    total = Math.floor((total+totalPriceContent)*100)/100
  }
  grandTotal.innerText = 'Total Cost: $' + total
}

function removeItem(event){
  removeBtn = event.target
  removeBtnGP = removeBtn.parentElement.parentElement
  removeBtnGP.remove()
  grandTotal()
}

function cartButton(){
  alert('This is a mock website. Items will not be shipped.')
}
