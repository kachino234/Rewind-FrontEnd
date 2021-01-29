import React from "react";
import "./cards.css";
import { SnapBg, Ssnap, Fsnap, Tsnap } from "../../assets";

const MovieModal = ({movieModal, setMovieModal}) => {
    return (
        <>
             {movieModal ? (
            <section className="movie-modal-background">
                <div className="movie-modal-box" movieModal={movieModal}>
                    <div>
                        <img src={SnapBg} alt='poster'/>
                        <ul className="movie-snapshots">
                            <li>

                            </li>
                            <li>
                                <img src={SnapBg} alt='poster' />
                            </li>
                            <li>
                            <img src={Fsnap} alt='poster' />
                            </li>
                            <li>
                            <img src={Ssnap} alt='poster' />
                            </li>
                            <li>
                            <img src={Tsnap} alt='poster' />
                            </li>
                            <li></li>
                        </ul>
                        <section className="movie-description">
                            <aside className="movie-description-content">
                                <h4>Home Alone</h4>
                                <ul>
                                    <li>1990</li>
                                    <li>PG-13</li>
                                    <li>1hr 3min</li>
                                </ul>
                                <p>
                                Seventeen-year-old Rose hails from an aristocratic 
                                family and is set to be married. 
                                When she boards the Titanic, she meets Jack Dawson,
                                 an artist, and falls in love with him.
                                </p>
                            </aside>
                            <aside className="movies-description-details">
                                <button>
                                    <span></span>
                                    Play
                                </button>
                                <div className="cast">
                                    <span>Cast:</span>
                                    <ul>
                                        <li>Macaulay Culkin</li>
                                        <li>Joe Pesci</li>
                                        <li>Daniel</li>
                                        <li>John</li>
                                        <li>Roberts</li>
                                    </ul>
                                </div>
                                <div className="genre">
                                    <span>Genre:</span>
                                    <ul>
                                        <li>Comedy</li>
                                        <li>Adventure</li>
                                        <li>Childrens film</li>
                                    </ul>
                                </div>
                            </aside>
                        </section>
                    </div>
                    <button aria-label='Close modal' onClick={() => setMovieModal(prev => !prev)}>x</button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {MovieModal}
