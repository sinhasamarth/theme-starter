    import {Box, Container, Heading,Flex,Card} from 'theme-ui'
    function Home() {
        return (
        
            <Container variant ='container' >
                
                <Heading as= 'h2' variant='title' a >How to Get Started </Heading> 

                <Card variant="primary">
                <Flex m= '5em' background= '/logo.png'>
                    <img src = "/register.gif"  width='150em' height='150em' style = {{  borderRadius: '99999px'}}/>
                    <Box padding='2em'>
                    <Heading  variant='title'  >Step 1 </Heading>
                        <Heading  variant='headline'>Register Your Self</Heading>
                    </Box>
                </Flex>


                <Flex m= '5em'>
                    <img src = "/to-do.gif"
                     width='150em' height='150em'  width='150em' height='150em' style = {{  borderRadius: '99999px'}}/>
                    <Box padding='2em'>
                    <Heading  variant='title'>Step 2 </Heading>
                        <Heading  variant='headline'>Short List </Heading>
                    </Box>
                </Flex>
                <Flex m= '5em'>
                    <img src = "/register.gif" width='150em' height='150em' style = {{  borderRadius: '99999px'}}/>
                    <Box padding='2em'>
                    <Heading  variant='title'>Step 3 </Heading>
                        <Heading  variant='headline'>Join Our Channels</Heading>
                    </Box>
                </Flex>
                <Flex m= '5em'>
                    <img src = "/trophy-animation.gif" width='150em' height='150em' style = {{  borderRadius: '99999em'}}/>
                    <Box padding='2em'>
                    <Heading  variant='title'>Step 5 </Heading>
                        <Heading  variant='headline'>Join Our Channels</Heading>
                    </Box>
                </Flex>
                

                </Card>
            </Container>
            
        
            
        )
    }
    
    export default Home