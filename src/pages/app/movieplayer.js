import React, {useEffect, useState} from "react";
import { Landingpagenav } from "../../widgets";
import ReactPlayer from 'react-player';
import axios from "axios";
const Movieplayer = ({ movie}) => {
    const [Movie, setMovie] = useState([]);
    // const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchMovie = async () => {
            const result = await axios(`https://rewind-test.herokuapp.com/movies/60112ae48fb50d020c2dcbac`)
            console.log(result.data.message);

            setMovie(result.data.message);
            // setIsLoading(false);
        }
        fetchMovie();
    }, [])

    return (
        <>
            <Landingpagenav/>        
            <section>
                {console.log(movie)}
                {/* <ReactPlayer url={Movie} /> */}
            </section>
        </>
    )
}

export {Movieplayer}
