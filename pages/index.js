import Workflow from '../components/Workflow';
import Juding from '../components/judging';
import FAQ from '../components/FAQ';
import Header from '../components/header'
import {Images} from 'theme-ui'
function Home() {
    return (
      <>
      <Header />
      <Workflow/>
      <Juding/>
      <FAQ/>
      
      </>
    )
  }
  
  export default Home