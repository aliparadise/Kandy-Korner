import React, { useEffect, useState } from "react"

export const LocationsList = () => {
    const [locations, setLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
            .then(res => res.json())
            .then((data) => {
                setLocations(data)
            })
        },
        []
    )

    return (
        <>
            {
                locations.map(
                    (locationObject) => {
                        return <p key={`location--${locationObject.id}`}>{locationObject.address}</p>
                    }
                )
            }
        </>
    )
}