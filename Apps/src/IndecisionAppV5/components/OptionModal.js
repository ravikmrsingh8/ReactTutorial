import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement(document.getElementById('app'));
console.log("Loading OptionModal");
const OptionModal =(props)=>(
        <Modal isOpen={!!props.selectedOption}
            onRequestClose={props.onCloseModal}
            contentLabel="Selected Option"
        >
            <h2>Selected Option</h2>
            <h3>{props.selectedOption}</h3>
            <button id="closeModalButton" onClick={props.onCloseModal}> Okay </button>
        </Modal>
    );

export default OptionModal;