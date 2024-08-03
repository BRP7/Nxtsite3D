import React from 'react';
import './Portfolio.css';

function Portfolio() {
  return (
    <section className="portfolio">
      <h1>Our Work</h1>
      <div className="portfolio-grid">
        <div className="portfolio-item">Project 1</div>
        <div className="portfolio-item">Project 2</div>
        <div className="portfolio-item">Project 3</div>
        {/* Add more items */}
      </div>
    </section>
  );
}

export default Portfolio;
