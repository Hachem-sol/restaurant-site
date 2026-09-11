const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    alert("Merci ! Votre message a bien été envoyé.");
});