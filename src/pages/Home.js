import React from 'react'
import { Image } from '@chakra-ui/react'
import {Box, Flex, Text} from "@chakra-ui/react"
import Footer from '../components/Footer'
import img from '../images/para_final.png'
import whatwe from '../images/whatwe.svg'
import about_us from '../images/about-us.svg'
import landing from '../images/hom-1.svg'
import Asset2 from '../images/Asset 2.png'
import Asset3 from '../images/Asset 3.png'
import Asset4 from '../images/Asset 4.jpg'
import Asset5 from '../images/Asset 5.png'
import Asset6 from '../images/Asset 6.jfif'
import Asset7 from '../images/Asset 7.png'
import Asset8 from '../images/Asset 8.png'
import Asset9 from '../images/Snap.jfif'
import Asset10 from '../images/Asset 10.jpg'
import Asset11 from '../images/Asset 11.jfif'
import Asset12 from '../images/Asset 12.png'
import Asset13 from '../images/Asset 13.png'
import Asset14 from '../images/Asset 14.png'
// import { Parallax } from 'react-parallax'
import theme from "../components/theme"
import { Grid, GridItem } from '@chakra-ui/react'

function Home() {
    const {colors, fonts} = theme;
    const {heading, body} = fonts;
    const {black,white,green,blue} = colors
    return (
        <>
            <Flex alignItems='center' flexDirection = {['column','row']} justifyContent='space-around' w='100' h= {['90vh','90vh']} bg= {black}>
                <Flex flexDirection = 'row' w={['60vw','40vw']} h='50vh' alignItems='center' justifyContent='center' fontSize = '90px'> 
                <Text color = {green} fontSize={["60px", '120px']} fontWeight='bold' fontFamily = {heading} textAlign = {['center',]}> iGEM <br/>IIT Madras</Text>
                </Flex>
                <Box w={['80vw','50vw']} h={['35vh','50vh']}
                bgImage= {landing}
                bgPosition="center"
                bgRepeat="no-repeat" ></Box> 
            </Flex>
            
            {/* <Parallax bgImage = {img} bgImageAlt="the cat" strength={-1200}> */}
            <Flex  w='100' flexDirection = {['column', 'row']} alignItems='center' justifyContent='space-around'>
            <Box
                bgImage= {about_us}
                bgPosition="center"
                bgRepeat="no-repeat"
                w = {['85vw','38vw']}
                h = {['50vh','80vh']}   
            />
            <Box   w = {['95vw','38vw']} color={black} p='2rem'>
            <Text textAlign= 'center' fontSize = {[40,50]} color = {green}  fontWeight = 'bold' fontFamily = {heading} marginBottom= "35px"> About us</Text>
                <Text  fontSize={['18px','20px']} fontFamily = {body}> 
                We are the iGEM team of IIT Madras. iGEM is an international annual synthetic biology competition that sees participation from thousands of teams worldwide.
                <br></br>
                <br></br>
                The team is actively involved in everything synbio, from cancer drug producing fungi to a database of microbial host organisms, the team has produced a wide range of projects. 
                We have also collaborated with other institutions to take forward ideas and projects.
                <br></br>
                <br></br>
                The team also envisions to communicate to people of diverse backgrounds about the emerging and ever growing field of synthetic biology. One of our flagship initiative is the language project, explaining synbio concepts in several indian and foreign languages.
                <br></br>

                </Text>
            </Box>
            </Flex>
           
            
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fill-opacity="1" d="M0,160L240,224L480,192L720,224L960,128L1200,32L1440,256L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"></path></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fill-opacity="1" d="M0,96L26.7,101.3C53.3,107,107,117,160,138.7C213.3,160,267,192,320,192C373.3,192,427,160,480,170.7C533.3,181,587,235,640,240C693.3,245,747,203,800,176C853.3,149,907,139,960,154.7C1013.3,171,1067,213,1120,202.7C1173.3,192,1227,128,1280,106.7C1333.3,85,1387,107,1413,117.3L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            <Flex  w='100' flexDirection =  {['column-reverse', 'row']} alignItems='center' justifyContent='space-around' bg = {black}>
            <Box   w = {['95vw','38vw']} color={white} p='2rem'>
            <Text textAlign= 'center' fontSize = {[40,50]} color = {green}  marginBottom= "35px" fontWeight = 'bold' fontFamily = {heading}> What we do?</Text>
                <Text fontSize={['18px','20px']} fontFamily = {body}> 
                At iGEM IIT Madras, we jointly brainstorm several ideas, critically analyse them to design sustainable biological solutions to overcome various challenges. 
                <br></br>
                <br></br>
                The goal of each teammate is to evolve, participate and contribute globally in various competitions undertaken worldwide including iGEM, iGEM Indian League, GOGEC, the SynBio Power Pitch and many more.
                <br></br>
                <br></br>
                We conduct engaging workshops and interactive summer school sessions, filling young minds with curiosity for this enthralling field. These sessions are thought-provoking and aim to give a flavour of the aforementioned arenas.
                <br></br>
                <br></br>
                Apart from this, the team takes up human practice initiatives like vaccine awareness, school visits, the Language Project collaboration and creating simple innovations for the environment and our community.
                </Text>
            </Box>
            <Box
                bgImage= {whatwe}
                bgPosition="center"
                bgRepeat="no-repeat"
                w = {['85vw','38vw']}
                h = {['38vh','80vh']} 
               
            />
            </Flex>
            
            {/* <Text textAlign= 'center' fontSize = {[40,50]} color = {green} marginTop='35px' marginBottom= "20px" fontWeight = 'bold' fontFamily = {heading}> Mission</Text>
            
            <Text fontSize={['20px','38px']} textAlign = 'center' color={black} fontWeight = 'bold' fontFamily = {body}> 
                 "To provide a platform for accelerating the growth of biotechnology for a healthier future."
            </Text> */}

            <Text textAlign= 'center' fontSize = {[40,50]} color = {green} marginTop='50px' marginBottom= "20px" fontWeight = 'bold' fontFamily = {heading}> Sponsors </Text>

            {/* <Flex flexDirection = 'column' h='120vh' w='80vw' margin = 'auto' p='2.25rem' justifyContent= 'space-between'>
                <Flex flexDirection = 'row' h = '30vh' justifyContent= 'space-between'>
                   
                    <Image src= {Asset2} boxSize={['65px', '180px']} alt = 'Error'>
                    </Image>
                    <Image src= {Asset3} boxSize={['65px', '180px']} alt = 'Error'>
                    </Image>
                    <Image src= {Asset4} boxSize={['65px', '180px']} alt = 'Error'>
                    </Image>
                    <Image src= {Asset5} boxSize={['65px', '180px']} alt = 'Error'>
                    </Image>
                    
                </Flex>
                <Flex flexDirection = 'row' h = '30vh' justifyContent= 'space-between'>
                   
                    <Image src= {Asset6} boxSize={['90px', '150px']}>
                    </Image>
                    <Image src= {Asset7} boxSize={['70px', '180px']}>
                    </Image>
                    <Image src= {Asset8} boxSize={['70px', '180px']}>
                    </Image>
                    
                    
                </Flex>
                <Flex flexDirection = 'row' h = '30vh' justifyContent= 'space-between'>
                   
                    <Image src= {Asset9} boxSize={['70px', '180px']}>
                    </Image>
                    <Image src= {Asset10} boxSize={['70px', '180px']}>
                    </Image>
                    <Image src= {Asset11} boxSize={['70px', '180px']}>
                    </Image>
                  
                    
                </Flex>
            </Flex> */}
            
            <Grid
  
  w = '90vw'
  margin = 'auto'
  marginBottom= '10vh'
  padding = 'auto'
  templateRows={['repeat(7, 1fr)','repeat(5, 1fr)']}
  templateColumns={['repeat(2, 1fr)','repeat(3, 1fr)']}
  gap={[10,5]}
//   bg = 'black'
  alignItems= 'center'
  justifyItems='center'
>
  <GridItem rowSpan={1} colSpan={1}  >
  <Image src= {Asset2}  alt = 'Error' width = {['100px','180px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={1}   >
  <Image src= {Asset3}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={1}   >
  <Image src= {Asset4}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={1} rowSpan={1}  >
  <Image src= {Asset5}  alt = 'Error' width = {['100px','170px']}>
  </Image>
  </GridItem>
  <GridItem rowSpan={1} >
  <Image src= {Asset6}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={1} >
  <Image src= {Asset7}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={1}  >
  <Image src= {Asset8}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={1} >
  <Image src= {Asset9}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem  colSpan={[1,1]} >
  <Image src= {Asset10}  alt = 'Error'  width = {['100px','200px']} >
  </Image>
  </GridItem>
  <GridItem colSpan={[1,1]} >
  <Image src= {Asset11}  alt = 'Error' width = {['100px','170px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={[1,1]} >
  <Image src= {Asset12}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={[1,1]} >
  <Image src= {Asset13}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  <GridItem colSpan={[1,3]} >
  <Image src= {Asset14}  alt = 'Error' width = {['100px','200px']}>
  </Image>
  </GridItem>
  
</Grid>
            {/* </Parallax> */}
            
            <Footer/>
        

        </>
    )
}

export default Home
