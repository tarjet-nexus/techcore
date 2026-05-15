// ============================================
// NEXUS GPU — APP.JS FULL COMPLETO
// ============================================

// ============================================
// NAVEGACIÓN
// ============================================

const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const gotoButtons = document.querySelectorAll('[data-goto]');

function showSection(sectionId) {

    sections.forEach(section => {
        section.classList.remove('active');
    });

    const target = document.getElementById(`section-${sectionId}`);

    if (target) {
        target.classList.add('active');
    }

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    const activeLink = document.querySelector(`.nav-link[data-section="${sectionId}"]`);

    if (activeLink) {
        activeLink.classList.add('active');
    }

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

navLinks.forEach(link => {

    link.addEventListener('click', e => {

        e.preventDefault();

        showSection(link.dataset.section);
    });
});

gotoButtons.forEach(button => {

    button.addEventListener('click', () => {

        showSection(button.dataset.goto);
    });
});

// ============================================
// PRODUCTOS
// ============================================

const products = [

    // NVIDIA

    {
        id: 1,
        name: 'GeForce RTX 5090',
        brand: 'nvidia',
        price: 2499,
        vram: '32GB',
        memory: 'GDDR7',
        power: '600W',
        resolution: '8K',
        performance: 'Ultra Extreme',
        image: 'imagenes/rtx5090.png'
    },

    {
        id: 2,
        name: 'GeForce RTX 5080',
        brand: 'nvidia',
        price: 1799,
        vram: '16GB',
        memory: 'GDDR7',
        power: '400W',
        resolution: '4K',
        performance: 'Ultra',
        image: 'imagenes/rtx5080.png'
    },

    {
        id: 3,
        name: 'GeForce RTX 5070 Ti',
        brand: 'nvidia',
        price: 999,
        vram: '16GB',
        memory: 'GDDR7',
        power: '300W',
        resolution: '4K',
        performance: 'Muy Alto',
        image: 'imagenes/rtx5070ti.png'
    },

    {
        id: 4,
        name: 'GeForce RTX 5070',
        brand: 'nvidia',
        price: 799,
        vram: '12GB',
        memory: 'GDDR7',
        power: '250W',
        resolution: '1440P',
        performance: 'Muy Alto',
        image: 'imagenes/rtx5070.png'
    },

    {
        id: 5,
        name: 'GeForce RTX 4090',
        brand: 'nvidia',
        price: 1999,
        vram: '24GB',
        memory: 'GDDR6X',
        power: '450W',
        resolution: '8K',
        performance: 'Extremo',
        image: 'imagenes/rtx4090.png'
    },

    {
        id: 6,
        name: 'GeForce RTX 4080 SUPER',
        brand: 'nvidia',
        price: 1399,
        vram: '16GB',
        memory: 'GDDR6X',
        power: '320W',
        resolution: '4K',
        performance: 'Ultra',
        image: 'imagenes/rtx4080super.png'
    },

    {
        id: 7,
        name: 'GeForce RTX 4070 Ti SUPER',
        brand: 'nvidia',
        price: 1099,
        vram: '16GB',
        memory: 'GDDR6X',
        power: '285W',
        resolution: '4K',
        performance: 'Muy Alto',
        image: 'imagenes/rtx4070tisuper.png'
    },

    {
        id: 8,
        name: 'GeForce RTX 4070 SUPER',
        brand: 'nvidia',
        price: 799,
        vram: '12GB',
        memory: 'GDDR6X',
        power: '220W',
        resolution: '1440P',
        performance: 'Muy Alto',
        image: 'imagenes/rtx4070super.png'
    },

    {
        id: 9,
        name: 'GeForce RTX 4060 Ti',
        brand: 'nvidia',
        price: 499,
        vram: '8GB',
        memory: 'GDDR6',
        power: '160W',
        resolution: '1080P',
        performance: 'Alto',
        image: 'imagenes/rtx4060ti.png'
    },

    // AMD

    {
        id: 10,
        name: 'Radeon RX 9090 XTX',
        brand: 'amd',
        price: 1899,
        vram: '32GB',
        memory: 'GDDR7',
        power: '500W',
        resolution: '8K',
        performance: 'Ultra Extreme',
        image: 'imagenes/rx9090xtx.png'
    },

    {
        id: 11,
        name: 'Radeon RX 9070 XT',
        brand: 'amd',
        price: 999,
        vram: '20GB',
        memory: 'GDDR7',
        power: '350W',
        resolution: '4K',
        performance: 'Ultra',
        image: 'imagenes/rx9070xt.png'
    },

    {
        id: 12,
        name: 'Radeon RX 9070',
        brand: 'amd',
        price: 799,
        vram: '16GB',
        memory: 'GDDR7',
        power: '300W',
        resolution: '1440P',
        performance: 'Muy Alto',
        image: 'imagenes/rx9070.png'
    },

    {
        id: 13,
        name: 'Radeon RX 7900 XTX',
        brand: 'amd',
        price: 1299,
        vram: '24GB',
        memory: 'GDDR6',
        power: '355W',
        resolution: '4K',
        performance: 'Ultra',
        image: 'imagenes/rx7900xtx.png'
    },

    {
        id: 14,
        name: 'Radeon RX 7900 XT',
        brand: 'amd',
        price: 1099,
        vram: '20GB',
        memory: 'GDDR6',
        power: '315W',
        resolution: '4K',
        performance: 'Muy Alto',
        image: 'imagenes/rx7900xt.png'
    },

    {
        id: 15,
        name: 'Radeon RX 7800 XT',
        brand: 'amd',
        price: 699,
        vram: '16GB',
        memory: 'GDDR6',
        power: '263W',
        resolution: '1440P',
        performance: 'Muy Alto',
        image: 'imagenes/rx7800xt.png'
    },

    {
        id: 16,
        name: 'Radeon RX 7700 XT',
        brand: 'amd',
        price: 599,
        vram: '12GB',
        memory: 'GDDR6',
        power: '245W',
        resolution: '1440P',
        performance: 'Alto',
        image: 'imagenes/rx7700xt.png'
    },

    {
        id: 17,
        name: 'Radeon RX 7600 XT',
        brand: 'amd',
        price: 399,
        vram: '8GB',
        memory: 'GDDR6',
        power: '190W',
        resolution: '1080P',
        performance: 'Alto',
        image: 'imagenes/rx7600xt.png'
    },

    // INTEL

    {
        id: 18,
        name: 'Intel Arc B580',
        brand: 'intel',
        price: 499,
        vram: '12GB',
        memory: 'GDDR6',
        power: '220W',
        resolution: '1440P',
        performance: 'Alto',
        image: 'imagenes/arcb580.png'
    },

    {
        id: 19,
        name: 'Intel Arc B770',
        brand: 'intel',
        price: 699,
        vram: '16GB',
        memory: 'GDDR6',
        power: '275W',
        resolution: '1440P',
        performance: 'Muy Alto',
        image: 'imagenes/arcb770.png'
    },

    {
        id: 20,
        name: 'Intel Arc A770',
        brand: 'intel',
        price: 449,
        vram: '16GB',
        memory: 'GDDR6',
        power: '225W',
        resolution: '1440P',
        performance: 'Alto',
        image: 'imagenes/arca770.png'
    },

    {
        id: 21,
        name: 'Intel Arc A750',
        brand: 'intel',
        price: 349,
        vram: '8GB',
        memory: 'GDDR6',
        power: '225W',
        resolution: '1080P',
        performance: 'Medio-Alto',
        image: 'imagenes/arca750.png'
    }

];

// ============================================
// GRID PRODUCTOS
// ============================================

const productsGrid = document.getElementById('productsGrid');

function renderProducts() {

    if (!productsGrid) return;

    productsGrid.innerHTML = '';

    products.forEach(product => {

        const card = document.createElement('div');

        card.className = 'product-card';

        card.innerHTML = `

            <div class="card-img-wrap">
                <img src="${product.image}" class="card-img">
            </div>

            <div class="card-body">

                <h3>${product.name}</h3>

                <p class="price">
                    $${product.price}
                </p>

                <button class="view-btn">
                    Ver más
                </button>

            </div>
        `;

        card.addEventListener('click', () => {

            openModal(product);
        });

        productsGrid.appendChild(card);
    });
}

renderProducts();

// ============================================
// MODAL
// ============================================

const modal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function openModal(product) {

    modal.classList.add('open');

modalContent.innerHTML = `

    <div class="modal-product-layout">

        <h2 class="modal-product-title">
            ${product.name}
        </h2>

        <img src="${product.image}" class="modal-product-img">

        <h3 class="modal-product-price">
            $${product.price}
        </h3>

        <div class="modal-specs">

            <p><strong>VRAM:</strong> ${product.vram}</p>

            <p><strong>Memoria:</strong> ${product.memory}</p>

            <p><strong>Consumo:</strong> ${product.power}</p>

            <p><strong>Resolución:</strong> ${product.resolution}</p>

            <p><strong>Rendimiento:</strong> ${product.performance}</p>

        </div>

        <button class="add-cart-btn" onclick="addToCart(${product.id})">
            Añadir al carrito
        </button>

    </div>
`;
}

if (modalClose) {

    modalClose.addEventListener('click', () => {

        modal.classList.remove('open');
    });
}

// ============================================
// CARRITO
// ============================================

let cart = [];

const cartItemsList = document.getElementById('cartItemsList');
const cartTotal = document.getElementById('cartTotal');
const cartBadge = document.getElementById('cartBadge');

function addToCart(id) {

    const product = products.find(p => p.id === id);

    const existing = cart.find(item => item.id === id);

    if (existing) {

        existing.quantity++;

    } else {

        cart.push({
            ...product,
            quantity: 1
        });
    }

    updateCart();

    modal.classList.remove('open');
}

function updateCart() {

    if (!cartItemsList) return;

    cartItemsList.innerHTML = '';

    let total = 0;
    let items = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        items += item.quantity;

        const div = document.createElement('div');

        div.className = 'cart-item';

        div.innerHTML = `

            <img src="${item.image}" class="cart-item-img">

            <div>
                <h4>${item.name}</h4>
                <p>$${item.price}</p>
            </div>

            <div class="qty-controls">

                <button onclick="changeQty(${item.id}, -1)">
                    -
                </button>

                <span>${item.quantity}</span>

                <button onclick="changeQty(${item.id}, 1)">
                    +
                </button>

            </div>
        `;

        cartItemsList.appendChild(div);
    });

