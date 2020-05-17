const username = document.querySelector("#username");
const message = document.querySelector("#message");
const output = document.querySelector("#output");
const form = document.querySelector("#form");

const socket = io.connect("http://localhost:5000");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  socket.emit("chat-message", {
    username: username.value,
    message: message.value,
  });
  message.value = "";
});

socket.on("chat-message", (data) => {
  output.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    output.innerHTML += `<p><strong>${data[i].username}</strong>: ${data[i].message}</p>`;
  }
});
