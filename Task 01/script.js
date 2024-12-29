// Ensure that body has the right class for each page
document.addEventListener('DOMContentLoaded', function() {
    // Get the body tag
    const body = document.body;

    // Check which page is active and set the class accordingly
    if (window.location.pathname.includes("index.html")) {
        body.classList.add('index');
    } else if (window.location.pathname.includes("overview.html")) {
        body.classList.add('overview');
    } else if (window.location.pathname.includes("contact.html")) {
        body.classList.add('contact');
    } else if (window.location.pathname.includes("about.html")) {
        body.classList.add('about');
    }

    // Change background color on hover for nav items
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            const bgColor = item.getAttribute('data-bg');
            document.body.style.backgroundColor = bgColor;
        });
        item.addEventListener('mouseout', function() {
            // Reset to default background color (this will now be set by body class)
            const bodyClass = body.className;
            switch (bodyClass) {
                case 'index':
                    document.body.style.backgroundColor = 'white';
                    break;
                case 'overview':
                    document.body.style.backgroundColor = '#f0f0f0';
                    break;
                case 'contact':
                    document.body.style.backgroundColor = '#d0d0d0';
                    break;
                case 'about':
                    document.body.style.backgroundColor = '#c0c0c0';
                    break;
                default:
                    document.body.style.backgroundColor = '';
                    break;
            }
        });
    });
});
