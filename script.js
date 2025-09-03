// Global Variables
let currentPage = 'homepage';
let currentCategory = 'sandwiches';
let cart = [];
let orders = [];
let customerId = 'CID_' + Date.now();
let isAdmin = false;

// Menu Data - Hardcoded for reliability
const menuData = {
    sandwiches: {
        name: 'Sandwiches & Wraps',
        icon: '🥪',
        items: [
            {id: 1, name: 'Patch Up Sandwich', price: 169, description: "Chef's special with cheese, onion, tomato, capsicum", available: true},
            {id: 2, name: 'Cheesy Sandizza', price: 199, description: 'Pizza-sandwich fusion with cheese and vegetables', available: true},
            {id: 3, name: 'Club Sandwich', price: 159, description: 'Classic triple-decker with fresh vegetables', available: true},
            {id: 4, name: 'Grilled Veg Sandwich', price: 129, description: 'Healthy grilled sandwich with mixed vegetables', available: true}
        ]
    },
    pizza: {
        name: 'Pizza',
        icon: '🍕',
        items: [
            {id: 5, name: 'Paneer Tikka Pizza', price: 259, description: 'Cottage cheese with tikka seasoning', available: true},
            {id: 6, name: 'Margherita Pizza', price: 199, description: 'Classic pizza with mozzarella and basil', available: true},
            {id: 7, name: 'Veggie Supreme', price: 279, description: 'Loaded with fresh vegetables and cheese', available: true}
        ]
    },
    snacks: {
        name: 'Snacks & Appetizers',
        icon: '🍿',
        items: [
            {id: 8, name: '90s Special Cheese Garlic Sticks', price: 219, description: 'Garlic bread with cheese and herbs', available: true},
            {id: 9, name: 'Chinese Bhel', price: 119, description: 'Indo-Chinese fusion snack', available: true},
            {id: 10, name: 'Corn Bhel', price: 139, description: 'Sweet corn with chutneys and spices', available: true}
        ]
    },
    beverages: {
        name: 'Beverages',
        icon: '☕',
        items: [
            {id: 11, name: 'Cold Brew Coffee', price: 149, description: 'Smooth and refreshing cold coffee', available: true},
            {id: 12, name: '90s Special Shake', price: 179, description: 'Signature thick shake with retro flavors', available: true},
            {id: 13, name: 'Fresh Lime Soda', price: 79, description: 'Refreshing lime with soda and mint', available: true},
            {id: 14, name: 'Masala Chai', price: 49, description: 'Traditional spiced tea', available: true}
        ]
    },
    desserts: {
        name: 'Desserts',
        icon: '🍰',
        items: [
            {id: 15, name: 'Chocolate Brownie', price: 129, description: 'Warm brownie with vanilla ice cream', available: true},
            {id: 16, name: 'Vanilla Ice Cream', price: 89, description: 'Premium vanilla ice cream', available: true},
            {id: 17, name: 'Fruit Custard', price: 99, description: 'Fresh fruits with vanilla custard', available: true}
        ]
    }
};

// Initialize App
function initApp() {
    console.log('🚀 Initializing 90s Cafe App...');
    loadSavedData();
    console.log('✅ App initialized successfully');
    showNotification('Welcome to 90s Cafe! 🎉', 'success');
}

// Navigation Functions
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    currentPage = pageId;
    
    // Show/hide cart button
    const cartBtn = document.getElementById('cartBtn');
    if (pageId === 'menuPage' || pageId === 'cartPage' || pageId === 'checkoutPage') {
        cartBtn.style.display = 'block';
    } else {
        cartBtn.style.display = 'none';
    }
}

function goHome() {
    showPage('homepage');
    isAdmin = false;
}

function showMenu() {
    showPage('menuPage');
    loadMenu();
}

function showCart() {
    showPage('cartPage');
    loadCart();
}

function showCheckout() {
    showPage('checkoutPage');
    loadCheckout();
}

function showAdminLogin() {
    showPage('adminLoginPage');
}

function showAdmin() {
    showPage('adminPage');
    isAdmin = true;
    loadAdminOrders();
}

