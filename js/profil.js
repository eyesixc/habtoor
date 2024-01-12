function navigate(destination) {
    if (destination === 'about') {
        // Перенаправление на файл "about.html"
        window.location.href = 'about.html';
    } else if (destination === 'support'){
        window.location.href = 'support.html'
    }
}

function expandPolz() {
    const polzButton = document.querySelector('.polz');
    polzButton.classList.toggle('expanded');

    // Добавляем или удаляем класс "active" в зависимости от наличия класса "expanded"
    if (polzButton.classList.contains('expanded')) {
        // Добавляем класс "active" с небольшой задержкой
        setTimeout(() => {
            polzButton.classList.add('active');
        }, 10);
    } else {
        polzButton.classList.remove('active');
    }
}

function openPopup() {
    // Закрываем окно "rectangle"
    document.getElementById('rectangle').style.display = 'none';
    
    // Открываем новое всплывающее окно
    document.getElementById('overlay').style.display = 'block';
    document.getElementById('popup').style.display = 'block';
}

// Функция закрытия всплывающего окна
function closePopup() {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('popup').style.display = 'none';
}


