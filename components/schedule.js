import {Box, Container, Heading,Flex,Card} from 'theme-ui'
function Home() {
    return (
    
        <Container p="3em" >
            <Flex >
                <img width='100em' src="https://img.icons8.com/color/200/000000/stackexchange.png"/>        
                 <Heading ml="30px"mt="auto" mb='auto' variant="title">FAQ </Heading>
            </Flex>

            <Card variant="interactive" m="2em">
                <Flex>
                <img width="40em" height="40em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">Question 1  </Heading>
                    <Heading m="30px"  variant="subtitle">Ans 1  </Heading>
                    </Container>
                </Flex>
                
            </Card>

            <Card variant="interactive" m="2em">
                <Flex>
                <img width="40em" height="40em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">Question 1  </Heading>
                    <Heading m="30px"  variant="subtitle">Ans 1  </Heading>
                    </Container>
                </Flex>
                
            </Card> 
            
        </Container>
        
    
        
    )
}

export default Home