// Menu Functions
function loadMenu() {
    console.log('Loading menu...');
    
    // Load categories
    const categoriesContainer = document.getElementById('menuCategories');
    categoriesContainer.innerHTML = '';
    
    Object.keys(menuData).forEach(categoryId => {
        const category = menuData[categoryId];
        const categoryBtn = document.createElement('div');
        categoryBtn.className = `category-btn ${currentCategory === categoryId ? 'active' : ''}`;
        categoryBtn.onclick = () => switchCategory(categoryId);
        categoryBtn.innerHTML = `
            <div class="category-icon">${category.icon}</div>
            <div class="category-name">${category.name}</div>
        `;
        categoriesContainer.appendChild(categoryBtn);
    });
    
    // Load menu items
    loadMenuItems();
    console.log('✅ Menu loaded successfully');
}

function switchCategory(categoryId) {
    currentCategory = categoryId;
    
    // Update active category
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.category-btn')[Object.keys(menuData).indexOf(categoryId)].classList.add('active');
    
    loadMenuItems();
}

function loadMenuItems() {
    const menuGrid = document.getElementById('menuGrid');
    const category = menuData[currentCategory];
    
    if (!category) {
        menuGrid.innerHTML = '<p>Category not found</p>';
        return;
    }
    
    menuGrid.innerHTML = '';
    
    category.items.forEach(item => {
        const cartItem = cart.find(c => c.id === item.id);
        const quantity = cartItem ? cartItem.quantity : 0;
        
        const itemElement = document.createElement('div');
        itemElement.className = `menu-item ${!item.available ? 'out-of-stock' : ''}`;
        itemElement.innerHTML = `
            <div class="item-header">
                <div class="item-name">${item.name}</div>
                <div class="item-price">₹${item.price}</div>
            </div>
            <div class="item-description">${item.description}</div>
            <div class="item-actions">
                <div class="quantity-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" ${!item.available || quantity === 0 ? 'disabled' : ''}>
                        -
                    </button>
                    <div class="qty-display">${quantity}</div>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" ${!item.available ? 'disabled' : ''}>
                        +
                    </button>
                </div>
                ${!item.available ? '<span class="out-of-stock-badge">Out of Stock</span>' : ''}
            </div>
        `;
        menuGrid.appendChild(itemElement);
    });
}

// Cart Functions
function updateQuantity(itemId, change) {
    const item = findItemById(itemId);
    if (!item || !item.available) return;
    
    const existingItem = cart.find(c => c.id === itemId);
    
    if (existingItem) {
        existingItem.quantity += change;
        if (existingItem.quantity <= 0) {
            cart = cart.filter(c => c.id !== itemId);
        }
    } else if (change > 0) {
        cart.push({ ...item, quantity: 1 });
    }
    
    updateCartBadge();
    loadMenuItems();
    saveData();
    
    if (change > 0) {
        showNotification(`${item.name} added to cart`, 'success');
    }
}

function findItemById(itemId) {
    for (const category of Object.values(menuData)) {
        const item = category.items.find(item => item.id === itemId);
        if (item) return item;
    }
    return null;
}

function updateCartBadge() {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cartCount').textContent = totalItems;
}

function loadCart() {
    const cartItems = document.getElementById('cartItems');
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i>🛒</i>
                <h3>Your cart is empty</h3>
                <p>Add some delicious items from our menu!</p>
                <button class="btn" onclick="showMenu()">Browse Menu</button>
            </div>
        `;
        cartSummary.innerHTML = '';
        return;
    }
    
    // Render cart items
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₹${item.price} each</div>
            </div>
            <div class="quantity-controls">
                <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <div class="qty-display">${item.quantity}</div>
                <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <div style="font-weight: bold; color: #2563eb;">₹${item.price * item.quantity}</div>
        `;
        cartItems.appendChild(cartItem);
    });
    
    // Render summary
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
    cartSummary.innerHTML = `
        <div class="summary-row">
            <span>Subtotal</span>
            <span>₹${subtotal}</span>
        </div>
        <div class="summary-row">
            <span>Tax (18%)</span>
            <span>₹${tax}</span>
        </div>
        <div class="summary-row total">
            <span>Total</span>
            <span>₹${total}</span>
        </div>
        <button class="btn" style="width: 100%; margin-top: 1rem;" onclick="showCheckout()">
            🛒 Proceed to Checkout
        </button>
    `;
}

