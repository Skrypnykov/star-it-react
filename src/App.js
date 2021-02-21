import './App.css';
import Navtop from './Components/Navtop/Navtop';
import Slider from './Components/Slider/Slider';
import Rating from './Components/Rating/Rating';
import Navtabs from './Components/Navtabs/Navtabs';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Navtop />    
      <Slider /> 
      <Navtabs />
      <Rating />
      <Footer />
    </div>
  );
}

export default App;
