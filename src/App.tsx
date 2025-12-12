import { FC } from 'react';
import MainLayout from './layouts/MainLayout';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';

const App: FC = () => {
  return (
    <MainLayout>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <CallToAction />
    </MainLayout>
  );
};

export default App;
