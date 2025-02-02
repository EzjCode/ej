const messages = [
    "SIGE NAAAAA",
    "ASAAAAAAR",
    "NA AASAR NAKO",
    "DI JUD PWEDE?!?!?!",
    "SURE NA?",
    "BRUH...",
    "JUST THINK ABOUT IT SIGURO OY!",
    "TISTINGI OG NO BITAW...",
    "AYAW LAGI NO BA!",
    "GAHIAG ULO, YES OY...",
    "Ok fine, I will stop asking...",
    "KIDDING, PAG YES NA LAGI!"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
