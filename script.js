/* RESET & BASE STYLES - MOBILE FIRST */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    --primary-color: #2e7d32;
    --primary-dark: #1b5e20;
    --primary-light: #4caf50;
    --secondary-color: #ff9800;
    --accent-color: #8bc34a;
    --text-color: #333;
    --text-light: #666;
    --text-white: #fff;
    --bg-light: #f9f9f9;
    --bg-white: #fff;
    --border-color: #e0e0e0;
    --shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-hover: 0 4px 12px rgba(0, 0, 0, 0.12);
    --radius: 6px;
    --transition: all 0.3s ease;
}

html {
    font-size: 14px; /* Base font size untuk mobile */
    scroll-behavior: smooth;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
    line-height: 1.5;
    overflow-x: hidden;
    -webkit-text-size-adjust: 100%; /* Mencegah zoom di iOS */
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    line-height: 1.3;
    margin-bottom: 0.75rem;
}

a {
    text-decoration: none;
    color: inherit;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
}

section {
    padding: 60px 0;
}

.section-title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 0.75rem;
    color: var(--primary-dark);
}

.section-subtitle {
    text-align: center;
    font-size: 1rem;
    color: var(--text-light);
    margin-bottom: 2rem;
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0 10px;
}

/* BUTTONS */
.btn-primary, .btn-secondary, .btn-small, .btn-product, .btn-submit, .btn-whatsapp {
    display: inline-block;
    padding: 12px 24px;
    border-radius: var(--radius);
    font-weight: 600;
    font-size: 0.95rem;
    transition: var(--transition);
    cursor: pointer;
    text-align: center;
    border: none;
    font-family: 'Poppins', sans-serif;
    white-space: nowrap;
}

.btn-primary {
    background-color: var(--primary-color);
    color: var(--text-white);
}

.btn-primary:hover, .btn-primary:active {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background-color: transparent;
    color: var(--primary-color);
    border: 2px solid var(--primary-color);
}

.btn-secondary:hover, .btn-secondary:active {
    background-color: rgba(46, 125, 50, 0.05);
    transform: translateY(-2px);
}

.btn-small {
    padding: 8px 16px;
    background-color: var(--secondary-color);
    color: var(--text-white);
    font-size: 0.85rem;
}

.btn-small:hover, .btn-small:active {
    background-color: #f57c00;
    transform: translateY(-2px);
}

.btn-product {
    background-color: var(--primary-color);
    color: var(--text-white);
    width: 100%;
    margin-top: 1rem;
    padding: 10px 16px;
    font-size: 0.9rem;
}

.btn-product:hover, .btn-product:active {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
}

.btn-submit {
    background-color: #25D366;
    color: var(--text-white);
    width: 100%;
    font-size: 1rem;
    padding: 14px;
}

.btn-submit:hover, .btn-submit:active {
    background-color: #128C7E;
    transform: translateY(-2px);
}

.btn-whatsapp {
    background-color: #25D366;
    color: var(--text-white);
    font-size: 1rem;
    padding: 14px 24px;
    margin-top: 1.5rem;
    width: 100%;
    max-width: 300px;
}

.btn-whatsapp:hover, .btn-whatsapp:active {
    background-color: #128C7E;
    transform: translateY(-2px);
    box-shadow: var(--shadow-hover);
}

/* NAVBAR - MOBILE FIRST */
.navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: var(--bg-white);
    box-shadow: var(--shadow);
    z-index: 1000;
    padding: 12px 0;
}

.nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--primary-dark);
    max-width: 70%;
}

.logo i {
    margin-right: 8px;
    font-size: 1.4rem;
    color: var(--primary-color);
    flex-shrink: 0;
}

.logo span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.nav-menu {
    position: fixed;
    top: 60px;
    left: -100%;
    width: 100%;
    height: calc(100vh - 60px);
    flex-direction: column;
    background-color: var(--bg-white);
    padding: 20px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    z-index: 999;
    list-style: none;
    overflow-y: auto;
}

.nav-menu.active {
    left: 0;
}

