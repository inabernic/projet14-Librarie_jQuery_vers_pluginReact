import React from "react";
import './modal.css'
import PropTypes from "prop-types"

export const Modal = ({ showModal, hideModal, message, title, modalStyle, modalHeaderStyle, titleStyle, modalBodyStyle, modalFooterStyle, xButtonStyle, modalButtonOkStyle, modalButtonCancelStyle, buttonOk}) => {

    return showModal && (
        <> <div className="centeritem">
            <div className="modal-overlay">
                <div className="modal-wrapper">
                    <div className="modal" style={modalStyle}>
                        <div className="modal-header" style={modalHeaderStyle}>
                            <h3 style={titleStyle}>{title}</h3>
                            <button type="button" style={xButtonStyle} className="modal-close-buttonX" onClick={hideModal}>X</button>
                        </div>
                        <div className="modal-body" style={modalBodyStyle}>{message}</div>
                        <div className="modal-footer" style={modalFooterStyle}>
                            <button type="button" className="modal-ok-button-footer" style={modalButtonOkStyle} onClick={hideModal}>{buttonOk}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}



Modal.propTypes = {
    showModal: PropTypes.bool.isRequired,
    hideModal: PropTypes.func.isRequired
}