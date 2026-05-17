// BottomSections.jsx

import { useState } from "react";

import "./BottomSection.css";

export default function BottomSections() {

  const sections = [

    {
      title:
        "Internships by Profile",

      items: [

        "Marketing Internships",
        "Content Writing Internships",
        "Computer Science Internships",
        "Digital Marketing Internships",
        "Data Science Internships",
        "HR Internships",

        "Work From Home Marketing Internships",
        "Work From Home Content Writing Internships",
        "Work From Home Computer Science Internships",
        "Work From Home Digital Marketing Internships",
        "Work From Home Data Science Internships",
        "Work From Home HR Internships"
      ]
    },

    {
      title:
        "Internships by Location",

      items: [

        "Internships in Delhi",
        "Internships in Mumbai",
        "Internships in Bangalore",
        "Internships in Hyderabad",
        "Internships in Kolkata",
        "Internships in Chennai",

        "Work From Home Internships in Delhi",
        "Work From Home Internships in Mumbai",
        "Work From Home Internships in Bangalore",
        "Work From Home Internships in Hyderabad",
        "Work From Home Internships in Kolkata",
        "Work From Home Internships in Chennai"
      ]
    },

    {
      title:
        "Jobs by Profile",

      items: [

        "Marketing Jobs",
        "Content Writing Jobs",
        "Computer Science Jobs",
        "Digital Marketing Jobs",
        "Data Science Jobs",
        "HR Jobs",

        "Work From Home Marketing Jobs",
        "Work From Home Content Writing Jobs",
        "Work From Home Computer Science Jobs",
        "Work From Home Digital Marketing Jobs",
        "Work From Home Data Science Jobs",
        "Work From Home HR Jobs"
      ]
    },

    {
      title:
        "Jobs by Location",

      items: [

        "Jobs in Delhi",
        "Jobs in Mumbai",
        "Jobs in Bangalore",
        "Jobs in Hyderabad",
        "Jobs in Kolkata",
        "Jobs in Chennai",

        "Work From Home Jobs in Delhi",
        "Work From Home Jobs in Mumbai",
        "Work From Home Jobs in Bangalore",
        "Work From Home Jobs in Hyderabad",
        "Work From Home Jobs in Kolkata",
        "Work From Home Jobs in Chennai"
      ]
    },

    {
      title:
        "Top Companies",

      items: [

        "Arihant Publications",
        "InAmigos Foundation",
        "Edify Equity",
        "ViralChilly",
        "Odisha Development Management Program",
        "Argmac",

        "Epitome Design Studio",
        "Nishant Mittal",
        "Masaledani Media",
        "Capes India",
        "Filmy Curry Private Limited",
        "Podha Protocol"
      ]
    },

    {
      title:
        "Latest Jobs/Internships",

      items: [

        "Jobs",
        "Part Time Fresher Jobs",
        "Work From Home Fresher Jobs",
        "Work From Home Jobs",
        "Fresher Jobs",
        "Work From Home Internships",

        "Part Time Work From Home Fresher Jobs",
        "Part Time Work From Home Jobs",
        "Part Time Jobs",
        "Work From Home Part Time Internships",
        "Part Time Internships"
      ]
    },

    {
      title:
        "Latest Internships/Jobs for Women",

      items: [

        "Internships for Women",
        "Work From Home Internships for Women",
        "Part Time Internships for Women",
        "WFH Part Time Jobs for Women",

        "Jobs for Women",
        "Work From Home Jobs for Female",
        "Part Time Jobs for Women"
      ]
    }
  ];

  const [openSections, setOpenSections] = useState({0: true});

 const toggleSection = (index) => {

    setOpenSections((prev) => ({

      ...prev,

      [index]: !prev[index]
    }));
  };

  return (

    <div className="bottom-sections">

      <h2 className="bottom-heading"> Apply to 7309 Internships on Internshala.com</h2>

      {sections.map((section, index) => (

        <div className="bottom-section" key={index}>

          <div className="section-header"
                 onClick={() =>toggleSection(index)}>

              <h3>{section.title}</h3>
              <span>{openSections[index]? "⌃": "⌄"}</span>

          </div>

          {openSections[index] && (
            <div className="section-content">
                   {section.items.map((item, idx) => (
                          <div className="section-item"key={idx}>• {item}</div>
                   ))}
            </div>
          )}

        </div>
      ))}

    </div>
  );
}