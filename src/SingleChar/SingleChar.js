import React from 'react';
import { useState } from 'react';
import Modal from '../Modal/Modal';

const SingleChar = (props) => {
    const [modalData, setModal] = useState({});
    // console.log(props);
    const {movie, countIncrease} = props;
    // console.log(movie);
    const {volumeInfo} = movie;
    return (
        <div className=''>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={volumeInfo.imageLinks.thumbnail? volumeInfo.imageLinks.thumbnail: 'Not Found'} alt="" /></figure>
                <div className="card-body text-center">
                    <h2 className="card-title justify-center font-bold">{volumeInfo.title}</h2>
                    <p>{volumeInfo.authors}</p>
                    <p>{volumeInfo.categories}</p>
                    <p>{volumeInfo.description?.slice(0, 200)}</p>
                    <p>{volumeInfo.publishedDate}</p>
                    <div className="card-actions justify-center">
                    <button onClick={() => countIncrease()} className="btn btn-warning">Add to Cart</button>
                    <label onClick={()=>setModal(movie)} htmlFor="my-modal-3" className="btn modal-button btn-error w-1/3">Detailes</label>
                    {
                        modalData && <Modal data={modalData} setModal= {setModal}></Modal>
                    }
                    
                    </div>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default SingleChar;