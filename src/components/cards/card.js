import React from 'react';
import "./cards.css";
// import {Junglebook} from "../../assets"

const Card = ({ movies, isLoading }) => {

    return isLoading ? <h1>Loading....</h1> : <main>
        {/* this.state.movies = movies */}
            {movies.map( movie => (
                <h1>{movie.title}</h1>
            ))}
    </main>
    // return (
    //     <main>
    //     <section className="card-container">
    //         <div className="card-body">
    //             <section className="card-image">
    //                 <img src={Junglebook} alt="poster"/> 
    //             </section>
    //             <section className="card-title">
    //                 <h4>Card Title</h4>
    //             </section>
    //             <section className="card-text">
    //                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
    //             </section>
    //             <footer className="card-footer">
    //                 <a href="google.com">Learn More</a>
    //             </footer>
    //         </div>
    //     </section>
      
    //     </main>
        
    // )
}

export {Card}
