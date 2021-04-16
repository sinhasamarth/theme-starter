import {Box, Container, Heading,Flex,Card} from 'theme-ui'
function Home() {
    return (
    
        <Container p="3em" >
            <Flex >
                <img width='50em' src="https://img.icons8.com/color/200/000000/stackexchange.png"/>        
                 <Heading ml="30px"mt="auto" mb='auto' variant="headline">FAQ </Heading>
            </Flex>

            <Card variant="interactive" m="3em">
                <Flex>
                <img width="30em" height="30em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">What is an Ideathon  </Heading>
                    <Heading m="30px"  variant="subtitle"> An ideathon is a short, intensive, workshop-like experience for students to address some of the most pressing challenges of our time. Participants work in teams and use design thinking and innovative learning practices to ideate and collaborate on possible solutions.  </Heading>
                    </Container>
                </Flex>
                
            </Card>

            <Card variant="interactive" m="3em">
                <Flex>
                <img width="30em" height="30em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">Do I need to pay any money to register for the Ideathon?  </Heading>
                    <Heading m="30px"  variant="subtitle">No. You do not have to pay anything to anyone to register yourself </Heading>
                    </Container>
                </Flex>
                
            </Card> 
            <Card variant="interactive" m="3em">
                <Flex>
                <img width="30em" height="30em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">Do I need to have any specific qualifications to be a participant for the Hackathon?  </Heading>
                    <Heading m="30px"  variant="subtitle">If you love to code, you are more than welcome to participate in the Hackathon.  </Heading>
                    </Container>
                </Flex>
                
            </Card> 
            <Card variant="interactive" m="3em">
                <Flex>
                <img width="30em" height="30em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">Do we need to have the entire idea fully working?  </Heading>
                    <Heading m="30px"  variant="subtitle">No  </Heading>
                    </Container>
                </Flex>
                
            </Card> 
            <Card variant="interactive" m="3em">
                <Flex>
                <img width="30em" height="30em" src="https://img.icons8.com/fluent/40/000000/plus-math.png"/>
                <Container>
                    <Heading ml="30px"mt="auto" mb='auto' variant="headline">Where is it happening?  </Heading>
                    <Heading m="30px"  variant="subtitle">This is a Virtual Ideathon.  </Heading>
                    </Container>
                </Flex>
                
            </Card> 
            
        </Container>
        
    
        
    )
}

export default Home