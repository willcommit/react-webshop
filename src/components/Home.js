import React, { useState, useEffect } from 'react';
import {API_URL} from '../config';

// import components
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'

const Home = () => {
    const [state, setState] = useState({products: []});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    console.log(state)

    const fetchProducts = async endpoint => {
        setError(false);
        setLoading(true);

        try {
            const result = await (await fetch(endpoint)).json();
            console.log(result)
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

    return(
        <>
            <HeroImage />
            <SearchBar />
            <Grid />
            <MovieThumb />
            <Spinner />
            <LoadMoreBtn />
        </>
    )
}   

export default Home;