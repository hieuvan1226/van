// Sample product data - Sweater Collection
const products = [
    {
        id: 1,
        name: "Sweater Nam Cổ Tròn",
        price: 450000,
        image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=300&h=300&fit=crop",
        category: "men",
        description: "Sweater nam cổ tròn chất liệu len cao cấp, ấm áp và thoải mái. Thiết kế basic phù hợp mùa đông."
    },
    {
        id: 2,
        name: "Sweater Nữ Cổ Lọ",
        price: 520000,
        image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=300&h=300&fit=crop",
        category: "women",
        description: "Sweater nữ cổ lọ chất liệu cashmere mềm mại, thiết kế thanh lịch và ấm áp cho mùa lạnh."
    },
    {
        id: 3,
        name: "Sweater Nam Hoodie",
        price: 650000,
        image: "https://images.unsplash.com/photo-1556821840-3a9fbc86339e?w=300&h=300&fit=crop",
        category: "men",
        description: "Sweater hoodie nam chất liệu cotton blend, có mũ trùm đầu. Phong cách trẻ trung và năng động."
    },
    {
        id: 4,
        name: "Sweater Nữ Cardigan",
        price: 580000,
        image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=300&h=300&fit=crop",
        category: "women",
        description: "Sweater cardigan nữ chất liệu len mềm, có thể mặc mở hoặc cài nút. Phù hợp nhiều phong cách."
    },
    {
        id: 5,
        name: "Sweater Unisex Oversized",
        price: 720000,
        image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&h=300&fit=crop",
        category: "accessories",
        description: "Sweater oversized unisex chất liệu len dày, form rộng thoải mái. Phong cách streetwear hiện đại."
    },
    {
        id: 6,
        name: "Sweater Nam Cổ V",
        price: 480000,
        image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=300&h=300&fit=crop",
        category: "men",
        description: "Sweater nam cổ V chất liệu len merino, thiết kế lịch lãm phù hợp công sở và dạo phố."
    },
    {
        id: 7,
        name: "Sweater Nữ Crop Top",
        price: 420000,
        image: "https://images.unsplash.com/photo-1583743814966-8936f37f4678?w=300&h=300&fit=crop",
        category: "women",
        description: "Sweater crop top nữ chất liệu len mỏng, thiết kế ngắn trẻ trung. Dễ phối đồ và thời trang."
    },
    {
        id: 8,
        name: "Sweater Nam Zip-up",
        price: 680000,
        image: "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=300&h=300&fit=crop",
        category: "men",
        description: "Sweater zip-up nam chất liệu len dày, có khóa kéo tiện lợi. Phong cách thể thao và năng động."
    }
];

// Shopping cart
let cart = [];

// DOM elements
const productGrid = document.getElementById('productGrid');
const cartModal = document.getElementById('cartModal');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const productModal = document.getElementById('productModal');
const productModalBody = document.getElementById('productModalBody');

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(products);
    setupFilterButtons();
    setupSmoothScrolling();
    setupContactForm();
    updateCartDisplay();
});