.nav-menu li {
    margin: 0;
    border-bottom: 1px solid var(--border-color);
}

.nav-menu li:last-child {
    border-bottom: none;
}

.nav-menu a {
    display: block;
    padding: 14px 0;
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    font-size: 1rem;
}

.nav-menu a:hover, .nav-menu a:active {
    color: var(--primary-color);
}

.hamburger {
    display: block;
    background: none;
    border: none;
    font-size: 1.4rem;
    color: var(--primary-color);
    cursor: pointer;
    padding: 5px;
    z-index: 1001;
}

.nav-cta {
    display: none;
}

/* HERO SECTION */
.hero {
    background: linear-gradient(135deg, #e8f5e9 0%, #c8e6c9 100%);
    padding-top: 80px;
    padding-bottom: 60px;
}

.hero-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
}

.hero-content {
    width: 100%;
    text-align: center;
}

.hero-title {
    font-size: 1.8rem;
    color: var(--primary-dark);
    margin-bottom: 1rem;
    line-height: 1.2;
}

.hero-subtitle {
    font-size: 1rem;
    color: var(--text-light);
    margin-bottom: 1.5rem;
    max-width: 100%;
}

.hero-buttons {
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 2rem;
    width: 100%;
    align-items: center;
}

.hero-buttons .btn-primary,
.hero-buttons .btn-secondary {
    width: 100%;
    max-width: 280px;
}

.hero-stats {
    display: flex;
    justify-content: space-around;
    gap: 15px;
    flex-wrap: wrap;
}

.stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 100px;
}

.stat-number {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--primary-color);
    line-height: 1;
}

.stat-label {
    font-size: 0.8rem;
    color: var(--text-light);
    margin-top: 4px;
    text-align: center;
}

.hero-image {
    width: 100%;
    display: flex;
    justify-content: center;
}

.image-placeholder {
    width: 100%;
    max-width: 400px;
    height: 250px;
    background-color: var(--primary-light);
    border-radius: var(--radius);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--text-white);
    box-shadow: var(--shadow);
    padding: 20px;
}

.image-placeholder i {
    font-size: 5rem;
    margin-bottom: 15px;
}

.image-placeholder p {
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
}

/* PROBLEM & SOLUTION */
.problem-solution {
    background-color: var(--bg-light);
}

.ps-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 2rem;
}

.problem h3, .solution h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    text-align: center;
}

.problem h3 {
    color: #d32f2f;
}

.solution h3 {
    color: var(--primary-color);
}

.ps-card {
    display: flex;
    flex-direction: column;
    background-color: var(--bg-white);
    border-radius: var(--radius);
    padding: 20px;
    margin-bottom: 15px;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.ps-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.problem .ps-card {
    border-top: 4px solid #d32f2f;
}

.solution .ps-card {
    border-top: 4px solid var(--primary-color);
}

.ps-icon {
    font-size: 1.8rem;
    margin-bottom: 12px;
    flex-shrink: 0;
}

.problem .ps-icon {
    color: #d32f2f;
}

.solution .ps-icon {
    color: var(--primary-color);
}

.ps-content h4 {
    font-size: 1.1rem;
    margin-bottom: 8px;
}

.ps-content p {
    font-size: 0.9rem;
}

/* PRODUCTS */
.product-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
}

.product-card {
    background-color: var(--bg-white);
    border-radius: var(--radius);
    overflow: hidden;
    box-shadow: var(--shadow);
    transition: var(--transition);
    position: relative;
    width: 100%;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.product-card.popular {
    border: 2px solid var(--secondary-color);
}

.badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background-color: var(--secondary-color);
    color: var(--text-white);
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.75rem;
    font-weight: 600;
    z-index: 1;
}

.product-image {
    height: 160px;
    background-color: #e8f5e9;
    display: flex;
    align-items: center;
    justify-content: center;
}

.product-image i {
    font-size: 4rem;
    color: var(--primary-color);
}

.product-content {
    padding: 20px;
}

