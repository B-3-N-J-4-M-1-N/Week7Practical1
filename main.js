const savedChoice = localStorage.getItem("themeChoice");

let lightTheme = {
    background: "#f4f3ecff",
    textColour: "#000000",
    font: "arial"
}

let darkTheme = {
    background: "#0a0a0aff",
    textColour: "#ffffffff",
    font: "cambria"
}

let jamaicanTheme = {
    background: "#eacd0eff",
    textColour: "#1b3107ff",
    font: "open-sans"
}

let currentTheme = document.getElementById("displayMode");
console.log("currentTheme:", currentTheme.value);

if (savedChoice !== null) {
    currentTheme.value = savedChoice;
    console.log("savedChoice:", savedChoice);
}

const choice = currentTheme.value;
localStorage.setItem("themeChoice", choice);