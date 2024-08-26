// script.js

// Toggle navigation menu on small screens
document.addEventListener('DOMContentLoaded', function() {
    const nav = document.querySelector('#nav-list');
    const menuToggle = document.createElement('div');
    menuToggle.className = 'menu-toggle';
    menuToggle.innerHTML = '☰';
    document.querySelector('header').insertBefore(menuToggle, nav);

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('open');
    });

    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            nav.classList.remove('open');
        }
    });
});

// Lightbox for gallery images
const galleryImages = document.querySelectorAll('.gallery-grid img');
galleryImages.forEach(image => {
    image.addEventListener('click', function() {
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        document.body.appendChild(lightbox);

        const img = document.createElement('img');
        img.src = this.src;
        lightbox.appendChild(img);

        lightbox.addEventListener('click', function() {
            document.body.removeChild(lightbox);
        });
    });
});


