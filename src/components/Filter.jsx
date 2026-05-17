import {useState } from "react";
import './Filter.css'


export default function Filter({filters, setFilters}){
    const [showMore, setShowMore] = useState(false);

 


    const handleChange = (e) =>{
        const {
                 name, value, type, checked
               } = e.target;

        setFilters((prev) => ({

            ...prev,

            [name]:
                 type === "checkbox"? checked: value
        }));       
    };

    const clearFilter = () =>{
        setFilters({
            profile : "",
            location: "",
            workFromHome: false,
            partTime: false,
            stipend:0,
            startingDate: "",
            maxDuration: "",
            jobOffer: false,
            earlyApplicant: false,
            forWomen:false,
            fastResponse: false,
            keyword: ""
        });
    };

    return(
        <div className="filters-container">
            
            <div className="filter-box">
               
                <h3 className="filter-header" style={{textAlign:'center'}}>Filters</h3>
               
                <div className="filter-group">
                     <label>Profile</label>
                     <input type="text" placeholder="e.g Frontend Dev.." 
                     onChange={handleChange} value={filters.profile} name="profile"/>
                </div>
                
                <div className="filter-group">
                    <label>Location</label>
                    <input type="text" placeholder="e.g Indore"
                    onChange={handleChange} value={filters.location_name} name="location"/>
                </div>

                <div className="checkbox-group">
                    <label>
                            <input type="checkbox" name="workFromHome" 
                            checked={filters.workFromHome} onChange={handleChange}/>Work From Home
                    </label>
                    <label>
                            <input type="checkbox" name="partTime"
                            checked={filters.partTime} onChange={handleChange}/>Part Time
                    </label>
                </div>

                <div className="filter-group">
                     <label>
                         Desired minimun monthly Stipend 
                     </label>
                     <input type="range" min="0" max="10000" step="2000" className="range-slider"
                       value={filters.stipend} onChange={handleChange} name ="stipend"/>
                     <div className="stipend-values">
                        <span>0₹</span>
                        <span>2k₹</span>
                        <span>4k₹</span>
                        <span>6k₹</span>
                        <span>8k₹</span>
                        <span>10k₹</span>
                     </div>
                </div>
                 
                 <p className="view-more" onClick={()=>setShowMore(!showMore)}>
                     {showMore? "View less filters ▲":"View more filters ▼"}
                 </p>

                 {showMore && (
                    <div className="more-filter">
                         
                         <div className="filter-group">
                            <label>Starting From (or after)</label>
                            <input type="date" placeholder="Choose Date"
                            value={filters.startingDate} onChange={handleChange} name= "startingDate"/>
                         </div>
                         
                         <div className="filter-group">
                             <label>Max. Duration (months)</label>
                             <input type="number" placeholder="Chosse Duration"  name ="maxDuration"
                             value={filters.maxDuration} onChange={handleChange}/>
                         </div>

                        <div className="checkbox-group">
                            <label>
                                <input type="checkbox" name="jobOffer"
                                checked={filters.jobOffer} onChange={handleChange}/>
                                Interships with job offer
                            </label>
                            <label>
                                <input type="checkbox" name = "fastResponse"
                                checked={filters.fastResponse} onChange={handleChange}/>
                                Fast Response
                            </label>
                            <label>
                                <input type="checkbox" name="earlyApplicant"
                                checked={filters.earlyApplicant} onChange={handleChange}/>
                                Early Applicant
                            </label>
                            <label>
                                <input type="checkbox" name="forWomen"
                                checked={filters.forWomen} onChange={handleChange}/>
                                Interships For Women
                            </label>

                        </div>

                    </div>
                 )}

            </div>

            <div className="clear-container">
                <button className="clear-btn" onClick={clearFilter}>Clear All</button>
            </div>

            <div className="search-box">
                <h2>Keyword Search</h2>
                <div>
                     <input type="text" placeholder="e.g. Design, Mumbai, Infosys" 
                       value={filters.keyword} onChange={handleChange} name="keyword"/>
                     <button>
                    🔍
                     </button>
                </div>
            </div>

        </div>
    )
}