import React, {useState, useEffect} from 'react'
import axios from "axios";
import {Card} from "../../components";
import {Landingpagenav} from "../../widgets"
const Landingpage = () => {

    const [movies, setMovies] =  useState([]);
    const [isLoading, setIsLoading] =  useState(true);

    useEffect(() => {
        const fetchMovies = async () => {
            const result = await axios(`https://rewind-test.herokuapp.com/`)
            console.log(result.data.message);

            setMovies(result.data.message);
            setIsLoading(false);
        }
        fetchMovies();
    }, [])
    return (
        <main>
            
            <section className="intro-section">

            </section>
            <section>
                <Card isLoading={isLoading} movies={movies}/>
            </section>
        </main>
    )
}

export {Landingpage}
