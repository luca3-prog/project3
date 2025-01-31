document.addEventListener("DOMContentLoaded", function() {
    let testimonials = document.querySelectorAll(".testimonial");
    let index = 0;

    function showNextTestimonial() {
        testimonials[index].classList.remove("active");
        index = (index + 1) % testimonials.length;
        testimonials[index].classList.add("active");
    }

    setInterval(showNextTestimonial, 3000);

    let chatButton = document.querySelector(".chat-button");
    chatButton.addEventListener("click", function() {
        alert("Live chat coming soon!");
    });
});
document.addEventListener("DOMContentLoaded", function() {
    let menuToggle = document.querySelector(".menu-toggle");
    let navMenu = document.querySelector("nav ul");

    menuToggle.addEventListener("click", function() {
        navMenu.classList.toggle("show");
    });
});