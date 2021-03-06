import React from "react";
import './Update.css';
import { useForm } from "react-hook-form";
// import {Ellipse} from "../../assets";
import axios from 'axios';

const Update = () => {
    const { handleSubmit, handleChange, errors, register } = useForm()

    const onSubmit = async values => {
        console.log(values);


        await axios.post('https://rewind-api.herokuapp.com/users/sign-up', {
            username : "meee",
            password : "12345678",
            confirmPassword : "12345678"

        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error.response)
            });
    }

    return (
        <>
        <section className="update">
            <h2 id="settings-header">Settings</h2>
                    <section className="settings-container">
                        
                    <section >
                        <form className="updateform" onSubmit={handleSubmit(onSubmit)}>
                            <label id="label">Username</label>
                            <input  name="username" ref={register({ required: true })}
                                    type="text"
                                    onChange={handleChange}
                                    placeholder="Enter your username" />
                                    {/* value={values.username} */}
                            {errors.username && <p>Username already taken</p>}

                            <label id="label">Password</label>
                            <input name="password" ref={register({ required: true })}
                                type="text"
                                // value={values.password}
                                onChange={handleChange}
                                placeholder="Enter your password" />
                            {errors.password && <p>Use 6 or more characters</p>}

                            <label id="label">Confirm password</label>
                            <input name="confirmPassword" ref={register({ required: true })}
                                type="text"
                                // value={values.confirmpassword}
                                onChange={handleChange}
                                placeholder="Confirm your password" />
                            {errors.confirmPassword && <p>Passwords don't match</p>}
                        </form> 
                    </section>

                    
                    <section className="avatar-container">
                    {/* <img src={Ellipse} alt="avatar"/> */}
                    </section>

                    </section>

                    <section  className="Updatebtn-container">
                   
                            <button className="Updatebtn" 
                            type="Submit" 
                            id="Updatebtn"
                            name="Updatebtn">Update
                            </button>
                    
                    </section>
            </section>

        </>
    )
}

export { Update }
