import './App.css';
import Header from './components/header/header';
import Testimonial from './components/testimonials/testimonial';

function App() {
  return (
    <div>
      <Header />
      <Testimonial content = "&quot;This year, I feel like a completely different individual. I am grateful to the coach for her help.&quot;" name ="Alicia" />
    </div>
  );
}

export default App;
