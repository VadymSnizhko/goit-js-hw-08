const elementInputText = document.querySelector("#name-input");
const writeField = document.querySelector("#name-output");
elementInputText.addEventListener("input", (event) => {
    const trimmedText = event.target.value.trim();
    writeField.textContent = trimmedText === "" ? "Anonymous" : trimmedText;
});
