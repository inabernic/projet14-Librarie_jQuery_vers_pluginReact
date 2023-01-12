import React, { useState } from 'react';
import { Modal } from '../lib/modal';
import './App.css';

function App() {

    const [displayModal, setDisplayModal] = useState(false)
    const modalStyle = {
        "background": "#bbcdbf",
        "margin": "auto",
        "borderRadius": "10px",
        "maxWidth": "400px",
        "width": "80%",
        "padding": "0.5rem",
        "border": "1px solid white",
        "boxShadow": "5px 5px 5px white"
    }

    const modalHeaderStyle = {
        "display": "flex",
        "justifyContent": "space-between",
        "alignItems": "center",
        "margin": "0.3rem 0.5rem 1rem",
    }

    const titleStyle = {
        "color": "black",
        "paddingLeft": "1rem",
    }

    const modalBodyStyle = {
        "paddingLeft": "1rem",
        "paddingRight": "2rem",
        "fontSize": "18px",
        "color": "rgb(111 100 8)",
        "textAlign": "center",
    }

    const modalFooterStyle = {
        "display": "flex",
        "justifyContent": "space-around",
        "alignItems": "center",
        "marginBottom": "1rem",
        "marginTop": "2rem",
    }

    const xButtonStyle = {
        "fontSize": "1.2rem",
        "fontWeight": "600",
        "color": "rgb(39, 39, 39)",
        "cursor": "pointer",
        "border": "none",
        "background": "transparent",
    }

    const modalButtonOkStyle = {
        "background": "green",
        "color": "white",
        "width": "20%",
        "cursor": "pointer",
        "padding": "0.5rem",
        "margin": "0.5rem",
        "border": "1px solid rgb(39, 39, 39)",
        "boxShadow": "3px 3px 3px black"
    }

    const modalButtonCancelStyle = {
        "background": "red",
        "color": "white",
        "width": "50%",
        "cursor": "pointer",
        "padding": "0.5rem",
        "margin": "0.5rem",
        "border": "1px solid rgb(39, 39, 39)",
        "boxShadow": "3px 3px 3px black"
    }

    return (
        <div className="App">
            <div className='nav-vertical'>
                <div className='content'>
                    <div>
                        <button className='modal-toggle' onClick={() => setDisplayModal(true)}>
                            show modal
                        </button>
                        <Modal modalStyle={modalStyle} modalHeaderStyle={modalHeaderStyle} titleStyle={titleStyle} modalBodyStyle={modalBodyStyle} modalFooterStyle={modalFooterStyle} xButtonStyle={xButtonStyle} modalButtonOkStyle={modalButtonOkStyle} modalButtonCancelStyle={modalButtonCancelStyle} title="Hello, here is placed the title of plugin modal" message="Here  is  placed the message of your modal's plugin" showModal={displayModal} hideModal={() => setDisplayModal(false)} buttonText1='Ok' buttonText2='Cancel' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;