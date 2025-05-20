    // Переключение темы
    function toggleTheme() {
        document.body.classList.toggle('dark');
        localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
        updateChapterModalTheme();
    }

    // Проверка сохранённой темы при загрузке
    document.addEventListener('DOMContentLoaded', function() {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark' || savedTheme === null) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.add('light');
        }
    });

    // Функция для фильтрации по тегам, автору, году
    function filterBy(type, value) {
        const params = new URLSearchParams();
        params.set(type, value);
        window.location.href = `../bookreader_catalog.html?${params.toString()}`;
    }

    // Обновление темы модального окна
    function updateChapterModalTheme() {
        const modal = document.querySelector('.chapter-modal');
        if (modal) {
            if (document.body.classList.contains('dark')) {
                modal.classList.remove('light');
            } else {
                modal.classList.add('light');
            }
        }
    }

    // Функция для открытия главы
    function readChapter(chapterId) {
        // Создаём модальное окно
        const modal = document.createElement('div');
        modal.className = 'chapter-modal';
        
        // Устанавливаем тему в соответствии с основной темой
        if (!document.body.classList.contains('dark')) {
            modal.classList.add('light');
        }
        
        // Заголовок и текст главы
        let chapterTitle = '';
        let chapterText = '';
        
        switch(chapterId) {
            case 'chapter1':
                chapterTitle = 'Глава 1. Никогда не разговаривайте с неизвестными';
                chapterText = `
                    <p>В жаркий весенний закат на Патриарших прудах появляются двое литераторов и загадочный иностранец.</p>
                    <p>Один из них — поэт Иван Бездомный, другой — редактор журнала Михаил Берлиоз. Они обсуждают недавно написанную Бездомным антирелигиозную поэму.</p>
                    <p>К ним подходит странно одетый иностранец и представляется как профессор чёрной магии...</p>
                `;
                break;
            case 'chapter13':
                chapterTitle = 'Глава 13. Явление героя';
                chapterText = `
                    <p>Маргарита читает рукопись Мастера, погружаясь в историю Понтия Пилата.</p>
                    <p>Тем временем Иван Бездомный в психиатрической клинике знакомится с новым соседом — таинственным пациентом, называющим себя Мастером.</p>
                    <p>Мастер рассказывает Ивану свою историю и историю своей встречи с Маргаритой...</p>
                `;
                break;
            case 'chapter32':
                chapterTitle = 'Глава 32. Прощение и вечный приют';
                chapterText = `
                    <p>Воланд и его свита покидают Москву, забирая с собой Мастера и Маргариту.</p>
                    <p>Им дарован покой в вечном приюте, где они смогут наконец обрести счастье.</p>
                    <p>Понтий Пилат получает прощение и освобождение после двух тысяч лет мук...</p>
                `;
                break;
        }
        
        // Добавляем содержимое модального окна
        modal.innerHTML = `
            <div class="chapter-content">
                <h2>${chapterTitle}</h2>
                <div class="chapter-text">
                    ${chapterText}
                </div>
                <button class="close-chapter">
                    Закрыть
                </button>
            </div>
        `;
        
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
        
        // Обработчик закрытия
        modal.querySelector('.close-chapter').addEventListener('click', function() {
            modal.remove();
            document.body.style.overflow = '';
        });
        
        // Закрытие по клику вне контента
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.remove();
                document.body.style.overflow = '';
            }
        });
    }
