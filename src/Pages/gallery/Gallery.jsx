import React from 'react'
import "./gallery.css"
import { gallery } from "../../data"
const Gallery = () => {
  return (
    <div className='gallery_container'>
      <h1 style={{ marginBottom: "2rem", textAlign: "center" }}>Photos Gallery</h1>
      <div className="gallery_card_div">
        {gallery.map((item) => {
          return <div className='image_div'>
            <img src={item.image} alt="" />
          </div>
        })}
      </div>

    </div>
  )
}

export default Gallery