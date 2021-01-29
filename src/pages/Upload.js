import React from "react";
// import {Card} from "./components"
// import './App.css';
import {useForm} from "react-hook-form";
import './Upload.css';


const Upload = () => {
    const { register, handleSubmit, errors} = useForm();
        const onSubmit = (e, data) => {
            
            console.log(data);
        };

  return (
        <>
    <section className="upload"> 
    
    <h4 id="header-title"> Upload</h4>
        <section className="Upload-container">
                       
            <section className="form-container">    
                       
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>               
                        
                        <p><b>Enter the movie details below</b></p>
                        <label for="title">Title </label>
                        <input type="text" 
                            id="title" 
                            name="title" 
                            className='form-inputs' 
                            placeholder="Enter title of movies" 
                            ref={register({required: true})}/>
                            {errors.title && errors.title.type === "required" && ( <p>This is required</p>)}
                    
                        <label for="year"> Year</label>
                        <input type="year" 
                            id="year" 
                            name="year" 
                            className='form-inputs' 
                            ref={register({required: true})} 
                            placeholder="Enter your year of production"/>
                            {errors.year && errors.year.type === "required" && ( <p>This is required</p>)}
                        {/* 
                        <label for="category"> Category </label>
                        <select  name="category" 
                            id="category" 
                            className='form-inputs' 
                            ref={register({required: true})}>
                                <option value="">Enter your movie category</option>
                                <option value="action">Action</option>
                                <option value="adventure">Adventure</option>
                                <option value="comedy">Comedy</option>
                                <option value="drama">Drama</option>
                                <option value="romance">Romance</option>
                                <option value="sci-fiction">Sci-fiction</option>
                                <option value="horror">Horror</option>
                                <option value="mystery">Mystery</option>
                                <option value="animation">Animation</option>
                                <option value="history">History</option>
                                <option value="others">Others</option>
                
                        </select>

                        {errors.category && errors.category.type === "required" && ( <p>This is required</p>)}
                        

                        <label for="movie-rating"> Movie rating </label>
                        <select  name="movie-rating" 
                            id="movie-rating" 
                            className='form-inputs' 
                            ref={register({required: true})}>
                                <option value="">Enter your movie category</option>
                                <option value="General">General(G)</option>
                                <option value="parental-guidance">Parental Guidance(PG)</option>
                                <option value="parental-guidance1">Parental Guidance(PG-13)</option>
                                <option value="restriction">Restriction(R)</option>
                                <option value="No-one-under-17">No one under 17(NC-17)</option>
                        </select>
                            {errors.movierating && errors.movierating.type === "required" && ( <p>This is required</p>)} */}
                           
                        <label for="cast"> Cast</label>
                        <input type="text" 
                            id="cast" 
                            name="cast" 
                            className='form-inputs' 
                            ref={register({required: true})} 
                            placeholder="Enter names of cast members and seperate with comma"/>
                            {errors.cast && errors.cast.type === "required" && ( <p>This is required</p>)}
                     
                </form>
                </section>

                <section className="movie-container">
                    {/* <img src={frameImage} alt="upload movie"/> */}
                    <label for="file-upload" class="custom-file-upload" >
                    Choose file
                    </label>
                    <input id="file-upload" type="file" className="customUpload" />
                    <label for="file-upload" class="custom-file-upload" >
                    Choose cover image
                    </label>
                    <input id="file-upload" type="file" className="customUpload" />
                </section>
                 
            
        
            
        </section> 
        <section >
            <div className="Uploadbtn-container"> 
                    <button className="uploadbtn" 
                            type="Submit" 
                            id="uploadbtn"
                            name="Uploadbtn"> Upload
                    </button>
                </div>
        </section>
    </section>
        </>
  );
};

export  {Upload};
