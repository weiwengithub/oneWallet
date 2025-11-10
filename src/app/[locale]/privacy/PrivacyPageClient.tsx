'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import { useState, useEffect } from 'react';
import Header from "@/components/Header";
import Link from "next/link";
import {useParams} from "next/navigation";

export default function PrivacyPageClient() {
  const t = useTranslations('privacy');
  const params = useParams();
  const locale = params.locale as string;
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'introduction', title: t('introduction') },
    { id: 'information-collect', title: t('theInformationCollect') },
    { id: 'how-we-use', title: t('howUseInformation') },
    { id: 'how-we-share', title: t('howWeShare') },
    { id: 'cookies', title: t('ourUseCookies') },
    { id: 'party-links', title: t('thirdPartyLinks') },
    { id: 'personal-information', title: t('personalInformationChoices') },
    { id: 'contact-us', title: t('contactUs') },
    { id: 'changes-policy', title: t('changesThisPolicy') },
    { id: 'additional-information', title: t('additionalInformation') },
    { id: 'additional-individuals', title: t('additionalInformationIndividuals') },
    { id: 'additional-information-individuals', title: t('additionalInformationFor') },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setShowBackToTop(scrollTop > 300);

      // 更新活动章节
      const sectionElements = sections.map(s => document.getElementById(s.id));
      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const element = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <PageWrapper>
      {/* 滚动进度条 */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200/10 z-50">
        <div
          className="h-full bg-[#0047C4] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-[#0A0F1E] via-[#1A1F35] to-[#0A0F1E] pt-24 pb-8 px-4">
        <div className="max-w-7xl mx-auto flex gap-8">
          <div className="h-20 w-full fixed top-0 left-0 z-20 bg-[#0A0F1E]">
            <div className="max-w-7xl mx-auto">
              <Header isFixed={true} />
            </div>
          </div>
          {/* 左侧导航菜单 - 仅在大屏幕显示 */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-4">{t('tableContents')}</h3>
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`block w-full text-left text-sm px-3 py-2 rounded-md transition-all duration-200 ${
                        activeSection === section.id
                          ? 'bg-[#0047C4]/20 text-white font-medium border-l-4 border-[#0047C4]'
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </aside>

          {/* 主要内容区域 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 bg-white/5 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
          >
            {/* 移动端目录 */}
            <details className="lg:hidden mb-8 bg-white/5 rounded-xl border border-white/10">
              <summary className="px-4 py-3 font-medium text-white cursor-pointer hover:bg-white/5 transition-colors">
                {t('tableContents')}
              </summary>
              <div className="px-4 pb-4">
                <nav className="grid grid-cols-1 gap-1 mt-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`text-left text-sm px-2 py-1 rounded transition-colors ${
                        activeSection === section.id
                          ? 'bg-[#0047C4]/20 text-white font-medium'
                          : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      {section.title}
                    </button>
                  ))}
                </nav>
              </div>
            </details>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">{t('title')}</h1>

            <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
              {/* Introduction */}
              <section id="introduction" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('introduction')}</h2>
                <p className="leading-relaxed">{t('Limited')}</p>
                <h3 className="text-xl font-semibold text-white">{t('overview')}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('privacyCore')}</li>
                  <li>{t('oneLabsDoes')}</li>
                  <li>{t('oneLabsWill')}</li>
                  <li>{t('forEvenMore')}</li>
                  <li>{t('thisPolicyWill')}</li>
                </ul>
              </section>

              {/* The Information We Collect */}
              <section id="information-collect" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('theInformationCollect')}</h2>
                <p className="leading-relaxed">{t('weCollectInformation')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('anyUsername')}</li>
                  <li>{t('yourEmail')}</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6">{t('information')}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('usageData')}</li>
                  <li>
                    {t('yourAddress')}
                    <ul className="list-disc list-inside space-y-2 ml-4">
                      <li>{t('protectSecurity')}</li>
                      <li>{t('deriveApproximate')}</li>
                      <li>{t('establishNetwork')}</li>
                      <li>{t('complyLegal')}</li>
                      <li>{t('forClarity')}</li>
                    </ul>
                  </li>
                  <li>{t('publiclyAvailable')}</li>
                </ul>
                <p className="leading-relaxed">{t('forAdditional')}</p>
              </section>

              {/* How We Use The Information We Collect */}
              <section id="how-we-use" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('howUseInformation')}</h2>
                <p className="leading-relaxed">{t('weUseInformation')}</p>
              </section>

              {/* How We Share The Information We Collect */}
              <section id="how-we-share" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('howWeShare')}</h2>
                <p className="leading-relaxed">{t('weMayDisclose')}</p>
              </section>

              {/* Our Use of Cookies and Other Tracking Mechanisms */}
              <section id="cookies" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('ourUseCookies')}</h2>
                <p className="leading-relaxed">{t('weAndOur')}</p>
              </section>

              {/* Third-Party Links */}
              <section id="party-links" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('thirdPartyLinks')}</h2>
                <p className="leading-relaxed">{t('ourServices')}</p>
              </section>

              {/* Personal Information Choices */}
              <section id="personal-information" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('personalInformationChoices')}</h2>
                <p className="leading-relaxed">{t('whatRights')}</p>
              </section>

              {/* Contact Us */}
              <section id="contact-us" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('contactUs')}</h2>
                <p className="leading-relaxed">{t('ifYouHave')}</p>
              </section>

              {/* Changes to this Policy */}
              <section id="changes-policy" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('changesThisPolicy')}</h2>
                <p className="leading-relaxed">{t('thisPolicy')}</p>
              </section>

              {/* Additional Information For Individuals Residing in Certain U.S. States */}
              <section id="additional-information" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('additionalInformation')}</h2>
                <p className="leading-relaxed">{t('severalStates')}</p>
                <h3 className="leading-relaxed">{t('categoryPersonal')}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('identifiers')}</li>
                  <li>{t('commercialInformation')}</li>
                  <li>{t('internetOther')}</li>
                </ul>
                <h3 className="leading-relaxed">{t('categoriesRecipients')}</h3>
                <p className="leading-relaxed">{t('cloudService')}</p>
                <h3 className="leading-relaxed">{t('usePersonal')}</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('provideServices')}</li>
                  <li>{t('providePersonalized')}</li>
                  <li>{t('improveDevelop')}</li>
                  <li>{t('offersOther')}</li>
                  <li>{t('otherLegal')}</li>
                </ul>
                <p className="leading-relaxed">{t('weDoNot')}</p>
              </section>

              {/* Additional Information For Individuals in Europe */}
              <section id="additional-individuals" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('additionalInformationIndividuals')}</h2>
                <p className="leading-relaxed">{t('ifYouAreLocated')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('toPerform')}</li>
                  <li>{t('whenHaveLegitimate')}</li>
                  <li>{t('toComplyWith')}</li>
                  <li>{t('whenHaveConsent')}</li>
                </ul>
                <h3 className="leading-relaxed">{t('subjectRequests')}</h3>
                <p className="leading-relaxed">{t('inAddition')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('forIndividualsEuropean')}<a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank">https://edpb.europa.eu/about-edpb/board/members_en</a></li>
                  <li>{t('forIndividualsUK')}<a href="https://ico.org.uk/global/contact-us/" target="_blank">https://ico.org.uk/global/contact-us/</a></li>
                  <li>{t('forIndividuals')}<a href="https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html" target="_blank">https://www.edoeb.admin.ch/edoeb/en/home/the-fdpic/contact.html</a></li>
                </ul>
              </section>

              {/* Additional Information For Individuals in Canada */}
              <section id="additional-information-individuals" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('additionalInformationFor')}</h2>
                <p className="leading-relaxed">{t('ifYouCanadian')}</p>
              </section>

              {/* Copyright */}
              <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
                <p>{t('date')}</p>
                <p className="mt-2">{t('copyright')}</p>
              </div>

              {/* Agreement */}
              <motion.div
                className="flex justify-center"
                variants={itemVariants}
              >
                <motion.div
                  className="inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href={`/${locale}/terms`}
                    className="text-sm sm:text-[1.125rem] font-medium text-[#A0A1A1] hover:text-[#0047C4] leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
                  >
                    {t('termsOfService')}
                  </Link>
                </motion.div>
                <motion.div
                  className="ml-[36px] inline-block"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    href="#"
                    className="text-sm sm:text-[1.125rem] font-medium text-[#0047C4] hover:text-[#0047C4] leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
                  >
                    {t('privacyPolicy')}
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 返回顶部按钮 */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.75, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.75, y: 20 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-br from-[#0A0F1E] via-[#1A1F35] to-[#0A0F1E] text-gray-400 hover:text-white p-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-200 z-40"
          aria-label="Back to top"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      )}
    </PageWrapper>
  );
}
