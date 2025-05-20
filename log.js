function validateForm(event) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка электронной почты (наличие символа @)
    if (!email.includes('@')) {
        alert('Введите корректный адрес электронной почты.');
        event.preventDefault();
        return false;
    }

    // Проверка пароля (минимум 6 символов)
    if (password.length < 6) {
        alert('Пароль должен содержать минимум 6 символов.');
        event.preventDefault();
        return false;
    }

    return true;
}

// Привязываем валидацию к форме
document.querySelector('form').addEventListener('submit', validateForm);
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const storedUser = JSON.parse(localStorage.getItem('user_' + email));
    
    if (storedUser && storedUser.password === password) {
        localStorage.setItem('currentUser', JSON.stringify(storedUser));
        window.location.href = 'index.html';
    } else {
        alert('Неверный email или пароль');
    }
});