// Checkout Functions
function loadCheckout() {
    const checkoutItems = document.getElementById('checkoutItems');
    const checkoutSummary = document.getElementById('checkoutSummary');
    
    // Load items
    checkoutItems.innerHTML = '';
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.style.cssText = 'display: flex; justify-content: space-between; padding: 0.5rem 0; border-bottom: 1px solid #e5e7eb;';
        itemDiv.innerHTML = `
            <span>${item.name} x ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
        `;
        checkoutItems.appendChild(itemDiv);
    });
    
    // Load summary
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
    checkoutSummary.innerHTML = `
        <div class="summary-row"><span>Subtotal</span><span>₹${subtotal}</span></div>
        <div class="summary-row"><span>Tax (18%)</span><span>₹${tax}</span></div>
        <div class="summary-row total"><span>Total</span><span>₹${total}</span></div>
    `;
}

// Payment Functions
function showPaymentModal() {
    document.getElementById('paymentModal').classList.add('active');
}

function closeModal() {
    document.getElementById('paymentModal').classList.remove('active');
}

function closeUpiModal() {
    document.getElementById('upiModal').classList.remove('active');
}

function selectPayment(method) {
    closeModal();
    if (method === 'upi') {
        document.getElementById('upiModal').classList.add('active');
    } else {
        processPayment(method);
    }
}

function processUPIPayment(method) {
    closeUpiModal();
    
    if (method === 'upi_id') {
        const upiId = prompt('Enter your UPI ID:');
        if (!upiId) {
            showNotification('Payment cancelled', 'warning');
            return;
        }
        showNotification(`Payment request sent to ${upiId}`, 'info');
    } else {
        showNotification(`Opening ${method} for payment...`, 'info');
    }
    
    setTimeout(() => {
        processPayment('upi', method);
    }, 2000);
}

function processPayment(method, upiMethod = null) {
    const orderType = document.querySelector('input[name="orderType"]:checked')?.value || 'dineIn';
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const tax = Math.round(subtotal * 0.18);
    const total = subtotal + tax;
    
    // Create order
    const order = {
        id: 'ORD_' + Date.now(),
        customerId: customerId,
        tableNo: 'T5',
        items: [...cart],
        subtotal: subtotal,
        tax: tax,
        total: total,
        orderType: orderType,
        paymentMethod: method,
        upiMethod: upiMethod,
        status: 'pending',
        timestamp: new Date()
    };
    
    // Add to orders
    orders.push(order);
    
    // Clear cart
    cart = [];
    
    // Save data
    saveData();
    
    // Show success
    showOrderSuccess(order);
    
    // Simulate order progress
    simulateOrderProgress(order.id);
    
    showNotification('Order placed successfully! 🎉', 'success');
}

function showOrderSuccess(order) {
    showPage('successPage');
    
    document.getElementById('orderDetails').innerHTML = `
        <div class="order-detail"><strong>Order ID:</strong> <span>${order.id}</span></div>
        <div class="order-detail"><strong>Table:</strong> <span>${order.tableNo}</span></div>
        <div class="order-detail"><strong>Total:</strong> <span>₹${order.total}</span></div>
        <div class="order-detail"><strong>Payment:</strong> <span>${order.paymentMethod.toUpperCase()}${order.upiMethod ? ' (' + order.upiMethod + ')' : ''}</span></div>
        <div class="order-detail"><strong>Type:</strong> <span>${order.orderType === 'dineIn' ? 'Dine In' : 'Takeaway'}</span></div>
    `;
    
    updateCartBadge();
}

