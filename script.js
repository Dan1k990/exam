// График 1: Линейная диаграмма
const ctxLine = document.getElementById('lineChart').getContext('2d');
const lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн'],
        datasets: [{
            label: 'Количество пользователей',
            data: [120, 190, 300, 500, 420, 600],
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            fill: true,
            tension: 0.4,
            pointBackgroundColor: '#007bff'
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                display: true
            }
        },
        animation: {
            duration: 1000,
            easing: 'easeOutQuart'
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

// График 2: Полярная диаграмма
const ctxPolar = document.getElementById('polarChart').getContext('2d');
const polarChart = new Chart(ctxPolar, {
    type: 'polarArea',
    data: {
        labels: ['Фантастика', 'Научная', 'Художественная', 'Детектив', 'История'],
        datasets: [{
            label: 'Жанры книг',
            data: [300, 150, 200, 100, 250],
            backgroundColor: [
                '#007bff',
                '#28a745',
                '#ffc107',
                '#dc3545',
                '#6f42c1'
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                enabled: true
            },
            legend: {
                position: 'right'
            }
        },
        animation: {
            animateRotate: true,
            duration: 1000,
            easing: 'easeOutBounce'
        }
    }
});
