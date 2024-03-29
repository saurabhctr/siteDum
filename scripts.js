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

async function callApi(method, input) {
    try {
        const url = `http://0.0.0.0:5000/api/${method}`;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': 'Basic MTIzNA==' // Replace with your actual API key
        };

        const options = {
            method: method,
            headers: headers,
            body: JSON.stringify(input)
        };

        const response = await fetch(url, options);
        const data = await response.json();
        displayApiResponse(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('API call failed:', error);
    }
}

function displayApiResponse(response) {
    document.getElementById('api-response').innerText = response;
}
