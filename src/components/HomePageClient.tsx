'use client';

import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function HomePageClient() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white dark:text-white light:text-slate-800 relative overflow-hidden transition-colors duration-500">
        {/* Background decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-[800px] h-[800px] absolute top-[460px] left-[-400px] bg-[radial-gradient(circle,_#0047c4,_#070707)] rounded-[1000px] blur-[100px]" />
          <div className="w-[1600px] h-[900px] absolute top-[1470px] right-[-800px] opacity-80 bg-[radial-gradient(circle,_#0047c4,_#070707)] rounded-[1000px] blur-[100px]" />
          <div className="w-[1800px] h-[400px] absolute bottom-[-200px] left-[-800px] opacity-80 bg-[radial-gradient(circle,_#0047c4,_#070707)] rounded-[1000px] blur-[100px]" />
          <div className="absolute top-[830px] left-[360px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[730px] left-[600px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[840px] left-[620px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[790px] left-[700px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[740px] left-[850px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[650px] left-[870px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[540px] left-[800px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[530px] left-[1000px] w-2 h-2 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[360px] left-[1040px] w-1 h-1 bg-[#0047C4] rounded-full opacity-60"></div>
          <div className="absolute top-[360px] left-[1120px] w-1 h-1 bg-[#0047C4] rounded-full opacity-60"></div>

          {/* Additional mobile-specific decorative elements */}
          <div className="absolute top-1/2 left-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-300 dark:bg-blue-300 light:bg-blue-400 rounded-full opacity-50 sm:hidden"></div>
          <div className="absolute bottom-1/4 right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full opacity-60 sm:hidden"></div>
        </div>

        <Header />
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <NewsletterSection />
        <Footer />
      </div>
    </PageWrapper>
  );
}
