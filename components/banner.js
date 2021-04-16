import {Box, Container, Heading,Flex,Card,Link, Button,} from 'theme-ui'
import Workflow from '../components/Workflow';
import Juding from '../components/judging';
import FAQ from '../components/FAQ';
import Header from '../components/header'
import Footer from '../components/footer'
import Sponsor from '../components/Sponsor' 
import Banner from '../components/banner' 
function Home() {
    return (
    <>
    <div style ={{background: 'rgb(82,157,245)',
background: 'linear-gradient(to bottom, #1c92d2, #fff)', width: '100%',height:'400px', }}>
            <Header/>
            <Heading mt='auto' mb='auto'style={{textAlign:'center'}} variant='title' pt = "1.5cm" >
                HACKCLUB INDIA
            </Heading>
            <Heading mt='auto' mb='auto'style={{textAlign:'center'}}
            variant='title' >
                Ideathon
            </Heading>
            <h4 mt='auto' mb='auto'style={{textAlign:'center'}}>#HACKIDEATHON</h4>
        </div>
        
    </>    
    )
}

export default Home