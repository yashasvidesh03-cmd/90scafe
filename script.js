* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%);
    background-size: 400% 400%;
    animation: gradientShift 15s ease infinite;
    color: #1a202c;
    line-height: 1.6;
    min-height: 100vh;
}

@keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

/* Header */
.header {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
    position: sticky;
    top: 0;
    z-index: 100;
    border-radius: 15px;
    margin: 10px 0;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    cursor: pointer;
    transition: all 0.3s;
}

.logo:hover {
    transform: scale(1.05);
    text-shadow: 3px 3px 6px rgba(0,0,0,0.7);
}

.header-actions {
    display: flex;
    gap: 1rem;
    align-items: center;
}

.connection-status {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.9rem;
    color: #fff;
    background: rgba(255, 255, 255, 0.15);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.status-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    animation: pulse 2s infinite;
}

.status-dot.online {
    background: #10b981;
    box-shadow: 0 0 5px #10b981;
}

.status-dot.offline {
    background: #ef4444;
    box-shadow: 0 0 5px #ef4444;
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.cart-btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 25px;
    cursor: pointer;
    font-weight: 500;
    display: none;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
}

.cart-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0,0,0,0.3);
}

/* Pages */
.page {
    display: none;
    min-height: 80vh;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    border-radius: 20px;
    padding: 2rem;
    margin: 1rem 0;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.page.active {
    display: block;
}

/* Homepage */
.homepage {
    text-align: center;
    padding: 4rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(15px);
    border-radius: 30px;
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.logo-animation {
    font-size: 4rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #ff6b6b, #feca57, #48dbfb, #ff9ff3);
    background-size: 200% 200%;
    animation: gradientShift 3s ease infinite;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    filter: drop-shadow(2px 2px 4px rgba(0,0,0,0.3));
}

.welcome-text h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
    background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.welcome-text p {
    font-size: 1.2rem;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 3rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.home-buttons {
    display: flex;
    gap: 2rem;
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    padding: 1rem 2rem;
    border-radius: 25px;
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    backdrop-filter: blur(10px);
}

.btn:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.3);
}

.btn-secondary {
    background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.btn-secondary:hover {
    background: linear-gradient(135deg, #f5576c 0%, #f093fb 100%);
}

/* Menu */
.page-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding: 1.5rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
}

.page-header h2 {
    font-size: 2rem;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
}

.live-indicator {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #10b981;
    font-size: 0.9rem;
    background: rgba(16, 185, 129, 0.1);
    padding: 0.5rem 1rem;
    border-radius: 20px;
    backdrop-filter: blur(10px);
}

.live-dot {
    width: 8px;
    height: 8px;
    background: #ef4444;
    border-radius: 50%;
    animation: blink 1s infinite;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
}

.back-btn {
    background: rgba(107, 114, 128, 0.8);
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    cursor: pointer;
    backdrop-filter: blur(10px);
    transition: all 0.3s;
}

.back-btn:hover {
    background: rgba(75, 85, 99, 0.9);
    transform: translateY(-2px);
}

.menu-categories {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    overflow-x: auto;
    padding: 1rem 0;
}

.category-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    cursor: pointer;
    min-width: 120px;
    transition: all 0.3s;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
}

.category-btn:hover,
.category-btn.active {
    border-color: rgba(102, 126, 234, 0.5);
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
}

.category-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.category-name {
    font-size: 0.9rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.menu-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
}

.menu-item {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    transition: all 0.3s;
}

.menu-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(31, 38, 135, 0.5);
}

.menu-item.out-of-stock {
    opacity: 0.6;
    filter: grayscale(50%);
}

.item-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.item-name {
    font-size: 1.2rem;
    font-weight: 600;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
}

