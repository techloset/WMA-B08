import axios from "axios";
import React, { useEffect, useState } from 'react'
import ProductItem from "../../components/product-item/ProductItem";
export default function Products() {
    const [products, setProducts] = React.useState([]);
    const [loadMoreCount, setLoadMoreCount] = React.useState(1);
    const [loading, setLoading] = React.useState(false);
    const getProducts = async () => {
        try {
            const response = await axios.get("https://fakestoreapi.com/products");
            console.log(response.data);
            setProducts(response.data);
        }
        catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);
    return (
        <div style={{ color: 'wheat' }}>
            <h1>Products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
                {loading && <h1>Loading...</h1>}
                {products.slice(0, loadMoreCount).map((product) => {
                    return <ProductItem key={product.id} product={product} />
                })}
            </div>
            <button onClick={() => setLoadMoreCount(loadMoreCount + 1)} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Load More</button>

        </div>
    )
}
