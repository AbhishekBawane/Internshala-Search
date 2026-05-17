import "./ExploreLinks.css";

const sections = [

  {
    title: "Internship by Places",

    links: [
      "Internship in Bangalore",
      "Internship in Delhi",
      "Internships in Hyderabad",
      "Internship in Mumbai",
      "Internship in Chennai",
      "Internship in Pune",
      "Internship in Kolkata",
      "Internship in Gurgaon",
      "Work From Home Internships",
    ],

    viewAll: "View all internship",
  },

  {
    title: "Internship by Stream",

    links: [
      "Computer Science Internship",
      "Electronics Internship",
      "Mechanical Internship",
      "Civil Internship",
      "Marketing Internship",
      "Chemical Internship",
      "Finance Internship",
    ],

    viewAll: "View all internship",
  },

  {
    title: "Jobs by Places",

    links: [
      "Jobs in Bangalore",
      "Jobs in Delhi",
      "Jobs in Hyderabad",
      "Jobs in Gurgaon",
      "Jobs in Kolkata",
      "Jobs in Mumbai",
      "Jobs in Pune",
      "Jobs in Chennai",
      "Jobs in Noida",
    ],

    viewAll: "View all jobs",
  },

  {
    title: "Jobs by Type",

    links: [
      "Data Entry jobs",
      "Content writing jobs",
      "Digital Marketing jobs",
      "Data Science jobs",
      "Cyber Security jobs",
      "Pharma jobs",
      "Teaching jobs",
      "HR jobs",
      "MBA jobs",
    ],

    viewAll: "View all jobs",
  },

  {
    title: "Fresher Jobs by Places",

    links: [
      "Fresher Jobs in Bangalore",
      "Fresher Jobs in Delhi",
      "Fresher Jobs in Hyderabad",
      "Fresher Jobs in Chennai",
      "Fresher Jobs in Pune",
      "Fresher Jobs in Mumbai",
      "Fresher Jobs in Noida",
      "Fresher Jobs in Kolkata",
      "Fresher Jobs in Gurgaon",
    ],

    viewAll: "View all fresher jobs",
  },

  {
    title: "Fresher Jobs by Type",

    links: [
      "MBA Fresher Job",
      "HR Fresher Job",
      "Civil Fresher Job",
      "Digital Marketing Fresher Job",
      "Business Analyst Fresher Job",
      "Finance Fresher Job",
      "Accounts Fresher Job",
      "JAVA Fresher Job",
      "Software Testing Fresher Job",
    ],

    viewAll: "View all fresher jobs",
  },

  {
    title: "Career Launchpads",

    links: [
      "Web Developer Launchpad",
      "Data Science Launchpad",
      "Digital Marketing Launchpad",
      "HR Management Launchpad",
    ],

    viewAll: "View all courses",
  },

  {
    title: "Certification Courses",

    offer: true,

    links: [
      "Full Stack Web Development with AI",
      "Programming with Python with AI",
      "Complete Digital Marketing with AI",
      "Machine Learning with AI",
      "Advanced Excel with AI",
      "AutoCAD with AI",
      "Data Science with AI",
      "Programming with C and C++ with AI",
      "Financial Modeling and Valuation with AI",
    ],

    viewAll: "View all courses",
  },

];

export default function ExploreLinks() {

  return (

    <div className="explore-container">

      {sections.map((section, index) => (

        <div className="explore-section"key={index}>

          <div className="section-header">
            <p className="section-title">{section.title}</p>
            {section.offer && (
              <p className="offer-badge"> OFFER</p>
            )}
          </div>

          <div className="links-wrapper">
            {section.links.map( (link, idx) => (
                        <span key={idx} className="link-item">{link} </span>
            ))}
            <span className="view-all">{section.viewAll} →</span>
          </div>
        </div>

      ))}

    </div>
  );
}