function toggleAnswer(index) {
    const faq = document.getElementById(`faq-${index}`);
    const symbol = document.getElementById(`symbol-${index}`);

    if (faq.style.display === "block") {
        faq.style.display = "none";
        symbol.textContent = "+";
    } else {
        faq.style.display = "block";
        symbol.textContent = "-";
    }
}
