const products = [
  {
    image: "https://www.pexels.com/photo/pair-of-blue-lace-up-sneakers-19090",
    name: "Shoes",
    discount: "30%",
    price: "₹1500",
    available: true,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Backpack",
    discount: "30%",
    price: "₹1500",
    available: false,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Watch",
    discount: "10%",
    price: "₹2500",
    available: true,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Sunglasses",
    discount: "25%",
    price: "₹1200",
    available: false,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Headphones",
    discount: "15%",
    price: "₹1800",
    available: true,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jacket",
    discount: "40%",
    price: "₹3000",
    available: true,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "T-shirt",
    discount: "35%",
    price: "₹800",
    available: false,
  },
  {
    image: "https://via.placeholder.com/150",
    name: "Jeans",
    discount: "20%",
    price: "₹1800",
    available: true,
  },
];

function createCard(product) {
  return `
    <div class="bg-white shadow-md rounded-2xl p-4 w-60 m-2 border border-gray-200">
      <img src="${product.image}" alt="${product.name}" class="w-full h-40 object-cover rounded-md">
      <h2 class="text-lg font-semibold mt-2">${product.name}</h2>
      <p class="text-green-600 font-bold">Discount: ${product.discount}</p>
      <p class="text-gray-700">Price: ${product.price}</p>
      <p class="${product.available ? 'text-blue-500' : 'text-red-500'} font-medium">
        ${product.available ? "Available" : "Not Available"}
      </p>
    </div>
  `;
}

function renderCards() {
  const container = document.getElementById("card-container");
  let cardsHTML = "";
  for (let i = 0; i < products.length; i++) {
    cardsHTML += createCard(products[i]);
  }
  container.innerHTML = cardsHTML;
}

window.onload = renderCards;