const subtotal = total;
const tax = subtotal * 0.12;
const finalTotal = subtotal + tax;

document.getElementById('cartSubtotal').textContent =
    `$${subtotal.toFixed(2)}`;

document.getElementById('cartTax').textContent =
    `$${tax.toFixed(2)}`;

cartTotal.textContent =
    `$${finalTotal.toFixed(2)}`;

cartBadge.textContent = items;
}

function changeQty(id, amount) {

    const item = cart.find(p => p.id === id);

    if (!item) return;

    item.quantity += amount;

    if (item.quantity <= 0) {

        cart = cart.filter(p => p.id !== id);
    }

    updateCart();
}

// ============================================
// LOGIN
// ============================================

const loginForm = document.getElementById('loginForm');

if (loginForm) {

    loginForm.addEventListener('submit', e => {

        e.preventDefault();

        alert('Inicio de sesión exitoso');
    });
}

console.log('NEXUS GPU FULL CARGADO');
// ============================================
// FILTROS DE PRODUCTOS
// ============================================

const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {

    button.addEventListener('click', () => {

        // cambiar botón activo
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        button.classList.add('active');

        const filter = button.dataset.filter;

        // limpiar productos
        productsGrid.innerHTML = '';

        // filtrar
        const filtered = filter === 'all'
            ? products
            : products.filter(product => product.brand === filter);

        // renderizar
        filtered.forEach(product => {

            const card = document.createElement('div');

            card.className = 'product-card';

            card.innerHTML = `

                <div class="card-img-wrap">
                    <img src="${product.image}" class="card-img">
                </div>

                <div class="card-body">

                    <h3>${product.name}</h3>

                    <p class="price">$${product.price}</p>

                    <button class="view-btn">
                        Ver más
                    </button>

                </div>
            `;

            card.addEventListener('click', () => {
                openModal(product);
            });

            productsGrid.appendChild(card);

        });

    });

});
