// FAQSection.jsx

import { useState } from "react";

import "./FAQSection.css";

export default function FAQSection() {

  const faqs = [

    {
      question:
        "How do I search for internships in my preferred category/profile?",

      answer:
        "Click here if you are looking for internships. Next, update your preferred profile or location on the web page and use relevant filters to find internships as per your preference."
    },

    {
      question:
        "How can I apply for an internship on Internshala?",

      answer: (
        <div>

          <p>

            You can apply for an internship on Internshala using the following steps-

          </p>

          <ul>

            <li>
              Click on 'View Details'
              to get details about the company and the profile.
            </li>

            <li>
              Go through the details thoroughly and apply for internships where your profile matches the requirements.
            </li>

            <li>
              Click on 'Apply Now' and follow the steps to submit your application.
            </li>

          </ul>

          <p>

            If you are not registered on Internshala,
            register yourself today to find your dream internship.

          </p>

        </div>
      )
    },

    {
      question:
        "Do I need to pay to apply for an internship on Internshala?",

      answer:
        "Absolutely not! Internshala is a free platform. You don't have to pay anything to apply for internships."
    },

    {
      question:
        "What all internships are available on Internshala?",

      answer:
        "You can find 45,000+ internships, work from home internships and part time internships in your preferred location or profile on Internshala."
    },

    {
      question:
        "Are there any courses that offer a placement?",

      answer: (
        <ul>

          <li>Digital Marketing course with placement</li>

          <li>Data Science course with placement</li>

          <li>Full Stack Developer course with placement</li>

          <li>Product Management course with placement</li>

          <li>UI UX Design course with placement</li>

          <li>HR Course with placement</li>

          <li>Electric Vehicle course with placement</li>

          <li>Banking Sales course with placement</li>

          <li>Software Testing course with placement</li>

        </ul>
      )
    },

    {
      question:
        "How do I get certified online?",

      answer: (
        <ul>

          <li>Web Development Course</li>

          <li>Python Course</li>

          <li>Ethical Hacking Course</li>

          <li>Java Course</li>

          <li>Digital Marketing Course</li>

          <li>Data Science Course</li>

          <li>Tally Course</li>

          <li>Machine Learning Course</li>

          <li>UI UX Design Course</li>

        </ul>
      )
    }
  ];

  const [openIndex, setOpenIndex] =useState(0);

  const toggleFAQ = (index) => {

    if (openIndex === index) {

      setOpenIndex(null);

    } else {

      setOpenIndex(index);
    }
  };

  return (

    <div className="faq-container">

        <div className="faq-inner">
              <div className="faq-title">Frequently asked questions</div>
                 {faqs.map((faq, index) => (
                  <div className="faq-item"key={index}>
                       <div className="faq-question" onClick={() => toggleFAQ(index)}>
                       <h3>Q. {faq.question}</h3>                   
                       <span>{openIndex === index ? "−" : "+"}</span>                 
                  </div>

                  {openIndex === index && (
                       <div className="faq-answer">{faq.answer}</div>
                   )}

              </div>
              ))}
        </div>

    </div>
  );
}