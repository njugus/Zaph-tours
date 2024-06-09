import './Package.css'
import Gallery from './imageGallery';
import React from 'react';

function Package({title, images, description, pricing}) {
    return (
        <>
        <div className='package'>
            <h2>{title}</h2>
            <Gallery images = {images}/>
            <p>{description}</p>
            <p>{pricing}</p>   
        </div>
        </>
    )
}

export default Package;