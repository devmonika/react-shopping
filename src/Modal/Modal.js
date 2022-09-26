import React from 'react';

const Modal = ({modalData, setModal}) => {
    console.log(modalData);
    
    return (
        <div>
            
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box relative">
                <label onClick={()=>setModal()} htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                <img src={modalData?.volumeInfo?.imageLinks.thumbnail? modalData?.volumeInfo?.imageLinks.thumbnail: 'Not Found'} className="mx-auto mb-4" alt="" />
                <h3 className="text-lg font-bold"><span className='font-bold text-error'>name: </span>{modalData?.volumeInfo?.title}</h3>
                <p className="text-md font-bold"><span className='font-bold text-error'>Author: </span>{modalData?.volumeInfo?.authors}</p>
                <p className="text-md font-bold"><span className='font-bold text-error'>Category: </span>{modalData?.volumeInfo?.categories}</p>
                <p className="text-md font-bold"><span className='font-bold text-error'>Publish Date: </span>{modalData?.volumeInfo?.publishedDate}</p>
                <p className="py-4"> <span className='font-bold text-error'>Description: </span> {modalData?.volumeInfo?.description}</p>
            </div>
            </div>
        </div>
    );
};

export default Modal;