import "./InternshalaCard.css";


export default function InternshipCard({internship}){
      
      if(!internship){
        return (<p>Loading</p>)
      }

  return(

    <div className="internship-card" key ={internship.id}>

      <div className="card-top">
        
        <div>
          <h2 className="job-title">{internship.title}</h2>

          <div className="company-row">

            <p className="company-name">{internship.company_name}</p>
            
            <span className="hiring-badge">Actively hiring</span>

          </div>

        </div>

        <img src={internship.company_logo? internship.company_logo : "https://internshala.com/static/images/search/placeholder_logo.svg"}
          alt="company-logo"className="company-logo" />

      </div>


      <div className="job-details">

        <div className="detail-item">
          🏠<span>{internship.location_name?.[0] || "Work from home"}</span>
        </div>

        <div className="detail-item">
          💵<span>{internship.stipend?.salary || "Unpaid"}</span>
        </div>

        <div className="detail-item">
          📅<span>{internship.duration || "1 Month"}</span>
        </div>

      </div>

      <p className="description">
         {internship.short_discription || internship.title}
      </p>

      <div className="skills">

        {
          internship.skills?.lenght > 0? 

          internship.skills.map((skill, index) =>(
                    <span key = {index}>{skill}</span>
                    )
                    ):
                    <span>No Skill Metioned</span>
        }

      </div>

      <div className="card-footer">
        
        <div className="footer-left">

          <span className="posted-time">
            ⏰ {internship.posted_by_label} || "Few Hours Ago"
          </span>

          <span className="early-applicant">
            ⚡ Be an early applicant
          </span>

          <span className="part-time">
            {
              internship.employment_type || "Part Time"
            }
          </span>

        </div>

        <button className="apply-btn">
          Apply now
        </button>

      </div>

    </div>
  );
}