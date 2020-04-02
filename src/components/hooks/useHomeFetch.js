import { useState, useEffect } from 'react';
import { API_URL } from '../../config'

export const useHomeFetch = () => {

    const [state, setState] = useState({products: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchProducts = async endpoint => {
        setError(false);
        setLoading(true);

        try {
            const result = await (await fetch(endpoint)).json();
        
            setState(prev => ({
                ...prev,
                products: result,
                promoter: result[0],
                promoteImage: result[2].Product_image[0].url,
                promoteTitle: result[1].Name,
                promoteText:  result[1].Description              
            }))
        } catch(error) {
            setError(true);
            console.log(error);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchProducts(`${API_URL}/products`);
    }, [])

    return [{state, loading, error }, fetchProducts]
}

