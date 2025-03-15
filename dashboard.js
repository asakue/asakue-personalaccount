const newsItems = document.querySelectorAll('.news-item');
const modalOverlay = document.getElementById('modalOverlay');
const modalTitle = document.querySelector('.modal-title');
const modalContent = document.querySelector('.modal-content');
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Toggle dark mode
document.getElementById("theme-switch").addEventListener("change", function() {
    document.body.classList.toggle("dark-theme");
});
const newsData = {
    1: {
      title: "Семинар по веб-разработке",
      content: "Сегодня в университете прошел масштабный семинар по современным технологиям веб-разработки. На мероприятии обсуждались последние тенденции в области фронтенд и бэкенд разработки, а также прошли практические мастер-классы по использованию React и Node.js."
    },
    2: {
      title: "Встреча студенческого совета",
      content: "Завтра в 15:00 в аудитории 301 состоится общее собрание студенческого совета. Повестка дня: подготовка к ежегодному фестивалю, обсуждение улучшений инфраструктуры кампуса и выборы нового председателя совета."
    },
    3: {
      title: "Экзаменационная сессия",
      content: "Экзамены начнутся 25 мая и продлятся до 10 июня. Расписание экзаменов будет опубликовано за неделю до начала сессии. Обратите внимание на новые правила проведения онлайн-экзаменов для студентов заочного отделения."
    }
  };
  newsItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      const newsId = index + 1;
      modalTitle.textContent = newsData[newsId].title;
      modalContent.textContent = newsData[newsId].content;
      modalOverlay.classList.add('active');
    });
  });
  
  // Закрытие модального окна
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay || e.target.classList.contains('modal-close')) {
      modalOverlay.classList.remove('active');
    }
  });