.product-content h3 {
    font-size: 1.3rem;
    margin-bottom: 12px;
    color: var(--primary-dark);
}

.product-description {
    color: var(--text-light);
    margin-bottom: 15px;
    font-size: 0.9rem;
}

.product-features {
    margin-bottom: 15px;
}

.feature {
    display: flex;
    align-items: center;
    margin-bottom: 6px;
    font-size: 0.9rem;
}

.feature i {
    color: var(--primary-color);
    margin-right: 8px;
    font-size: 0.85rem;
    flex-shrink: 0;
}

.product-price {
    display: flex;
    align-items: baseline;
    margin-top: 1rem;
}

.price {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
}

.unit {
    font-size: 0.9rem;
    color: var(--text-light);
    margin-left: 4px;
}

/* BENEFITS */
.benefit-cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    margin-top: 2rem;
}

.benefit-card {
    background-color: var(--bg-white);
    border-radius: var(--radius);
    padding: 20px;
    text-align: center;
    box-shadow: var(--shadow);
    transition: var(--transition);
}

.benefit-card:hover {
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.benefit-icon {
    font-size: 2.2rem;
    color: var(--primary-color);
    margin-bottom: 15px;
}

.benefit-card h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
}

.benefit-card p {
    font-size: 0.9rem;
}

/* TESTIMONIALS */
.testimonials {
    background-color: var(--bg-light);
}

.testimonial-cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 2rem;
}

.testimonial-card {
    background-color: var(--bg-white);
    border-radius: var(--radius);
    padding: 20px;
    box-shadow: var(--shadow);
}

.testimonial-header {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
}

.testimonial-image {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #e8f5e9;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    flex-shrink: 0;
}

.testimonial-image i {
    font-size: 1.5rem;
    color: var(--primary-color);
}

.testimonial-info h4 {
    font-size: 1.1rem;
    margin-bottom: 4px;
}

.testimonial-info p {
    font-size: 0.85rem;
    color: var(--text-light);
}

.testimonial-content p {
    font-style: italic;
    color: var(--text-color);
    margin-bottom: 12px;
    font-size: 0.95rem;
}

.testimonial-rating {
    color: #ffc107;
    font-size: 0.9rem;
}

/* ORDER FORM */
.form-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 2rem;
    background-color: var(--bg-white);
    padding: 20px;
    border-radius: var(--radius);
    box-shadow: var(--shadow);
}

.form-row {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-group {
    margin-bottom: 18px;
    width: 100%;
}

.form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: 500;
    font-size: 0.95rem;
}

.required {
    color: #d32f2f;
}

.form-group input, .form-group select, .form-group textarea {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid var(--border-color);
    border-radius: var(--radius);
    font-family: 'Roboto', sans-serif;
    font-size: 0.95rem;
    transition: var(--transition);
    -webkit-appearance: none;
    appearance: none;
}

.form-group input:focus, .form-group select:focus, .form-group textarea:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(46, 125, 50, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 80px;
}

.error-message {
    color: #d32f2f;
    font-size: 0.8rem;
    margin-top: 4px;
    min-height: 18px;
}

.form-submit {
    margin-top: 1.5rem;
}

.form-note {
    font-size: 0.8rem;
    color: var(--text-light);
    margin-top: 12px;
    text-align: center;
    line-height: 1.4;
}

.form-info h3 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: var(--primary-dark);
}

.form-info ul {
    list-style: none;
    margin-bottom: 30px;
}

.form-info li {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    font-size: 0.9rem;
}

.form-info li i {
    color: var(--primary-color);
    margin-right: 8px;
    margin-top: 2px;
    flex-shrink: 0;
    font-size: 0.9rem;
}

.contact-info {
    background-color: #f5f5f5;
    padding: 20px;
    border-radius: var(--radius);
}

.contact-info h4 {
    margin-bottom: 12px;
    font-size: 1.1rem;
}

.contact-info p {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    font-size: 0.9rem;
}

.contact-info i {
    margin-right: 8px;
    color: var(--primary-color);
    width: 18px;
    flex-shrink: 0;
}

