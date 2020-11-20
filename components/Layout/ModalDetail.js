import React, { useState } from 'react';
import Router from 'next/router';
import TimeAgo from 'react-timeago'
import Modal from 'react-modal';
import {MdClose} from 'react-icons/md';


import {MdFavoriteBorder } from 'react-icons/md';
import './ListContent.scss';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#__next')

const ModalList = ({isOpen, setIsOpen, newsDetail}) => {





function closeModal(){
    setIsOpen(false);
}

function afterOpenModal() {
    console.log('açıldı şu an');
}


function afterCloseModal() {
    console.log('kapandı şu an');
}



    return (
        <div>
            
            <Modal
                isOpen={isOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                id="abc"
                >
					<div className="modal-header">
                        <h2 className="news-title">
                            {newsDetail.title}
                        </h2>
                        <div className="close-button">
                            <div><MdClose onClick={closeModal} /></div>
                        </div>
                    </div>
        
                <div>{newsDetail.description}</div>
                
            </Modal>
        </div>
    )
}



export default ModalList