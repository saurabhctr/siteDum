document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll
    document.querySelectorAll('a.scroll-btn').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Parallax effect
    window.addEventListener('scroll', function () {
        let scroll = window.scrollY;

        // Parallax for background images
        document.querySelectorAll('.parallax-bg').forEach(parallaxBg => {
            let speed = parallaxBg.getAttribute('data-speed');
            parallaxBg.style.transform = 'translateY(' + scroll * speed + 'px)';
        });

        // Header parallax
        document.querySelector('header').style.backgroundPositionY = -scroll * 0.5 + 'px';
    });

    // Border animation every 9 seconds
    setInterval(() => {
        document.body.classList.toggle('border-animation');
    }, 9000);
});