// Display products
function displayProducts(productsToShow) {
    productGrid.innerHTML = '';
    
    productsToShow.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <div class="product-info">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-price">${formatPrice(product.price)}</p>
                <button class="add-to-cart" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ
                </button>
            </div>
        `;
        
        // Add click event to show product details
        productCard.addEventListener('click', (e) => {
            if (!e.target.classList.contains('add-to-cart')) {
                showProductDetail(product.id);
            }
        });
        
        productGrid.appendChild(productCard);
    });
}

// Format price
function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

// Setup filter buttons
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            if (filter === 'all') {
                displayProducts(products);
            } else {
                const filteredProducts = products.filter(product => product.category === filter);
                displayProducts(filteredProducts);
            }
        });
    });
}

// Add to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartDisplay();
    
    // Show success message
    showNotification('Đã thêm sản phẩm vào giỏ hàng!');
}

// Update cart display
function updateCartDisplay() {
    // Update cart count
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    
    // Update cart items
    if (cart.length === 0) {
        cartItems.innerHTML = '<div class="empty-cart">Giỏ hàng trống</div>';
        cartTotal.textContent = '0đ';
        return;
    }
    
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach(item => {
        total += item.price * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                <span>${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItems.appendChild(cartItem);
    });
    
    cartTotal.textContent = formatPrice(total);
}

// Update quantity
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            updateCartDisplay();
        }
    }
}

// Remove from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Toggle cart modal
function toggleCart() {
    cartModal.style.display = cartModal.style.display === 'block' ? 'none' : 'block';
}

// Show product detail
function showProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    
    productModalBody.innerHTML = `
        <div class="product-detail">
            <img src="${product.image}" alt="${product.name}" class="product-detail-image">
            <div class="product-detail-info">
                <h2>${product.name}</h2>
                <div class="product-detail-price">${formatPrice(product.price)}</div>
                <div class="product-detail-description">${product.description}</div>
                <div class="size-selector">
                    <label>Kích thước:</label>
                    <div class="size-options">
                        <button class="size-option" onclick="selectSize(this)">S</button>
                        <button class="size-option" onclick="selectSize(this)">M</button>
                        <button class="size-option selected" onclick="selectSize(this)">L</button>
                        <button class="size-option" onclick="selectSize(this)">XL</button>
                    </div>
                </div>
                <button class="add-to-cart" onclick="addToCart(${product.id}); closeProductModal();">
                    <i class="fas fa-cart-plus"></i> Thêm vào giỏ hàng
                </button>
            </div>
        </div>
    `;
    
    productModal.style.display = 'block';
}

// Close product modal
function closeProductModal() {
    productModal.style.display = 'none';
}

// Select size
function selectSize(button) {
    document.querySelectorAll('.size-option').forEach(btn => btn.classList.remove('selected'));
    button.classList.add('selected');
}

// Scroll to products
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

// Setup smooth scrolling
function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// Setup contact form
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất có thể.');
        this.reset();
    });
}

// Checkout function
function checkout() {
    if (cart.length === 0) {
        showNotification('Giỏ hàng trống!');
        return;
    }

    // Show checkout form
    showCheckoutForm();
}

// Show checkout form
function showCheckoutForm() {
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'cart-modal';
    checkoutModal.innerHTML = `
        <div class="cart-content">
            <div class="cart-header">
                <h3>Thông Tin Đặt Hàng</h3>
                <button class="close-cart" onclick="closeCheckoutForm()">&times;</button>
            </div>
            <div class="cart-items">
                <form id="checkoutForm">
                    <div class="form-group">
                        <label>Họ và tên *</label>
                        <input type="text" id="customerName" required>
                    </div>
                    <div class="form-group">
                        <label>Email *</label>
                        <input type="email" id="customerEmail" required>
                    </div>
                    <div class="form-group">
                        <label>Số điện thoại *</label>
                        <input type="tel" id="customerPhone" required>
                    </div>
                    <div class="form-group">
                        <label>Địa chỉ giao hàng *</label>
                        <textarea id="customerAddress" rows="3" required></textarea>
                    </div>
                    <div class="order-summary">
                        <h4>Đơn hàng của bạn:</h4>
                        ${cart.map(item => `
                            <div class="order-item">
                                <span>${item.name} x ${item.quantity}</span>
                                <span>${formatPrice(item.price * item.quantity)}</span>
                            </div>
                        `).join('')}
                        <div class="order-total">
                            <strong>Tổng cộng: ${formatPrice(cart.reduce((sum, item) => sum + item.price * item.quantity, 0))}</strong>
                        </div>
                    </div>
                </form>
            </div>
            <div class="cart-footer">
                <button class="checkout-btn" onclick="submitOrder()">Đặt Hàng</button>
            </div>
        </div>
    `;

    document.body.appendChild(checkoutModal);
    checkoutModal.style.display = 'block';
}

// Close checkout form
function closeCheckoutForm() {
    const checkoutModal = document.querySelector('.cart-modal:last-child');
    if (checkoutModal) {
        checkoutModal.remove();
    }
}

// Submit order
function submitOrder() {
    const form = document.getElementById('checkoutForm');
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    const orderData = {
        customerName: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        phone: document.getElementById('customerPhone').value,
        address: document.getElementById('customerAddress').value,
        items: cart.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    };

    // Save order to localStorage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const newOrder = {
        id: Date.now(),
        customerName: orderData.customerName,
        email: orderData.email,
        phone: orderData.phone,
        address: orderData.address,
        items: orderData.items,
        total: orderData.total,
        status: 'pending',
        createdAt: new Date().toISOString()
    };

    orders.unshift(newOrder);
    localStorage.setItem('orders', JSON.stringify(orders));

    // Save customer info
    const customers = JSON.parse(localStorage.getItem('customers')) || [];
    const existingCustomer = customers.find(c => c.email === orderData.email);
    if (!existingCustomer) {
        const newCustomer = {
            id: Date.now(),
            name: orderData.customerName,
            email: orderData.email,
            phone: orderData.phone,
            totalOrders: 1,
            totalSpent: orderData.total,
            registeredAt: new Date().toISOString()
        };
        customers.push(newCustomer);
        localStorage.setItem('customers', JSON.stringify(customers));
    }

    // Trigger custom event for admin
    window.dispatchEvent(new CustomEvent('newOrder', {
        detail: newOrder
    }));

    // Also save to a flag for admin to check
    localStorage.setItem('hasNewOrder', 'true');
    localStorage.setItem('latestOrder', JSON.stringify(newOrder));

    // Clear cart
    cart = [];
    updateCartDisplay();

    // Close modals
    closeCheckoutForm();
    toggleCart();

    // Show success message
    showNotification('Đặt hàng thành công! Chúng tôi sẽ liên hệ với bạn sớm nhất.');
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #28a745;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        z-index: 3000;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === cartModal) {
        toggleCart();
    }
    if (e.target === productModal) {
        closeProductModal();
    }
});

// Add CSS animation for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from { transform: translateX(100%); }
        to { transform: translateX(0); }
    }
`;
document.head.appendChild(style);
