'use strict';

var Cart = [];

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
var table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  Cart = JSON.parse(localStorage.getItem('cart')) || [];
  console.log(Cart);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  var tableLocation = document.getElementById('cart').children[1];
  for (var i = 0; i < Cart; i++) {
    tableLocation.removeChild();
  }
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {

  // TODO: Find the table body
  var tableLocation = document.getElementById('cart').children[1];
  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR
  for (var i = 0; i < Cart.length; i++) {
    var tableRow = document.createElement('tr');
    var deleteLink = document.createElement('td');
    deleteLink.innerHTML = '<button type=\"button\" class=\"button' + i + '\">X</button>';
    tableRow.appendChild(deleteLink);
    var quantityData = document.createElement('td');
    quantityData.textContent = Cart[i].quantity;
    tableRow.appendChild(quantityData);
    var itemName = document.createElement('td');
    itemName.textContent = Cart[i].item;
    tableRow.appendChild(itemName);
    tableLocation.appendChild(tableRow);

  }
  deleteLink.addEventListener('click', removeItemFromCart);

}

function removeItemFromCart(event) {

  // TODO: When a delete link is clicked, rebuild the Cart array without that item
  console.log(event.target);
  // var deletedItem = event.target
  // TODO: Save the cart back to local storage
  // TODO: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