.contact-info a {
    color: var(--primary-color);
    transition: var(--transition);
    word-break: break-all;
}

.contact-info a:hover, .contact-info a:active {
    color: var(--primary-dark);
}

/* FINAL CTA */
.final-cta {
    background: linear-gradient(135deg, var(--primary-color) 0%, var(--primary-dark) 100%);
    color: var(--text-white);
    text-align: center;
    padding: 50px 0;
}

.cta-content h2 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
    line-height: 1.3;
}

.cta-content p {
    font-size: 1rem;
    max-width: 100%;
    margin: 0 auto 1.5rem;
    opacity: 0.9;
    padding: 0 10px;
}

.cta-note {
    font-size: 0.8rem;
    margin-top: 12px;
    opacity: 0.8;
}

/* FOOTER */
.footer {
    background-color: #2c3e50;
    color: #ecf0f1;
    padding-top: 40px;
    padding-bottom: 20px;
}

.footer-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 30px;
}

.footer-logo {
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 15px;
}

.footer-logo i {
    margin-right: 8px;
    font-size: 1.5rem;
    color: var(--accent-color);
}

.footer-description {
    margin-bottom: 20px;
    opacity: 0.8;
    font-size: 0.9rem;
}

.social-icons {
    display: flex;
    gap: 12px;
}

.social-icons a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    transition: var(--transition);
    font-size: 0.9rem;
}

.social-icons a:hover, .social-icons a:active {
    background-color: var(--primary-color);
    transform: translateY(-2px);
}

.footer-section h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: var(--text-white);
}

.footer-links {
    list-style: none;
}

.footer-links li {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    font-size: 0.9rem;
}

.footer-links i {
    margin-right: 8px;
    color: var(--accent-color);
    width: 18px;
    flex-shrink: 0;
    font-size: 0.9rem;
}

.footer-links a {
    opacity: 0.8;
    transition: var(--transition);
}

.footer-links a:hover, .footer-links a:active {
    opacity: 1;
    color: var(--accent-color);
}

.footer-bottom {
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 20px;
    text-align: center;
    opacity: 0.7;
    font-size: 0.8rem;
}

.footer-bottom p {
    margin-bottom: 8px;
}

.footer-bottom i {
    color: #e74c3c;
    margin: 0 3px;
}

/* WHATSAPP FLOAT BUTTON */
.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 50px;
    height: 50px;
    background-color: #25D366;
    color: var(--text-white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    box-shadow: var(--shadow);
    z-index: 999;
    transition: var(--transition);
    -webkit-tap-highlight-color: transparent;
}

.whatsapp-float:hover, .whatsapp-float:active {
    background-color: #128C7E;
    transform: scale(1.1);
}

/* SCROLL TO TOP BUTTON */
.scroll-top {
    position: fixed;
    bottom: 80px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: var(--primary-color);
    color: var(--text-white);
    border: none;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    box-shadow: var(--shadow);
    z-index: 998;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    -webkit-tap-highlight-color: transparent;
}

.scroll-top.show {
    opacity: 1;
    visibility: visible;
}

.scroll-top:hover, .scroll-top:active {
    background-color: var(--primary-dark);
    transform: translateY(-2px);
}

