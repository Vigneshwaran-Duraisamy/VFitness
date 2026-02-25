import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import WhyChooseUsSection from '../components/sections/WhyChooseUsSection';
import MembershipPlansSection from '../components/sections/MembershipPlansSection';
import TrainersSection from '../components/sections/TrainersSection';
import GallerySection from '../components/sections/GallerySection';
import LocationSection from '../components/sections/LocationSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <MembershipPlansSection />
      <TrainersSection />
      <GallerySection />
      <LocationSection />
      <ContactSection />
    </>
  );
}

