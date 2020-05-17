const sendBtn = document.querySelector("#send-btn");
const username = document.querySelector("#username");
const message = document.querySelector("#message");
const output = document.querySelector("#output");

const socket = io.connect("http://localhost:5000");

sendBtn.addEventListener("click", () => {
  socket.emit("chat-message", {
    username: username.value,
    message: message.value,
  });
});

socket.on("chat-message", (data) => {
  output.innerHTML += `<p><strong>${data.username}</strong>: ${data.message}</p>`;
});
