import {Box, Flex, Text} from "@chakra-ui/react";
import React, {useState} from 'react';
import { Button, Stack } from "@chakra-ui/react"
import { ProjectData } from "../components/ProjectData";
import { Link } from "@chakra-ui/react";
import theme from "../components/theme";
import Footer from '../components/Footer';
import DemoCarousel from "../components/DemoCarousel";
import {FaAngleRight} from "react-icons/fa";
import Bgimage from '../images/final.png'
// import SimpleImageSlider from "react-simple-image-slider";
import '../Stylesheets/Projectpage.css';

// import { Carousel } from 'react-carousel-minimal';


function Project() {
     
    const {colors, fonts} = theme;
    const {heading, body} = fonts;
    const {black,white,green,blue} = colors
    const [pageContent, setPageContent] = useState({
        projectTitle: ProjectData.Project_2020.title,
        projectDescription: ProjectData.Project_2020.description,
        projectAchievements: ProjectData.Project_2020.achievements,
        projectlink: ProjectData.Project_2020.sitelink,
        projectimage: ProjectData.Project_2020.data
    })

    const [ButtonState, setButtonState] = useState(true);
    let sliderPaddingDesktop;
    let sliderPaddingMobile;
    let sliderWidthDesktop;
    let sliderWidthMobile;
    
    const sliderShow = () => {
        setButtonState(!ButtonState)
    }
   

    if (ButtonState) {
        sliderWidthDesktop = '0';
        sliderWidthMobile = '0';
        sliderPaddingDesktop = '0';
        sliderPaddingMobile = '0';
       
    }

    else {
        sliderWidthDesktop = '20vw';
        sliderWidthMobile = '35vw';
        sliderPaddingDesktop = '20px';
        sliderPaddingMobile = '10px';
        
    }
    return (
        <>
        <Flex w='100' h='auto' >
          <Box 
                css={{
                    '&::-webkit-scrollbar': {
                      width: '10px',
                    },
                    '&::-webkit-scrollbar-track': {
                      width: '6px',
                    },
                    '&::-webkit-scrollbar-thumb': {
                      background: green,
                      borderRadius: '24px',
                    },
                  }}
                overflowY = 'scroll'
                h=''
                // marginLeft= {sliderWidth}
                w = {[sliderWidthMobile,sliderWidthDesktop]}
                padding= {[sliderPaddingMobile,sliderPaddingDesktop]}
                bg= {black}>
                <Stack onClick = {sliderShow} spacing={4} direction="column" align="center">
                    <Text color = {white} display = {['none','block']} fontWeight='extrabold' fontSize='28px' fontFamily = {heading}> Our Projects </Text>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2008.title,
                                                                projectDescription: ProjectData.Project_2008.description,
                                                                projectAchievements: ProjectData.Project_2008.achievements,
                                                                projectlink: ProjectData.Project_2008.sitelink,
                                                                projectimage:ProjectData.Project_2008.data})} colorScheme="green" size= "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2008</Text >
                        </Button>
                        <Button  onClick = {() => setPageContent({projectTitle: ProjectData.Project_2009.title,
                                                                projectDescription: ProjectData.Project_2009.description,
                                                                projectAchievements: ProjectData.Project_2009.achievements,
                                                                projectlink: ProjectData.Project_2009.sitelink,
                                                                projectimage:ProjectData.Project_2009.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2009</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2010.title,
                                                                projectDescription: ProjectData.Project_2010.description,
                                                                projectAchievements: ProjectData.Project_2010.achievements,
                                                                projectlink: ProjectData.Project_2010.sitelink,
                                                                projectimage:ProjectData.Project_2010.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2010</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2011.title,
                                                                projectDescription: ProjectData.Project_2011.description,
                                                                projectAchievements: ProjectData.Project_2011.achievements,
                                                                projectlink: ProjectData.Project_2011.sitelink,
                                                                projectimage:ProjectData.Project_2011.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2011</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2012.title,
                                                                projectDescription: ProjectData.Project_2012.description,
                                                                projectAchievements: ProjectData.Project_2012.achievements,
                                                                projectlink: ProjectData.Project_2012.sitelink,
                                                                projectimage:ProjectData.Project_2012.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2012</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2013.title,
                                                                projectDescription: ProjectData.Project_2013.description,
                                                                projectAchievements: ProjectData.Project_2013.achievements,
                                                                projectlink: ProjectData.Project_2013.sitelink,
                                                                projectimage:ProjectData.Project_2013.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2013</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2015.title,
                                                                projectDescription: ProjectData.Project_2015.description,
                                                                projectAchievements: ProjectData.Project_2015.achievements,
                                                                projectlink: ProjectData.Project_2015.sitelink,
                                                                projectimage:ProjectData.Project_2015.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2015</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2016.title,
                                                                projectDescription: ProjectData.Project_2016.description,
                                                                projectAchievements: ProjectData.Project_2016.achievements,
                                                                projectlink: ProjectData.Project_2016.sitelink,
                                                                projectimage:ProjectData.Project_2016.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2016</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2017.title,
                                                                projectDescription: ProjectData.Project_2017.description,
                                                                projectAchievements: ProjectData.Project_2017.achievements,
                                                                projectlink: ProjectData.Project_2017.sitelink,
                                                                projectimage:ProjectData.Project_2017.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2017</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2018.title,
                                                                projectDescription: ProjectData.Project_2018.description,
                                                                projectAchievements: ProjectData.Project_2018.achievements,
                                                                projectlink: ProjectData.Project_2018.sitelink,
                                                                projectimage:ProjectData.Project_2018.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2018</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2019.title,
                                                                projectDescription: ProjectData.Project_2019.description,
                                                                projectAchievements: ProjectData.Project_2019.achievements,
                                                                projectlink: ProjectData.Project_2019.sitelink,
                                                                projectimage:ProjectData.Project_2019.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2019</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({projectTitle: ProjectData.Project_2020.title,
                                                                projectDescription: ProjectData.Project_2020.description,
                                                                projectAchievements: ProjectData.Project_2020.achievements,
                                                                projectlink: ProjectData.Project_2020.sitelink,
                                                                projectimage:ProjectData.Project_2020.data})} colorScheme="green" size = "lg" variant="ghost">
                            <Text color={green} fontSize={["15px","20px"]} fontWeight='bold'>2021</Text >
                        </Button>
                </Stack> 
                </Box> 
                <Box w='100vw' h= 'auto'  bgImage = {Bgimage}
                bgPosition="center"
                bgRepeat="repeat" >
                    {/* <Button onClick = {sliderShow} colorScheme = "blue"> Project List</Button> */}
                    <Flex w = 'auto' margin={['3px',"15px"]}  flexDirection = 'row' alignItems='center'>
                    <FaAngleRight color = {white} onClick = {sliderShow}  fontSize = '50px' _hover = {{color :'green'}} className="hovers"> </FaAngleRight>
                    <Button fontSize={['18px','27px']} color={green} fontFamily = {heading} onClick = {sliderShow} className="hovers" variant= "outline" > All Projects</Button>
                    </Flex>
                    <Text color={white} fontWeight='bold'
                     fontSize = {['30px','37px']} textAlign='center'
                     marginTop='15px' marginBottom='28px'  fontFamily = {heading}>
                        {pageContent.projectTitle}
                    </Text>           
                    <Text color={green} fontWeight='bold'
                     fontSize={['26px','30px']} margin='30px'
                     marginTop='15px' marginBottom='10px'  fontFamily = {heading}>
                    Description
                     </Text>

                     <Text color={white}
                     fontSize={['17px','20px']} 
                     marginTop='15px' margin='30px'  fontFamily = {body}>
                    {pageContent.projectDescription}
                     </Text>

                     <Text color={green} fontWeight='bold'
                     fontSize={['26px','30px']} margin='30px'
                     marginTop='15px' marginBottom='10px' fontFamily = {heading}>
                    Achievements
                     </Text>

                     <Text color={white}
                     fontSize= {['17px','20px']} 
                     marginTop='15px' margin='30px' fontFamily = {body}>
                    {pageContent.projectAchievements}
                     </Text>
                    
                    <Flex margin= 'auto' h= 'auto' w = '20vw' justifyContent='center'>
                    <DemoCarousel imgurl = {pageContent.projectimage} >
                    </DemoCarousel>
                    </Flex>
                  
                    
                    <Flex h='auto' w='100' alignItems='center' justifyContent='center' fontFamily = {body} margin = '30px'>
                     <Link textAlign= 'center' href={pageContent.projectlink} isExternal>
                     <Button margin = 'auto' colorScheme = "green" variant="solid">
                         Go to Project
                     </Button>
                    </Link>
                    </Flex>
                </Box>
                </Flex>
           <Footer/>     
        </>
    )
}

export default Project