.item-price {
    font-size: 1.3rem;
    font-weight: bold;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.item-description {
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 1rem;
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
}

.item-actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.qty-btn {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: none;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #fff;
    transition: all 0.3s;
}

.qty-btn:hover:not(:disabled) {
    background: linear-gradient(135deg, #667eea, #764ba2);
    transform: scale(1.1);
}

.qty-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.qty-display {
    font-weight: bold;
    min-width: 30px;
    text-align: center;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem;
    border-radius: 10px;
}

.out-of-stock-badge {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
    box-shadow: 0 2px 10px rgba(239, 68, 68, 0.3);
}

/* Cart */
.cart-items {
    margin-bottom: 2rem;
}

.cart-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 1rem;
    border-radius: 15px;
    margin-bottom: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.cart-item-info {
    flex: 1;
}

.cart-item-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #fff;
}

.cart-item-price {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.cart-summary {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 1.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.cart-summary h3 {
    color: #fff;
    margin-bottom: 1rem;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #fff;
}

.summary-row.total {
    font-weight: bold;
    font-size: 1.2rem;
    padding-top: 0.5rem;
    border-top: 2px solid rgba(255, 255, 255, 0.3);
}

.empty-cart {
    text-align: center;
    padding: 3rem;
    color: rgba(255, 255, 255, 0.8);
}

.empty-cart i {
    font-size: 3rem;
    margin-bottom: 1rem;
    display: block;
}

/* Checkout */
.checkout-container {
    display: grid;
    grid-template-columns: 1fr 300px;
    gap: 2rem;
}

.checkout-left h3 {
    color: #fff;
    margin-bottom: 1rem;
}

.radio-option {
    display: block;
    margin: 1rem 0;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.18);
    border-radius: 15px;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s;
}

.radio-option:hover {
    background: rgba(255, 255, 255, 0.15);
    border-color: rgba(102, 126, 234, 0.5);
}

.payment-btn {
    width: 100%;
    margin-top: 1rem;
}

/* Payment Processing */
.payment-process-container {
    text-align: center;
    padding: 4rem 2rem;
}

.payment-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.payment-process-container h2 {
    color: #fff;
    margin-bottom: 2rem;
}

.payment-status {
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 2rem;
}

.loading-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(255, 255, 255, 0.3);
    border-top: 4px solid #667eea;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 1rem auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

.payment-buttons {
    display: flex;
    gap: 1rem;
    justify-content: center;
    margin-top: 2rem;
}

/* Success Page */
.success-container {
    text-align: center;
    padding: 3rem;
}

.success-icon {
    font-size: 4rem;
    margin-bottom: 2rem;
    background: linear-gradient(45deg, #10b981, #059669);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.success-container h2 {
    color: #fff;
    margin-bottom: 2rem;
}

.order-tracking {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.tracking-step {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    opacity: 0.4;
    transition: all 0.3s;
}

.tracking-step.active {
    opacity: 1;
    color: #fff;
}

.step-icon {
    font-size: 2rem;
    margin-bottom: 0.5rem;
}

.step-text {
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    color: #fff;
}

.order-details {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 1.5rem;
    border-radius: 15px;
    margin: 2rem auto;
    max-width: 400px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.order-detail {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: #fff;
}

/* Admin Login */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 70vh;
}

.login-form {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 2rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
    width: 100%;
    max-width: 400px;
}

.login-header {
    text-align: center;
    margin-bottom: 2rem;
}

.login-header i {
    font-size: 3rem;
    margin-bottom: 1rem;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.login-header h2 {
    color: #fff;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group input {
    width: 100%;
    padding: 1rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 15px;
    font-size: 1rem;
    color: #fff;
}

.form-group input::placeholder {
    color: rgba(255, 255, 255, 0.7);
}

.form-group input:focus {
    outline: none;
    border-color: rgba(102, 126, 234, 0.5);
    box-shadow: 0 0 15px rgba(102, 126, 234, 0.3);
}

.login-error {
    color: #ff6b6b;
    text-align: center;
    margin-top: 1rem;
    font-size: 0.9rem;
}

/* Admin Dashboard */
.admin-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 1rem 2rem;
    margin: -2rem -2rem 2rem -2rem;
    border-radius: 20px 20px 0 0;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.admin-header h2 {
    color: #fff;
}

.admin-controls {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.live-orders-count {
    background: linear-gradient(135deg, #ef4444, #dc2626);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    box-shadow: 0 4px 15px rgba(239, 68, 68, 0.3);
}

.live-count {
    background: white;
    color: #ef4444;
    padding: 0.25rem 0.5rem;
    border-radius: 50%;
    margin-left: 0.5rem;
    min-width: 25px;
    text-align: center;
}

.admin-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.1);
    padding: 1rem;
    border-radius: 15px;
    backdrop-filter: blur(10px);
}

.tab-btn {
    background: none;
    border: none;
    padding: 1rem 1.5rem;
    cursor: pointer;
    border-radius: 10px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.7);
    transition: all 0.3s;
}

.tab-btn.active,
.tab-btn:hover {
    color: #fff;
    background: linear-gradient(135deg, #667eea, #764ba2);
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}

.tab-content {
    display: none;
}

.tab-content.active {
    display: block;
}

.tab-content h3 {
    color: #fff;
    margin-bottom: 1.5rem;
}

.stock-controls-header {
    background: rgba(14, 165, 233, 0.15);
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 15px;
    margin-bottom: 2rem;
    border-left: 4px solid #0ea5e9;
    color: #fff;
}

/* Orders */
.orders-grid {
    display: grid;
    gap: 1rem;
}

.order-card {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.order-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.order-id {
    font-weight: bold;
    background: linear-gradient(45deg, #667eea, #764ba2);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
}

.order-status {
    padding: 0.25rem 0.75rem;
    border-radius: 15px;
    font-size: 0.8rem;
    font-weight: bold;
    text-transform: uppercase;
}

.status-pending { background: #fef3c7; color: #92400e; }
.status-confirmed { background: #dbeafe; color: #1e40af; }
.status-preparing { background: #fed7aa; color: #c2410c; }
.status-ready { background: #d1fae5; color: #065f46; }
.status-served { background: #f3f4f6; color: #374151; }

.order-info {
    margin: 1rem 0;
    color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
}

.order-items {
    margin: 1rem 0;
}

.order-items h4 {
    color: #fff;
    margin-bottom: 0.5rem;
}

.order-item {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.9);
}

.order-item.total {
    border-top: 2px solid rgba(255, 255, 255, 0.3);
    padding-top: 0.5rem;
    margin-top: 0.5rem;
    font-weight: bold;
    color: #fff;
}

.status-select {
    padding: 0.5rem;
    border: 2px solid rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    color: #fff;
}

/* Admin Menu */
.admin-menu-grid {
    display: grid;
    gap: 1.5rem;
}

.admin-menu-category {
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(15px);
    padding: 1.5rem;
    border-radius: 15px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}

.category-title {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 1rem;
    color: #fff;
}

.admin-menu-items {
    display: grid;
    gap: 1rem;
}

.admin-menu-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.15);
}

.admin-item-info {
    flex: 1;
}

.admin-item-name {
    font-weight: 600;
    margin-bottom: 0.25rem;
    color: #fff;
}

.admin-item-price {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.9rem;
}

.admin-item-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.toggle-switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 24px;
}

.toggle-switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.toggle-slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(204, 204, 204, 0.5);
    transition: .4s;
    border-radius: 24px;
}

.toggle-slider:before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: .4s;
    border-radius: 50%;
}
input:checked + .toggle-slider {
    background: linear-gradient(135deg, #10b981, #059669);
}

input:checked + .toggle-slider:before {
    transform: translateX(26px);
}

.stock-label {
    font-size: 0.9rem;
    font-weight: 500;
    color: #fff;
}
