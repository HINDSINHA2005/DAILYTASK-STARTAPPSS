const products = [
  { name: "Laptop", price: 50000, category: "electronics" },
  { name: "Mobile", price: 20000, category: "electronics" },
  { name: "Shoes", price: 3000, category: "fashion" },
  { name: "T-Shirt", price: 1000, category: "fashion" }
];

let isGrid = true;

const container = document.getElementById("products");
const searchInput = document.getElementById("search");
const categorySelect = document.getElementById("category");
const sortSelect = document.getElementById("sort");
const toggleBtn = document.getElementById("toggleView");

function renderProducts(list) {
  container.innerHTML = "";

  list.forEach(product => {
    const div = document.createElement("div");
    div.className = `product ${isGrid ? "" : "list"}`;

    div.innerHTML = `
      <h3>${product.name}</h3>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
    `;

    container.appendChild(div);
  });
}

function filterProducts() {
  let filtered = [...products];

  const searchText = searchInput.value.toLowerCase();
  const category = categorySelect.value;
  const sort = sortSelect.value;

  filtered = filtered.filter(p =>
    p.name.toLowerCase().includes(searchText)
  );

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (sort === "low") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (sort === "high") {
    filtered.sort((a, b) => b.price - a.price);
  }

  renderProducts(filtered);
}

searchInput.addEventListener("input", filterProducts);
categorySelect.addEventListener("change", filterProducts);
sortSelect.addEventListener("change", filterProducts);

toggleBtn.addEventListener("click", () => {
  isGrid = !isGrid;
  container.className = isGrid ? "grid" : "list";
  filterProducts();
});

renderProducts(products);
