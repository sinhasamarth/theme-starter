import {Box, Container, Heading,Flex,Card, Paragraph} from 'theme-ui'
function Home() {
    return (
    
        <Container>
            
            <Heading m='30px' mt='40px' as= 'h2' variant='headline' >Judging </Heading> 
            <Container  p="30px"  >
                <Card>
                <Container  p ='10px'>
                    <Flex>
                        <img width='50em'src="https://img.icons8.com/fluent/128/000000/creativity.png" />
                        <Heading ml='30px' mt='auto' mb='auto'>Creativity</Heading>
                        </Flex>
                </Container>

                <Container p ='10px'>
                    <Flex>
                        <img width='50em'src="https://img.icons8.com/fluent/128/000000/verified-badge.png" />
                        <Heading ml='30px' mt='auto' mb='auto'>Ease To Use</Heading>
                        </Flex>
                </Container>

                <Container p ='10px'>
                    <Flex>
                        <img width='50em'src="https://img.icons8.com/fluent/128/000000/cloud-connection.png" />
                        <Heading ml='30px' ml='30px'mt='auto' mb='auto'>Connection With Theme</Heading>
                        </Flex>
                </Container>
                <Container  p ='10px'>
                <Flex>
                    <img width='50em' src="https://img.icons8.com/fluent/48/000000/presentation.png"/>
                    <Heading ml='30px' mt='auto' mb='auto'>Presentation</Heading>
                    </Flex>
            </Container>
            </Card>
            </Container>
            
        </Container>
        
    
        
    )
}

export default Home