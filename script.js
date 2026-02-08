// DOM Elements
const navMenu = document.getElementById('navMenu');
const hamburger = document.getElementById('hamburger');
const scrollTopBtn = document.getElementById('scrollTop');
const orderForm = document.getElementById('orderForm');
const productButtons = document.querySelectorAll('.btn-product');

// Mobile Menu Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.innerHTML = navMenu.classList.contains('active') 
        ? '<i class="fas fa-times"></i>' 
        : '<i class="fas fa-bars"></i>';
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
        hamburger.innerHTML = '<i class="fas fa-bars"></i>';
    }
});

// Scroll to Top Button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
        
        // Close mobile menu after clicking a link
        if (window.innerWidth < 768) {
            navMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
});

// Set product from button click to form
productButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        const productName = this.getAttribute('data-product');
        const productSelect = document.getElementById('product');
        
        // Find the option with the matching product name
        for (let i = 0; i < productSelect.options.length; i++) {
            if (productSelect.options[i].text.includes(productName)) {
                productSelect.selectedIndex = i;
                break;
            }
        }
        
        // Scroll to the order form
        document.querySelector('#pesan').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Focus on the quantity field
        document.getElementById('quantity').focus();
    });
});

// Form Validation and Submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const product = document.getElementById('product').value;
    const quantity = document.getElementById('quantity').value.trim();
    const address = document.getElementById('address').value.trim();
    const notes = document.getElementById('notes').value.trim();
    
    // Clear previous error messages
    clearErrors();
    
    // Validate form fields
    let isValid = true;
    
    if (!name) {
        showError('nameError', 'Nama lengkap wajib diisi');
        isValid = false;
    }
    
    if (!phone) {
        showError('phoneError', 'Nomor WhatsApp wajib diisi');
        isValid = false;
    } else if (!isValidPhone(phone)) {
        showError('phoneError', 'Format nomor WhatsApp tidak valid');
        isValid = false;
    }
    
    if (!product) {
        showError('productError', 'Pilih produk yang diinginkan');
        isValid = false;
    }
    
    if (!quantity) {
        showError('quantityError', 'Jumlah pesanan wajib diisi');
        isValid = false;
    } else if (parseInt(quantity) < 100) {
        showError('quantityError', 'Minimal pesanan 100 lembar');
        isValid = false;
    }
    
    if (!address) {
        showError('addressError', 'Alamat pengiriman wajib diisi');
        isValid = false;
    }
    
    // If form is valid, redirect to WhatsApp
    if (isValid) {
        sendToWhatsApp(name, phone, product, quantity, address, notes);
    }
});

// Helper function to show error messages
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    
    // Add error class to the input
    const inputId = elementId.replace('Error', '');
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
        inputElement.style.borderColor = '#d32f2f';
    }
}

// Helper function to clear all error messages
function clearErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(element => {
        element.textContent = '';
    });
    
    // Reset input borders
    const formInputs = document.querySelectorAll('#orderForm input, #orderForm select, #orderForm textarea');
    formInputs.forEach(input => {
        input.style.borderColor = '#e0e0e0';
    });
}

// Helper function to validate phone number
function isValidPhone(phone) {
    // Simple validation for Indonesian phone numbers
    const phoneRegex = /^(\+62|62|0)8[1-9][0-9]{6,9}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
}

// Function to send form data to WhatsApp
function sendToWhatsApp(name, phone, product, quantity, address, notes) {
    // Format phone number (remove leading 0, replace with 62)
    let formattedPhone = phone.replace(/^0/, '62');
    formattedPhone = formattedPhone.replace(/\D/g, '');
    
    // WhatsApp number to send to
    const whatsappNumber = '628564829590'; // Ganti dengan nomor WhatsApp yang benar
    
    // Create the message
    const message = `Halo, saya ${name}.\n\nSaya ingin memesan daun pisang dengan detail berikut:\n\n📦 *Produk:* ${product}\n🔢 *Jumlah:* ${quantity} lembar\n🏠 *Alamat Pengiriman:* ${address}\n📝 *Catatan Tambahan:* ${notes || 'Tidak ada'}\n\nMohon informasi lebih lanjut mengenai harga total dan estimasi pengiriman. Terima kasih!`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form after submission
    orderForm.reset();
    
    // Show success message
    alert('Terima kasih! Pesanan Anda sedang diproses. Anda akan diarahkan ke WhatsApp untuk konfirmasi lebih lanjut.');
}

// Add animation to elements when they come into view
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.product-card, .benefit-card, .testimonial-card').forEach(element => {
    observer.observe(element);
});

// Handle orientation change
window.addEventListener('orientationchange', function() {
    // Force a repaint to fix layout issues
    setTimeout(function() {
        window.scrollTo(0, 0);
    }, 100);
});

// Prevent zoom on double-tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);

// Make form inputs more mobile-friendly
document.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('focus', function() {
        // Scroll the input into view on mobile
        if (window.innerWidth < 768) {
            setTimeout(() => {
                this.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 300);
        }
    });
});
