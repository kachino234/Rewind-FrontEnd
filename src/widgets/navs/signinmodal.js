import React from "react";
import {SignIn} from "../../pages";
import "../widgets.css";
import { BsXCircle } from "react-icons/bs";

const SignInModal = ({signinmodalIsOpen, setSigninModalIsOpen}) => {
    return (
        <>
        {signinmodalIsOpen ? (
            <section className="modal-background">
                <div className="modal-box" signinmodalIsOpen={signinmodalIsOpen}>
                    <SignIn/>
                    <button aria-label='Close modal' onClick={() => setSigninModalIsOpen(prev => !prev)} className="signin-close"> 
                    <BsXCircle/>
                    </button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {SignInModal}
