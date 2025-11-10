'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';

export default function AboutPageClient() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-slate-100 text-white dark:text-white light:text-slate-800 relative overflow-hidden transition-colors duration-500">
        {/* Background decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-16 left-16 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-blue-300 rounded-full opacity-80"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
        </div>

        <Header />
        <AboutContent />
        <Footer />
      </div>
    </PageWrapper>
  );
}

function AboutContent() {
  const t = useTranslations('about');

  return (
    <main className="relative px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Mission, Vision, Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20">
          {/* Mission */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-green-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold">🎯</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">{t('mission.title')}</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed text-center">
              {t('mission.description')}
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold">🌟</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">{t('vision.title')}</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed text-center">
              {t('vision.description')}
            </p>
          </div>

          {/* Team */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-blue-400 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <span className="text-2xl font-bold">👥</span>
            </div>
            <h2 className="text-2xl font-bold mb-4 text-center">{t('team.title')}</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed text-center">
              {t('team.description')}
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">30M+</div>
              <div className="text-gray-300 dark:text-gray-300 light:text-slate-600">Users Worldwide</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-green-400 mb-2">200+</div>
              <div className="text-gray-300 dark:text-gray-300 light:text-slate-600">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300 dark:text-gray-300 light:text-slate-600">Blockchains</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold text-yellow-400 mb-2">24/7</div>
              <div className="text-gray-300 dark:text-gray-300 light:text-slate-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
