import React, { useState ,useEffect } from "react";
import { useSearchParams } from "react-router-dom";
function home(){
    const [vehicles ,setVehicles] = useState([]);
    const [filteredVehicles, setfilteredVehicles]=useState([])
    const [searchQuery, setSearchQuery] = useState("");



useEffect(()=> {
    fetch ("http://localhost:3000/vehicles ")
    .then((response)=> response.json())
    .then((vehicles)=>{
        console.log(vehicles);
        setVehicles(vehicles);
        setfilteredVehicles(vehicles)
        .catch((error)=>console.log("Error fetching data",error));

    },[]);
    const handleSearch =()=>{
        const newFiltered = vehicles.filter((vehicle)=>
        vehicle.make.toLoweCase().includes(searchQuery.toLowerCase())
        );
        setfilteredVehicles(newFilteredVehicles);
        

        const handleSearchChange =(e) =>{
            searchQuery(e.target.value);
        };
        useEffect(()=>{
            handleSearch();
        }, [searchQuery]);

        return(
            <>
            <main className="main-content">
                <section className="section">
                    <h2>wheels on wheels</h2>
                    <p>We strive to offer the highest quality cars at reasonable prices.</p>
                    <div className="search-container">
                        <input
                        type="text"
                        placeholder="search vehicle by make..."
                        value= {searchQuery}
                        onchange={handleSearchChange}
                        />
                        <button onClick={handleSearch}>Search make</button>

                    </div>
                </section>   
            </main>
            <section className="featured-properties">
                <h2>vehicles</h2>
                <p className="featured-make">
                    {filteredVehicles.length === 0
                      
                      ?"No matches found."
                      :"Display Available vehicles"}
                    

                </p>
            </section>
            
            </>

        );
    
        }
        )

        }

    }
}
)
}
export default home;