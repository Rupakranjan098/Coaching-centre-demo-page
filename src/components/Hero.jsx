import React from 'react';
import { Play, ArrowRight, Award, Users, Shield, BookOpen, CheckCircle, GraduationCap } from 'lucide-react';
import ThreeDHeroScene from './ThreeDHeroScene';


export default function Hero() {
  return (
    <section className="hero-section">
      {/* 3D Interactive Canvas Scene */}
      <ThreeDHeroScene />

      {/* Hero Layout */}
      <div className="hero-container">
        <div className="hero-content">
          <span className="hero-tagline">DISCIPLINE TODAY</span>
          <h1 className="hero-title">
            SUCCESS <br />
            <span className="gold-text">TOMORROW</span>
          </h1>
          <p className="hero-desc">
            We build more than careers. We build character, confidence and future leaders through quality education, expert guidance and a complete disciplined environment.
          </p>
          <div className="hero-buttons">
            <a href="#courses" className="btn-primary">
              EXPLORE COURSES <ArrowRight size={16} />
            </a>
            <a href="#video" className="btn-secondary">
              <Play size={16} fill="currentColor" /> WATCH VIDEO
            </a>
          </div>
        </div>

        {/* Hero Visual Area with Stats */}
        <div className="hero-visual">

          
          {/* Floating Stats */}
          <div className="floating-stats">
            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Award size={20} className="gold-icon" />
              </div>
              <div className="stat-text">
                <h3>15+</h3>
                <p>YEARS OF EXCELLENCE</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <Users size={20} className="gold-icon" />
              </div>
              <div className="stat-text">
                <h3>5000+</h3>
                <p>SELECTIONS</p>
              </div>
            </div>

            <div className="stat-card">
              <div className="stat-icon-wrapper">
                <GraduationCap size={20} className="gold-icon" />
              </div>
              <div className="stat-text">
                <h3>50+</h3>
                <p>EXPERT FACULTY</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Features Row */}
      <div className="features-row">
        <div className="features-container">
          <div className="feature-item">
            <div className="feature-icon">
              <Award size={24} />
            </div>
            <div className="feature-info">
              <h4>Expert Faculty</h4>
              <p>Highly qualified mentors</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <CheckCircle size={24} />
            </div>
            <div className="feature-info">
              <h4>Proven Results</h4>
              <p>Consistent track record of selections</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <Shield size={24} />
            </div>
            <div className="feature-info">
              <h4>Personalized Guidance</h4>
              <p>Individual attention for every student</p>
            </div>
          </div>

          <div className="feature-item">
            <div className="feature-icon">
              <BookOpen size={24} />
            </div>
            <div className="feature-info">
              <h4>Holistic Development</h4>
              <p>Focus on overall personality growth</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
