// Contact Form Logic

function updateCharCount(textarea) {
    const count = textarea.value.length;
    document.getElementById('char-count').textContent = count + ' caractères';
}

// Initialize char count if message exists
window.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea[name="message"]');
    if (textarea) {
        updateCharCount(textarea);
    }
});