function simulateOrderProgress(orderId) {
    const statuses = ['confirmed', 'preparing', 'ready', 'served'];
    let currentIndex = 0;
    
    const updateStatus = () => {
        if (currentIndex < statuses.length) {
            const order = orders.find(o => o.id === orderId);
            if (order) {
                order.status = statuses[currentIndex];
                saveData();
                
                const statusLabels = {
                    confirmed: 'Order Confirmed',
                    preparing: 'Being Prepared',
                    ready: 'Ready for Pickup',
                    served: 'Served'
                };
                
                showNotification(`Order ${statusLabels[order.status]}`, 'info');
            }
            currentIndex++;
            setTimeout(updateStatus, 30000);
        }
    };
    
    setTimeout(updateStatus, 10000);
}

// Admin Functions
function adminLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('adminUsername').value;
    const password = document.getElementById('adminPassword').value;
    const errorElement = document.getElementById('loginError');
    
    if (username === 'admin' && password === 'admin123') {
        showAdmin();
        showNotification('Admin login successful', 'success');
    } else {
        errorElement.textContent = 'Invalid username or password';
        showNotification('Invalid credentials', 'error');
    }
}

function adminLogout() {
    isAdmin = false;
    goHome();
    showNotification('Logged out successfully', 'info');
}

function showAdminTab(tabId) {
    // Update tab buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    
    // Update tab content
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(tabId + 'Tab').classList.add('active');
    
    // Load content
    switch (tabId) {
        case 'orders':
            loadAdminOrders();
            break;
        case 'menu':
            loadAdminMenu();
            break;
        case 'analytics':
            loadAdminAnalytics();
            break;
    }
}

function loadAdminOrders() {
    const ordersGrid = document.getElementById('ordersGrid');
    
    if (orders.length === 0) {
        ordersGrid.innerHTML = `
            <div style="text-align: center; padding: 3rem; color: #6b7280;">
                <i style="font-size: 3rem; margin-bottom: 1rem; display: block;">📋</i>
                <h3>No orders yet</h3>
                <p>Orders will appear here when customers place them.</p>
            </div>
        `;
        return;
    }
    
    ordersGrid.innerHTML = '';
    orders.slice().reverse().forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        orderCard.innerHTML = `
            <div class="order-header">
                <div class="order-id">${order.id}</div>
                <div class="order-status status-${order.status}">${order.status}</div>
            </div>
            <div style="margin: 1rem 0; color: #6b7280; font-size: 0.9rem;">
                <p><strong>Table:</strong> ${order.tableNo}</p>
                <p><strong>Customer:</strong> ${order.customerId}</p>
                <p><strong>Type:</strong> ${order.orderType === 'dineIn' ? 'Dine In' : 'Takeaway'}</p>
                <p><strong>Payment:</strong> ${order.paymentMethod.toUpperCase()}</p>
                <p><strong>Time:</strong> ${new Date(order.timestamp).toLocaleTimeString()}</p>
            </div>
            <div class="order-items">
                <h4>Items:</h4>
                ${order.items.map(item => `
                    <div class="order-item">
                        <span>${item.name} x ${item.quantity}</span>
                        <span>₹${item.price * item.quantity}</span>
                    </div>
                `).join('')}
                <div class="order-item" style="font-weight: bold; border-top: 1px solid #e5e7eb; padding-top: 0.5rem; margin-top: 0.5rem;">
                    <span>Total: ₹${order.total}</span>
                </div>
            </div>
            <div style="margin-top: 1rem;">
                <select class="status-select" onchange="updateOrderStatus('${order.id}', this.value)">
                    <option value="pending" ${order.status === 'pending' ? 'selected' : ''}>Pending</option>
                    <option value="confirmed" ${order.status === 'confirmed' ? 'selected' : ''}>Confirmed</option>
                    <option value="preparing" ${order.status === 'preparing' ? 'selected' : ''}>Preparing</option>
                    <option value="ready" ${order.status === 'ready' ? 'selected' : ''}>Ready</option>
                    <option value="served" ${order.status === 'served' ? 'selected' : ''}>Served</option>
                </select>
            </div>
        `;
        ordersGrid.appendChild(orderCard);
    });
}

