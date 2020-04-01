import React, { useState, useEffect } from 'react';
import {API_URL} from '../config';

// import components
import HeroImage from './elements/HeroImage'
import SearchBar from './elements/SearchBar'
import Grid from './elements/Grid'
import Spinner from './elements/Spinner'
import MovieThumb from './elements/MovieThumb'
import LoadMoreBtn from './elements/LoadMoreBtn'

// import custom hooks
import { useHomeFetch } from './hooks/useHomeFetch'

const Home = () => {

    const [{state, loading, error }, fetchProducts] = useHomeFetch();

    console.log(state)

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