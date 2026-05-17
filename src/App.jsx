import './App.css';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter"
import InternshalaList from './components/InternshalaList'; 
import { useState } from 'react';
import BottomSections from './components/BottomSection';
import Testimonials from './components/Testimoni;als';
import FAQSection from './components/FAQSection';
import ExploreLinks from './components/ExploreLinks';
import Footer from './components/Footer';
function App() {
  
   const [filters, setFilters] = useState({
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
                                           })
return (
    <div className='app' >
        <Navbar/>
            
        <div className ="layout">
            <div className='main-layout'>
                <div className='filter-section'><Filter filters ={filters} setFilters={setFilters}/></div>
                <div className='list-section'>
                    <InternshalaList filters={filters}/>
                    <BottomSections/>
                 </div>
            </div>
        </div>
        
        <FAQSection/>

        <Testimonials />

        <ExploreLinks/>
        
        <Footer/>
    </div>
  );
}

export default App;
