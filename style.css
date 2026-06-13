:root {
    --bg-color: #12161f;
    --panel-bg: #1a202c;
    --accent-gold: #d4af37;
    --text-main: #ffffff;
    --btn-inactive: #2d3748;
}

body {
    margin: 0;
    padding: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: var(--bg-color);
    color: var(--text-main);
    overflow: hidden;
}

.constructor-container {
    display: flex;
    height: 100vh;
}

/* Ліва частина - 3D Сцена */
.visual-block {
    flex: 1;
    background: radial-gradient(circle, #2a3447 0%, #12161f 100%);
    position: relative;
}

/* Стилі для 3D плеєра - розтягуємо на все вікно */
model-viewer {
    width: 100%;
    height: 100%;
    background-color: transparent;
    outline: none;
}

/* Права частина - меню */
.menu-block {
    width: 450px;
    background-color: var(--panel-bg);
    padding: 25px;
    box-shadow: -5px 0 25px rgba(0,0,0,0.5);
    overflow-y: auto;
    z-index: 10;
}

h2 { color: var(--accent-gold); margin-top: 0; }
hr { border: 0; height: 1px; background: #334155; margin-bottom: 20px; }

.menu-section { margin-bottom: 25px; }
.menu-section label { display: block; margin-bottom: 10px; font-weight: 600; font-size: 14px; color: #cbd5e1; }

.buttons-grid { display: flex; gap: 10px; }
.btn {
    flex: 1;
    padding: 12px;
    background-color: var(--btn-inactive);
    border: 1px solid #4a5568;
    color: var(--text-main);
    border-radius: 6px;
    cursor: pointer;
    font-weight: 500;
    transition: all 0.2s;
}
.btn:hover { background-color: #4a5568; }
.btn.active { background-color: var(--accent-gold); color: #000; border-color: var(--accent-gold); font-weight: bold; }

input[type="text"] {
    width: 100%;
    padding: 12px;
    background-color: var(--bg-color);
    border: 1px solid #4a5568;
    color: #fff;
    border-radius: 6px;
    box-sizing: border-box;
    margin-bottom: 10px;
}

.upload-box input { display: none; }
.upload-box label {
    display: block;
    text-align: center;
    padding: 12px;
    background-color: #232d3f;
    border: 1px dashed var(--accent-gold);
    color: var(--accent-gold);
    border-radius: 6px;
    cursor: pointer;
}

/* Блок чеку */
.total-price-block {
    background-color: var(--bg-color);
    padding: 20px;
    border-radius: 8px;
    border: 1px solid #2d3748;
    margin-top: 30px;
    text-align: center;
}
.price-title { font-size: 14px; color: #94a3b8; }
.price-value { font-size: 32px; font-weight: bold; color: var(--accent-gold); margin: 10px 0; }

.btn-order {
    width: 100%;
    padding: 15px;
    background: linear-gradient(90deg, #d4af37 0%, #b89127 100%);
    border: none;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    border-radius: 6px;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 4px 15px rgba(212, 175, 55, 0.3);
}
.btn-order:hover { transform: translateY(-1px); box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4); }

/* Адаптивність для телефонів */
@media (max-width: 768px) {
    .constructor-container { flex-direction: column; height: auto; }
    .visual-block { height: 450px; }
    .menu-block { width: auto; }
}
