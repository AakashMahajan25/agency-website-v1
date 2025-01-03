import Banner from './components/Banner/Banner';
import Companies from './components/Companies/Companies';
import Buyers from './components/Buyers/index';
import Provide from './components/Provide/index';
import Why from './components/Why/index';
import Network from './components/Network/index';
import Clientsay from './components/Clientsay/index';
import Newsletter from './components/Newsletter/Newsletter';
import Hero from './components/Hero/page';
import Projects from './components/Projects/page';
import Services from './components/services/page';
import Reviews from './components/Reviews/page';



export default function Home() {
  return (
    <main  >
      {/* <Banner /> */}
      <Hero />
      <Companies />
      <Projects />
      {/* <Buyers /> */}
      {/* <Provide /> */}
      <Services />
      <Why />
      {/* <Network /> */}
      {/* <Clientsay /> */}
      <Reviews />
      <Newsletter />
    </main>
  )
}
