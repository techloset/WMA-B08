// TabOne.js
import { getProducts } from '@/store/slices/product.slice';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
// Update the import path below to match the actual location of your store file
import type { AppDispatch } from '@/store/store';
import { FlatList } from 'react-native';

export default function TabOne() {
    const dispatch = useDispatch<AppDispatch>();

    const products = useSelector((state) => state.productSlice.products);
    console.log('Products:', products);



    useEffect(() => {
        dispatch(getProducts())
    }, []);
    return (
        <View style={{ flex: 1, backgroundColor: '#f9c2ff', justifyContent: 'center', alignItems: 'center' }}>
            <Text>Tab One</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
                        <Text>{item.title}</Text>
                        <Text>{item.description}</Text>
                        <Text>${item.price}</Text>
                    </View>
                )}
            />
        </View>
    );
}
