import axios from "axios";
import React, { useEffect, useState } from 'react'
import ProductItem from "../../components/product-item/ProductItem";
import { useSelector,useDispatch } from "react-redux";
import { getProducts,setLoadMoreCount } from "../../store/slices/product.slice";
export default function Products() {
    const dispatch = useDispatch();
    const products = useSelector((store) => store.productSlice.products);
    const loading = useSelector((store) => store.productSlice.loading);
    const loadMoreCount = useSelector((store) => store.productSlice.loadMoreCount);
    const error = useSelector((store) => store.productSlice.error);
   
    const onClickHandler = () => {
        console.log("onClickHandler clicked");
        dispatch(setLoadMoreCount())
    }

    useEffect(() => {
        dispatch(getProducts());
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
            <button onClick={onClickHandler} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}>Load More</button>

        </div>
    )
}
