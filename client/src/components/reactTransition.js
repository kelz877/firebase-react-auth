import React, { useEffect, useState } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import './transitionCSS.css'


const ImageCarousel = () => {
  const trendingEvents = [
    { id: 1, name: 'img1', img_url: 'https://images.unsplash.com/photo-1534009095716-c1c1281c15f2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80' },
    { id: 2, name: 'img2', img_url: 'https://images.unsplash.com/photo-1566027310099-a2ee398d7bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'},
    { id: 3, name: 'img3', img_url: 'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_960_720.jpg'},
  ]
  const [principalImage, setPrincipalImage] = useState(Array.isArray(trendingEvents) && trendingEvents.length > 0 ? trendingEvents[0] : null)
  const [inImage, setInImage] = useState(true)

  useEffect(() => {
    let counter = 0
    let intervalSetClass

    if (Array.isArray(trendingEvents) && trendingEvents.length > 1) {
      intervalSetClass = setInterval(() => {
        setInImage(true)
        setPrincipalImage(JSON.parse(JSON.stringify(trendingEvents[counter])))
        counter += 1

        if (counter === trendingEvents.length) {
          counter = 0
        }

        setTimeout(() => {
          setInImage(false)
        }, 500)
      }, 4000)
    }

    return () => {
      clearInterval(intervalSetClass)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="principal-section">
      <div className="principal-image-container">
        <CSSTransition
          key={principalImage.id}
          in={inImage}
          appear
          timeout={{ enter: 500, exit: 4000 }}
          classNames="fade"
        >
            <SwitchTransition >
          <img alt={principalImage.name} src={principalImage.img_url} />
          </SwitchTransition>

        </CSSTransition>
      </div>

    </div>
  )
}


export default ImageCarousel