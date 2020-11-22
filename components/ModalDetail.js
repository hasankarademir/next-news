import React, { useState } from 'react';
import Link from 'next/link'
import Modal from 'react-modal';
import {MdClose} from 'react-icons/md';


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
function externalLink(link) {
	window.open(link, '_blank');
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
        
                <div  dangerouslySetInnerHTML={{__html: newsDetail.description}} className="news-desc"></div>
				
				<div className="linkContainer">
				<button className="goToNews" onClick={() => externalLink(newsDetail.url)}>Habere git...</button>
				</div>
                
            </Modal>
        </div>
    )
}



export default ModalList