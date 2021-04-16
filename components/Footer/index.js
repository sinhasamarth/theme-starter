import {Box, Container, Heading,Flex,Card, Link} from 'theme-ui'
function Home() {
    return (
    
     <Container marginTop ="30px">
         <Container>
                <Heading variant ="headline">Contact Us </Heading>
                <Heading variant ="subheadline">
                Adi Shankara ,Vidya Bharathi Nagar Mattoor, Kalady, Ernakulam Kerala 683574
                    </Heading>
                    <Heading variant="subheadline"marginTop="10px">Mail Us -  <Link href ="mailto:google.com"> contact@ideathon </Link></Heading>
               
         </Container>
     </Container>
        
    )
}

export default Home