// InternshalaList.jsx

import { useEffect, useState } from "react";

import {fetchInternships} from "../service/api";

import InternshipCard from "./InternshalaCard";

import "./InternshalaList.css";

export default function InternshalaList({filters}) {


  const [internships, setInternships] =useState([]);
 
  const [filterInternships, setFilterInternships] = useState([])
  
  const [loading, setLoading] =useState(true);

  const [currentPage, setCurrentPage] =useState(1);


 useEffect(()=>{
     const getPosts = async () => {
         try{
          const response = await fetchInternships();

          if(!response || !response.internships_meta) return;

          const postData = Object.values(response.internships_meta);
          
          console.log(postData);

          setInternships(postData);

          setFilterInternships(postData);

         }catch(err){
          console.log(err);
         }finally{
          setLoading(false);
         }
     }
     
     getPosts();
   
 }, [])

 useEffect(()=>{
    let updatedInternshps = [...internships];

    if(filters.profile){
        updatedInternshps = updatedInternshps.filter(
            (item)=> item.title?.toLowerCase().includes(filters.profile.toLowerCase()) 
        )
    };

    if(filters.location){
        updatedInternshps = updatedInternshps.filter(
            (item) => item.location_names?.some((loc) => loc?.toLowerCase().includes(filters.location.toLowerCase()))
        )
    }

    if(filters.workFromHome){
         updatedInternshps = updatedInternshps.filter(
            (item) => item.work_from_home === true
        )
    }

    if(filters.partTime){
         updatedInternshps = updatedInternshps.filter(
            (item) => item.part_time === true
        )
    }

    if(filters.stipend && Number(filters.stipend) > 0){
        updatedInternshps = updatedInternshps.filter(
            (item) => item.stipend?.salaryValue1 >= Number(filters.stipend)                        
            );
    }

    if(filters.keyword){
         updatedInternshps = updatedInternshps.filter(
            (item) => item.title?.toLowerCase().includes(filters.keyword.toLowerCase())
            || item.company_name?.toLowerCase().includes(filters.keyword.toLowerCase())
            || item.location_names?.some((loc) => loc?.toLowerCase().includes(filters.keyword.toLowerCase()))
        )
    }

    if(filters.maxDuration && Number(filters.maxDuration)){
         updatedInternshps = updatedInternshps.filter(
            (item) => { const duration = parseInt(item.duration); 
              return(duration <= Number(filters.maxDuration));
            });
    }

    if(filters.forWomen){
      updatedInternshps = updatedInternshps.filter(
        (item) => item.is_internship_for_women === true
      );
    }

    setFilterInternships(updatedInternshps);

    setCurrentPage(1);
}, [filters, internships])


 const cardsPerPage = 5;

  const lastCardIndex =currentPage * cardsPerPage;

  const firstCardIndex = lastCardIndex - cardsPerPage;

  const currentInternships =
    filterInternships.slice(firstCardIndex,lastCardIndex);

  const totalPages =
    Math.ceil(filterInternships.length /cardsPerPage);


  if (loading) {

    return (

      <div className="loading"> Loading internships...  </div>
    );
  }

  return (

    <div className="internshala-list-container">

      <div className="list-header">
        <h2>{filterInternships.length}{" "}total internships</h2>
      </div>

      <div className="internship-list">

        {currentInternships.map(
          (internship) => (
                   <InternshipCard key={internship.id} internship={internship}/>
          ))}

      </div>

      <div className="pagination">

        <button className="page-btn" disabled={currentPage === 1}
          onClick={() => setCurrentPage( currentPage - 1)}>
               Previous
        </button>

        {[...Array(totalPages)].map(
          (_, index) => (

          <button
            key={index}

            className={
              currentPage === index + 1
                ? "active-page"
                : "page-number"
            }

            onClick={() =>
              setCurrentPage(index + 1)
            }
          >
            {index + 1}
          </button>

        ))}

        <button className="page-btn" disabled={ currentPage === totalPages}
            onClick={() =>setCurrentPage(currentPage + 1)}>
               Next
        </button>

      </div>

    </div>
  );
}