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

// Зміна каменю
function setStone(stoneType, element) {
    currentSelection.stone = stoneType;
    updateActiveButton(element);
    calculateTotal();
    
    // Тут у майбутньому можна прописати зміну текстури матеріалу в 3D моделі
    // const viewer = document.getElementById('monument3D');
}

// Зміна форми арки
function setArka(shape, element) {
    currentSelection.arka = shape;
    updateActiveButton(element);
    calculateTotal();

    // Якщо у тебе будуть окремі 3D моделі під кожну форму (наприклад, priama.glb, khvylka.glb),
    // можна буде міняти модель на льоту оцим рядком:
    // document.getElementById('monument3D').src = shape + ".glb";
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

// Допоміжна функція для перемикання класів кнопок
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

// Стартовий прорахунок при завантаженні сторінки
calculateTotal();
