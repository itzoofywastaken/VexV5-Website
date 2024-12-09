// Q&A Section Toggle
const qaBtns = document.querySelectorAll('.qa-btn');

qaBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const content = btn.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
    });
});
