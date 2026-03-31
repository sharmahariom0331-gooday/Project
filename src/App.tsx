import React, { useState, useEffect } from 'react';
import { Search, Camera, Mic, Gem, Home, Heart, User, ShoppingBag, Truck, RotateCcw, ShieldCheck, Wrench, Calendar, Mail, Phone, MoveRight, Filter, ChevronDown, Star, ChevronRight, Share2, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AdminPanel from './admin/AdminPanel';
import './App.css';

// Sample Product Data
const INITIAL_PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'Exquisite Gold Gheroo Haram',
    price: '₹ 706,345',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCH_PRD/on/demandware.static/-/Sites-tan-ak-master/default/dw15b5e7ef/product/images/50/511518NFAAAB2_1.jpg?sw=640&sh=640',
    stock: 'Only 1 left!',
    material: '22K Gold',
    weight: '85.5g',
    purity: '916 (BIS)',
    length: '24.5 cm',
    width: '2.5 cm',
    stone: 'None'
  },
  {
    id: 2,
    name: 'Spectacular Leaf Pattern Gold Haram',
    price: '₹ 1,496,571',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCH_PRD/on/demandware.static/-/Sites-tan-ak-master/default/dw86a7d25e/product/images/51/511518NMAAAB2_1.jpg?sw=640&sh=640',
    stock: 'Only 1 left!',
    material: '22K Gold',
    weight: '150.2g',
    purity: '916 (BIS)',
    length: '28.0 cm',
    width: '3.0 cm',
    stone: 'None'
  },
  {
    id: 3,
    name: 'Ornate Rhythm Gold Haram',
    price: '₹ 850,000',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCH_PRD/on/demandware.static/-/Sites-tan-ak-master/default/dw7e5c544e/product/images/51/511518NPAAAB2_1.jpg?sw=640&sh=640',
    showInStore: true,
    material: '22K Gold',
    weight: '92.5g',
    purity: '916 (BIS)',
    length: '25.0 cm',
    width: '2.2 cm',
    stone: 'None'
  },
  {
    id: 4,
    name: 'Mandala Muse Gold Haram',
    price: '₹ 920,000',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCH_PRD/on/demandware.static/-/Sites-tan-ak-master/default/dw6c6c5a5a/product/images/51/511518NQAAAB2_1.jpg?sw=640&sh=640',
    showInStore: true,
    material: '22K Gold',
    weight: '98.0g',
    purity: '916 (BIS)',
    length: '26.5 cm',
    width: '2.8 cm',
    stone: 'Diamond'
  },
  {
    id: 5,
    name: 'Royal Allure Gold Haram',
    price: '₹ 1,200,000',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCH_PRD/on/demandware.static/-/Sites-tan-ak-master/default/dwb5c544e/product/images/51/511518NSAAAB2_1.jpg?sw=640&sh=640',
    showInStore: true,
    material: '22K Gold',
    weight: '115.5g',
    purity: '916 (BIS)',
    length: '27.0 cm',
    width: '3.2 cm',
    stone: 'Ruby'
  },
  {
    id: 6,
    name: 'Floral Enchantment Peacock Haram',
    price: '₹ 1,150,000',
    img: 'https://www.tanishq.co.in/dw/image/v2/BKCH_PRD/on/demandware.static/-/Sites-tan-ak-master/default/dw4c544e/product/images/51/511518NTAAAB2_1.jpg?sw=640&sh=640',
    showInStore: true,
    material: '22K Gold',
    weight: '108.0g',
    purity: '916 (BIS)',
    length: '26.0 cm',
    width: '2.6 cm',
    stone: 'Emerald'
  },
];

interface SiteSettings {
  siteName: string;
  heroTitle: string;
  heroSubtitle: string;
  heroSubheading: string;
  heroImage: string;
  contactNumber: string;
  founderName: string;
  purityPromise: string;
  heritageYears: string;
}

