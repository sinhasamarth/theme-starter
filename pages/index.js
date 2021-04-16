import Workflow from '../components/Workflow';
import Judging from '../components/judging';
import FAQ from '../components/FAQ';
import Header from '../components/header'
import Footer from '../components/footer'
import Sponsor from '../components/Sponsor' 
import Banner from '../components/banner' 
import {Flex, Card} from 'theme-ui'
function Home() {
    return (
      <>

      <Banner/>
     <Card>
       <h3>After a wonderful success of Hackclub Asia Virtual Conference, HackClub India is back with another amazing opportunity for all to engage in a India level Virtual Ideathon, and win amazing prizes.</h3>
     
       <Flex>
        <Workflow/>
        <Judging/>
      </Flex>
      </Card>
      <FAQ/>
      <Sponsor />
      <Footer/>
      </>
    )
  }
  
  export default Home