'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesSection from '@/components/FeaturesSection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function HomePage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-black text-white dark:text-white light:text-slate-800 relative overflow-hidden transition-colors duration-500">
        {/* Background decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-[800px] h-[800px] absolute top-[460px] left-[-400px] bg-[radial-gradient(circle,_#0047c4,_#070707)] rounded-[1000px] blur-[100px]" />
          <div className="w-[900px] h-[900px] absolute top-[1470px] right-[-300px] bg-[radial-gradient(circle,_#0047c4,_#070707)] rounded-[1000px] blur-[100px]" />
          <div className="w-[600px] h-[600px] absolute bottom-[-200px] left-[-200px] bg-[radial-gradient(circle,_#0047c4,_#070707)] rounded-[1000px] blur-[100px]" />
          <div className="absolute top-16 left-16 sm:top-20 sm:left-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full opacity-60"></div>
          <div className="absolute top-32 right-24 sm:top-40 sm:right-32 w-1 h-1 bg-blue-300 dark:bg-blue-300 light:bg-blue-400 rounded-full opacity-80"></div>
          <div className="absolute top-48 left-1/4 sm:top-60 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 dark:bg-blue-500 light:bg-blue-600 rounded-full opacity-50"></div>
          <div className="absolute bottom-32 right-16 sm:bottom-40 sm:right-20 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full opacity-70"></div>
          <div className="absolute bottom-48 left-12 sm:bottom-60 sm:left-16 w-1 h-1 bg-blue-300 dark:bg-blue-300 light:bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-1/3 right-1/4 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-500 dark:bg-blue-500 light:bg-blue-600 rounded-full opacity-40"></div>

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
