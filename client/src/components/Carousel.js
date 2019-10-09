import React from 'react'
import { Carousel } from 'react-responsive-carousel'


export default () => (
    <Carousel
        autoPlay
        showThumbs={false}
        showArrows={false}
        showIndicators={false}
        transitionTime={1000}
        interval={4000}
        infiniteLoop={true}
    >
        <div>
            <img src={"https://images.unsplash.com/photo-1564193495687-031783e9e06c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"} />
        </div>
        <div>
            <img src={"https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"} />
        </div>
        <div>
            <img src={'https://images.unsplash.com/photo-1534009502677-4e5080efa8c6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'} />
        </div>
        <div>
            <img src={"https://images.unsplash.com/photo-1536745511564-a5fa6e596e7b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=727&q=80"} />
        </div>
        <div>
            <img src={"https://images.unsplash.com/photo-1566027310099-a2ee398d7bcd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"} />
        </div>
        <div>
            <img src={'https://cdn.pixabay.com/photo/2014/07/10/17/17/swimming-pool-389267_1280.jpg'} />
        </div>

    </Carousel>
)