// Применение сохранённой темы при загрузке
document.addEventListener("DOMContentLoaded", () => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
        document.body.classList.add("dark");
    }

    const themeBtn = document.querySelector(".theme-btn");
    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            document.body.classList.toggle("dark");

            // Сохраняем выбранную тему
            if (document.body.classList.contains("dark")) {
                localStorage.setItem("theme", "dark");
            } else {
                localStorage.setItem("theme", "light");
            }
        });
    }
});
// Обновленные функции для работы с авторизацией
function saveUserData(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    updateAuthStatusAllPages();
}

function getUserData() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

function logout() {
    localStorage.removeItem('currentUser');
    updateAuthStatusAllPages();
    window.location.href = 'index.html';
}

function updateAuthStatus() {
    const authStatus = document.getElementById('authStatus');
    const user = getUserData();
    
    if (authStatus) {
        if (user) {
            authStatus.innerHTML = `
                <span class="username">${user.name}</span>
                <button class="logout-btn" onclick="logout()" title="Выйти">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                        <polyline points="16 17 21 12 16 7"></polyline>
                        <line x1="21" y1="12" x2="9" y2="12"></line>
                    </svg>
                </button>
            `;
        } else {
            authStatus.innerHTML = `
                <a href="bookreader_log.html" class="login-link">Вход</a>
            `;
        }
    }
}

// Обновляем все страницы при изменении статуса
function updateAuthStatusAllPages() {
    updateAuthStatus();
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    updateAuthStatus();
    
    // Добавляем обработчик для всех форм регистрации
    document.getElementById('registerForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const user = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        };
        
        saveUserData(user);
        localStorage.setItem('user_' + user.email, JSON.stringify(user));
        window.location.href = 'index.html';
    });
    
    // Добавляем обработчик для всех форм входа
    document.getElementById('loginForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const storedUser = JSON.parse(localStorage.getItem('user_' + email));
        
        if (storedUser && storedUser.password === password) {
            saveUserData(storedUser);
            window.location.href = 'index.html';
        } else {
            alert('Неверный email или пароль');
        }
    });
});
