

import { useState } from "react";
import "./Navbar.css";

import logo from "../assets/internshala_og_image.jpg";

export default function Navbar() {


  const [activeInternship, setActiveInternship] =
    useState("Top Locations");

  const internshipMenus = {

    "Top Locations": [
      "Work from home",
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internship in Hyderabad",
      "Internship in Mumbai",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Jaipur",
      "International Internship",
      "View all internships"
    ],

    "Profile": [
      "Computer Science Internship",
      "Marketing Internship",
      "Finance Internship",
      "Graphic Design Internship",
      "Architecture Internship",
      "Mechanical Internship",
      "HR Internship",
      "Digital Marketing Internship",
      "Law Internship",
      "Electronics Internship",
      "Content Writing Internship",
      "Civil Internship",
      "Campus Ambassador Program",
      "View all internships"
    ],

    "Top Categories": [
      "Engineering Internship",
      "Business/MBA Internship",
      "Humanities Internship",
      "Science Internship",
      "Internships with Job Offer",
      "Part-Time Jobs/Internships",
      "Internships for Women",
      "View all internships"
    ],

    "Explore More Internships": [
      "Internships by Location",
      "Internships by Company",
      "Virtual Internships",
      "Summer Internships"
    ]
  };

  const [activeJobs, setActiveJobs] =
    useState("Top Locations");

  const jobsMenus = {

    "Top Locations": [
      "Work from home",
      "Jobs in Bangalore",
      "Jobs in Delhi",
      "Jobs in Hyderabad",
      "Jobs in Gurgaon",
      "Jobs in Kolkata",
      "Jobs in Mumbai",
      "Jobs in Pune",
      "Jobs in Chennai",
      "Jobs in Noida",
      "Jobs in Jaipur"
    ],

    "Top Categories": [
      "Engineering Jobs",
      "Business Jobs",
      "Marketing Jobs",
      "Finance Jobs",
      "Remote Jobs",
      "Part Time Jobs"
    ],

    "Fresher Jobs": [
      "Fresher Software Jobs",
      "Fresher Marketing Jobs",
      "Fresher Finance Jobs",
      "Graduate Jobs"
    ],

    "Explore More Jobs": [
      "Jobs by Company",
      "Jobs by Location",
      "Remote Jobs",
      "View all jobs"
    ]
  };

  const coursesMenu = [

    {
      title: "Certification Courses",

      items: [
        "Artificial Intelligence and Machine Learning",
        "Microsoft Generative AI",
        "Full Stack Web Development with AI",
        "Programming with Python with AI",
        "Complete Digital Marketing with AI",
        "Machine Learning with AI",
        "Advanced Excel with AI",
        "View 70+ more courses"
      ]
    },

    {
      title: "Career Launchpads",

      items: [
        "Web Developer Launchpad",
        "Data Science Launchpad",
        "Digital Marketing Launchpad",
        "HR Management Launchpad"
      ]
    },

    {
      title: "Online Degrees",

      items: [
        "Online MBA",
        "Online BCA",
        "Online MCA",
        "Online BBA",
        "Online MA",
        "Online MSc",
        "View all"
      ]
    },

    {
      title: "Study Abroad",

      items: [
        "USA",
        "UK",
        "Canada",
        "Germany",
        "Australia",
        "France",
        "UAE",
        "View all"
      ]
    }
  ];

  return (

    <nav className="navbar">

      <div className="navbar-container">

        <div >
            <img src= {logo} alt="logo-image" className="logo"/>
        </div>


        <div className="nav-links">

          <div className="nav-item">

            <div className="nav-title">
              Internships
              <span>▼</span>
            </div>

            <div className="mega-menu">

              <div className="left-menu">

                {Object.keys(internshipMenus).map((menu) => (

                  <p key={menu} className={activeInternship === menu? "active": ""}
                    onMouseEnter={() =>setActiveInternship(menu)}>
                    {menu}
                  </p>
                ))}

              </div>

              <div className="right-menu">
                {internshipMenus[activeInternship]
                          .map((item, index) => (
                        <p key={index}> {item}</p>
                  ))}
              </div>

            </div>

          </div>

          <div className="nav-item">

            <div className="nav-title">
              Courses
              <span className="offer">
                OFFER
              </span>
              <span>▼</span>
            </div>

            <div className="courses-dropdown">

              {coursesMenu.map((section, index) => (

                <div
                  className="course-column"
                  key={index}
                >

                  <h3>{section.title}</h3>

                  {section.items.map((item, i) => (

                    <p key={i}>
                      {item}
                    </p>

                  ))}

                </div>

              ))}

            </div>

          </div>

          <div className="nav-item">

            <div className="nav-title">
              Jobs
              <span>▼</span>
            </div>

            <div className="mega-menu">

              <div className="left-menu">

                {Object.keys(jobsMenus).map((menu) => (

                  <p key={menu} className={activeJobs === menu ? "active": ""}
                    onMouseEnter={() =>setActiveJobs(menu)}>
                    {menu}
                  </p>

                ))}

              </div>

              <div className="right-menu">

                {jobsMenus[activeJobs]
                              .map((item, index) => (
                             <p key={index}>{item}</p>

                 ))}

              </div>

            </div>

          </div>

          <div className="nav-item">

            <div className="nav-title">
              Login / Register
              <span>▼</span>
            </div>

            <div className="login-dropdown">

              <p>Register as a student</p>

              <p>Register as an employer</p>

              <p>Login</p>

            </div>

          </div>

        </div>

      </div>

    </nav>
  );
}