document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Sticky Header Scroll Effect
    const header = document.querySelector('header');
    
    const handleScroll = () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Init

    // Lightbox Logic
    const galleryItems = document.querySelectorAll('.masonry-item img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.lightbox-close');

    if (lightbox && galleryItems.length > 0) {
        galleryItems.forEach(item => {
            item.style.cursor = 'pointer'; // Ensure pointer cursor is visible
            item.addEventListener('click', () => {
                lightbox.classList.add('active');
                lightboxImg.src = item.src;
            });
        });

        const closeLightbox = () => {
            lightbox.classList.remove('active');
            lightboxImg.src = ''; // reset src
        };

        if (closeBtn) {
            closeBtn.addEventListener('click', closeLightbox);
        }

        // Close when clicking outside image
        lightbox.addEventListener('click', (e) => {
            if (e.target !== lightboxImg) {
                closeLightbox();
            }
        });
    }

    // Page Transitions
    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if (this.hostname === window.location.hostname && this.target !== '_blank' && !this.hasAttribute('download')) {
                // Proceed directly if it's an anchor link on the same page
                if (this.pathname === window.location.pathname && this.hash) {
                    return;
                }
                
                // Actual new page load
                e.preventDefault();
                const targetUrl = this.href;
                document.body.classList.add('page-exit');
                
                setTimeout(() => {
                    window.location.href = targetUrl;
                }, 300);
            }
        });
    });
});
