function submitFeedback(event) {
    if (event) event.preventDefault();
    const name = document.getElementById("name").value;
    alert(`Thank you, ${name}! Your feedback has been received.`);
    window.location.href = "../index.html";
}
