import {Box, Container, Heading,Flex,Card,Link} from 'theme-ui'
function Home() {
    return (
    <>
        <Container style={{ textAlign :'center', width:'90%', margin:'auto'}}>

            <Heading variant="title">Sponsors</Heading>


            <Flex>
            <div style ={{padding:'5em' , margin:'auto'}}>
                <div style ={{margin : "auto"}}>
                        <img src="https://assets.hackclub.com/flag-standalone.svg" width="100em" />
                    </div>
                </div>
            </Flex>
            
        </Container>
        <Container>
          <Card variant="interactive" style ={{textAlign :"center"}} >
              <Heading variant="lead">Interested in sponsoring? Contact  <Link href = "mailto:s@hackclub.com" color = 'red' >sponsor@hackclub.com </Link></Heading>
          </Card>
      </Container>

       
        
    </>    
    )
}

export default Home