import './App.css';
import Budget from './components/budget/Budget';
import Footer from './components/footer/Footer';
import Intro from "./components/intro/Intro";
import Navbar from './components/nav/Navbar';
import Resources from './components/resources/Resources';
import Sankey from './components/sankey/Sankey';
import Endowment from './components/endowment/Endowment';
import Hamburger from './components/nav/Hamburger';
import IntroDesc from './components/intro/IntroDesc';


const App = () => {
  return(
    <div>
      <Intro />
      <Navbar />
      {/* <Hamburger /> */}
      <IntroDesc />
      <Budget />
      <Sankey />
      <Endowment />
      <Resources />
      <Footer />
    </div>
  );
}

export default App;
