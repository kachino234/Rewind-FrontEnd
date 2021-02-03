import React from "react";
// import {Card} from "./components"
import {useForm} from "react-hook-form";
import './Upload.css';

const Upload = () => {
    const { register, handleSubmit, errors} = useForm();


        const onSubmit = (e, data) => {

            
            console.log(data);

            // const actualBtn = document.getElementById('actual-btn');

            // const fileChosen = document.getElementById('fileChosen');
            // setFileInput(React.createRef())

            // actualBtn.addEventListener('change', function(){
            // fileChosen.textContent = this.files[0].name
            // fileChosen.setAttribute("hidden");

            


            // })
        };
        
        const handleClick =(e)=>{
            
            e.preventDefault()
            console.log(e.target)
        }


    

    
    

  return (
        <>
    <section className="Upload"> 
   
    
        <section className="Upload-container">
                   
            <section className="upload-form-container">    
                    <div> <h4 id="header-title"> Upload</h4> </div>        
                    <form className="form" onSubmit={handleSubmit(onSubmit)}>               
                        
                        <p id="upload-form-title" ><b>Enter the movie details below</b></p>

                        <label for="title">Title </label>
                        <input type="text" 
                            id="title" 
                            name="title" 
                            className='form-inputs' 
                            placeholder="Enter title of movie" 
                            ref={register({required: true})}/>
                            {errors.title && errors.title.type === "required" && ( <p>This is required</p>)}
                    
                        <label for="year"> Year</label>
                        <input type="year" 
                            id="year" 
                            name="year" 
                            className='form-inputs' 
                            ref={register({required: true})} 
                            placeholder="Enter the year of production"/>
                            {errors.year && errors.year.type === "required" && ( <p>This is required</p>)}
{/*                          
                        <label for="category"> Category </label>
                        <select  name="category" 
                            id="category" 
                            className='form-inputs' 
                            ref={register({required: true})}>
                                <option value="">Enter the movie category</option>
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
                                <option value="">Enter the movie category</option>
                                <option value="General">General(G)</option>
                                <option value="parental-guidance">Parental Guidance(PG)</option>
                                <option value="parental-guidance1">Parental Guidance(PG-13)</option>
                                <option value="restriction">Restriction(R)</option>
                                <option value="No-one-under-17">No one under 17(NC-17)</option>
                        </select>
                            {errors.movierating && errors.movierating.type === "required" && ( <p>This is required</p>)}  */}
                           
                        <label for="cast"> Cast</label>
                        <input type="text" 
                            id="cast" 
                            name="cast" 
                            className='form-inputs' 
                            ref={register({required: true})} 
                            placeholder="Enter the names of cast members and seperate with comma"/>
                            {errors.cast && errors.cast.type === "required" && ( <p>This is required</p>)}
                        
                        <label for="description"> Description</label>
                        <input type="text" 
                            id="description" 
                            name="description" 
                            className='form-inputs' 
                            ref={register({required: true})} 
                            placeholder="Enter a description of the movie"/>
                            {errors.cast && errors.cast.type === "required" && ( <p>This is required</p>)}
                     
                </form>
            </section>

            <section className="movie-container">
                    <div className="custom-upload">
                    <label htmlFor="actual-btn" >
                    <input type="file" id="actual-btn" onChange={handleClick}  hidden />
                    Choose cover image
                    </label>
                    
                    <span id="file-chosen" hidden>No file chosen</span>
                    </div>
                    
                    <div className="custom-upload2">
                    <label htmlFor="actual-btn" >
                    <input type="file" id="actual-btn" onChange={handleClick} hidden/>
                    Choose movie
                    </label>
                    
                    <span id="file-chosen" hidden>No file chosen</span>
                    </div>
            </section>
                 
            
        
            
        </section> 
        <section className="Upload-button-container" >
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


export default Upload;
