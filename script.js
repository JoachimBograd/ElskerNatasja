const messages = [
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget.",
    "Hvis du stadig gerne vil have kærlighed, så er jeg her for dig. Jeg savner dig. Meget."
];

// Hent knap og tekstområde
const button = document.getElementById("loveButton");
const message = document.getElementById("message");

// Tilføj klik-event til knappen
button.addEventListener("click", () => {
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    message.textContent = randomMessage;
});
