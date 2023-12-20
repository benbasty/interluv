import './App.css';
import Header from './components/header/header';
import Testimonial from './components/testimonials/testimonial';
import About from './components/about/About';
import Work from './components/work/work';
import Galery from './components/galery/galery';
import Stories from './components/stories/stories';
import Form from './components/form/form';
import Joinus from './components/joinus/joinus';
import Bookingform from './components/form/bookingform';

function App() {
  return (
    <div>
      <Header />
      <Testimonial content = "&quot;This year, I feel like a completely different individual. I am grateful to the coach for her help&quot;" name ="Alicia" />
      <About />
      <Testimonial content = "&quot;This year, I feel like a completely different individual. I am grateful to the coach for her help&quot;" name ="Alicia" />
      <Work/>
      <Testimonial content = "&quot;This year, I feel like a completely different individual. I am grateful to the coach for her help&quot;" name ="Alicia" />
      <Galery />
      <Stories />
      <Form />
      <Bookingform />
      <Joinus />
    </div>
  );
}

export default App;
