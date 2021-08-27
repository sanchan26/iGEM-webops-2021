import React from 'react'
import {Box, Flex, Text} from "@chakra-ui/react"
import Footer from '../components/Footer'
import img from '../images/parallax4.jpg'
import img1 from '../images/Igem.png'
import { Parallax } from 'react-parallax'

function Home() {
    return (
        <>
            <Flex alignItems='center' justifyContent='space-around' w='100' h= '90vh' bg= '#222930'>
                <Flex flexDirection = 'row' w='40vw' h='50vh' alignItems='center' justifyContent='center' fontSize = '90px'> 
                <Text color = '#00B859' fontWeight='bold'> iGEM IIT Madras</Text>
                </Flex>
                <Box w='40vw' h='50vh' bg ='White'></Box>
            </Flex>
            
            <Parallax bgImage = {img} bgImageAlt="the cat" strength={-1200}>
            <Flex h='100vh' w='100'  flexDirection = 'row' alignItems='center' justifyContent='space-around'>
            <Box
                bgImage= {img1}
                bgPosition="center"
                bgRepeat="no-repeat"
                w = '38vw'
                h = '80vh'
               
            />
            <Box h='90vh' w='38vw' color='#131313' p='2rem'>
            <Text textAlign= 'center' fontSize = {40} color = '#00B859'  marginBottom= "20px" fontWeight = 'bold'> About Us</Text>
                <Text fontSize='20px'> 
                We are the iGem team of IIT madras. iGEM is an international annual synthetic biology competition that sees participation from thousands of teams worldwide.
                <br></br>
                <br></br>
                The team is actively involved in everything synbio, from cancer drug producing fungi to a database of microbial host organisms, the team has produced a wide range of projects. 
                We have also collaborated with other institutions to take forward ideas and projects.
                <br></br>
                <br></br>
                The team also envisions to communicate to people of diverse backgrounds about the emerging and ever growing field of synthetic biology. One of our flagship initiative is the language project, explaining synbio concepts in several indian and foreign languages 
                </Text>
            </Box>
            </Flex>
            
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#131313" fill-opacity="1" d="M0,160L240,224L480,192L720,224L960,128L1200,32L1440,256L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"></path></svg>
            <Flex h='100vh' w='100' flexDirection = 'row' alignItems='center' justifyContent='space-around' bg = '#131313'>
            <Box h='90vh' w='38vw' color='white' p='2rem'>
            <Text textAlign= 'center' fontSize = {40} color = '#00B859'  marginBottom= "20px" fontWeight = 'bold'> What we do?</Text>
                <Text fontSize='20px'> 
                At IGEM IIT Madras, we jointly brainstorm several ideas, critically analyse them to design sustainable biological solutions to overcome various challenges. 
                <br></br>
                <br></br>
                The goal of each teammate is to evolve, participate and contribute globally in various competitions undertaken worldwide including IGEM, IGEM Indian League, GOGEC, the SynBio Power Pitch and many more.
                <br></br>
                <br></br>
                We conduct engaging workshops and interactive summer school sessions, filling young minds with curiosity for this enthralling field. These sessions are thought-provoking and aim to give a flavour of the aforementioned arenas.
                </Text>
            </Box>
            <Box
                bgImage= {img1}
                bgPosition="center"
                bgRepeat="no-repeat"
                w = '38vw'
                h = '80vh'
               
            />
            </Flex>

            <Text textAlign= 'center' fontSize = {40} color = '#00B859' marginTop='35px' marginBottom= "20px" fontWeight = 'bold'> Mission</Text>
            
            <Text fontSize='20px' textAlign = 'center' fontWeight = 'bold'> 
                 "To provide a platform for accelerating the growth of biotechnology for a healthier future."
            </Text>

            <Text textAlign= 'center' fontSize = {40} color = '#00B859' marginTop='35px' marginBottom= "20px" fontWeight = 'bold'> Sponsors </Text>

            <Box h='60vh' w='80vw' color='#131313' margin = 'auto' p='2.25rem' >
                
            </Box>
            </Parallax>
            <Footer/>
        

        </>
    )
}

export default Home