const INITIAL_SETTINGS: SiteSettings = {
  siteName: "AKSHIMA",
  heroTitle: "Rivaah by Akshima",
  heroSubtitle: "CRAFTED FOR EVERY BRIDE.",
  heroSubheading: "THE EXQUISITE WEDDING COLLECTION",
  heroImage: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200",
  contactNumber: "1800-419-0066",
  founderName: "Akshima Sharma",
  purityPromise: "100% PURITY PROMISE",
  heritageYears: "30+ YEARS OF HERITAGE"
};

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
  stock?: string;
  showInStore?: boolean;
  material?: string;
  weight?: string;
  purity?: string;
  length?: string;
  width?: string;
  stone?: string;
}

const ProductListing: React.FC<{ category: string; products: Product[]; onBack: () => void; onProductClick: (product: Product) => void }> = ({ category, products, onBack, onProductClick }) => {
  return (
    <motion.div
      className="product-listing-page"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
    >
      <div className="breadcrumbs">
        <span onClick={onBack}>Home</span>
        <ChevronDown size={14} style={{ transform: 'rotate(-90deg)' }} />
        <span className="current">{category}</span>
      </div>

      <div className="category-promo-banner">
        <div className="promo-content">
          <h3>The Akshima Celebration: Flat 15% OFF Overall Making Charges*</h3>
          <p>Exclusively for the {category} Collection • Shop the Radiance</p>
        </div>
        <div className="promo-badge-float">
          REDEEM NOW
          <small>*T&C Apply</small>
        </div>
      </div>

      <div className="listing-header">
        <h1 className="listing-title">{category} <span>(68 results)</span></h1>
      </div>

      <div className="filter-bar">
        <div className="filter-left">
          <button className="filter-btn">
            <Filter size={16} /> Filter <span className="count">3</span>
          </button>
          <div className="chip">Haram <small>✕</small></div>
        </div>
        <div className="filter-right">
          <span>Sort By: </span>
          <select className="sort-select">
            <option>Best Matches</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </div>

      <div className="product-grid-main">
        {products.map((prod, i) => (
          <React.Fragment key={prod.id}>
            <div className="product-card-listing" onClick={() => onProductClick(prod)}>
              <div className="product-img-listing">
                <img src={prod.img} alt={prod.name} />
                <div className="wishlist-icon-listing">
                  <Heart size={18} />
                </div>
              </div>
              <div className="product-info-listing">
                <h3 className="product-name-listing">{prod.name}</h3>
                <p className="product-price-listing">{prod.price}</p>
                {prod.stock && <span className="stock-tag">{prod.stock}</span>}
                {!prod.stock && <button className="btn-find-store">FIND IN STORE</button>}
              </div>
            </div>
            {i === 2 && (
              <div className="bridal-picks-section">
                <div className="bridal-title-listing">Bridal picks of the season</div>
                <div className="picks-container-v2">
                  {[
                    { name: 'Bridal Mangalsutra', img: 'https://images.unsplash.com/photo-1598560912005-5976593c6831?q=80&w=300' },
                    { name: 'Bridal Pendants', img: 'https://images.unsplash.com/photo-1599643477877-537ef527848b?q=80&w=300' },
                    { name: 'Bridal Earrings', img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=300' }
                  ].map((pick, index) => (
                    <div className="pick-card-v2" key={index}>
                      <div className="pick-img-box-v2">
                        <img src={pick.img} alt={pick.name} />
                      </div>
                      <span className="pick-label-v2">{pick.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
};

const ProductDetail: React.FC<{ product: Product; products: Product[]; onBack: () => void }> = ({ product, products, onBack }) => {
  const [selectedImg, setSelectedImg] = useState(product.img);
  const thumbnails = [product.img, product.img, product.img, product.img];

  return (
    <motion.div
      className="product-detail-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="detail-container">
        <div className="breadcrumbs">
          <span onClick={onBack}>Home</span>
          <ChevronRight size={14} />
          <span>Finger Rings</span>
          <ChevronRight size={14} />
          <span className="current">{product.name}</span>
        </div>

        <div className="main-product-section">
          {/* Left: Gallery */}
          <div className="product-gallery">
            <div className="thumb-column">
              {thumbnails.map((thumb, i) => (
                <div
                  key={i}
                  className={`thumb-box ${selectedImg === thumb ? 'active' : ''}`}
                  onClick={() => setSelectedImg(thumb)}
                >
                  <img src={thumb} alt="thumb" />
                </div>
              ))}
            </div>
            <div className="main-img-box">
              <motion.img
                key={selectedImg}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                src={selectedImg}
                alt={product.name}
              />
              <div className="wishlist-float">
                <Heart size={20} />
              </div>
            </div>
          </div>

          {/* Right: Info */}
          <div className="product-main-info">
            <h1 className="detail-title">{product.name}</h1>

            <div className="rating-row">
              <div className="stars">
                {[...Array(5)].map((_, i) => <Star key={i} size={16} fill={i < 4 ? "#C5A059" : "none"} color="#C5A059" />)}
                <span className="rating-text">4.8 <span>(245 reviews)</span></span>
              </div>
              <div className="badges-row">
                <span className="badge-gold"><Gem size={12} /> Top Rated Product</span>
                <span className="badge-green"><Truck size={12} /> 90% recommend this</span>
              </div>
            </div>

            <div className="price-section">
              <div className="price-row">
                <span className="current-price">{product.price}</span>
                <span className="old-price">₹ {(parseInt(product.price.replace(/[^\d]/g, '')) * 1.12).toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}</span>
                <span className="discount-tag">12% OFF</span>
              </div>
              <p className="tax-info">(Price inclusive of all taxes)</p>
            </div>

            <div className="coupon-box">
              <div className="coupon-header">
                <Gem size={16} color="#4A5FAB" />
                <span>USE COUPON CODE</span>
              </div>
              <div className="coupon-input-row">
                <input type="text" placeholder="Enter Code (e.g. WELCOME10)" />
                <button className="btn-apply">APPLY</button>
              </div>
              <div className="available-coupons">
                Available: <span>WELCOME10</span> (10% OFF), <span>BULK15</span> (15% OFF)
              </div>
            </div>

            <div className="product-spec-table">
              <div className="spec-header">
                <div className="spec-col">GENERAL INFO</div>
                <div className="spec-col">DIMENSIONS</div>
              </div>
              <div className="spec-content">
                <div className="spec-row">
                  <div className="spec-item"><Info size={14} /> Material <strong>{product.material || '22K Gold'}</strong></div>
                  <div className="spec-item"><Info size={14} /> Length <strong>{product.length || '2.5 cm'}</strong></div>
                </div>
                <div className="spec-row">
                  <div className="spec-item"><Info size={14} /> Weight <strong>{product.weight || '3.5g'}</strong></div>
                  <div className="spec-item"><Info size={14} /> Width <strong>{product.width || '1.8 cm'}</strong></div>
                </div>
                <div className="spec-row">
                  <div className="spec-item"><Info size={14} /> Purity <strong>{product.purity || '916 (BIS)'}</strong></div>
                  <div className="spec-item"><Info size={14} /> Stone <strong>{product.stone || 'Diamond'}</strong></div>
                </div>
              </div>
            </div>

            <div className="qty-selector">
              <span>Select Qty:</span>
              <div className="qty-controls">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>

            <div className="cta-row">
              <button className="btn-outline-maroon"><ShoppingBag size={18} /> ADD TO BAG</button>
              <button className="btn-fill-maroon">BUY NOW</button>
              <div className="wishlist-btn-circle"><Heart size={20} /></div>
            </div>
          </div>
        </div>

        {/* Feature Icons */}
        <div className="features-grid-v4">
          <div className="feature-card-v4"><Truck size={30} /> <span>FREE DELIVERY</span></div>
          <div className="feature-card-v4"><RotateCcw size={30} /> <span>COD AVAILABLE</span></div>
          <div className="feature-card-v4"><ShieldCheck size={30} /> <span>7 DAY RETURN</span></div>
        </div>

        {/* Design & Details */}
        <div className="design-details-section">
          <h2 className="detail-section-title">Design <span>&</span> Details</h2>
          <p className="detail-desc">
            This exquisite {product.name} is a testament to fine craftsmanship. Meticulously designed with premium materials,
            it features intricate patterns that capture the essence of timeless elegance. Perfect for any occasion,
            this piece is curated to offer both luxury and comfort for the modern wearer.
          </p>
          <div className="detail-bullet-row">
            <span>Hand-finished by master artisans</span>
            <span>Ethically sourced materials</span>
            <span>Hypoallergenic and skin-friendly</span>
          </div>
          <div className="trust-badges-detail">
            <span><Gem size={16} /> 100% Original</span>
            <span><ShieldCheck size={16} /> Secure Payment</span>
            <span><Info size={16} /> BIS Hallmarked</span>
          </div>
        </div>

        {/* Related Products */}
        <div className="related-section">
          <h2 className="detail-section-title">Related Products</h2>
          <div className="related-grid">
            {products.slice(0, 4).map((p) => (
              <div className="related-card" key={p.id}>
                <div className="related-img"><img src={p.img} alt={p.name} /></div>
                <h3>{p.name}</h3>
                <p>{p.price}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const App: React.FC = () => {
  const [view, setView] = useState<'home' | 'listing' | 'detail' | 'admin'>('home');
  const [selectedCategory, setSelectedCategory] = useState<string>('Rivaah');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [settings, setSettings] = useState<SiteSettings>(INITIAL_SETTINGS);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [view]);

  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    setView('listing');
  };

  const handleBackToHome = () => {
    setView('home');
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setView('detail');
  };

  const handleBackToListing = () => {
    setView('listing');
  };

  return (
    <div className="akshima-app">
      {/* Header */}
      <header className="header">
        <div className="header-container">
          <div className="logo">
            <a href="#" onClick={(e) => { e.preventDefault(); handleBackToHome(); }}>{settings.siteName}</a>
          </div>
          <div className="search-bar">
            <Search size={18} />
            <input type="text" placeholder="Search for gold necklace, diamond jewellery, etc." />
            <Camera size={18} />
            <Mic size={18} />
          </div>
          <div className="header-icons">
            <Gem size={20} />
            <Home size={20} onClick={handleBackToHome} style={{ cursor: 'pointer' }} />
            <Heart size={20} />
            <User size={20} />
            <div className="cart-icon">
              <ShoppingBag size={20} />
              <span className="cart-count">0</span>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence mode="wait">
        {view === 'home' && (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Hero Section */}
            <section className="hero-slider">
              <div className="hero-slide">
                <div className="hero-content">
                  <motion.h5 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{settings.heroSubheading}</motion.h5>
                  <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{settings.heroTitle}</motion.h1>
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{settings.heroSubtitle}</motion.p>
                  <motion.button className="btn-primary" onClick={() => handleCategoryClick('Rivaah')}>EXPLORE COLLECTION</motion.button>
                </div>
                <div className="hero-image">
                  <img src={settings.heroImage} alt="Hero" />
                </div>
              </div>
            </section>

            {/* Categories */}
            <section className="section-container">
              <div className="center-title">
                <h2 className="section-title">Find Your Perfect Match</h2>
                <p className="section-subtitle">Shop by Categories</p>
              </div>
              <div className="categories-grid">
                {[
                  { name: 'EARRINGS', img: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?q=80&w=200' },
                  { name: 'FINGER RINGS', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=200' },
                  { name: 'PENDANTS', img: 'https://images.unsplash.com/photo-1599643477877-537ef527848b?q=80&w=200' },
                  { name: 'MANGALSUTRA', img: 'https://images.unsplash.com/photo-1598560912005-5976593c6831?q=80&w=200' },
                  { name: 'BRACELETS', img: 'https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=200' },
                  { name: 'BANGLES', img: 'https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=200' },
                  { name: 'CHAINS', img: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?q=80&w=200' },
                ].map((cat, i) => (
                  <div className="category-card" key={i} onClick={() => handleCategoryClick(cat.name)} style={{ cursor: 'pointer' }}>
                    <div className="category-img"><img src={cat.img} alt={cat.name} /></div>
                    <span>{cat.name}</span>
                  </div>
                ))}
                <div className="category-card view-all" onClick={() => handleCategoryClick('All Categories')} style={{ cursor: 'pointer' }}>
                  <div className="category-img"><span className="count">10+</span><small>CATEGORIES</small></div>
                  <span>VIEW ALL</span>
                </div>
              </div>
            </section>

            {/* Shop By Gender */}
            <section className="section-container">
              <div className="center-title"><h2 className="section-title">Shop By Gender</h2></div>
              <div className="gender-grid">
                <motion.div className="gender-tile" whileHover={{ scale: 1.02 }} onClick={() => handleCategoryClick("Women's Jewellery")} style={{ cursor: 'pointer' }}>
                  <div className="tile-overlay women-overlay"><span className="exclusive-text">Exclusive</span><h3 className="glow-text">WOMEN'S JEWELLERY</h3></div>
                  <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200" alt="Women" />
                </motion.div>
                <div className="gender-column">
                  <motion.div className="gender-tile" whileHover={{ scale: 1.02 }} onClick={() => handleCategoryClick("Men's Jewellery")} style={{ cursor: 'pointer' }}>
                    <div className="tile-overlay men-overlay"><span className="premium-tag">PREMIUM</span><h3 className="cursive-text">Men's Jewellery</h3></div>
                    <img src="https://images.unsplash.com/photo-1626021151609-880caacff964?q=80&w=800" alt="Men" />
                  </motion.div>
                  <motion.div className="gender-tile" whileHover={{ scale: 1.02 }} onClick={() => handleCategoryClick("Kids Jewellery")} style={{ cursor: 'pointer' }}>
                    <div className="tile-overlay kids-overlay"><span className="adorable-text">Adorable</span><h3 className="blue-title">KIDS JEWELLERY</h3></div>
                    <div className="dark-bg-overlay"></div>
                    <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400" alt="Kids" style={{ opacity: 0.6 }} />
                  </motion.div>
                </div>
              </div>
            </section>

            {/* Trending Now */}
            <section className="section-container">
              <div className="center-title">
                <h2 className="section-title blue-text">Trending Now</h2>
                <p>Sparkle through the events with timeless diamonds</p>
              </div>
              <div className="trending-layout">
                <div className="trending-large" onClick={() => handleCategoryClick('Statement Necklaces')} style={{ cursor: 'pointer' }}>
                  <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200" alt="Necklace" />
                  <div className="trending-info-overlay"><h3>Statement Necklaces</h3><p>Starting from ₹ 32,400*</p></div>
                </div>
                <div className="trending-small-grid">
                  <div className="blue-tile" onClick={() => handleCategoryClick('Sleek Rings')} style={{ cursor: 'pointer' }}><h3>Sleek Rings</h3><p>Starting from ₹ 10,000*</p></div>
                  <div className="blue-tile" onClick={() => handleCategoryClick('Elegant Bangles')} style={{ cursor: 'pointer' }}><h3>Elegant Bangles</h3><p>Starting from ₹ 36,200*</p></div>
                  <div className="blue-tile" onClick={() => handleCategoryClick('Stunning Earrings')} style={{ cursor: 'pointer' }}><h3>Stunning Earrings</h3><p>Starting from ₹ 10,917*</p></div>
                  <div className="gradient-tile" onClick={() => handleCategoryClick('Stylish Mangalsutras')} style={{ cursor: 'pointer' }}>
                    <img src="https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=400" alt="Bangle" />
                    <div className="info"><h3>Stylish Mangalsutras</h3><p>Starting from ₹ 14,500*</p></div>
                  </div>
                </div>
              </div>
            </section>

            {/* Dailywear */}
            <section className="section-container">
              <div className="center-title">
                <h2 className="section-title">Dailywear Jewellery</h2>
                <p className="section-subtitle">Chic & minimal pieces for your everyday look</p>
              </div>
              <div className="dailywear-gradient-box">
                <div className="dailywear-grid-v3">
                  {[
                    { name: 'Dailywear Rings', img: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400' },
                    { name: 'Dailywear Earrings', img: 'https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=400' },
                    { name: 'Dailywear Bracelet', img: 'https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=400' },
                    { name: 'Dailywear Chain', img: 'https://images.unsplash.com/photo-1599643477877-537ef527848b?q=80&w=400' },
                    { name: 'Dailywear Kada', img: 'https://images.unsplash.com/photo-1611591439812-42999427184a?q=80&w=400' },
                    { name: 'Dailywear Pendant', img: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400' },
                  ].map((item, i) => (
                    <motion.div className="daily-item-v3" key={i} onClick={() => handleCategoryClick(item.name)} style={{ cursor: 'pointer' }}>
                      <div className="daily-img-border"><img src={item.img} alt={item.name} /></div>
                      <span className="daily-name-v3">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </section>

            {/* Seasonal Favorites */}
            <section className="section-container">
              <div className="center-title">
                <h2 className="section-title blue-text">Seasonal Favorites</h2>
                <p>Exclusive hand-picked pieces for this season</p>
              </div>
              <div className="seasonal-layout">
                <div className="trending-small-grid">
                  <div className="blue-tile" onClick={() => handleCategoryClick('Floral Rings')}><h3>Floral Rings</h3><p>₹ 15,000</p></div>
                  <div className="blue-tile" onClick={() => handleCategoryClick('Daily Bangles')}><h3>Daily Bangles</h3><p>₹ 40,000</p></div>
                  <div className="blue-tile" onClick={() => handleCategoryClick('Ruby Earrings')}><h3>Ruby Earrings</h3><p>₹ 22,000</p></div>
                  <div className="gradient-tile" onClick={() => handleCategoryClick('Gold Chains')}>
                    <img src="https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=400" alt="Chain" />
                    <div className="info"><h3>Gold Chains</h3><p>₹ 30,000</p></div>
                  </div>
                </div>
                <div className="trending-large" onClick={() => handleCategoryClick('Traditional Chokers')}>
                  <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=1200" alt="Choker" />
                  <div className="trending-info-overlay"><h3>Traditional Chokers</h3><p>₹ 85,000</p></div>
                </div>
              </div>
            </section>

            {/* Gifting */}
            <section className="section-container">
              <div className="center-title"><h2 className="section-title blue-text">Gifting & More</h2><p className="section-subtitle">Gifts that mark a moment</p></div>
              <div className="gifting-grid-v2">
                <div className="gifting-tile-v2 bg-cream text-right" onClick={() => handleCategoryClick('Birthday Gifts')}>
                  <h3>Birthday</h3><img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=400" alt="Birthday" className="tile-img-left" />
                </div>
                <div className="gifting-tile-v2 bg-cream centered-text" onClick={() => handleCategoryClick('Anniversary Gifts')}><h3>Anniversary</h3></div>
                <div className="gifting-tile-v2 tall-tile" onClick={() => handleCategoryClick('Personalised Jewellery')}>
                  <img src="https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=800" alt="Personalised" />
                  <div className="tile-title-bottom"><h3>Personalised Jewellery</h3></div>
                </div>
                <div className="gifting-tile-v2 bg-cream centered-text" onClick={() => handleCategoryClick('Baby Birth Gifts')}><h3>Baby Birth</h3></div>
                <div className="gifting-tile-v2 bg-cream text-left" onClick={() => handleCategoryClick('Festive Collection')}>
                  <h3>Festive collection</h3><img src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=400" alt="Festive" className="tile-img-right" />
                </div>
              </div>
            </section>

            {/* Collections Showcase */}
            <section className="section-container">
              <div className="center-title">
                <h2 className="section-title">Collections & More</h2>
                <p className="section-subtitle">Explore our curated collections for every occasion</p>
              </div>
              <div className="collections-showcase-grid">
                <motion.div
                  className="showcase-card large-card"
                  whileHover={{ y: -8 }}
                  onClick={() => handleCategoryClick('Wedding Collections')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="showcase-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600" alt="Wedding Collections" />
                    <div className="showcase-overlay"></div>
                  </div>
                  <div className="showcase-content">
                    <h3>Wedding Collections</h3>
                    <p>Timeless pieces for your special day</p>
                    <div className="cta-arrow"><MoveRight size={18} /></div>
                  </div>
                </motion.div>

                <motion.div
                  className="showcase-card"
                  whileHover={{ y: -8 }}
                  onClick={() => handleCategoryClick('Heritage Classics')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="showcase-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1611085583191-a3b13b244821?q=80&w=400" alt="Heritage Classics" />
                    <div className="showcase-overlay"></div>
                  </div>
                  <div className="showcase-content">
                    <h3>Heritage Classics</h3>
                    <p>Traditional designs</p>
                    <div className="cta-arrow"><MoveRight size={18} /></div>
                  </div>
                </motion.div>

                <motion.div
                  className="showcase-card"
                  whileHover={{ y: -8 }}
                  onClick={() => handleCategoryClick('Modern Minimalist')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="showcase-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400" alt="Modern Minimalist" />
                    <div className="showcase-overlay"></div>
                  </div>
                  <div className="showcase-content">
                    <h3>Modern Minimalist</h3>
                    <p>Contemporary elegance</p>
                    <div className="cta-arrow"><MoveRight size={18} /></div>
                  </div>
                </motion.div>

                <motion.div
                  className="showcase-card"
                  whileHover={{ y: -8 }}
                  onClick={() => handleCategoryClick('Gemstone Elegance')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="showcase-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1629224316810-9d8805b95e76?q=80&w=400" alt="Gemstone Elegance" />
                    <div className="showcase-overlay"></div>
                  </div>
                  <div className="showcase-content">
                    <h3>Gemstone Elegance</h3>
                    <p>Precious stone jewelry</p>
                    <div className="cta-arrow"><MoveRight size={18} /></div>
                  </div>
                </motion.div>

                <motion.div
                  className="showcase-card large-card-bottom"
                  whileHover={{ y: -8 }}
                  onClick={() => handleCategoryClick('Festival Specials')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="showcase-img-wrapper">
                    <img src="https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=600" alt="Festival Specials" />
                    <div className="showcase-overlay"></div>
                  </div>
                  <div className="showcase-content">
                    <h3>Festival Specials</h3>
                    <p>Exclusive festive collection with stunning designs</p>
                    <div className="cta-arrow"><MoveRight size={18} /></div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Founder, Stats, etc. */}
            <section className="founder-profile">
              <div className="profile-image-section">
                <div className="rotating-circle-container">
                  <div className="rotating-border"><div className="rotating-dot"></div></div>
                  <div className="profile-img-box"><img src="https://images.unsplash.com/photo-1567532939604-b6c5b0adcc2c?q=80&w=400" alt="Founder" /></div>
                </div>
              </div>
              <h2 className="founder-name">{settings.founderName}</h2><p className="founder-vision">FOUNDER & VISIONARY</p>
              <div className="quote-container-v2"><span className="quote-mark">"</span><p className="quote-text-v2">"Jewellery is more than just an ornament..."</p></div>
              <div className="story-text-v2"><p>Founded with a singular vision to redefine luxury...</p></div>
              <div className="stats-row-v2"><div className="stat-chip"><h3>{settings.heritageYears}</h3><p>YEARS OF HERITAGE</p></div><div className="stat-chip"><h3>100%</h3><p>{settings.purityPromise}</p></div></div>
            </section>
          </motion.div>
        )}
        {view === 'listing' && (
          <ProductListing category={selectedCategory} products={products} onBack={handleBackToHome} onProductClick={handleProductClick} />
        )}
        {view === 'detail' && selectedProduct && (
          <ProductDetail product={selectedProduct} products={products} onBack={handleBackToListing} />
        )}
        {view === 'admin' && (
          <AdminPanel 
            products={products} 
            setProducts={setProducts} 
            settings={settings} 
            setSettings={setSettings} 
            onClose={() => setView('home')} 
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-main">
          <div className="footer-brand"><h2 className="brand-logo">{settings.siteName}</h2><p className="since">Since 1964</p></div>
          <div className="footer-cols">
            <div className="footer-col">
              <h4>About Akshima</h4>
              <ul><li onClick={handleBackToHome} style={{ cursor: 'pointer' }}>Home</li><li>Contact Us</li><li>Store Locator</li></ul>
            </div>
            <div className="footer-col">
              <h4>Support</h4>
              <ul><li>Enquiry Form</li><li>Returns</li><li>Policies</li></ul>
            </div>
          </div>
        </div>
        <div className="footer-bars">
          <div className="bar contact-bar">
            <span>Contact Us</span><div className="items"><a href={`tel:${settings.contactNumber.replace(/[^\d]/g, '')}`}><Phone size={14} /> {settings.contactNumber}</a></div>
          </div>
          <div className="bar copyright-bar">
            <p>&copy; 2026 {settings.siteName} Jewellers India Private Limited. <span onClick={() => setView('admin')} style={{cursor: 'pointer', opacity: 0.5, marginLeft: '10px'}}>Admin Panel</span></p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
