// ==========================================
// Завдання 1: Візитні картки
// ==========================================
document.getElementById('btn-task1').addEventListener('click', function() {
    // Якщо користувач натисне скасувати, будуть використані значення за замовчуванням
    let name = prompt("Введіть ваше ім'я або ПІБ:", "Нікіта Глушко") || "Нікіта Глушко";
    let position = prompt("Введіть вашу посаду/професію:", "Студент ХНУ ") || "Студент ХНУ / C++ Backend Developer";
    let phone = prompt("Введіть ваш контактний телефон:", "+380XXXXXXXXX") || "+380XXXXXXXXX";

    // Шаблон однієї картки
    let cardHTML = `
        <div class="visit-card">
            <div class="name">${name}</div>
            <div class="position">${position}</div>
            <div class="phone">📞 ${phone}</div>
        </div>
    `;

    // Формування таблиці 12x3
    let tableHTML = '<table border="0">';
    for(let y = 0; y < 12; y++) {
        tableHTML += '<tr>';
        for(let x = 0; x < 3; x++) {
            tableHTML += `<td>${cardHTML}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';

    // Вставка таблиці в HTML сторінку
    document.getElementById('cards-container').innerHTML = tableHTML;
});

// ==========================================
// Завдання 2: Цитати авторів
// ==========================================
function showQuote(authorNum) {
    let quote = "";
    switch(authorNum) {
        case 6: quote = "Ті, що виїздять за море, міняють небо, а не душу. (Горацій)"; break;
        case 7: quote = "Для нас дорогі батьки, дорогі діти, близькі, родичі; але всі уявлення про любов до чого-небудь поєднані в одному слові «вітчизна». (Цицерон)"; break;
        case 8: quote = "Мова — це глибина тисячоліть. (М. Шумило)"; break;
        case 9: quote = "Той, хто в біді кидає свій народ, стає його ворогом. (Ч. Айтматов)"; break;
        case 10: quote = "Де немає свободи, там немає і вітчизни. (П. Гольбах)"; break;
    }
    alert(quote);
}

// ==========================================
// Завдання 3: Математичні функції й константи
// ==========================================
// Замість автоматичного виклику renderMathConstants(); пишемо це:
document.getElementById('btn-task3').addEventListener('click', function() {
    let container = document.getElementById('math-container');
    
    // Відображаємо блок
    container.style.display = 'block';
    
    // Ховаємо саму кнопку, щоб не натискати двічі (за бажанням)
    this.style.display = 'none'; 
    let html = "<h3>КОНСТАНТИ</h3>";
    html += "1. Значення константи е = " + Math.E + "<br>";
    html += "2. Значення константи π = " + Math.PI + "<br>";
    html += "3. Десятковий логарифм постійної Ейлера (е) = " + Math.LOG10E + "<br>";
    html += "4. Двійковий логарифм постійної Ейлера (е) = " + Math.LOG2E + "<br>";
    html += "5. Натуральний логарифм числа 10 = " + Math.LN10 + "<br>";
    html += "6. Натуральний логарифм числа 2 = " + Math.LN2 + "<br>";
    html += "7. Корінь квадратний із двох = " + Math.SQRT2 + "<br>";
    html += "8. Корінь квадратний з однієї другої = " + Math.SQRT1_2 + "<br>";

    html += "<h3>ФУНКЦІЇ (Варіант 6)</h3>";
    html += "6. Косинус 180 градусів (π радіан): y = " + Math.cos(Math.PI) + "<br>";
    html += "7. Результат обчислення арккосинуса нуля: y = " + Math.acos(0) + "<br>";
    html += "8. Результат обчислення синуса нуля радіан: y = " + Math.sin(0) + "<br>";
    html += "9. Синус 90 градусів (π /2 радіан): y = " + Math.sin(Math.PI/2) + "<br>";
    html += "10. Результат обчислення арксинуса одиниці: y = " + Math.asin(1) + "<br>";

    html += "<h3>ГЕНЕРАТОР ВИПАДКОВИХ ЧИСЕЛ</h3>";
    html += "Формування випадкових чисел в інтервалі [0;1]: y = " + Math.random() + "<br>";

    document.getElementById('math-container').innerHTML = html;
});

// ==========================================
// Завдання 4: Розгалужений обчислювальний процес
// ==========================================
document.getElementById('btn-task4').addEventListener('click', function() {
    let startX = parseFloat(prompt("Введіть початкове значення x:", "-6"));
    let endX = parseFloat(prompt("Введіть кінцеве значення x:", "6"));
    let step = parseFloat(prompt("Введіть крок:", "2"));

    // Перевірка на коректність введених даних
    if (isNaN(startX) || isNaN(endX) || isNaN(step)) {
        alert("Будь ласка, введіть коректні числа!");
        return;
    }

    let html = "<table><tr><th>x</th><th>U(x)</th></tr>";

    for (let x = startX; x <= endX; x += step) {
        // Округлення для уникнення проблем з плаваючою комою в JS
        x = Math.round(x * 1000) / 1000; 
        
        let U;
        if (x < 0) {
            U = Math.sin(x) - Math.tan(x);
        } else if (x === 0) {
            U = 0;
        } else { // x > 0
            let ctgX = 1 / Math.tan(x);
            U = Math.pow(ctgX, 3);
        }

        html += "<tr><td>" + x + "</td><td>" + U.toFixed(4) + "</td></tr>";
    }
    html += "</table>";
    
    document.getElementById('table-container').innerHTML = html;
});