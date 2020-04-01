import { useState, useEffect } from 'react';
import { API_URL } from '../../config'

export const useHomeFetch = () => {

    const [state, setState] = useState({products: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(state)

    const fetchProducts = async endpoint => {
        setError(false);
        setLoading(true);

        try {
            const result = await (await fetch(endpoint)).json();
            setState(prev => ({
                ...prev,
                products: [...result],
                //heroImage: prev.heroImage || result.results.promote
            }))
        } catch(error) {
            setError(true);
            console.log(error);

        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts(`${API_URL}products`);
    }, [])

    return [{state, loading, error }, fetchProducts]
}

