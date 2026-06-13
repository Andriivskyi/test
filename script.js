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

// Зміна каменю (зміна текстурних класів)
function setStone(stoneType, element) {
    currentSelection.stone = stoneType;
    updateActiveButton(element);

    const arka = document.getElementById('layerArka');
    const tumba = document.getElementById('layerTumba');
    const plate = document.getElementById('layerPlate');

    // Скидаємо старі класи текстур з верхніх деталей
    arka.classList.remove('texture-gabro', 'texture-pokost');
    tumba.classList.remove('texture-gabro', 'texture-pokost');
    plate.classList.remove('texture-gabro', 'texture-pokost');

    // Задаємо нові текстури верхнім деталям
    if (stoneType === 'gabro') {
        arka.classList.add('texture-gabro');
        tumba.classList.add('texture-gabro');
        plate.classList.add('texture-gabro');
    } else {
        arka.classList.add('texture-pokost');
        tumba.classList.add('texture-pokost');
        plate.classList.add('texture-pokost');
    }
    
    // Перевикликаємо налаштування низу, щоб цоколь теж оновив колір каменю
    setBase(currentSelection.base, null);
}

// Зміна формування арки
function setArka(shape, element) {
    currentSelection.arka = shape;
    updateActiveButton(element);
    
    const arka = document.getElementById('layerArka');
    if(shape === 'khvylka') {
        arka.style.borderRadius = "20px 4px 0 0"; 
    } else if (shape === 'kosa') {
        arka.style.borderRadius = "100% 0 0 0"; 
    } else {
        arka.style.borderRadius = "4px 4px 0 0"; 
    }
    
    calculateTotal();
}

// Зміна типу облицювання низу
function setBase(type, element) {
    currentSelection.base = type;
    if (element) updateActiveButton(element);
    
    const base = document.getElementById('layerBase');
    base.classList.remove('texture-gabro', 'texture-pokost', 'texture-plytka');
    
    if (type === 'obklady') {
        if (currentSelection.stone === 'gabro') {
            base.classList.add('texture-gabro');
        } else {
            base.classList.add('texture-pokost');
        }
    } else if (type === 'plytka') {
        base.classList.add('texture-plytka');
    }
    
    calculateTotal();
}

// Ввімкнення/вимкнення аксесуарів
function toggleAccessory(item, element) {
    currentSelection[item] = !currentSelection[item];
    element.classList.toggle('active');
    calculateTotal();
}

// Оновлення текста ПІБ в реальному часі
function updateText() {
    let name = document.getElementById('clientName').value;
    document.getElementById('engravingText').innerText = name ? name : "Прізвище Ім'я";
}

// Допоміжна функція для перемикання кнопок
function updateActiveButton(element) {
    if (!element) return;
    const buttons = element.parentElement.querySelectorAll('.btn');
    buttons.forEach(b => b.classList.remove('active'));
    element.classList.add('active');
}

// Головна математична формула розрахунку
function calculateTotal() {
    let total = 0;
    total += prices.stone[currentSelection.stone];
    total += prices.arkaShape[currentSelection.arka];
    total += prices.baseType[currentSelection.base];
    
    if(currentSelection.lampadka) total += prices.accessories.lampadka;
    if(currentSelection.vaza) total += prices.accessories.vaza;
    
    document.getElementById('totalPrice').innerText = total.toLocaleString('uk-UA') + " грн";
}

// Дія при натисканні "Замовити"
function sendOrder() {
    alert("Замовлення передано в обробку!\nДякуємо, з вами зв'яжуться протягом 15 хв.");
}

// Стартова ініціалізація
setStone('gabro', null);
