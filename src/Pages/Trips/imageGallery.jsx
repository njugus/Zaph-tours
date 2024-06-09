import React from "react"
import './imageGallery.css'
import Slider from "react-slick"
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function Gallery({images}) {
    const settings = {
        dots: true,
        infinite : true,
        speed : 500,
        slidesToShow : 1,
        slidesToScroll : 1
    }

    return(
        <>
    <Slider {...settings} className="image-gallery">
      {images.map((image, index) => (
        <div key={index} className="div-img">
          <img src={image} alt="package" className="gal-img"/>
        </div>
      ))}
    </Slider>

        </>
    )
}

export default Gallery;