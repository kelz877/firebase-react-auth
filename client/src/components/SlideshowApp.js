//===========================================
// IMPORT DEPENDENCIES
//===========================================
import React, { Component } from "react";
import Slideshow from "./Slideshow"
import slide1 from "../assets/pool1.jpeg"
import slide2 from "../assets/pool2.jpeg";
import slide3 from "../assets/pool3.jpeg";
import slide4 from "../assets/pool4.jpeg";
import slide5 from "../assets/pool5.jpg";
import './custom.css'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles' 


//===========================================
// CREATE STYLES OBJECT
//===========================================
const s = {
    container: "screenW screenH col",
    header: "flex1 fCenter fSize2",
    main: "flex8",
    footer: "flex1 fCenter"
};

const useStyles = makeStyles(theme => ({
    containerMargin: {
        margin: theme.spacing(0),
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0),
        [theme.breakpoints.down('lg')]: {
            paddingLeft: '0px',
            paddingRight: '0px'
        }
    },
}))

//===========================================
// SLIDES DATA
//===========================================
const slides = [slide1, slide2, slide3, slide4, slide5];

//===========================================
// APP COMPONENT
//===========================================
// class App extends Component {
//     render() {
//         return (
//             <Container className={s.container}>
//                 <div className={s.main}>
//                     <Slideshow slides={slides} />
//                 </div>
//             </Container>
//         );
//     }
// }

const SlideshowApp = () => {
    const classes = useStyles();
    return (
        <Container className={classes.containerMargin} className={s.container}>
            <div className={s.main}>
                <Slideshow slides={slides} />
            </div>
        </Container> 
    )
}
export default SlideshowApp;