import React from "react";
import {SignUp} from "../../pages";
import "../widgets.css";
import { BsXCircle } from "react-icons/bs"

const SignUpModal = ({modalIsOpen, setModalIsOpen}) => {
    return (
        <>
        {modalIsOpen ? (
            <section className="modal-background">
                <div className="modal-box" modalIsOpen={modalIsOpen}>
                    <SignUp/>
                    <button aria-label='Close modal' onClick={() => setModalIsOpen(prev => !prev)} className="close-btn">
                        <BsXCircle/>
                    </button>
                </div>
            </section>
        ) : null}
        </>
    )
}

export {SignUpModal}
