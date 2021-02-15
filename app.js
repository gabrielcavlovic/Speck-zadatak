// Vars
const form = document.querySelector('#product-form');
const productList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-products');
const productInput = document.querySelector('#product');

// Loading event listeners
loadEventListeners();

function loadEventListeners() {
  form.addEventListener('submit', addProduct);
  clearBtn.addEventListener('click', clearProducts);
}

// Add Product
function addProduct(e) {
  if (productInput.value === '') {
    alert('Add a product.');
    return;
  }

  const li = document.createElement('li');
  li.appendChild(document.createTextNode(productInput.value));

  productList.appendChild(li);

  productInput.value = '';
  e.preventDefault();

  updateCounter();
}

// Clear button
function clearProducts() {
  if (confirm('Are you sure that you want to remove all products?')) {
    while (productList.firstChild) {
      productList.removeChild(productList.firstChild);
    }
  }
  updateCounter();
}

function updateCounter() {
  let elements = document
    .querySelector('.collection')
    .getElementsByTagName('li').length;

  document.getElementById('counter').innerHTML = elements;

  if (elements === 0) {
    let element = document.querySelector('.card-action');
    element.classList.add('hide');
  } else {
    let element = document.querySelector('.card-action');
    element.classList.remove('hide');
  }
}
