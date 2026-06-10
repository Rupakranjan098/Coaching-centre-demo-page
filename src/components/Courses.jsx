import React from 'react';
import { ArrowRight, GraduationCap, Shield, UserCheck, BookOpen, Anchor, Landmark } from 'lucide-react';
import fighterJetImg from '../assets/fighter_jet.png';
import navyShipImg from '../assets/navy_ship.png';
import cadetsHeroImg from '../assets/cadets_hero.png';

export default function Courses() {
  const coursesData = [
    {
      id: 'nda',
      title: 'NDA',
      sub: 'National Defence Academy',
      eligibility: 'Class 11th & 12th Students',
      icon: <Shield size={16} />,
      img: cadetsHeroImg,
    },
    {
      id: 'cds',
      title: 'CDS',
      sub: 'Combined Defence Services',
      eligibility: 'Graduates',
      icon: <GraduationCap size={16} />,
      img: cadetsHeroImg,
    },
    {
      id: 'afcat',
      title: 'AFCAT',
      sub: 'Air Force Common Admission Test',
      eligibility: 'Graduates',
      icon: <UserCheck size={16} />,
      img: fighterJetImg,
    },
    {
      id: 'ssc',
      title: 'SSC (Tech)',
      sub: 'Staff Selection Commission (Tech)',
      eligibility: 'Graduates',
      icon: <BookOpen size={16} />,
      img: cadetsHeroImg,
    },
    {
      id: 'navy',
      title: 'NAVY (AA/SSR)',
      sub: 'Indian Navy Entrance',
      eligibility: '12th Pass / Graduates',
      icon: <Anchor size={16} />,
      img: navyShipImg,
    },
    {
      id: 'foundation',
      title: 'FOUNDATION',
      sub: 'Class 9th & 10th (Defence Foundation)',
      eligibility: 'Students',
      icon: <Landmark size={16} />,
      img: cadetsHeroImg,
    },
  ];

  return (
    <section className="courses-section" id="courses">
      <div className="section-header">
        <div className="section-title-wrap">
          <span className="section-tag">OUR COURSES</span>
          <h2>Prepare for a Glorious Career</h2>
        </div>
        <a href="#courses" className="view-all-btn">
          VIEW ALL COURSES <ArrowRight size={16} />
        </a>
      </div>

      <div className="courses-grid">
        {coursesData.map((course) => (
          <div className="course-card" key={course.id}>
            <div className="course-img-wrapper">
              <img src={course.img} alt={course.title} className="course-img" />
              <div className="course-badge">
                <span className="course-badge-icon">{course.icon}</span>
              </div>
            </div>
            <div className="course-info">
              <h3 className="course-title">{course.title}</h3>
              <p className="course-sub">{course.sub}</p>
              <div className="course-footer">
                <span className="course-eligibility">{course.eligibility}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
