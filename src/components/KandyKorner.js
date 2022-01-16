import React from "react";
import { LocationsList } from "./locations/LocationsList";
import { ProductsList } from "./products/ProductsList";

export const KandyKorner = () => {
    return (
        <>
            <h1>Kandy Korner</h1>

            <h2>Locations List</h2>
            <LocationsList />
            
            <h2>Products List</h2>
            <ProductsList />
        </>
    )
}