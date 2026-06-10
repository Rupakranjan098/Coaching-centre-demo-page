import React, { useState } from 'react';
import { Mail, Phone, Play, Share2, Globe, Send, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      {/* Top Header Bar */}
      <div className="top-bar">
        <div className="top-bar-container">
          <div className="welcome-msg">Welcome to The Trooper's Coaching Centre</div>
          <div className="top-contacts">
            <span className="contact-item">
              <Mail size={14} className="gold-icon" />
              Email: <a href="mailto:info@thetroopers.in">info@thetroopers.in</a>
            </span>
            <div className="social-links">
              <span>Follow Us:</span>
              <a href="#" aria-label="Facebook"><Globe size={14} /></a>
              <a href="#" aria-label="Instagram"><Share2 size={14} /></a>
              <a href="#" aria-label="Telegram"><Send size={14} /></a>
              <a href="#" aria-label="YouTube"><Play size={14} /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="main-nav">
        <div className="nav-container">
          {/* Logo */}
          <a href="#" className="brand-logo">
            <div className="logo-icon">
              <svg viewBox="0 0 100 100" className="shield-svg">
                <path d="M50 5 L90 25 V60 C90 80 50 95 50 95 C50 95 10 80 10 60 V25 L50 5 Z" fill="#001730" stroke="#e8a61e" strokeWidth="4" />
                <path d="M50 15 L80 30 V55 C80 70 50 82 50 82 C50 82 20 70 20 55 V30 L50 15 Z" fill="#e8a61e" opacity="0.2" />
                <text x="50" y="58" fontSize="35" fontWeight="bold" fill="#e8a61e" textAnchor="middle" dominantBaseline="middle">T</text>
              </svg>
            </div>
            <div className="logo-text">
              <span className="logo-title">THE TROOPER'S</span>
              <span className="logo-subtitle">COACHING CENTRE</span>
              <span className="logo-motto">DISCIPLINE • DEDICATION • DESTINATION</span>
            </div>
          </a>

          {/* Desktop Links */}
          <ul className="nav-links">
            <li><a href="#" className="nav-link active">HOME</a></li>
            <li><a href="#about" className="nav-link">ABOUT US</a></li>
            <li className="dropdown">
              <a href="#courses" className="nav-link">COURSES <ChevronDown size={14} /></a>
              <ul className="dropdown-menu">
                <li><a href="#courses">NDA</a></li>
                <li><a href="#courses">CDS</a></li>
                <li><a href="#courses">AFCAT</a></li>
                <li><a href="#courses">SSC (Tech)</a></li>
                <li><a href="#courses">NAVY (AA/SSR)</a></li>
                <li><a href="#courses">FOUNDATION</a></li>
              </ul>
            </li>
            <li><a href="#gallery" className="nav-link">GALLERY</a></li>
            <li><a href="#notice" className="nav-link">NOTICE</a></li>
            <li><a href="#contact" className="nav-link">CONTACT US</a></li>
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            <a href="tel:+919876543210" className="phone-btn">
              <Phone size={16} />
              <span>+91 98765 43210</span>
            </a>
            <a href="#contact" className="enquire-btn">ENQUIRE NOW</a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle navigation">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="mobile-drawer">
            <ul className="mobile-links">
              <li><a href="#" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>HOME</a></li>
              <li><a href="#about" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>ABOUT US</a></li>
              <li><a href="#courses" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>COURSES</a></li>
              <li><a href="#gallery" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>GALLERY</a></li>
              <li><a href="#notice" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>NOTICE</a></li>
              <li><a href="#contact" className="mobile-link" onClick={() => setMobileMenuOpen(false)}>CONTACT US</a></li>
              <li className="mobile-actions">
                <a href="tel:+919876543210" className="phone-btn-m">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </a>
                <a href="#contact" className="enquire-btn-m" onClick={() => setMobileMenuOpen(false)}>ENQUIRE NOW</a>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
