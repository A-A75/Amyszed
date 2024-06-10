document.addEventListener("DOMContentLoaded", function() {
    // Navigation bar functionality
    const navLinks = document.querySelectorAll('#nav-bar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            navLinks.forEach(link => link.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Chat functionality
    const sendButton = document.getElementById('send-button');
    const messageInput = document.getElementById('message-input');
    const messagesDiv = document.getElementById('messages');

    sendButton.addEventListener('click', function() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            const messageElement = document.createElement('div');
            messageElement.textContent = messageText;
            messagesDiv.appendChild(messageElement);
            messageInput.value = '';
            messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
    });

    messageInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendButton.click();
        }
    });
});
