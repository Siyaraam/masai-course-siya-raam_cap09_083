const getSelectedItems = () => {
  let orderIdCounter = 1;

function getSelectedItems() {
  const selectedItems = Array.from(document.querySelectorAll('.food:checked')).map(checkbox => checkbox.value);
  orderFood(selectedItems);
}

function orderFood(selectedItems) {
  // Clear previous orders from the DOM
  const previousOrders = document.querySelectorAll('.food-item');
  previousOrders.forEach(order => order.remove());

  // Create a new order
  const orderId = orderIdCounter++;
  const orderContainer = document.createElement('div');
  orderContainer.classList.add('food-item');
  orderContainer.textContent = `Order ID: ${orderId}`;

  selectedItems.forEach(item => {
    const foodItem = document.createElement('div');
    foodItem.classList.add('food-item');
    foodItem.textContent = item;
    orderContainer.appendChild(foodItem);
  });

  // Append the order to the DOM after a random delay
  setTimeout(() => {
    document.body.appendChild(orderContainer);
  }, Math.floor(Math.random() * 5000) + 1000);
}

document.addEventListener('DOMContentLoaded', () => {
  const orderButton = document.getElementById('order-button');
  orderButton.addEventListener('click', getSelectedItems);
});


}

// accepts selected items from the menu as an array
const orderFood = async (items) => {

};



window.onload = function () {
  //  get the buttons here and add click event

};

// donot chnage the export statement

if (typeof exports !== "undefined") {
  module.exports = {
    orderFood
  };
}
