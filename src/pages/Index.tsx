import AuroraBackground from '@/components/AuroraBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import LiveDemo from '@/components/LiveDemo';
import FeaturesSection from '@/components/FeaturesSection';
import ForStudents from '@/components/ForStudents';
import Footer from '@/components/Footer';

const Index = () => (
  <div className="relative min-h-screen" style={{ overflow: 'visible' }}>
    <AuroraBackground />
    <Navbar />
    <HeroSection />
    <HowItWorks />
    <LiveDemo />
    <FeaturesSection />
    <ForStudents />
    <Footer />
  </div>
);

export default Index;
