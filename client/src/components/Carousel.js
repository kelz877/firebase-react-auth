import React from 'react'
import { Carousel } from 'react-responsive-carousel'



const imageStyle ={

    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: 'fit-content'
}


export default () => (
    <Carousel
        autoPlay
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        transitionTime={1000}
        interval={4000}
        
        showStatus={false}
    >
        <div>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>
        <div>
            <img style={imageStyle} src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>

    </Carousel>
)