import React from 'react';
import '../Stylesheets/Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(props) {
    
     const pathimg = props.imgurl
     const wide = props.wide
        return (
            <>
            <Carousel showArrows = 'False' width = {wide} className = 'widdy' infiniteLoop = 'True'
            centerMode = 'True' centerSlidePercentage= '100' 
            dynamicHeight = 'True' autoPlay = 'True' interval= '1400'

            > 
                {
                    pathimg.map( pathurl => 
                        
                        <div>
                            <img src= {pathurl} className='change' alt= "" />
                            {/* <p className="legend"> kdkd</p> */}
                        </div>
                        
                    )
                }
            
                </Carousel>
             </>
        );
    };
export default DemoCarousel

