
// script.js

window.addEventListener("DOMContentLoaded", function () {
    alert("Welcome to Tharu Funeral Services!");

    const rows = document.querySelectorAll("tbody tr");
    rows.forEach(row => {
        row.addEventListener("mouseenter", () => {
            row.style.backgroundColor = "#ffeaa7";
        });
        row.addEventListener("mouseleave", () => {
            row.style.backgroundColor = "";
        });
    });
});
