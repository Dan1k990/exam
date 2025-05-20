    // Данные о книгах для поиска
const booksData = [
    {title: "Мастер и Маргарита", tags: ["классика", "мистика", "роман", "Россия"], link: "books/bookreader_book1_page.html"},
    {title: "Гордость и предубеждение", tags: ["классика", "роман", "любовь", "Англия"], link: "books/bookreader_book2_page.html"},
    {title: "1984", tags: ["антиутопия", "политика", "классика", "Англия"], link: "books/bookreader_book3_page.html"},
    {title: "Унесённые ветром", tags: ["роман", "история", "любовь", "США"], link: "books/bookreader_book4_page.html"},
    {title: "Алхимик", tags: ["притча", "саморазвитие", "философия", "путешествие"], link: "books/bookreader_book5_page.html"},
    {title: "Граф Аверин", tags: ["фэнтези", "мистика", "дворцовые интриги", "Россия"], link: "books/bookreader_book6_page.html"},
    {title: "Императорский Див", tags: ["фэнтези", "приключения", "магия", "Франция"], link: "books/bookreader_book7_page.html"},
    {title: "Демон из Пустоши", tags: ["мистика", "детектив", "Япония", "фэнтези"], link: "books/bookreader_book8_page.html"},
    {title: "Тайна мёртвого ректора", tags: ["интрига", "магия", "Китай", "фэнтези"], link: "books/bookreader_book9_page.html"},
    {title: "Матабар", tags: ["фэнтези", "апокалипсис", "США", "магия"], link: "books/bookreader_book10_page.html"},
    {title: "Дизайнер Нью-Йорка. Мальчики", tags: ["драма", "искусство", "жизнь", "эмиграция"], link: "books/bookreader_book11_page.html"},
    {title: "Совершенные: Тайны Плато-1", tags: ["фэнтези", "подростки", "приключения", "избранная героиня"], link: "books/bookreader_book12_page.html"},
    {title: "Эффект Розенталя", tags: ["научная фантастика", "детектив", "реальность", "психология"], link: "books/bookreader_book13_page.html"},
    {title: "Кафе на краю земли", tags: ["притча", "мотивация", "смысл жизни", "философия"], link: "books/bookreader_book14_page.html"},
    {title: "Совершенные: Монстр должен умереть", tags: ["фэнтези", "подростки", "экшен", "борьба"], link: "books/bookreader_book15_page.html"},
    {title: "Детские сказки", tags: ["сказки", "доброта", "приключения", "дети"], link: "books/bookreader_book16_page.html"},
    {title: "Русские народные сказки", tags: ["сказки", "фольклор", "Россия", "детство"], link: "books/bookreader_book17_page.html"},
    {title: "Ходячий замок", tags: ["фэнтези", "магия", "приключения", "поиск себя"], link: "books/bookreader_book18_page.html"},
    {title: "Маленький принц", tags: ["притча", "философия", "чувства", "детство"], link: "books/bookreader_book19_page.html"},
    {title: "Приключения Незнайки и его друзей", tags: ["детская литература", "юмор", "дружба", "приключения"], link: "books/bookreader_book20_page.html"}
];

    document.addEventListener("DOMContentLoaded", function () {
        const searchInput = document.querySelector(".search-box input");
        const searchResults = document.getElementById("searchResults");
        const searchIcon = document.querySelector(".search-icon");

        // Обработчик ввода в поиск
searchInput.addEventListener("input", function() {
    const searchText = this.value.toLowerCase().trim();
    
    if (searchText.length === 0) {
        searchResults.innerHTML = '';
        searchResults.style.display = 'none';
        return;
    }

    const matchedBooks = booksData.filter(book => {
        const titleMatch = book.title.toLowerCase().includes(searchText);
        const tagsMatch = book.tags.some(tag => tag.toLowerCase().includes(searchText));
        return titleMatch || tagsMatch;
    });

    displayResults(matchedBooks);
});

        // Обработчик клика по иконке поиска
        searchIcon.addEventListener("click", function() {
            searchInput.focus();
        });

        // Функция отображения результатов
        function displayResults(books) {
            searchResults.innerHTML = '';
            
            if (books.length === 0) {
                searchResults.innerHTML = '<div class="no-results">Ничего не найдено</div>';
                searchResults.style.display = 'block';
                return;
            }

            books.forEach(book => {
                const resultItem = document.createElement('a');
                resultItem.href = book.link;
                resultItem.className = 'search-result-item';
                resultItem.innerHTML = `
                    <div class="search-result-title">${book.title}</div>
                    <div class="search-result-tags">${book.tags.join(', ')}</div>
                `;
                searchResults.appendChild(resultItem);
            });

            searchResults.style.display = 'block';
        }

        // Скрываем результаты при клике вне поиска
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.search-box') && !e.target.closest('#searchResults')) {
                searchResults.style.display = 'none';
            }
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
    const searchBox = document.querySelector(".search-box");
    const searchIcon = document.querySelector(".search-icon");

    searchIcon.addEventListener("click", function () {
        searchBox.classList.toggle("active");

        // Если активен — ставим фокус на input
        if (searchBox.classList.contains("active")) {
            const input = searchBox.querySelector("input");
            input.focus();
        }
    });
        // Закрытие при клике вне поиска
    document.addEventListener('click', function(e) {
        if (!searchBox.contains(e.target) && !searchResults.contains(e.target)) {
            searchBox.classList.remove("active");
            searchResults.style.display = 'none';
        }
    });
});
