// Animation for buttons and other elements can be added using JavaScript for interactivity
document.addEventListener('DOMContentLoaded', () => {
    const ctaButton = document.querySelector('.cta-btn');
    
    ctaButton.addEventListener('mouseover', () => {
        ctaButton.style.transform = "scale(1.1)";
    });

    ctaButton.addEventListener('mouseout', () => {
        ctaButton.style.transform = "scale(1)";
    });
});
