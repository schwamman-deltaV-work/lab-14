'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
// var table = document.getElementById('cart');
// table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableRows = document.querySelectorAll('#cart tbody tr');
  for(var i = 0; i < tableRows.length; i++){
    if(tableRows[i]){
      tableRows[i].remove();
    }
  }

}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableLocation = document.getElementById('cart').children[1];
  // TODO: Iterate over the items in the cart
  for (var i = 0; i < Cart.length; i++) {
    console.log(Cart[i]);
  }
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (var i = 0; i < Cart.length; i++) {
    var tableRow = document.createElement('tr');
    var deleteLink = document.createElement('td');
    var button = document.createElement('button');
    button.textContent = 'X';
    button.setAttribute('data-id', i);
    button.addEventListener('click', removeItemFromCart);
    deleteLink.appendChild(button);
    tableRow.appendChild(deleteLink);
    var quantityData = document.createElement('td');
    quantityData.textContent = Cart[i].quantity;
    tableRow.appendChild(quantityData);
    var itemName = document.createElement('td');
    itemName.textContent = Cart[i].item;
    tableRow.appendChild(itemName);
    tableLocation.appendChild(tableRow);

  }
  

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  Cart.splice(event.target.dataset.id, 1);
  console.log(Cart);
  // TODO: Save the cart back to local storage
  localStorage.setItem('cart', JSON.stringify(Cart));
  // TODO: Re-draw the cart table
  renderCart();

}

// This will initialize the page and draw the cart on screen
renderCart();
