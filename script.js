document.addEventListener('DOMContentLoaded', function() {
    // Get all links that start with '#' (likely in-page navigation links)
    const navLinks = document.querySelectorAll('a[href^="#"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent default jump behavior

            const targetId = this.getAttribute('href').substring(1); // Get the target section ID
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjust for potential fixed header height
                    behavior: 'smooth'
                });
            }
        });
    });

    // Example of a simple hover effect on project cards (you can expand on this)
    const projectCards = document.querySelectorAll('.card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.3)';
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
            this.style.transform = 'translateY(0)';
            this.style.transition = 'box-shadow 0.3s ease, transform 0.3s ease';
        });
    });
});