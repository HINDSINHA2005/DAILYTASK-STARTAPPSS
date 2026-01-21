// 1️⃣ Counter closure (STATE LOGIC)
function createCounter(min, max) {
  let count = 0;

  return {
    increment() {
      if (count < max) {
        count++;
        return count;
      }
      return null;
    },

    decrement() {
      if (count > min) {
        count--;
        return count;
      }
      return null;
    },

    getValue() {
      return count;
    }
  };
}

// 2️⃣ DOM Elements
const counterValue = document.getElementById("counter-value");
const message = document.getElementById("message");
const incBtn = document.getElementById("increment");
const decBtn = document.getElementById("decrement");

// 3️⃣ Create counter instance
const counter = createCounter(0, 10);

// 4️⃣ DOM Rendering function
function render(value, msg = "") {
  counterValue.textContent = value;
  message.textContent = msg;
}

// 5️⃣ Event Logic
incBtn.addEventListener("click", () => {
  const result = counter.increment();

  if (result === null) {
    render(counter.getValue(), "Maximum limit reached");
  } else {
    render(result, "");
  }
});

decBtn.addEventListener("click", () => {
  const result = counter.decrement();

  if (result === null) {
    render(counter.getValue(), "Minimum limit reached");
  } else {
    render(result, "");
  }
});
