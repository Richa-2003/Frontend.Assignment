
      const products = [
        { id: 1, name: "Laptop", price: 800 },
        { id: 2, name: "Phone", price: 500 },
        { id: 3, name: "Headphones", price: 100 },
      ];

      const cart = [];

      function renderProducts() {
        const productContainer = document.getElementById("products");
        productContainer.innerHTML = "";
        products.forEach((product) => {
          const div = document.createElement("div");
          div.classList.add("product");
          div.innerHTML = `
                    <span>${product.name} - $${product.price}</span>
                    <button onclick="addToCart(${product.id})">Add to Cart</button>
                `;
          productContainer.appendChild(div);
        });
      }

      function renderCart() {
        const cartContainer = document.getElementById("cart");
        cartContainer.innerHTML = "";
        if (cart.length === 0) {
          cartContainer.innerHTML = "<p>Cart is empty</p>";
          return;
        }
        cart.forEach((item) => {
          const div = document.createElement("div");
          div.innerHTML = `${item.name} (x${item.quantity}) - $${
            item.price * item.quantity
          }`;
          cartContainer.appendChild(div);
        });
      }

      function addToCart(id) {
        const product = products.find((p) => p.id === id);
        const cartItem = cart.find((item) => item.id === id);
        if (cartItem) {
          cartItem.quantity++;
        } else {
          cart.push({ ...product, quantity: 1 });
        }
        renderCart();
      }

      renderProducts();
      renderCart();
    