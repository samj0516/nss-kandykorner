import React, { useContext, useEffect } from "react"
// import { useHistory } from 'react-router-dom'
import { LocationContext } from "./LocationProvider"
import { LocationCard } from "./LocationCard"
import "./Location.css"


export const LocationList = () => {
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getLocations()
    }, [])

    const locationCardMap = locations.map(location => {
        if(location.handicapAccessible === true){
            location.handicapAccessible = "Yes"
        }else{
            location.handicapAccessible = "No"
        }
        return <LocationCard key={location.id} location={location} />
        })

 return (
    <>
        <div className="locations">
      
            
                {locationCardMap}
            
        </div>
    </>
    )
}