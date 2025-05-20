// Данные о книгах
const booksData = [
    {
        title: "Мастер и Маргарита",
        tags: ["драма", "фэнтези"],
        year: "1928",
        rating: 9.7,
        popularity: 8500,
        cover: "images/cover1.png",
        link: "books/bookreader_book1_page.html"
    },
    {
        title: "Гордость и предубеждение",
        tags: ["роман"],
        year: "1813",
        rating: 9.2,
        popularity: 2300,
        cover: "images/cover2.png",
        link: "books/bookreader_book2_page.html"
    },
    {
    title: "1984",
    tags: ["антиутопия", "политика", "фантастика"],
    year: "1949",
    rating: 9.4,
    popularity: 6700,
    cover: "images/cover3.png",
    link: "books/bookreader_book3_page.html"
},
{
    title: "Унесённые ветром",
    tags: ["роман", "история"],
    year: "1936",
    rating: 9.1,
    popularity: 5400,
    cover: "images/cover4.png",
    link: "books/bookreader_book4_page.html"
},
{
    title: "Алхимик",
    tags: ["притча", "саморазвитие"],
    year: "1988",
    rating: 8.6,
    popularity: 4900,
    cover: "images/cover5.png",
    link: "books/bookreader_book5_page.html"
},
{
    title: "Граф Аверин",
    tags: ["фэнтези"],
    year: "2020",
    rating: 8.9,
    popularity: 3200,
    cover: "images/cover6.png",
    link: "books/bookreader_book6_page.html"
},
{
    title: "Императорский Див",
    tags: ["фэнтези", "приключения"],
    year: "2021",
    rating: 8.7,
    popularity: 3000,
    cover: "images/cover7.png",
    link: "books/bookreader_book7_page.html"
},
{
    title: "Демон из Пустоши",
    tags: ["мистика", "детектив", "фэнтези"],
    year: "2022",
    rating: 8.8,
    popularity: 3100,
    cover: "images/cover8.png",
    link: "books/bookreader_book8_page.html"
},
{
    title: "Тайна мёртвого ректора",
    tags: ["фэнтези", "интрига"],
    year: "2023",
    rating: 8.6,
    popularity: 2900,
    cover: "images/cover9.png",
    link: "books/bookreader_book9_page.html"
},
{
    title: "Матабар",
    tags: ["фэнтези", "постапокалипсис"],
    year: "2023",
    rating: 8.5,
    popularity: 2750,
    cover: "images/cover10.png",
    link: "books/bookreader_book10_page.html"
},
{
    title: "Дизайнер Нью-Йорка. Мальчики",
    tags: ["драма"],
    year: "2019",
    rating: 8.3,
    popularity: 1800,
    cover: "images/cover11.png",
    link: "books/bookreader_book11_page.html"
},
{
    title: "Совершенные: Тайны Плато-1",
    tags: ["подростковое фэнтези", "приключения"],
    year: "2020",
    rating: 8.4,
    popularity: 2100,
    cover: "images/cover12.png",
    link: "books/bookreader_book12_page.html"
},
{
    title: "Эффект Розенталя",
    tags: ["научная фантастика", "детектив"],
    year: "2015",
    rating: 8.1,
    popularity: 1700,
    cover: "images/cover13.png",
    link: "books/bookreader_book13_page.html"
},
{
    title: "Кафе на краю земли",
    tags: ["притча", "мотивация"],
    year: "2003",
    rating: 8.0,
    popularity: 2500,
    cover: "images/cover14.png",
    link: "books/bookreader_book14_page.html"
},
{
    title: "Совершенные: Монстр должен умереть",
    tags: ["подростковое фэнтези", "экшен"],
    year: "2022",
    rating: 8.5,
    popularity: 2200,
    cover: "images/cover15.png",
    link: "books/bookreader_book15_page.html"
},
{
    title: "Детские сказки",
    tags: ["сказки", "приключения"],
    year: "2018",
    rating: 8.9,
    popularity: 2600,
    cover: "images/cover16.png",
    link: "books/bookreader_book16_page.html"
},
{
    title: "Русские народные сказки",
    tags: ["сказки"],
    year: "1955",
    rating: 9.3,
    popularity: 4800,
    cover: "images/cover17.png",
    link: "books/bookreader_book17_page.html"
},
{
    title: "Ходячий замок",
    tags: ["фэнтези", "приключения", "магия"],
    year: "1986",
    rating: 9.0,
    popularity: 4300,
    cover: "images/cover18.png",
    link: "books/bookreader_book18_page.html"
},
{
    title: "Маленький принц",
    tags: ["притча"],
    year: "1943",
    rating: 9.6,
    popularity: 9000,
    cover: "images/cover19.png",
    link: "books/bookreader_book19_page.html"
},
{
    title: "Приключения Незнайки и его друзей",
    tags: ["детская литература", "юмор", "дружба"],
    year: "1954",
    rating: 9.2,
    popularity: 5200,
    cover: "images/cover20.png",
    link: "books/bookreader_book20_page.html"
}

];

// Применение фильтров
function applyFilters() {
    const selectedTags = Array.from(document.querySelectorAll('input[name="tag"]:checked')).map(el => el.value);
    const selectedYear = document.getElementById('yearFilter').value;
    const sortBy = document.getElementById('sortFilter').value;
    
    let filteredBooks = [...booksData];
    
    // Фильтрация по тегам
    if (selectedTags.length > 0) {
        filteredBooks = filteredBooks.filter(book => 
            selectedTags.some(tag => book.tags.includes(tag))
        );
    }
    
    // Фильтрация по году
    if (selectedYear) {
        filteredBooks = filteredBooks.filter(book => book.year === selectedYear);
    }
    
    // Сортировка
    switch(sortBy) {
        case 'rating':
            filteredBooks.sort((a, b) => b.rating - a.rating);
            break;
        case 'popularity':
            filteredBooks.sort((a, b) => b.popularity - a.popularity);
            break;
        case 'alphabet':
            filteredBooks.sort((a, b) => a.title.localeCompare(b.title));
            break;
    }
    
    renderBooks(filteredBooks);
}

// Сброс фильтров
function resetFilters() {
    document.querySelectorAll('input[name="tag"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    document.getElementById('yearFilter').value = '';
    document.getElementById('sortFilter').value = 'default';
    applyFilters();
}

// Отрисовка книг
function renderBooks(books) {
    const bookGrid = document.getElementById('bookGrid');
    bookGrid.innerHTML = '';
    
    books.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        bookCard.setAttribute('data-tags', book.tags.join(' '));
        bookCard.setAttribute('data-year', book.year);
        bookCard.setAttribute('data-rating', book.rating);
        bookCard.setAttribute('data-popularity', book.popularity);

        // Создание ссылки
        const link = document.createElement('a');
        link.href = book.link || '#';
        link.target = '_blank'; // Открывать в новой вкладке (можно убрать, если не нужно)
        link.innerHTML = `
            <div class="book-rating">${book.rating}</div>
            <img src="${book.cover}" alt="${book.title}">
            <p>${book.title}</p>
            <div class="book-views">👁 ${formatViews(book.popularity)}</div>
        `;

        bookCard.appendChild(link);
        bookGrid.appendChild(bookCard);
    });
}


// Форматирование числа просмотров
function formatViews(views) {
    if (views >= 1000) {
        return (views / 1000).toFixed(1) + 'k';
    }
    return views;
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    renderBooks(booksData);
});