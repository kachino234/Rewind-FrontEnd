import React, {useState, useEffect} from 'react';
import "../widgets.css";
import AOS from "aos";
import 'aos/dist/aos.css'
import { RewindLogo } from "../../assets";
import { FaSearch }  from "react-icons/fa";
import { FiMenu }  from "react-icons/fi";
import { SignInModal, SignUpModal, SearchModal } from "../../widgets";
import RewindMoviesApi from "../../api/RewindMoviesApi";
import axios from 'axios';



// Modal.setAppElement('#root');
const Landingpagenav = () => {
      AOS.init();


      //Search Bar Didplay Function
  const [showSearchBar, setShowSearchBar] = useState(false);
  
  const SearchBar = () => {
    setShowSearchBar(prev => !prev)
  }


  //Search Function 
  // const [state, setState] = useState({
  //   results : []
  // });

  // const onSearch = async(text) => {
  //   const results = await RewindMoviesApi.get("/movies");
  //   setState(prevState => {
  //     return {...prevState, results : results} 
  //   }) 
  // }

    //Movies Display Function
  // const [query, setQuery] = useState('');
  // const [movies, setMovies] = useState([]);

  // const searchMovies = async (e) => {
  //   e.preventDefault();

  //   try {

  //     const url = 'https://rewind-test.herokuapp.com/movies/search/movie?title={movie_search}';
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setMovies(data);
  //     console.log(data);
  //     console.log(url);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
    //  if(showSearchBar) {

        //  searchBar =<div className="search-bar-container" data-aos="fade-in" data-aos-duration="500">
        //             <form onSubmit={searchMovies}>
        //             <input 
        //                  type="text" 
        //                  placeholder="search keyword"
        //                   className="movie-search-bar" 
        //                   data-aos="fade-in"
        //                    data-aos-duration="500"
        //                    value={query}
        //                    name="movie_search"
        //                    onChange={(e) => setQuery(e.target.value)}
        //                    />
                      
        //             </form>
        //                     <div>
        //         {/* {movies.map(movie => (
        //             <section className="card" key={movies.id}>
        //                 <div className="card-image">
        //                     <img src={movie.coverpics_url} alt="poster"/>
        //                 </div>
        //                 <div className="card-text">
        //                     <ul>
        //                         <li>{movie.title}</li>
        //                         <li>{movie.description}</li>
        //                     </ul>
        //                 </div>
        //             </section>
        //         ))} */}
        //         {movies.title}
        //     </div>
        //             </div>
        //  searchBarMask = <div className="mask" onClick={() => setShowSearchBar(false)}></div>
        // //  console.log(query);
    //  }


     const [signupmodalIsOpen, setSignupModalIsOpen] = useState(false);

    const togglesignupModal = () => {
      setSignupModalIsOpen(prev => !prev);
    }

    const [signinmodalIsOpen, setSigninModalIsOpen] = useState(false);

    const togglesigninModal = () => {
      setSigninModalIsOpen(prev => !prev);
    }

    
    const [ loggedIn, setLoggedIn] = useState(false);
    useEffect(() => {
      
      const config = {
        headers : {
          Authorization : 'Bearer' + localStorage.getItem('token')
        }
      };

      axios.get('users', config).then(
        response => {
          setLoggedIn(true);
         
        },
        error =>  {
          console.log(error);
        }
      )

      
    }, [])

    

     return (
          <>

            <header> 
                <nav>
                    <a href="/">
                      <img src={RewindLogo} alt="RewindLogo"/>
                    </a>
                    <section className="nav-list-container">
                    <ul className="nav-list">
                      <li className="nav-item">
                        <FaSearch onClick={SearchBar}/>
                        <SearchModal 
                          showSearchBar={showSearchBar} 
                          setShowSearchBar={setShowSearchBar}
                          // onSearch={onSearch}
                          // results={state.results}
                         />
                      </li>
                      <li className="nav-item">
                        {/* <Link>
                        Home
                        </Link> */}
                        Home
                      </li>
                      <li className="nav-item">
                        All Movies
                      </li>
                      <li className="nav-item">
                        Categories
                      </li>
                      <li className="nav-item">
                        {!loggedIn ? (
                          <button onClick={togglesigninModal} className="signin-btn">Sign In</button>
                        ):<button className="signin-btn">Username</button> }
                       
                        <SignInModal signinmodalIsOpen={signinmodalIsOpen} setSigninModalIsOpen={setSigninModalIsOpen}/>  
                      </li>
                      {!loggedIn ? (
                          <li className="nav-item ">
                          <button onClick={togglesignupModal} className="signup-btn">Sign Up</button>
                          <SignUpModal modalIsOpen={signupmodalIsOpen} setModalIsOpen={setSignupModalIsOpen}/>
                        </li>
                      ) : <li className="nav-item ">
                      <button onClick={togglesignupModal} className="signup-btn">Log Out</button>
                    </li> }
                      
                    </ul>
                    
                    <span className="mobile-nav-btn">
                        <FiMenu/>
                    </span>
                    </section>
                    
                </nav>
            </header>
          </>
      ) 
 }

 export {Landingpagenav};

