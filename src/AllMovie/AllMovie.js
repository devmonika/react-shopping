import React, { useEffect } from 'react';
import { useState } from 'react';
import SingleChar from '../SingleChar/SingleChar';

const AllMovie = ({countIncrease}) => {
    const [movies, setMovie] = useState([]);
    // console.log(movies);
    useEffect(()=>{
        fetch(`https://www.googleapis.com/books/v1/volumes?q=$`)
        .then((res) => res.json())
        .then((data) => setMovie(data.items))
        
        },[]);
        
    // function objToArr(props){
    //     const[books,characters,houses] = props;
    // }
        
    return (
        <div>
               <h2 className='text-4xl font-bold my-8'>All Book List</h2>
               <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-y-6'>
         
            {
                movies.map((movie) => (
                    // console.log(movie);
                    <SingleChar movie={movie} countIncrease={countIncrease}></SingleChar>
                ))
            }
            </div>
        </div>
        
    );
};

export default AllMovie;