window.addEventListener('scroll', function () {
    const navbar = document.getElementById('mainNav');
    const heroImg = document.getElementById('heroProfileImg');
    const heroSection = document.getElementById('hero');
    if (!navbar || !heroImg || !heroSection) return;

    if (window.scrollY > heroSection.offsetHeight - 80) {
        navbar.classList.add('scrolled');
        heroImg.classList.add('hide-hero-img');
    } else {
        navbar.classList.remove('scrolled');
        heroImg.classList.remove('hide-hero-img');
    }
});


document.querySelectorAll('a.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('#contact form');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            form.reset();
            alert('Thank you for reaching out! I will get back to you soon.');
        });
    }
});