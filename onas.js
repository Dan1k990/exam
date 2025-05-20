    // Функции для модального окна галереи
    function openModal(src, caption) {
        const modal = document.getElementById('galleryModal');
        const modalImg = document.getElementById("modalImage");
        const captionText = document.getElementById("modalCaption");
        
        modal.style.display = "block";
        modalImg.src = src;
        captionText.innerHTML = caption;
    }
    
    function closeModal() {
        document.getElementById('galleryModal').style.display = "none";
    }
    
    // Закрытие по клику вне изображения
    window.onclick = function(event) {
        const modal = document.getElementById('galleryModal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
    
    document.addEventListener('DOMContentLoaded', function() {
        if (typeof updateAuthStatus === 'function') {
            updateAuthStatus();
        }
    });