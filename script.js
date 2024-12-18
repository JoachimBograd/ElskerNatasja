const messages = [
    "Jeg er så stolt af alt hvor langt du er kommet, og jeg glæder mig til at se hvor du er om 5 år ❤️",
    "Husk at tage en pause og være sød mod dig selv – du fortjener det mere, end du tror 💕",
    "Du er så smuk, både indeni og udenpå 🌹",
    "Der er ingen grænser for, hvor langt du kan nå – tro på dig selv som jeg tror på dig! 💖",
    "Du fortjener alt det gode, der sker i dit liv 🥰",
    "Jeg elsker, hvor meget du engagerer dig i det, du gør 😍",
    "Når du tvivler på dig selv, så husk, hvor mange gange du allerede har overvundet udfordringer 💞",
    "Din styrke i modstand er skøn at se - du er min lille fighter 💪",
    "Husk, at du ikke altid behøver at være perfekt 🌟",
    "Dit smil gør verden til et bedre sted, og alle omkring dig er heldige 😊",
    "Du har alt, hvad der skal til for at opnå dine drømme! 💫",
    "Husk at tage tid til at pleje dig selv – du er det værd 🧘‍♀️",
    "Du har gjort mit liv bedre, og jeg er taknemmelig for dig hver dag 💓",
    "Du er min yndlingsperson 💝",
    "Husk, at du allerede har opnået så meget – og det bedste er stadig foran dig 🌈",
    "Du fortjener alle de gode ting, livet har at tilbyde 💗",
    "Din dygtighed og arbejdsomhed gør en forskel, mere end du måske selv ved 🌻",
    "Når du føler dig usikker, så husk, at jeg altid vil være her for dig 🫶",
    "Din empati og kærlighed gør verden til et bedre sted 🥰",
    "Du er smukkere, end du selv forstår – på alle måder 🌺",
    "Jeg tænker garanteret på dig lige nu. Elsker dig! 💌",
    "Jeg er så stolt af dig, og jeg håber også, at du er stolt af dig selv 🎉",
    "Husk at tage dig af dig selv, lige så meget som du tager dig af andre 🌸",
    "Du har evnerne til at gøre alle omkring dig lykkelige 😘",
    "Du fortjener kærlighed, glæde og alt det gode, livet har at byde på 💕",
    "Du gør livet bedre for dem omkring dig – især for mig ❤️",
    "Du er det smukkeste menneske jeg har mødt 🌹",
    "Jeg elsker, hvor glad jeg bliver, når jeg ser på dig 💞",
    "Du er så naturlig dygtig til det, du gør 🥇",
    "Når du tvivler på dig selv, så husk på, hvor langt du allerede er kommet 🌟",
    "Din kærlighed og støtte betyder alt for mig – du gør mig bedre 🫶",
    "Du er en af de mest betænksomme og kærlige mennesker, jeg kender 💝",
    "Husk at tage tingene i dit eget tempo – du har masser af tid til at nå dine mål ⏳",
    "Du er så utrolig smuk, både indeni og udenpå - især udenpå, DAMN 😍",
    "Jeg vil altid tro på dig 🌈",
    "Du fortjener at føle dig elsket og værdsat hver eneste dag 💖",
    "Du er så fantastisk dygtig, og det er tydeligt i alt, hvad du gør 🏆",
    "Husk, at du ikke behøver at være perfekt – du er allerede mere end nok 💓",
    "Din energi og positivitet er en gave for alle omkring dig ✨",
    "Du har en utrolig fremtid foran dig, og jeg glæder mig til at være en del af den 🌟",
    "Jeg bliver aldrig træt af at se på dig, eller at lytte til dig 😌",
    "Du er stærkere, end du tror, og jeg elsker at se dig bevise det 💪",
    "Du skal være stolt af, hvor langt du har rykket dig 🌿",
    "Husk, at du er din egen største støtte – vær sød mod dig selv 🌼",
    "Jeg tror på dig, og det bør du også gøre – du er fantastisk 🎯",
    "Du gør mit liv lysere, bare ved at være dig ☀️"
];

// Hent knap og tekstområde
const button = document.getElementById("loveButton");
const message = document.getElementById("message");

// Tilføj klik-event til knappen
button.addEventListener("click", () => {
    // Vælg en tilfældig besked
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    // Vis beskeden på siden
    message.textContent = randomMessage;
});
