import React, { useState, useEffect, useCallback } from 'react';
function Home() {
    const [vehicles, setVehicles] = useState([]);
    const [filteredVehicles, setFilteredVehicles] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    // Fetch vehicles on component mount
    useEffect(() => {
        fetch("http://localhost:3000/vehicles")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setVehicles(data);
                setFilteredVehicles(data);
            })
          
            .catch((error) => console.log("Error fetching data", error));
    }, []);


    // Filter vehicles based on search query
    const handleSearch = useCallback(() => {
        const newFilteredVehicles = vehicles.filter((vehicle) =>
            vehicle.make.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredVehicles(newFilteredVehicles);
    }, [vehicles, searchQuery]);

    // Handle input change for search query
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    // Re-run search when search query changes
    useEffect(() => {
        handleSearch();
    }, [searchQuery, handleSearch]);

    return (
        <>
            <main className="main-content">
                <section className="section">
                    <h2>Wheels on Wheels</h2>
                    {/* <p>We strive to offer the highest quality cars at reasonable prices.</p> */}
                    <div className="search-container">
                        <input
                            type="text"
                            placeholder="Search vehicle by make..."
                            value={searchQuery}
                            onChange={handleSearchChange}
                        />
                        <button onClick={handleSearch}>Search make</button>
                    </div>
                </section>
            </main>
            <section className="featured-properties">
                <h2>Vehicles</h2>
                <p className="featured-make">
                    {filteredVehicles.length === 0
                        ? "No matches found."
                        : "Display Available vehicles"}
                </p>
            </section>
            <section className="card-container">
                {filteredVehicles.slice(0, 15).map((vehicle) => (
                    <div key={vehicle.id} className="card">
                        <img src={vehicle.image} alt={vehicle.make} />
                        <div className="card-details">
                            <h3>Make: {vehicle.make}</h3>
                            <p>Model: {vehicle.model}</p>
                            <p>{vehicle.description}</p>
                            <p>Color: {vehicle.color}</p>
                            <p>License Plate: {vehicle.licensePlate}</p>
                            <p>Status: {vehicle.status}</p>
                        </div>
                    </div>
                ))}
            </section>
            
        </>
    );
}

export default Home;
