import React from 'react';
import { ArrowRight } from 'lucide-react';
import cadetsHeroImg from '../assets/cadets_hero.png';
import fighterJetImg from '../assets/fighter_jet.png';
import navyShipImg from '../assets/navy_ship.png';
import soldierImg from '../assets/soldier_silhouette.png';
import hostelImg from '../assets/hostel_room.png';

export default function Gallery() {
  const images = [
    { src: cadetsHeroImg, alt: 'NDA Cadets Training' },
    { src: fighterJetImg, alt: 'Air Force Jets' },
    { src: navyShipImg, alt: 'Navy Warship' },
    { src: soldierImg, alt: 'Soldier on Mission' },
    { src: hostelImg, alt: 'Hostel Facilities' },
    { src: cadetsHeroImg, alt: 'Parade Ground' },
  ];

  return (
    <section className="gallery-section" id="gallery">
      <div className="gallery-container">
        <h2 className="gallery-title">GALLERY</h2>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div className="gallery-item" key={i}>
              <img src={img.src} alt={img.alt} />
              <div className="gallery-overlay">
                <span>{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="gallery-footer">
          <a href="#gallery" className="view-gallery-btn">
            VIEW FULL GALLERY <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
