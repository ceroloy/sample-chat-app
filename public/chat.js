//Socket.io is loaded in html as a script, we can reach it from here
let socket = io.connect("http://localhost:3000");

//Querry DOM
let message = document.getElementById("message");
let handle = document.getElementById("handle");
let btn = document.getElementById("button");
let output = document.getElementById("output");

//Emit events
btn.addEventListener("click", () => {
  console.log("Button clicked");
  socket.emit("chat", {
    message: message.value,
    handle: handle.value,
  });
});

//Listen for events
socket.on("chat", (data) => {
  //Get data from server and display
  output.innerHTML +=
    "<p><strong>" + data.handle + " :</strong>" + data.message + "</p>";
});
