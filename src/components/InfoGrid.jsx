import React from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';
import hostelImg from '../assets/hostel_room.png';
import soldierSilhouette from '../assets/soldier_silhouette.png';

export default function InfoGrid() {
  const hostelList = [
    'Separate Rooms',
    'Hygienic & Nutritious Food',
    '24x7 Security',
    'Daily Study Hall',
    'AC Classrooms',
    'Sports & Recreation'
  ];

  const troopersList = [
    'Motivational Videos',
    'Success Stories',
    'Exam Updates',
    'Study Material',
    'Interview Guidance'
  ];

  return (
    <section className="info-grid-section">
      <div className="info-grid-container">
        
        {/* Hostel Facilities */}
        <div className="info-card hostel-card" id="hostel">
          <div className="info-card-content">
            <span className="card-tag">HOSTEL FACILITIES</span>
            <h3>Safe, Secure & Comfortable</h3>
            <ul className="card-list">
              {hostelList.map((item, i) => (
                <li key={i}>
                  <CheckCircle size={16} className="gold-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#contact" className="card-btn">
              KNOW MORE <ArrowRight size={16} />
            </a>
          </div>
          <div className="info-card-image">
            <img src={hostelImg} alt="Hostel Rooms" />
          </div>
        </div>

        {/* About Us */}
        <div className="info-card about-card" id="about">
          <div className="info-card-content">
            <span className="card-tag">ABOUT US</span>
            <h3>The Trooper's</h3>
            <p className="card-desc">
              The Trooper's Coaching Centre is dedicated to nurturing the dreams of young aspirants. We provide the right guidance, resources and environment to help students achieve success in Defence and other competitive exams.
            </p>
            <a href="#about" className="card-btn">
              READ MORE <ArrowRight size={16} />
            </a>
          </div>
          <div className="info-card-graphic">
            {/* Elegant Building Sketch Graphic */}
            <svg viewBox="0 0 100 100" className="building-svg">
              <path d="M10 90 H90 M20 90 V50 L50 30 L80 50 V90 M30 90 V60 H45 V90 M55 90 V60 H70 V90 M30 45 H40 M60 45 H70 M50 15 V30 M45 20 H55" 
                fill="none" stroke="#001730" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="50" cy="45" r="5" fill="none" stroke="#e8a61e" strokeWidth="2" />
            </svg>
          </div>
        </div>

        {/* The Trooper's Page */}
        <div className="info-card troopers-page-card" id="troopers-page">
          <div className="info-card-content">
            <span className="card-tag">THE TROOPER'S PAGE</span>
            <h3>A place for warriors to grow every day.</h3>
            <ul className="card-list">
              {troopersList.map((item, i) => (
                <li key={i}>
                  <CheckCircle size={16} className="gold-icon" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a href="#troopers-page" className="card-btn">
              VISIT PAGE <ArrowRight size={16} />
            </a>
          </div>
          <div className="info-card-image">
            <img src={soldierSilhouette} alt="Trooper Warrior" />
          </div>
        </div>

      </div>
    </section>
  );
}
