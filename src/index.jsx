const { useState, useEffect } = React;

// Shopping Cart Icon Component
function ShoppingCartIcon() {
    return (
        <svg className="shopping-cart-icon" fill="currentColor" viewBox="0 0 24 24">
            <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 3V4H15V3H9ZM7 6V19H17V6H7Z" />
            <path d="M9 8V17H11V8H9ZM13 8V17H15V8H13Z" />
        </svg>
    );
}

// Header Component
function Header() {
    return (
        <header className="header bg-gradient-hero">
            <div className="container">
                <div className="header-content">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                        <a href="#" className="logo">
                            <ShoppingCartIcon />
                            SellWell
                        </a>
                        <nav className="nav">
                            <a href="#dashboard-section">Dashboard</a>
                            <a href="#features-section">Features</a>
                            <a href="#testimonial-section">About</a>
                            <a href="#contact-section">Contact</a>
                            <a href="#integrations-section">Pricing</a>
                        </nav>
                    </div>
                    <button className="get-started-btn">Get Started</button>
                </div>
            </div>
        </header>
    );
}

// Hero Section Component
function HeroSection() {
    return (
        <section className="hero bg-gradient-hero">
            <div className="container">
                <div className="hero-grid">
                    <div className="hero-content fade-in">
                        <h1 className="hero-title">
                            Automate Your Online Selling - Built For A Faster Future
                        </h1>
                        <p className="hero-subtitle">
                            SellWell is your AI-powered assistant that replies to customers,
                            negotiates deals, and keeps your inventory in check — all in one sleek dashboard.
                        </p>
                        <div className="hero-buttons">
                            <button className="btn-primary">Try It Free</button>
                            <button className="btn-secondary">See How It Works</button>
                        </div>
                    </div>
                    <div className="computer-mockup fade-in">
                        <img
                            src="img/computer.jpeg"
                            alt="SellWell Dashboard"
                            loading="lazy"
                            decoding="async"
                            crossOrigin="anonymous"
                            width="500"
                            height="390"
                            className="rounded-lg"
                            style={{ color: 'transparent' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

// Trusted Section Component
function TrustedSection() {
    return (
        <section className="trusted bg-gradient-section">
            <div className="container">
                <div className="trusted-text">
                    <p>Trusted by e-commerce sellers across platforms.</p>
                    <p>From small businesses to established online stores.</p>
                </div>
                <div className="trusted-logos">
                    <img src="https://ext.same-assets.com/3362785840/1463097282.png" alt="eBay" />
                    <img src="https://ext.same-assets.com/3362785840/2754403652.png" alt="Amazon" />
                    <img src="https://ext.same-assets.com/3362785840/2905511436.png" alt="Etsy" />
                </div>
            </div>
        </section>
    );
}

// Features Section Component
function FeaturesSection() {
    const features = [
        {
            icon: '✉️',
            title: 'AI-Powered Email Assistant',
            description: 'Automatically respond to customer inquiries, answer questions about products, and handle routine communications without lifting a finger.'
        },
        {
            icon: '🤝',
            title: 'Smart Negotiation Engine',
            description: 'Let AI negotiate the best deals with buyers, automatically generating counteroffers based on your pricing strategy and inventory levels.'
        },
        {
            icon: '📦',
            title: 'Real-time Inventory Tracking',
            description: 'Monitor stock levels across all your selling platforms, receive alerts for low inventory, and automate reordering processes.'
        }
    ];

    return (
        <section id="features-section" className="features bg-gradient-section-alt">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Made for modern e-commerce sellers</h2>
                    <p className="section-subtitle">
                        SellWell is designed for the way online sellers work today.
                        Automate customer replies, negotiate offers, and track inventory all in one place.
                    </p>
                </div>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div key={index} className="feature-card fade-in">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Dashboard Section Component
function DashboardSection() {
    const dashboardItems = [
        {
            title: 'Email Assistant',
            description: 'Set up automated email responses and track customer communication progress.',
            buttonText: 'Manage',
            buttonClass: 'btn-blue'
        },
        {
            title: 'Inventory Monitor',
            description: 'View current stock status with color-coded alerts and manage inventory levels.',
            buttonText: 'View',
            buttonClass: 'btn-green'
        },
        {
            title: 'Negotiation Tracker',
            description: 'Review and approve AI-generated counteroffers for potential buyers.',
            buttonText: 'Track',
            buttonClass: 'btn-purple'
        }
    ];

    return (
        <section id="dashboard-section" className="dashboard-section bg-gradient-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Your Complete Selling Dashboard</h2>
                    <p className="section-subtitle">
                        Access all your selling tools in one intuitive interface.
                        Monitor performance, automate tasks, and grow your business.
                    </p>
                </div>
                <div className="dashboard-grid">
                    {dashboardItems.map((item, index) => (
                        <div key={index} className="dashboard-card fade-in">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-description">{item.description}</p>
                            <button className={`card-button ${item.buttonClass}`}>
                                {item.buttonText}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Testimonials Section Component
function TestimonialsSection() {
    const testimonials = [
        {
            text: '"I was drowning in customer emails. SellWell now handles most of them for me — it\'s like having a virtual team."',
            author: 'Tobias M.',
            title: 'eBay Seller',
            avatar: 'https://ext.same-assets.com/3362785840/11883918.jpeg'
        },
        {
            text: '"The inventory refill alert saved me from stockouts more than once. Super handy!"',
            author: 'Arlene J.',
            title: 'Amazon Seller',
            avatar: 'https://ext.same-assets.com/3362785840/2466996117.jpeg'
        }
    ];

    return (
        <section id="testimonial-section" className="testimonials bg-gradient-section-alt">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">What Our Users Say</h2>
                    <p className="section-subtitle">
                        Hear from e-commerce sellers who have transformed their business with SellWell.
                    </p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card fade-in">
                            <p className="testimonial-text">{testimonial.text}</p>
                            <div className="testimonial-author">
                                <img
                                    src={testimonial.avatar}
                                    alt={testimonial.author}
                                    className="author-avatar"
                                    style={{ borderRadius: '50%', width: '3rem', height: '3rem', objectFit: 'cover' }}
                                />
                                <div>
                                    <p className="author-name">{testimonial.author}</p>
                                    <p className="author-title">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="use-case">
                    <p><strong>Example Use Case:</strong> Samantha, an eBay seller, used SellWell to automate 80% of her buyer messages, saving 15+ hours per week.</p>
                </div>
            </div>
        </section>
    );
}

// Integrations Section Component
function IntegrationsSection() {
    return (
        <section id="integrations-section" className="integrations bg-gradient-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Works with your favorite platforms</h2>
                    <p className="section-subtitle">
                        SellWell integrates with all the tools you already use.
                        From eBay to Amazon, Gmail to Google Sheets.
                    </p>
                </div>
                <div className="integrations-image">
                    <img
                        src="https://ext.same-assets.com/3362785840/354239535.jpeg"
                        alt="Team working with integrations"
                        style={{ borderRadius: '8px', maxWidth: '100%', height: 'auto' }}
                    />
                </div>
            </div>
        </section>
    );
}

// Contact Section Component
function ContactSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for your interest! We\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact-section" className="contact bg-gradient-section-alt">
            <div className="contact-container">
                <div className="section-header">
                    <h2 className="section-title">Get Started Today</h2>
                    <p className="section-subtitle">
                        Ready to automate your e-commerce business? Contact us to learn more about SellWell.
                    </p>
                </div>
                <div className="contact-form">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="your@email.com"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-input form-textarea"
                                placeholder="Tell us about your e-commerce business and how we can help..."
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn">
                            Accelerate Your Business
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

// Footer Component
function Footer() {
    const footerLinks = {
        Product: ['Features', 'Integrations', 'Pricing', 'Changelog', 'Docs'],
        Company: ['About us', 'Blog', 'Careers', 'Customers', 'Brand'],
        Resources: ['Community', 'Contact', 'DPA', 'Terms of service'],
        Integrations: ['eBay', 'Amazon', 'Etsy', 'Gmail', 'Google Sheets']
    };

    return (
        <footer className="footer bg-gradient-footer">
            <div className="container">
                <div className="footer-grid">
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="footer-column">
                            <h3>{category}</h3>
                            <ul>
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a href="#">{link}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="footer-bottom">
                    <div className="footer-logo">
                        <ShoppingCartIcon />
                        SellWell
                    </div>
                    <p className="footer-copyright">© 2024 SellWell. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

// Main App Component
function App() {
    useEffect(() => {
        // Smooth scrolling for navigation links
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(link.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    }, []);

    return (
        <div>
            <Header />
            <HeroSection />
            <TrustedSection />
            <FeaturesSection />
            <DashboardSection />
            <TestimonialsSection />
            <IntegrationsSection />
            <ContactSection />
            <Footer />
        </div>
    );
}

// Render the App
const container = document.getElementById('root');
if (ReactDOM.createRoot) {
    const root = ReactDOM.createRoot(container);
    root.render(<App />);
} else {
    ReactDOM.render(<App />, container);
}