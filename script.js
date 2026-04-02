const messageText = "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.";

const button = document.getElementById("loveButton");
const message = document.getElementById("message");

button.addEventListener("click", () => {
    message.textContent = messageText;
});
