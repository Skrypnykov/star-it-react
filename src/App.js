import './App.css';
import Navtop from './Components/Navtop/Navtop';
import Slider from './Components/Carousel/Carousel';
import FormFeedback from './Components/Form/Feedback';
// import QrScanner from './Components/QrScanner/QrScanner';

function App() {
  return (
    <div>
      <Navtop fixed="top"/>    
      <Slider /> 
      {/* <QrScanner /> */}
      <FormFeedback />
    </div>
  );
}

export default App;