/* ANIMATIONS */
.product-card, .benefit-card, .testimonial-card {
    opacity: 0;
    transform: translateY(15px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.product-card.animate-in, .benefit-card.animate-in, .testimonial-card.animate-in {
    opacity: 1;
    transform: translateY(0);
}

/* TOUCH DEVICE OPTIMIZATIONS */
@media (hover: none) and (pointer: coarse) {
    .btn-primary:hover, .btn-secondary:hover, .btn-product:hover, 
    .btn-submit:hover, .btn-whatsapp:hover, .btn-small:hover,
    .whatsapp-float:hover, .scroll-top:hover,
    .product-card:hover, .benefit-card:hover, .testimonial-card:hover,
    .ps-card:hover {
        transform: none;
    }
    
    .btn-primary:active, .btn-secondary:active, .btn-product:active, 
    .btn-submit:active, .btn-whatsapp:active, .btn-small:active,
    .whatsapp-float:active, .scroll-top:active {
        transform: scale(0.98);
    }
}

/* RESPONSIVE BREAKPOINTS */

/* Small phones (portrait) */
@media (max-width: 360px) {
    html {
        font-size: 13px;
    }
    
    .container {
        padding: 0 12px;
    }
    
    .hero-title {
        font-size: 1.6rem;
    }
    
    .section-title {
        font-size: 1.6rem;
    }
    
    .logo span {
        font-size: 1rem;
    }
    
    .btn-whatsapp {
        padding: 12px 20px;
        font-size: 0.9rem;
    }
}

/* Medium phones and small tablets */
@media (min-width: 480px) {
    html {
        font-size: 15px;
    }
    
    .container {
        padding: 0 20px;
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .section-title {
        font-size: 2rem;
    }
    
    .benefit-cards {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .hero-buttons {
        flex-direction: row;
        justify-content: center;
        flex-wrap: wrap;
    }
    
    .hero-buttons .btn-primary,
    .hero-buttons .btn-secondary {
        width: auto;
        min-width: 200px;
    }
    
    .btn-whatsapp {
        width: auto;
        padding: 14px 28px;
    }
}

/* Tablets and small laptops */
@media (min-width: 768px) {
    html {
        font-size: 16px;
    }
    
    .section-title {
        font-size: 2.2rem;
    }
    
    .hero-title {
        font-size: 2.5rem;
    }
    
    .nav-menu {
        position: static;
        width: auto;
        height: auto;
        flex-direction: row;
        background-color: transparent;
        padding: 0;
        box-shadow: none;
        display: flex;
    }
    
    .nav-menu li {
        margin-left: 20px;
        border-bottom: none;
    }
    
    .nav-menu a {
        padding: 0;
    }
    
    .nav-menu a::after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0;
        height: 2px;
        background-color: var(--primary-color);
        transition: var(--transition);
    }
    
    .nav-menu a:hover::after {
        width: 100%;
    }
    
    .hamburger {
        display: none;
    }
    
    .nav-cta {
        display: block;
    }
    
    .hero-container {
        flex-direction: row;
        text-align: left;
        gap: 40px;
    }
    
    .hero-content {
        width: 55%;
        text-align: left;
    }
    
    .hero-image {
        width: 45%;
    }
    
    .hero-buttons {
        justify-content: flex-start;
    }
    
    .ps-container {
        flex-direction: row;
        gap: 30px;
    }
    
    .problem, .solution {
        width: 50%;
    }
    
    .ps-card {
        flex-direction: row;
    }
    
    .ps-icon {
        margin-right: 15px;
        margin-bottom: 0;
    }
    
    .product-cards {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .product-card {
        width: calc(50% - 10px);
    }
    
    .benefit-cards {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .testimonial-cards {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .testimonial-card {
        width: calc(50% - 10px);
    }
    
    .form-container {
        flex-direction: row;
    }
    
    .form-container form,
    .form-container .form-info {
        width: 50%;
    }
    
    .form-row {
        flex-direction: row;
    }
    
    .footer-content {
        flex-direction: row;
        flex-wrap: wrap;
    }
    
    .footer-section {
        width: calc(50% - 20px);
    }
}

/* Laptops and desktops */
@media (min-width: 992px) {
    .product-cards {
        flex-direction: row;
    }
    
    .product-card {
        width: calc(33.333% - 15px);
    }
    
    .benefit-cards {
        grid-template-columns: repeat(3, 1fr);
    }
    
    .testimonial-cards {
        flex-direction: row;
    }
    
    .testimonial-card {
        width: calc(33.333% - 15px);
    }
    
    .footer-section {
        width: calc(25% - 20px);
    }
    
    .hero-title {
        font-size: 2.8rem;
    }
    
    .section-title {
        font-size: 2.5rem;
    }
}

/* Large desktops */
@media (min-width: 1200px) {
    .container {
        padding: 0;
    }
}
