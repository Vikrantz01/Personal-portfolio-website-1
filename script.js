// Copy phone number to clipboard on click
const phoneSpan = document.querySelector('.details span:nth-child(3)');
if (phoneSpan) {
    phoneSpan.style.cursor = 'pointer';
    phoneSpan.title = 'Click to copy';
    phoneSpan.addEventListener('click', () => {
        navigator.clipboard.writeText('vikranteditz26@gmail.com');
        phoneSpan.textContent = '✉️ Copied!';
        setTimeout(() => {
            phoneSpan.textContent = '✉️ vikranteditz26@gmail.com';
        }, 1200);
    });
}
