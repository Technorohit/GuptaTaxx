import React from 'react';

const Testimonial = ({ testimonial }) => {
  return (
    <div className="testimonial">
      <div className="testimonial-text">
        <p>{testimonial.text}</p>
      </div>
      <div className="testimonial-author">
        <img src={testimonial.avatar} alt={testimonial.name} />
        <h3>{testimonial.name}</h3>
        <p>{testimonial.position}</p>
      </div>
    </div>
  );
};

export default Testimonial;