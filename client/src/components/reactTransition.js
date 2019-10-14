import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './transitionCSS.css'


const ImageCarousel = () => {
  const trendingEvents = [
    { id: 1, name: 'img1', img_url: 'https://images.unsplash.com/photo-1534009095716-c1c1281c15f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, name: 'img2', img_url: 'https://images.unsplash.com/photo-1566027310099-a2ee398d7bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80', imageText: "Life's better poolside"},
    { id: 3, name: 'img3', img_url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_960_720.jpg', imageText: "Life's better poolside"},
    { id: 4, name: 'img4', img_url: 'https://cdn.pixabay.com/photo/2016/10/06/16/35/summer-1719401_1280.jpg', imageText: "Life's better poolside"}
  ]
  return (
    <div className="principal-section">
      <div className="slides">
        {trendingEvents.map(img=>{
          return <img src={img.img_url} />       
        })}
      </div>
    </div>
  )
 }
 




export default ImageCarousel