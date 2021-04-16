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
      
      <Banner/>
      <Workflow/>
      <Juding/>
      <FAQ/>
      <Sponsor />
      <Footer/>
      </>
    )
  }
  
  export default Home