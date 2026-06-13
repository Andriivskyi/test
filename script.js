let prices = {
    stone: { gabro: 15000, pokost: 12000 },
    arkaShape: { priama: 0, khvylka: 2500, kosa: 3500 },
    baseType: { obklady: 20000, plytka: 14000 },
    accessories: { lampadka: 1500, vaza: 2000 }
};

let currentSelection = { stone: 'gabro', arka: 'priama', base: 'obklady', lampadka: false, vaza: false };

function setStone(stoneType, element) { currentSelection.stone = stoneType; updateActiveButton(element); calculateTotal(); }
function setArka(shape, element) { currentSelection.arka = shape; updateActiveButton(element); calculateTotal(); }
function setBase(type, element) { currentSelection.base = type; updateActiveButton(element); calculateTotal(); }
function toggleAccessory(item, element) { currentSelection[item] = !currentSelection[item]; element.classList.toggle('active'); calculateTotal(); }

function updateActiveButton(element) {
    if (!element) return;
    const buttons = element.parentElement.querySelectorAll('.btn');
    buttons.forEach(b => b.classList.remove('active'));
    element.classList.add('active');
}

function calculateTotal() {
    let total = prices.stone[currentSelection.stone] + prices.arkaShape[currentSelection.arka] + prices.baseType[currentSelection.base];
    if(currentSelection.lampadka) total += prices.accessories.lampadka;
    if(currentSelection.vaza) total += prices.accessories.vaza;
    document.getElementById('totalPrice').innerText = total.toLocaleString('uk-UA') + " грн";
}

function sendOrder() { alert("Замовлення передано в обробку!"); }

calculateTotal();