function updateOrderStatus(orderId, status) {
    const order = orders.find(o => o.id === orderId);
    if (order) {
        order.status = status;
        saveData();
        showNotification(`Order ${orderId.split('_')[1]} updated to ${status}`, 'success');
    }
}

function loadAdminMenu() {
    const adminMenuGrid = document.getElementById('adminMenuGrid');
    adminMenuGrid.innerHTML = '';
    
    Object.keys(menuData).forEach(categoryId => {
        const category = menuData[categoryId];
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'admin-menu-category';
        categoryDiv.innerHTML = `
            <div class="category-title">${category.icon} ${category.name}</div>
       <div class="admin-menu-items">
                ${category.items.map(item => `
                    <div class="admin-menu-item">
                        <div class="admin-item-info">
                            <div class="admin-item-name">${item.name}</div>
                            <div class="admin-item-price">₹${item.price}</div>
                        </div>
                        <div class="admin-item-controls">
                            <label class="toggle-switch">
                                <input type="checkbox" ${item.available ? 'checked' : ''} 
                                       onchange="toggleItemAvailability('${categoryId}', ${item.id}, this.checked)">
                                <span class="toggle-slider"></span>
                            </label>
                            <span class="stock-label">${item.available ? 'Available' : 'Out of Stock'}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
        adminMenuGrid.appendChild(categoryDiv);
    });
}

function toggleItemAvailability(categoryId, itemId, available) {
    const item = menuData[categoryId].items.find(item => item.id === itemId);
    if (item) {
        item.available = available;
        saveData();
        showNotification(`${item.name} ${available ? 'marked as available' : 'marked as out of stock'}`, 'success');
    }
}

function loadAdminAnalytics() {
    const statsGrid = document.getElementById('statsGrid');
    
    const totalOrders = orders.length;
    const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);
    const completedOrders = orders.filter(order => order.status === 'served').length;
    const averageOrderValue = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
    
    statsGrid.innerHTML = `
        <div class="stat-card">
            <div class="stat-value">${totalOrders}</div>
            <div class="stat-label">Total Orders</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">₹${totalRevenue}</div>
            <div class="stat-label">Total Revenue</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">${completedOrders}</div>
            <div class="stat-label">Completed Orders</div>
        </div>
        <div class="stat-card">
            <div class="stat-value">₹${averageOrderValue}</div>
            <div class="stat-label">Avg Order Value</div>
        </div>
    `;
}

// Utility Functions
function saveData() {
    try {
        localStorage.setItem('90sCafe_cart', JSON.stringify(cart));
        localStorage.setItem('90sCafe_orders', JSON.stringify(orders));
        localStorage.setItem('90sCafe_menu', JSON.stringify(menuData));
    } catch (error) {
        console.error('Error saving data:', error);
    }
}

function loadSavedData() {
    try {
        const savedCart = localStorage.getItem('90sCafe_cart');
        if (savedCart) cart = JSON.parse(savedCart);
        
        const savedOrders = localStorage.getItem('90sCafe_orders');
        if (savedOrders) orders = JSON.parse(savedOrders);
        
        const savedMenu = localStorage.getItem('90sCafe_menu');
        if (savedMenu) {
            const saved = JSON.parse(savedMenu);
            // Only update availability, keep original structure
            Object.keys(menuData).forEach(categoryId => {
                if (saved[categoryId]) {
                    menuData[categoryId].items.forEach(item => {
                        const savedItem = saved[categoryId].items.find(si => si.id === item.id);
                        if (savedItem) {
                            item.available = savedItem.available;
                        }
                    });
                }
            });
        }
        
        updateCartBadge();
    } catch (error) {
        console.error('Error loading saved data:', error);
    }
}

function showNotification(message, type = 'info') {
    const notification = document.getElementById('notification');
    const messageElement = document.getElementById('notificationMessage');
    
    messageElement.textContent = message;
    notification.className = `notification ${type} show`;
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}

// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

console.log('🎉 90s Cafe application loaded successfully!');
// Initialize app when page loads
document.addEventListener('DOMContentLoaded', function() {
    initApp();
});

console.log('🎉 90s Cafe application loaded successfully!');
