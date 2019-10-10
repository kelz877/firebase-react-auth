import React from 'react'
import { Carousel } from 'react-responsive-carousel'



const imageStyle ={

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100%'
}
const heightStyle = {
    height: '100%'
}

export default () => (
    <Carousel
        autoPlay
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        transitionTime={1000}
        interval={2000}
        style={heightStyle}
        showStatus={false}
    >
        <div style={heightStyle}>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div style={heightStyle}>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div style={heightStyle}>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div style={heightStyle}>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div style={heightStyle}>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>

    </Carousel>
)