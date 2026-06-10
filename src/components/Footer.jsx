import React, { useState } from 'react';
import { Award, Users, GraduationCap, BookOpen, Target, Phone, Mail, MapPin, Globe, Share2, Play, Send, ArrowRight } from 'lucide-react';

export default function Footer() {
  const [formData, setFormData] = useState({ name: '', mobile: '', course: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your enquiry! We will get back to you soon.');
    setFormData({ name: '', mobile: '', course: '', message: '' });
  };

  return (
    <footer className="site-footer" id="contact">
      {/* Stats Banner */}
      <div className="stats-banner">
        <div className="stats-banner-container">
          <div className="stat-banner-item">
            <Award size={28} className="stat-banner-icon" />
            <h3>15+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat-banner-item">
            <Users size={28} className="stat-banner-icon" />
            <h3>5000+</h3>
            <p>Successful Selections</p>
          </div>
          <div className="stat-banner-item">
            <GraduationCap size={28} className="stat-banner-icon" />
            <h3>50+</h3>
            <p>Expert Faculty</p>
          </div>
          <div className="stat-banner-item">
            <BookOpen size={28} className="stat-banner-icon" />
            <h3>10+</h3>
            <p>Courses Offered</p>
          </div>
          <div className="stat-banner-item">
            <Target size={28} className="stat-banner-icon" />
            <h3>100%</h3>
            <p>Dedicated to Success</p>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-main">
        <div className="footer-container">
          {/* About Column */}
          <div className="footer-col footer-about">
            <div className="footer-brand">
              <div className="footer-logo-icon">
                <svg viewBox="0 0 100 100" className="shield-svg-sm">
                  <path d="M50 5 L90 25 V60 C90 80 50 95 50 95 C50 95 10 80 10 60 V25 L50 5 Z" fill="#001730" stroke="#e8a61e" strokeWidth="4" />
                  <text x="50" y="58" fontSize="35" fontWeight="bold" fill="#e8a61e" textAnchor="middle" dominantBaseline="middle">T</text>
                </svg>
              </div>
              <div className="footer-logo-text">
                <span className="flt-title">THE TROOPER'S</span>
                <span className="flt-sub">COACHING CENTRE</span>
                <span className="flt-motto">Discipline • Dedication • Destination</span>
              </div>
            </div>
            <p className="footer-desc">
              We are committed to developing future leaders for the nation with the right guidance, discipline and training.
            </p>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><Globe size={18} /></a>
              <a href="#" aria-label="Instagram"><Share2 size={18} /></a>
              <a href="#" aria-label="YouTube"><Play size={18} /></a>
              <a href="#" aria-label="Telegram"><Send size={18} /></a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="footer-col">
            <h4>QUICK LINKS</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#courses">Courses</a></li>
              <li><a href="#troopers-page">The Trooper's Page</a></li>
              <li><a href="#hostel">Hostel Facilities</a></li>
            </ul>
            <ul className="footer-links">
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#notice">Notice</a></li>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="footer-col">
            <h4>CONTACT US</h4>
            <div className="footer-contact-list">
              <div className="fci">
                <MapPin size={16} className="gold-icon" />
                <span>123, Defence Road, Dehradun, Uttarakhand – 248001</span>
              </div>
              <div className="fci">
                <Phone size={16} className="gold-icon" />
                <a href="tel:+919876543210">+91 98765 43210</a>
              </div>
              <div className="fci">
                <Mail size={16} className="gold-icon" />
                <a href="mailto:info@thetroopers.in">info@thetroopers.in</a>
              </div>
              <div className="fci">
                <Globe size={16} className="gold-icon" />
                <a href="https://www.thetroopers.in">www.thetroopers.in</a>
              </div>
            </div>
          </div>

          {/* Enquire Now Form */}
          <div className="footer-col footer-form-col">
            <h4>ENQUIRE NOW</h4>
            <form className="enquire-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                <input type="text" name="mobile" placeholder="Mobile Number" value={formData.mobile} onChange={handleChange} required />
              </div>
              <select name="course" value={formData.course} onChange={handleChange} required>
                <option value="">Select Course</option>
                <option value="nda">NDA</option>
                <option value="cds">CDS</option>
                <option value="afcat">AFCAT</option>
                <option value="ssc">SSC (Tech)</option>
                <option value="navy">NAVY (AA/SSR)</option>
                <option value="foundation">Foundation</option>
              </select>
              <textarea name="message" placeholder="Your Message" rows="3" value={formData.message} onChange={handleChange}></textarea>
              <button type="submit" className="submit-btn">SUBMIT NOW</button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>© 2024 The Trooper's Coaching Centre. All Rights Reserved.</p>
          <p className="footer-quote">"The Pain You Feel Today, Will Be The Strength You Feel Tomorrow."</p>
        </div>
      </div>
    </footer>
  );
}
