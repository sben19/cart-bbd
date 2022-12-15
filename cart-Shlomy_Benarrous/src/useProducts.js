import { useEffect, useState } from 'react';

export default function useProducts() {
    const [products1, setProducts1] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts1(data));
    }, []);

    return products1;
}