// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll to top button
const scrollToTopBtn = document.createElement('button');
scrollToTopBtn.innerText = '⬆️';
scrollToTopBtn.style.position = 'fixed';
scrollToTopBtn.style.bottom = '20px';
scrollToTopBtn.style.right = '20px';
scrollToTopBtn.style.padding = '10px';
scrollToTopBtn.style.fontSize = '16px';
scrollToTopBtn.style.display = 'none';
scrollToTopBtn.style.backgroundColor = '#98eeff';
scrollToTopBtn.style.color = '#fff';
scrollToTopBtn.style.border = 'none';
scrollToTopBtn.style.borderRadius = '50%';
scrollToTopBtn.style.cursor = 'pointer';

document.body.appendChild(scrollToTopBtn);

// Show or hide the button based on scroll position
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = 'block';
    } else {
        scrollToTopBtn.style.display = 'none';
    }
});

// Scroll to top when the button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Form validation
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    alert('Thank you for your message!');
    this.reset(); // Reset the form fields
});
