function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Проверка имени (не менее 3 символов)
    if (name.length < 3) {
        alert('Имя должно содержать не менее 3 символов.');
        return false;
    }

    // Проверка пароля (не менее 6 символов)
    if (password.length < 6) {
        alert('Пароль должен содержать не менее 6 символов.');
        return false;
    }

    // Проверка электронной почты (наличие символа @)
    if (!email.includes('@')) {
        alert('Введите корректный адрес электронной почты.');
        return false;
    }

    return true;
}
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    };
    
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('user_' + user.email, JSON.stringify(user));
    
    alert('Регистрация успешна!');
    window.location.href = 'index.html';
});