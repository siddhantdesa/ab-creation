import { useState, useEffect } from "react";
import "./App.css";
import logo from "./assets/ab-logo.png";
import tshirtsImg from "./assets/product-tshirts.jpg";
import mugsImg from "./assets/product-mugs.jpg";
import keychainsImg from "./assets/product-keychains.jpg";
import trophiesImg from "./assets/product-trophies.jpg";
import giftsImg from "./assets/product-gifts.jpg";
import corporateImg from "./assets/product-corporate.jpg";
import work1Img from "./assets/work-1.jpg";
import work2Img from "./assets/work-2.jpg";
import work3Img from "./assets/work-3.jpg";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeDeckIndex, setActiveDeckIndex] = useState(0);

  // Contact form state
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Custom T-Shirts",
    requirements: "",
  });

  // Quick subscribe state
  const [subscribeEmail, setSubscribeEmail] = useState("");

  const collectionsData = [
    {
      id: "001",
      title: "CUSTOM APPAREL & T-SHIRTS",
      image: tshirtsImg,
      subtitle: "Screen & DTF 240 GSM Cotton",
      scores: { materials: "9.8/10", durability: "9.9/10", print: "10/10", overall: "9.9/10" },
      desc: "Waterproof, breathable, custom tailored with high-density print.",
    },
    {
      id: "002",
      title: "PREMIUM LED & NEON SIGNAGE",
      image: work1Img,
      subtitle: "3D Acrylic & Architectural LED",
      scores: { materials: "9.9/10", durability: "9.8/10", print: "9.9/10", overall: "9.9/10" },
      desc: "High-lumen weatherproof commercial acrylic signage.",
    },
    {
      id: "003",
      title: "MAGIC & MATTE MUG COLLECTION",
      image: mugsImg,
      subtitle: "Heat-Reactive Ceramic Mugs",
      scores: { materials: "9.7/10", durability: "9.9/10", print: "9.8/10", overall: "9.8/10" },
      desc: "Color-changing and matte black luxury coffee mugs.",
    },
    {
      id: "004",
      title: "3D ACRYLIC & WOOD KEYCHAINS",
      image: keychainsImg,
      subtitle: "Laser-Cut Pocket Hardware",
      scores: { materials: "9.9/10", durability: "9.8/10", print: "9.9/10", overall: "9.9/10" },
      desc: "Precision vehicle plate & name keyrings.",
    },
    {
      id: "005",
      title: "PREMIUM CRYSTAL TROPHY AWARDS",
      image: trophiesImg,
      subtitle: "Faceted Glass & Laser Engraved",
      scores: { materials: "10/10", durability: "9.9/10", print: "9.9/10", overall: "9.9/10" },
      desc: "Architectural achievement awards and recognition plaques.",
    },
    {
      id: "006",
      title: "UV BASE CORPORATE DESK SETS",
      image: corporateImg,
      subtitle: "Executive Acrylic & Wood Identity",
      scores: { materials: "9.9/10", durability: "9.9/10", print: "10/10", overall: "9.9/10" },
      desc: "Executive desk organizers, nameplates, and diaries.",
    },
  ];

  // Handle keyboard ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSelectedImage(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const nextDeck = () => {
    setActiveDeckIndex((prev) => (prev + 1) % collectionsData.length);
  };

  const prevDeck = () => {
    setActiveDeckIndex((prev) => (prev - 1 + collectionsData.length) % collectionsData.length);
  };

  const closeMenu = () => setIsMenuOpen(false);

  const handleWhatsAppSubmit = (e) => {
    e.preventDefault();
    const message = `Hi AB Creations,

I would like to make an enquiry:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Category: ${formData.service}
• Requirements: ${formData.requirements}

Thank you!`;
    window.open(`https://wa.me/919302578810?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();
    const message = `Hi AB Creations, please keep me updated on new product drops & corporate collections. (Email/Contact: ${subscribeEmail})`;
    window.open(`https://wa.me/919302578810?text=${encodeURIComponent(message)}`, "_blank");
  };

  const activeItem = collectionsData[activeDeckIndex];

  return (
    <div className="terrain-app">

      {/* ================= MODULAR TOP NAVBAR ================= */}
      <header className="terrain-header">
        <div className="nav-brand-cell">
          <a href="#home" className="terrain-logo-link" onClick={closeMenu}>
            <span className="brand-terrain-text">AB CREATIONS<sup>®</sup></span>
          </a>
        </div>

        <nav className="nav-links-cell desktop-only">
          <a href="#home">+ SHOP</a>
          <a href="#collections">+ COLLECTIONS</a>
          <a href="#mission">+ MISSION</a>
          <a href="#motion">+ JOURNAL</a>
          <a href="#about">+ ABOUT</a>
        </nav>

        <div className="nav-right-cell">
          <a href="#contact" className="nav-search-link desktop-only">
            SEARCH <span className="bracket-icon">[ ]</span>
          </a>
          
          <a
            href="https://wa.me/919302578810"
            target="_blank"
            rel="noreferrer"
            className="nav-cart-btn"
          >
            QUOTE <span className="cart-badge">[ 01 ]</span>
          </a>

          <button
            className={`terrain-hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`terrain-mobile-drawer ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-drawer-inner">
          <a href="#home" onClick={closeMenu}>+ SHOP / HERO</a>
          <a href="#collections" onClick={closeMenu}>+ COLLECTIONS</a>
          <a href="#mission" onClick={closeMenu}>+ MISSION</a>
          <a href="#motion" onClick={closeMenu}>+ JOURNAL / MOTION</a>
          <a href="#about" onClick={closeMenu}>+ ABOUT US</a>
          <a href="#contact" onClick={closeMenu}>+ CONTACT & QUOTE</a>

          <div className="mobile-drawer-bottom">
            <p className="mobile-phone-txt">📞 +91 9302578810</p>
            <a
              href="https://wa.me/919302578810"
              target="_blank"
              rel="noreferrer"
              className="terrain-pill-btn solid-orange-btn full-width"
              onClick={closeMenu}
            >
              CHAT ON WHATSAPP →
            </a>
          </div>
        </div>
      </div>


      {/* ================= 3-COLUMN HERO SECTION ================= */}
      <section className="terrain-hero-grid" id="home">
        
        {/* Left Column: Headline & Metadata */}
        <div className="hero-col-left">
          <div className="vertical-edge-label">
            <span>AB CREATIONS // GWALIOR</span>
          </div>

          <div className="hero-left-content">
            <h1 className="terrain-headline">
              BUILT<br />
              FOR NOW.<br />
              <span className="accent-orange-text">DESIGNED™<br />FOR NEXT.</span>
            </h1>

            <div className="hero-tech-description">
              <div className="crosshair-icon-wrap">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor">
                  <circle cx="12" cy="12" r="9" strokeWidth="1.2" />
                  <path d="M12 3v18M3 12h18" strokeWidth="1.2" />
                </svg>
              </div>
              <p>
                Technical printing, precision signage, and customized apparel for a changing world. 
                Sustainable. Functional. Uncompromising.
              </p>
            </div>

            <div className="hero-btn-row">
              <a href="#collections" className="terrain-outline-box-btn">
                <span>EXPLORE COLLECTION</span>
                <span className="arrow-icon">→</span>
              </a>
            </div>

            <div className="hero-scroll-indicator">
              <a href="#mission">SCROLL TO DISCOVER <span className="down-arrow">↓</span></a>
            </div>
          </div>
        </div>

        {/* Center Column: AB Creations Logo Brand Panel */}
        <div className="hero-col-center">
          <div className="center-visual-frame center-logo-frame">
            <div className="hero-logo-display">
              <div className="hero-logo-card">
                <img src={logo} alt="AB Creations Logo" className="center-hero-logo" />
              </div>
              <div className="hero-logo-brand-text">
                <span className="hero-logo-name">AB CREATIONS<sup>®</sup></span>
                <span className="hero-logo-tagline">GWALIOR WORKSHOP · SINCE 2020</span>
              </div>
            </div>

            <div className="hud-overlay-top">
              <span className="hud-cross">+</span>
              <span className="hud-tag">WORKSHOP 001</span>
            </div>

            <div className="hud-overlay-bottom">
              <span className="hud-coords">26.2183° N // 78.1828° E</span>
              <span className="hud-cross">+</span>
            </div>
          </div>
        </div>

      </section>


      {/* ================= BLACK MISSION & METRICS BAR ================= */}
      <section className="terrain-mission-bar" id="mission">
        
        {/* Col 1: Mission */}
        <div className="mission-cell">
          <p className="cell-label">OUR MISSION</p>
          <p className="mission-text">
            To reduce impact.<br />
            To rethink production.<br />
            To inspire distinction.
          </p>
          <a href="#contact" className="cell-link">LEARN MORE →</a>
        </div>

        {/* Col 2: In-House Stamp */}
        <div className="metric-cell stamp-cell">
          <div className="circular-stamp">
            <svg viewBox="0 0 100 100" width="60" height="60">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text fontSize="9.5" fill="#888888" letterSpacing="2">
                <textPath href="#circlePath">100% IN-HOUSE CRAFT · GWALIOR ·</textPath>
              </text>
            </svg>
            <span className="stamp-center-icon">🌿</span>
          </div>
        </div>

        {/* Col 3: Projects Delivered */}
        <div className="metric-cell">
          <p className="cell-label">PROJECTS DELIVERED</p>
          <h3 className="metric-value">12.4K</h3>
          <p className="metric-sub">CUSTOM ORDERS SHIPPED</p>
        </div>

        {/* Col 4: Precision Accuracy */}
        <div className="metric-cell">
          <p className="cell-label">PRECISION ACCURACY</p>
          <h3 className="metric-value">99.8%</h3>
          <p className="metric-sub">LASER & UV CALIBRATION</p>
        </div>

        {/* Col 5: Tailored Materials */}
        <div className="metric-cell">
          <p className="cell-label">CUSTOM TAILORED</p>
          <h3 className="metric-value">100%</h3>
          <p className="metric-sub">OF ALL PRODUCTION</p>
        </div>

        {/* Col 6: Certified Studio */}
        <div className="metric-cell badge-cell">
          <p className="cell-label">STUDIO STATUS</p>
          <div className="b-corp-badge">
            <span className="b-letter">★</span>
            <span className="b-text">GWALIOR #1</span>
          </div>
        </div>

      </section>


      {/* ================= THE COLLECTION (3D CARD STACK) ================= */}
      <section className="terrain-collection-section" id="collections">
        <div className="collection-layout-grid">
          
          {/* Left info column */}
          <div className="collection-left-panel">
            <div className="collection-title-row">
              <h2>THE COLLECTION</h2>
              <span className="orange-plus">+</span>
            </div>
            
            <a href="#contact" className="view-all-link">VIEW ALL →</a>

            <p className="collection-intro-desc">
              Each piece is engineered with purpose. Explore the workshop catalog of apparel, signage, mugs, keychains, and trophies.
            </p>

            <div className="collection-coords-block">
              <div className="target-aim-icon">⌖</div>
              <span>26.2183° N<br />78.1828° E</span>
            </div>
          </div>

          {/* Center/Right: Interactive Deck */}
          <div className="collection-deck-panel">
            
            <div className="deck-carousel-wrap">
              
              {/* Overlapping stack cards */}
              <div className="deck-stack">
                {collectionsData.map((item, idx) => {
                  const isCurrent = idx === activeDeckIndex;
                  const isPrev = idx === (activeDeckIndex - 1 + collectionsData.length) % collectionsData.length;
                  const isNext = idx === (activeDeckIndex + 1) % collectionsData.length;

                  let cardClass = "deck-card";
                  if (isCurrent) cardClass += " card-active";
                  else if (isPrev) cardClass += " card-prev";
                  else if (isNext) cardClass += " card-next";
                  else cardClass += " card-hidden";

                  return (
                    <div
                      key={item.id}
                      className={cardClass}
                      onClick={() => setActiveDeckIndex(idx)}
                    >
                      <div className="deck-card-top">
                        <div className="deck-item-titles">
                          <h4>{item.title}</h4>
                        </div>
                        <span className="deck-item-idx">[{item.id}]</span>
                      </div>

                      <div className="deck-img-container">
                        <img src={item.image} alt={item.title} />
                      </div>

                      {/* Scorecard Box on Active Card */}
                      {isCurrent && (
                        <div className="deck-scorecard">
                          <p className="scorecard-title">CRAFT & DURABILITY SCORECARD</p>
                          <div className="score-row">
                            <span>MATERIALS</span>
                            <span>{item.scores.materials}</span>
                          </div>
                          <div className="score-row">
                            <span>DURABILITY</span>
                            <span>{item.scores.durability}</span>
                          </div>
                          <div className="score-row">
                            <span>PRINT ACCURACY</span>
                            <span>{item.scores.print}</span>
                          </div>
                          <div className="score-row score-overall">
                            <span>OVERALL SCORE</span>
                            <span className="accent-orange-text">{item.scores.overall}</span>
                          </div>
                        </div>
                      )}

                      <div className="deck-card-actions">
                        <button
                          type="button"
                          className="deck-quick-view-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedImage({ image: item.image, title: item.title, client: item.subtitle });
                          }}
                        >
                          QUICK VIEW →
                        </button>
                        <a
                          href={`https://wa.me/919302578810?text=${encodeURIComponent(`Hi AB Creations, I want to order / customize [${item.id}] ${item.title}.`)}`}
                          target="_blank"
                          rel="noreferrer"
                          className="deck-add-cart-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          CUSTOMIZE ON WA →
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation Arrow Controls */}
              <div className="deck-nav-controls">
                <button
                  type="button"
                  className="deck-arrow-btn"
                  onClick={prevDeck}
                  aria-label="Previous Collection item"
                >
                  ←
                </button>
                <button
                  type="button"
                  className="deck-arrow-btn"
                  onClick={nextDeck}
                  aria-label="Next Collection item"
                >
                  →
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* ================= 4-COLUMN VALUE PILLARS STRIP ================= */}
      <section className="terrain-values-strip" id="about">
        
        <div className="value-pillar">
          <div className="value-icon">🌿</div>
          <div className="value-body">
            <h4>SUSTAINABLE</h4>
            <p>Made with high-grade durable & premium raw materials.</p>
          </div>
        </div>

        <div className="value-pillar">
          <div className="value-icon">💎</div>
          <div className="value-body">
            <h4>DURABLE</h4>
            <p>Built to last. Laser-precise fabrication & curable inks.</p>
          </div>
        </div>

        <div className="value-pillar">
          <div className="value-icon">👁️</div>
          <div className="value-body">
            <h4>TRANSPARENT</h4>
            <p>Direct Gwalior workshop pricing. Open production process.</p>
          </div>
        </div>

        <div className="value-pillar">
          <div className="value-icon">🔄</div>
          <div className="value-body">
            <h4>CIRCULAR CRAFT</h4>
            <p>100% bespoke tailoring. Fast doorstep dispatch.</p>
          </div>
        </div>

      </section>


      {/* ================= WORKSHOP JOURNAL (VIDEO SHOWCASE) ================= */}
      <section className="terrain-journal-section" id="motion">
        <div className="journal-header-row">
          <div>
            <p className="eyebrow-dark">— WORKSHOP JOURNAL</p>
            <h2 className="journal-title">OUR CREATIONS IN MOTION</h2>
          </div>
          <p className="journal-sub">Real footage from our laser and printing studio in Gwalior.</p>
        </div>

        <div className="journal-video-grid">
          <div className="journal-card">
            <div className="journal-video-wrap">
              <span className="journal-tag">[001] MEHANDI SIGNAGE</span>
              <video controls preload="metadata" playsInline>
                <source src="/src/assets/video-1.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="journal-meta">
              <h4>Mehandi Acrylic Backdrop</h4>
              <p>Warm ambient illumination with custom cut typography</p>
            </div>
          </div>

          <div className="journal-card">
            <div className="journal-video-wrap">
              <span className="journal-tag">[002] MB LOGO BOARD</span>
              <video controls preload="metadata" playsInline>
                <source src="/src/assets/video-2.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="journal-meta">
              <h4>MB Storefront Board</h4>
              <p>Backlit corporate letter illumination & acrylic face</p>
            </div>
          </div>

          <div className="journal-card">
            <div className="journal-video-wrap">
              <span className="journal-tag">[003] FLORAL LED MIRROR</span>
              <video controls preload="metadata" playsInline>
                <source src="/src/assets/video-3.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="journal-meta">
              <h4>Floral LED Mirror</h4>
              <p>Infinity-cut reflective glass with integrated LED halo</p>
            </div>
          </div>
        </div>
      </section>


      {/* ================= TECHNICAL CONTACT / ENQUIRY SECTION ================= */}
      <section className="terrain-contact-section" id="contact">
        <div className="terrain-contact-grid">
          
          <div className="contact-editorial-col">
            <p className="eyebrow-dark">— WORKSHOP CONSULTATION</p>
            <h2 className="contact-main-heading">
              BUILT FOR YOU.<br />
              <span className="accent-orange-text">START YOUR CRAFT.</span>
            </h2>
            <p className="contact-desc-text">
              Tell us what you need. Our master technicians will prepare your custom design previews, specifications, and instant quotation on WhatsApp.
            </p>

            <div className="contact-info-list">
              <div className="contact-info-item">
                <span className="info-dot">■</span>
                <div>
                  <strong>DIRECT LINE:</strong> <a href="tel:9302578810">+91 9302578810</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-dot">■</span>
                <div>
                  <strong>WHATSAPP:</strong> <a href="https://wa.me/919302578810" target="_blank" rel="noreferrer">+91 9302578810</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-dot">■</span>
                <div>
                  <strong>INSTAGRAM:</strong> <a href="https://instagram.com/abcreations_gwl" target="_blank" rel="noreferrer">@abcreations_gwl</a>
                </div>
              </div>
              <div className="contact-info-item">
                <span className="info-dot">■</span>
                <div>
                  <strong>LOCATION:</strong> Gwalior, Madhya Pradesh, India
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-box-col">
            <div className="modular-form-panel">
              <div className="form-top-tag">
                <span>[ INQUIRY PROTOCOL 01 ]</span>
                <span className="status-live">● LIVE</span>
              </div>

              <form onSubmit={handleWhatsAppSubmit} className="modular-form">
                <div className="modular-input-group">
                  <label>YOUR NAME</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="ENTER YOUR FULL NAME"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="modular-input-group">
                  <label>PHONE / WHATSAPP NUMBER</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 9302578810"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>

                <div className="modular-input-group">
                  <label>PRODUCT OR SERVICE CATEGORY</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    required
                  >
                    <option value="Custom T-Shirts">CUSTOM APPAREL & T-SHIRTS</option>
                    <option value="LED Signage">PREMIUM LED & NEON SIGNAGE</option>
                    <option value="Custom Mugs">MAGIC & CERAMIC MUGS</option>
                    <option value="Keychains">3D ACRYLIC & WOOD KEYCHAINS</option>
                    <option value="Trophies">CRYSTAL & ACRYLIC TROPHIES</option>
                    <option value="UV Corporate Materials">UV CORPORATE DESK SETS</option>
                    <option value="Custom Gifts">BESPOKE PERSONALIZED GIFTS</option>
                  </select>
                </div>

                <div className="modular-input-group">
                  <label>PROJECT REQUIREMENTS & SPECS</label>
                  <textarea
                    name="requirements"
                    placeholder="QUANTITY, SIZES, TEXT/LOGO DETAILS, TIMELINE..."
                    rows="3"
                    value={formData.requirements}
                    onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="modular-form-submit-btn">
                  <span>SEND TO WHATSAPP DESK</span>
                  <span>→</span>
                </button>
              </form>
            </div>
          </div>

        </div>
      </section>


      {/* ================= MODULAR BLACK FOOTER (MATCHING PHOTO) ================= */}
      <footer className="terrain-footer">
        <div className="footer-modular-grid">
          
          {/* Brand Column */}
          <div className="footer-col-brand">
            <h3 className="footer-brand-title">AB CREATIONS<sup>®</sup></h3>
            <p className="footer-copyright-text">
              © 2026 AB CREATIONS<br />
              ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Shop Column */}
          <div className="footer-col-nav">
            <p className="footer-col-heading">SHOP</p>
            <a href="#collections">All Products</a>
            <a href="#collections">New Arrivals</a>
            <a href="#collections">Best Sellers</a>
            <a href="#collections">Accessories</a>
          </div>

          {/* Company Column */}
          <div className="footer-col-nav">
            <p className="footer-col-heading">COMPANY</p>
            <a href="#about">About Us</a>
            <a href="#about">Sustainability</a>
            <a href="#about">Workshop Craft</a>
            <a href="#motion">Journal</a>
          </div>

          {/* Support Column */}
          <div className="footer-col-nav">
            <p className="footer-col-heading">SUPPORT</p>
            <a href="#contact">FAQ</a>
            <a href="tel:9302578810">Call: 9302578810</a>
            <a href="https://wa.me/919302578810" target="_blank" rel="noreferrer">WhatsApp Chat</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Newsletter Column */}
          <div className="footer-col-subscribe">
            <p className="footer-col-heading">STAY IN THE LOOP</p>
            <p className="subscribe-desc">
              Exclusive drops. Product updates. Stories from the workshop.
            </p>
            
            <form onSubmit={handleSubscribeSubmit} className="subscribe-form-row">
              <input
                type="text"
                placeholder="EMAIL / PHONE"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe-arrow-btn" aria-label="Subscribe">
                →
              </button>
            </form>

            <div className="footer-social-links">
              <a href="https://instagram.com/abcreations_gwl" target="_blank" rel="noreferrer">IG</a>
              <a href="https://wa.me/919302578810" target="_blank" rel="noreferrer">WA</a>
              <a href="tel:9302578810">TEL</a>
              <a href="https://instagram.com/abcreations_gwl" target="_blank" rel="noreferrer">YT</a>
            </div>
          </div>

        </div>
      </footer>


      {/* ================= LIGHTBOX PREVIEW MODAL ================= */}
      {selectedImage && (
        <div className="terrain-lightbox-overlay" onClick={() => setSelectedImage(null)}>
          <div className="terrain-lightbox-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="terrain-lightbox-close"
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img src={selectedImage.image} alt={selectedImage.title} className="lightbox-preview-img" />
            <div className="lightbox-preview-meta">
              <h4>{selectedImage.title}</h4>
              <p>{selectedImage.client}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

export default App;