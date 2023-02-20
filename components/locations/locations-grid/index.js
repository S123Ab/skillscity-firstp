import LocationItem from "./location-item";
import { useEffect, useState } from "react";

export default function LocationsGrid() {

    const [location, setlocation] = useState([]);

    useEffect(() => {
        getLocations();

    }, []);

    const getLocations = async() => {
        const response = await fetch('/api/locations');
        const data = await response.json();
        setlocation(data);
    }
    return (
        <div className="w-full grid grid-cols-3 gap-4">
            {location.map((location, index) => (
                <LocationItem key={index}location={location} />
            ))}
        </div>
    )
}