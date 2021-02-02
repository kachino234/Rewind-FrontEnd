import React from 'react';
import swal from "sweetalert";
import {useForm} from "react-hook-form";
// import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./auth.css";
// import RewindApi from "../../api/RewindApi";
import axios from "axios";


const SignIn = () => {

    const { register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data);

          axios.post("users/login",data).then((response) =>{
              localStorage.setItem('token', response.data.token);
        console.log(response);
        if(response.status === 202) {

                  swal({
      title: "Done!",
      text: "Successfully Logged In",
      icon: "success",
      timer: 4000,
      button: false
    })
    
        }
         else if(response.status === 404) {

            swal({
                title: "Warning!",
                text: "User Already Exits",
                icon: "warning",
                timer: 4000,
                button: false
              })

        }
         if(response.status === 404) {
            swal({
                title: "Error!",
                text: "Contact Customer Services For More Details",
                icon: "error",
                timer: 4000,
                button: false
              })
        }
 }).catch(err => alert(err));
// console.log(data);
    }


    return (
        <>
            <section className="sign-in-container">
                <form className="sign-in-form grid-layout-100"  onSubmit={handleSubmit(onSubmit)}>
                    <header className="sign-in-form-header">
                        <h2>Sign In</h2>
                        <span>Welcome, we missed you!</span>
                    </header>
                    <div className="grid-layout-100">
                        <label className="sign-in-form-label">Email</label>
                        <input 
                            type="text" 
                            placeholder="Enter your username" 
                            className="sign-in-form-input" 
                            name="email"
                            ref={register({ required : true})}
                        />
                        {errors.email && <small>This field is required</small>}
                    </div>

                    <div className="grid-layout-100">
                        <label className="sign-up-form-label">Password</label>
                        <input 
                            type="password" 
                            placeholder="Enter your password" 
                            className="sign-in-form-input" 
                            name="password"
                            ref={register({ required : true})}
                        />
                         {errors.password && errors.password.type === "required" && (
                            <small className="error">This field is required</small>
                         )}
                    </div>

                    <div className="terms-pass-reset">
                        <div style={{color : '#1C1C1C', width:'50%'}}>
                        <input  type="radio" style={{marginRight:'10px'}}/>Remember me
                        </div>
                        <a href="/" style={{width:'50%', display:'flex', justifyContent:'flex-end'}}>Forgot Password?</a>
                    </div>                    
                    <button type="submit" className="sign-in-btn">
                        Sign In
                    </button>
                
                </form>
                
            <aside className="sign-in-aside">
                {/* <img */}
            </aside>
            </section>
        </>
    )
}

export {SignIn}
