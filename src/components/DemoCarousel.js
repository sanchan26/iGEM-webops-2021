import React from 'react';
import '../Stylesheets/Carousel.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

function DemoCarousel(props) {
    
     const pathimg = props.imgurl
     const wide = props.wide
        return (
            <>
            <Carousel showArrows = 'False' width = {wide} className = 'widdy'> 
                {
                    pathimg.map( pathurl => 
                        
                        <div>
                            <img src= {pathurl} alt= "" />
                            {/* <p className="legend"> kdkd</p> */}
                        </div>
                        
                    )
                }
            
                </Carousel>
             </>
        );
    };
export default DemoCarousel

