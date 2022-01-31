import type { NextPage } from 'next';
import Image from 'next/image';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import SectionItems from '../components/SectionItems';
import Testimonial from '../components/Testimonial';
import Footer from '../components/Footer';
const Home: NextPage = () => {
  return (
    <div className="mt-4 h-screen">
      <Nav />
      <Hero />
      <SectionItems />
      <Testimonial />
      <Footer />
    </div>
  );
};
export default Home;
