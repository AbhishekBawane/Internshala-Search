import { useState } from "react";

import "./Testimonials.css";

const testimonials = [

  {
    id: 1,
    title: "Good support and doubt solving",

    text:
      "If I put placement guarantee aside, the skills & knowledge I gained from this course are immense. What stood out for me was the quick resolution of my doubts and queries.",

    name: "Kala Chaithanya Velagapudi",

    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
  },

  {
    id: 2,

    title: "Got hired for 4 internships",

    text:
      "Internshala helped me to get me 4 internship in multiple domains and I highly recommend Internshala for students who are looking for internships and jobs.",

    name: "Anany Pratap Singh",

    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
  },

  {
    id: 3,

    title: "Got an internship at Flipkart",

    text:
      "I was getting rejected in my campus placements was so disappointed. My professor recommended Internshala's data science placement guarantee course.",

    name: "Tharun Kumar",

    image:
      "https://randomuser.me/api/portraits/men/50.jpg",
  },

  {
    id: 4,

    title: "Great platform for upskilling",

    text:
      "Internshala is really a great platform to learn skills and the team is really helpful. Whenever you drop your problems they just resolve within few hours.",

    name: "Deepesh Rai",

    image:
      "https://randomuser.me/api/portraits/men/22.jpg",
  },

  {
    id: 5,

    title: "First choice for job search",

    text:
      "Internshala has helped me get into internships and i have got many calls from hirers through internshala.",

    name: "Preethika Anand",

    image:
      "https://randomuser.me/api/portraits/women/65.jpg",
  },

];

export default function Testimonials() {

  const [index, setIndex] = useState(0);

  const prevSlide = () => {

    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const nextSlide = () => {

    if (index < testimonials.length - 2) {
      setIndex(index + 1);
    }
  };

  return (

    <section className="testimonial-section">

          <div className="testimonial-inner">
                  
                  <div className="testimonial-left">
                      
                      <div className="quote-icon">❝</div>
                       <h2>Join the pool of 21Mn+ students and get started with your career</h2>
                       <p className="rating-title">PLAY STORE RATINGS</p>
                       <div className="rating-row">
                           
                           <span className="rating-number">4.4</span>

                           <div> ⭐⭐⭐⭐⭐
                                 <p>(42K Reviews)</p>
                           </div>

                      </div>
                      <button className="playstore-btn">▶ Get it on Google Play ↗</button>

                  </div>

                  <div className="testimonial-right">
                    
                      <button className="arrow left-arrow" onClick={prevSlide}>❮</button>

                      <div className="cards-container">{
                                                         testimonials.slice(index, index + 2)
                                                         .map((item) => (
                                                                        <div className="testimonial-card" key={item.id}>

                                                                             <h3>{item.title}</h3>

                                                                             <p>{item.text}</p>

                                                                             <div className="user-info">

                                                                                 <img src={item.image} alt={item.name} />

                                                                                 <div>

                                                                                     <h4>{item.name}</h4>
                                                                                     <span>⭐⭐⭐⭐⭐</span>

                                                                                 </div>

                                                                             </div>

                                                                        </div>
                                                               ))}

                      </div>

                      <button className="arrow right-arrow" onClick={nextSlide}>❯</button>

                  </div>

          </div>
     
    </section>
  );
}