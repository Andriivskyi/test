// Базові налаштування цін
let prices = {
    stone: { gabro: 15000, pokost: 12000 },
    arkaShape: { priama: 0, khvylka: 2500, kosa: 3500 },
    baseType: { obklady: 20000, plytka: 14000 },
    accessories: { lampadka: 1500, vaza: 2000 }
};

// Поточний вибір клієнта
let currentSelection = {
    stone: 'gabro',
    arka: 'priama',
    base: 'obklady',
    lampadka: false,
    vaza: false
};

// Зміна каменю (зміна кольорів елементів)
function setStone(stoneType, element) {
    currentSelection.stone = stoneType;
    
    // Перемикання активної кнопки в меню
    updateActiveButton(element);

    // Візуальна зміна кольору шарів (імітація каменю)
    const baseColor = (stoneType === 'gabro') ? '#222222' : '#999999';
    const arkaColor = (stoneType === 'gabro') ? '#151515' : '#888888';
    
    document.getElementById('layerArka').style.backgroundColor = arkaColor;
    document.getElementById('layerTumba').style.backgroundColor = baseColor;
    document.getElementById('layerPlate').style.backgroundColor = baseColor;
    
    calculateTotal();
}

// Зміна формування арки
function setArka(shape, element) {
    currentSelection.arka = shape;
    updateActiveButton(element);
    
    const arka = document.getElementById('layerArka');
    if(shape === 'khvylka') {
        arka.style.borderRadius = "20px 4px 0 0"; // Імітація хвилі
    } else if (shape === 'kosa') {
        arka.style.borderRadius = "100% 0 0 0"; // Імітація косого зрізу
    } else {
        arka.style.borderRadius = "4px 4px 0 0"; // Пряма
    }
    
    calculateTotal();
}

// Зміна типу облицювання низу
function setBase(type, element) {
    currentSelection.base = type;
    updateActiveButton(element);
    calculateTotal();
}

// Ввімкнення/вимкнення аксесуарів
function toggleAccessory(item, element) {
    currentSelection[item] = !currentSelection[item];
    element.classList.toggle('active');
    calculateTotal();
}

// Оновлення тексту ПІБ в реальному часі
function updateText() {
    let name = document.getElementById('clientName').value;
    document.getElementById('engravingText').innerText = name ? name : "Прізвище Ім'я";
}

// Допоміжна функція для перемикання кнопок в інтерфейсі
function updateActiveButton(element) {
    if (!element) return;
    const buttons = element.parentElement.querySelectorAll('.btn');
    buttons.forEach(b => b.classList.remove('active'));
    element.classList.add('active');
}

// Головна математична формула розрахунку
function calculateTotal() {
    let total = 0;
    
    // 1. Додаємо ціну за камінь
    total += prices.stone[currentSelection.stone];
    
    // 2. Додаємо за складність форми арки
    total += prices.arkaShape[currentSelection.arka];
    
    // 3. Додаємо вартість робіт по низу
    total += prices.baseType[currentSelection.base];
    
    // 4. Аксесуари
    if(currentSelection.lampadka) total += prices.accessories.lampadka;
    if(currentSelection.vaza) total += prices.accessories.vaza;
    
    // Виводимо суму на екран
    document.getElementById('totalPrice').innerText = total.toLocaleString('uk-UA') + " грн";
}

// Дія при натисканні "Замовити"
function sendOrder() {
    alert("Зачекайте, іде підрахунок ~~~~~~~~\nЗамовлення передано в обробку!\nДякуємо, з вами зв'яжуться протягом 15 хв.");
}

// Ініціалізація початкового рахунку при завантаженні сторінки
calculateTotal();