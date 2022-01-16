import React, { useEffect, useState } from "react"

export const ProductsList = () => {
    const [products, setProducts] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
        },
        []
    )


    return (
        <>
        
            {
                products.map(
                    (product) => {
                        return <p key={`product--${product.id}`}>{product.name} cost
                        {product.price}
                        {product.productType.catagory}</p>
                    
                    }
                )
            }
        </>
    )
}