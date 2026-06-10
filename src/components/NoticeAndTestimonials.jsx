import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

export default function NoticeAndTestimonials() {
  const notices = [
    { tag: 'NEW', title: 'NDA 2 2024 – New Batch Admission Open', date: '20 May 2024' },
    { tag: 'INFO', title: 'Weekly Test Schedule – May 2024', date: '18 May 2024' },
    { tag: 'EXAM', title: 'AFCAT 01/2024 – Exam Notification', date: '15 May 2024' },
    { tag: 'INFO', title: 'Holiday Notice – 26 May 2024', date: '12 May 2024' },
    { tag: 'IMPORTANT', title: 'CDS 2 2024 – Important Instructions', date: '10 May 2024' },
  ];

  const testimonials = [
    {
      name: 'Rohan Singh',
      course: 'NDA 155 Course',
      text: 'The guidance and discipline here helped me clear NDA. Best decision of my life!',
      stars: 5,
    },
    {
      name: 'Anjali Sharma',
      course: 'CDS 2023',
      text: 'Excellent faculty, regular tests and personal attention. Highly recommended!',
      stars: 5,
    },
    {
      name: 'Vikram Yadav',
      course: 'AFCAT 2023',
      text: 'The study material and mentorship are top class. Thank you Trooper\'s!',
      stars: 5,
    },
  ];

  const getTagClass = (tag) => {
    const map = {
      NEW: 'tag-new',
      INFO: 'tag-info',
      EXAM: 'tag-exam',
      IMPORTANT: 'tag-important',
    };
    return map[tag] || 'tag-info';
  };

  return (
    <section className="notice-testimonials-section" id="notice">
      <div className="nt-container">
        {/* Notice Board */}
        <div className="notice-board">
          <div className="nt-header">
            <h2>NOTICE BOARD</h2>
            <a href="#notice" className="view-all-link">
              VIEW ALL NOTICES <ArrowRight size={14} />
            </a>
          </div>
          <ul className="notice-list">
            {notices.map((n, i) => (
              <li key={i} className="notice-item">
                <span className={`notice-tag ${getTagClass(n.tag)}`}>{n.tag}</span>
                <span className="notice-title">{n.title}</span>
                <span className="notice-date">{n.date}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2>WHAT OUR STUDENTS SAY</h2>
          <div className="testimonial-cards">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-header">
                  <div className="testimonial-avatar">
                    {t.name.charAt(0)}
                  </div>
                  <div className="testimonial-meta">
                    <h4>{t.name}</h4>
                    <p>{t.course}</p>
                  </div>
                </div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-stars">
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <Star key={si} size={16} fill="#e8a61e" color="#e8a61e" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
