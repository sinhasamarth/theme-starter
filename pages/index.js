import {Text , Box , Container , Heading,Card,Image ,Button,Gradient,Flex,Link} from 'theme-ui'
import base from '@hackclub/theme'
function Home() {
    return (
      <Container variant='wide' >
        <Box backgroundColor= 'steel' p = '15px'>
        <Flex>
          <Image src = '/logo.png' width='150px' height='56px' />
          
          <Heading  as="h1" variant ='ultratitle'> ---  </Heading>
        <Box ml = 'auto' mt='auto' mb ='auto'>
          <Button margin = '5px'>BTN 1</Button>
          <Button margin = '5px'>BTN 2</Button>
          <Button margin = '5px'>BTN 3 q </Button>
        </Box>
        </Flex>
        </Box>

        <Box>
          
          <Heading as= 'h2' variant='title' a >How to Get Started </Heading>

          </Box>  
         
          
        </Container>
          
    )
  }
  
  export default Home