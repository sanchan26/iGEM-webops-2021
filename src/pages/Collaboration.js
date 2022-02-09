import {Box, Flex, Text} from "@chakra-ui/react";
import React, {useState} from 'react';
import { Button, Stack } from "@chakra-ui/react"
import { CollabData } from "../components/CollabData";
import { Link } from "@chakra-ui/react";
import DemoCarousel from "../components/DemoCarousel";
import theme from "../components/theme";
import Footer from '../components/Footer';
import {FaAngleRight} from "react-icons/fa";
import Bgimage from '../images/final.png';
import '../Stylesheets/Projectpage.css';

function Collab() {
    const {colors, fonts} = theme;
    const {heading, body} = fonts;
    const {black,white,green,blue} = colors
    const [pageContent, setPageContent] = useState({
        collabTitle: CollabData.collab1.title,
        collabDescription: CollabData.collab1.description,
        collabimage: CollabData.collab1.imagepath,
        collablink: CollabData.collab1.sitelink,
    })

    const [ButtonState, setButtonState] = useState(true);
    let sliderPaddingDesktop;
    let sliderPaddingMobile;
    let sliderWidthDesktop;
    let sliderWidthMobile;
    let carouselWidth;
    const sliderShow = () => {
        setButtonState(!ButtonState)
    }
   

    if (ButtonState) {
        sliderWidthDesktop = '0';
        sliderWidthMobile = '0';
        sliderPaddingDesktop = '0';
        sliderPaddingMobile = '0';
        carouselWidth = '60vw'
    }

    else {
        sliderWidthDesktop = '20vw';
        sliderWidthMobile = '95vw';
        sliderPaddingDesktop = '20px';
        sliderPaddingMobile = '10px';
        carouselWidth = '30vw'
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
                h='auto'
                w = {[sliderWidthMobile,sliderWidthDesktop]}
                padding= {[sliderPaddingMobile,sliderPaddingDesktop]}
                bg= {black}>
                <Stack onClick = {sliderShow} spacing={7} direction="column" align="center">
                    <Text color = {white} display = {['none','block']} fontWeight='extrabold' fontSize='28px' fontFamily = {heading}> Collaborations </Text>
                        <Button onClick = {() => setPageContent({collabTitle: CollabData.collab5.title,
                                                                collabDescription: CollabData.collab5.description,            
                                                                collablink: CollabData.collab5.sitelink,
                                                                collabimage: CollabData.collab5.imagepath})} colorScheme="green" size="lg" variant="ghost">
                            <Text color={green} fontSize = {['12px','18px']} fontWeight='bold'>Accessibility Project</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({collabTitle: CollabData.collab1.title,
                                                                collabDescription: CollabData.collab1.description,
                                                                collablink: CollabData.collab1.sitelink,
                                                                collabimage: CollabData.collab1.imagepath})} colorScheme="green" size="lg" variant="ghost">
                            <Text color={green} fontSize = {['12px','18px']} fontWeight='bold'>Language project</Text >
                        </Button>
                        <Button  onClick = {() => setPageContent({collabTitle: CollabData.collab2.title,
                                                                collabDescription: CollabData.collab2.description,                                                   
                                                                collablink: CollabData.collab2.sitelink,
                                                                collabimage: CollabData.collab2.imagepath})} colorScheme="green" size="lg" variant="ghost">
                            <Text color={green} fontSize = {['12px','18px']} fontWeight='bold'>School visits</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({collabTitle: CollabData.collab3.title,
                                                                collabDescription: CollabData.collab3.description,     
                                                                collablink: CollabData.collab3.sitelink,
                                                                collabimage: CollabData.collab3.imagepath})} colorScheme="green" size="lg" variant="ghost">
                            <Text color={green} fontSize = {['12px','18px']} fontWeight='bold'>Workshop</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({collabTitle: CollabData.collab4.title,
                                                                collabDescription: CollabData.collab4.description,
                                                                collablink: CollabData.collab4.sitelink,
                                                                collabimage: CollabData.collab4.imagepath})} colorScheme="green" size="lg" variant="ghost">
                            <Text color={green} fontSize = {['12px','18px']} fontWeight='bold'>DTU</Text >
                        </Button>
                        <Button onClick = {() => setPageContent({collabTitle: CollabData.collab6.title,
                                                                collabDescription: CollabData.collab6.description,
                                                                collablink: CollabData.collab6.sitelink,
                                                                collabimage: CollabData.collab6.imagepath})} colorScheme="green" size="lg" variant="ghost">
                            <Text color={green} fontSize = {['12px','18px']} fontWeight='bold'>Other outreaches</Text >
                        </Button>                       
                </Stack> 
                </Box> 
                <Box w={['100vw','100vw']} h= 'auto' bgImage = {Bgimage}
                bgPosition="center"
                bgRepeat="repeat">
                <Flex margin = {['3px','15px']}  flexDirection = 'row' alignItems='center'>
                <FaAngleRight color = {white} onClick = {sliderShow} fontSize = '50px' className="hovers"> </FaAngleRight>
                <Button fontSize={['18px','27px']} color={green} fontFamily = {heading} onClick = {sliderShow} className="hovers" variant="outline"> All outreach Activities</Button>
                </Flex>
                
                    <Text color={white} fontWeight='bold'
                     fontSize={['30px','37px']} textAlign='center'
                     marginTop='15px' marginBottom='28px'  fontFamily = {heading}>
                        {pageContent.collabTitle}
                    </Text>
                    <Text color={green} fontWeight='bold'
                     fontSize={['26px','30px']} margin='30px'
                     marginTop='15px' marginBottom='10px'  fontFamily = {heading}>
                    Description
                     </Text>

                     <Text color={white}
                     fontSize={['17px','20px']} 
                     marginTop='15px' margin='30px'  fontFamily = {body}>
                    {pageContent.collabDescription}
                     </Text>

                     {/* <Text color={black} fontWeight='bold'
                     fontSize='30px' textAlign='center'
                     marginTop='15px' marginBottom='10px' fontFamily = {heading}>
                    Achievements
                     </Text>

                     <Text color={black}
                     fontSize='20px' textAlign='center'
                     marginTop='15px' margin='30px' fontFamily = {body}>
                    {pageContent.projectAchievements}
                     </Text> */}
                    <Flex margin= 'auto' h= 'auto' w = '20vw' justifyContent='center'>
                    <DemoCarousel imgurl = {pageContent.collabimage}  >
                    </DemoCarousel>
                    </Flex>

                    <Flex h='auto' w='100' alignItems='center' justifyContent='center' fontFamily = {body} margin = '30px' >
                     <Link textAlign= 'center'  href={pageContent.collablink} isExternal>
                     <Button margin = 'auto' colorScheme = "green" variant="solid">
                         Know more
                     </Button>
                    </Link>
                    </Flex>
                </Box>
                </Flex>
                <Footer/>
        </>
    )
}

export default Collab