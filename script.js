const btn = document.getElementById("btn");
const container = document.getElementById("container");

btn.addEventListener("click", () => {
  createNotification("You got a new notification!");
});

function createNotification(text) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.innerText = text;

  container.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}
