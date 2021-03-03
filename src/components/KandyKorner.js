import React from "react";
// import { Route, Redirect } from "react-router-dom";
import { LocationList } from "./location/LocationList"
import { LocationProvider} from './location/LocationProvider'
import './KandyKorner.css';

export const KandyKorner = () => (
    <>
        <LocationProvider>
            <h3>Locations</h3>
            <LocationList />
        </LocationProvider>
        
    </>
)