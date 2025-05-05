document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simple validation and response
    if (name && email && message) {
        document.getElementById("responseMessage").textContent =
            `Thank you, ${name}! Your message has been received.`;
        document.getElementById("responseMessage").style.color = "green";
    } else {
        document.getElementById("responseMessage").textContent =
            "Please fill in all the fields.";
        document.getElementById("responseMessage").style.color = "red";
    }

    // Clear the form
    document.getElementById("contactForm").reset();
});