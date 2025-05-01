// Example: Simple Testimonial Carousel (you can improve this later)
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalTestimonials = testimonials.length;

function showTestimonial() {
    testimonials.forEach((testimonial, idx) => {
        testimonial.style.display = idx === index ? 'block' : 'none';
    });
}

setInterval(() => {
    index = (index + 1) % totalTestimonials;
    showTestimonial();
}, 3000);