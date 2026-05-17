import "./Footer.css";

export default function Footer() {

  return (

    <footer className="footer">
      
      <div className="footer-top">

        <div className="footer-column">

          <p>About us</p>
          <p>We're hiring</p>
          <p>Hire interns for your company</p>
          <p>Post a Job</p>
          <p>Competitions</p>

        </div>

        <div className="footer-column">

          <p>Team Diary</p>
          <p>Blog</p>
          <p>Our Services</p>
          <p>Free Job Alerts</p>

        </div>


        <div className="footer-column">

          <p>Terms & Conditions</p>
          <p>Privacy</p>
          <p>Contact us</p>
          <p>Annual Returns</p>
          <p>Grievance Redressal</p>
          <p>Resume Maker</p>

        </div>


        <div className="footer-column">

          <p>Sitemap</p>
          <p>College TPO registration</p>
          <p>List of Companies</p>
          <p>Jobs for Women</p>

        </div>

      </div>


      <div className="footer-bottom">

        <div className="store-buttons">

          <img
            src="https://internshala.com/static/images/common/google_play_store_button.svg"
            alt="google-play"
          />

          <img
            src="https://internshala.com/static/images/common/apple_app_store_button.svg"
            alt="app-store"
          />

        </div>


        <div className="social-icons">

          <i className="fa-brands fa-instagram"></i>

          <i className="fa-brands fa-twitter"></i>

          <i className="fa-brands fa-youtube"></i>

          <i className="fa-brands fa-linkedin"></i>

        </div>

        <div className="copyright">

          © Copyright 2026 Internshala
          <br />
          (Scholiverse Educare Private Limited)

        </div>

      </div>

    </footer>
  );
}