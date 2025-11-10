'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/PageWrapper';
import { useState, useEffect, useRef } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Link from "next/link";
import Image from "next/image";

export default function TermsPageClient() {
  const t = useTranslations('terms');
  const [activeSection, setActiveSection] = useState('');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const params = useParams();
  const locale = params.locale as string;
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  const sections = [
    { id: 'introduction', title: t('introduction') },
    { id: 'agreement', title: t('agreementToTerms') },
    { id: 'changes', title: t('changesToTerms') },
    { id: 'who-may-use', title: t('whoMayUse') },
    { id: 'content', title: t('contentOwnership') },
    { id: 'acceptable-use', title: t('acceptableUse') },
    { id: 'fees', title: t('fees') },
    { id: 'third-party', title: t('thirdParty') },
    { id: 'termination', title: t('termination') },
    { id: 'warranty', title: t('warrantyDisclaimers') },
    { id: 'indemnity', title: t('indemnity') },
    { id: 'limitation', title: t('limitationLiability') },
    { id: 'acknowledgment', title: t('acknowledgment') },
    { id: 'dispute-resolution', title: t('disputeResolution') },
    { id: 'general-terms', title: t('generalTerms') },
    { id: 'usernames', title: t('usernames') },
    { id: 'contact-information', title: t('contactInformation') },
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
                <h3 className="text-lg font-semibold text-white mb-4">{t('contents')}</h3>
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
                {t('contents')}
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

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">{t('title')}</h1>

            <h2 className="text-xl md:text-2xl font-bold text-white mb-8 text-center">{t('subtitle')}</h2>

            <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
              {/* Introduction */}
              <section id="introduction" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('introduction')}</h2>
                <p className="leading-relaxed">{t('oneChainLabsLimited')}</p>
                <p className="leading-relaxed mt-4"><strong>{t('arbitrationNotice')}</strong> {t('theseTermsContain')}</p>
              </section>

              {/* Agreement to Terms; Privacy Policy */}
              <section id="agreement" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('agreementToTerms')}</h2>
                <p className="leading-relaxed">{t('pleaseReadThese')}</p>
              </section>

              {/* Changes to Terms or Services; Third-Party Services */}
              <section id="changes" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('changesToTerms')}</h2>
                <p className="leading-relaxed">{t('weMayModify')}</p>
              </section>

              {/* Who May Use the Services */}
              <section id="who-may-use" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('whoMayUse')}</h2>
                <h3 className="leading-relaxed">{t('eligibility')}</h3>
                <p className="leading-relaxed">{t('youMayUse')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('youAreOfLawful')}</li>
                  <li>{t('neitherYouNor')}</li>
                  <li>{t('registrationAndYour')}</li>
                </ul>
                <p className="leading-relaxed">{t('toUseTheSite')}</p>
                <h3 className="leading-relaxed">{t('feedback')}</h3>
                <p className="leading-relaxed">{t('weWelcomeFeedback')}</p>
              </section>

              {/* Content Ownership, Responsibility and Removal */}
              <section id="content" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('contentOwnership')}</h2>
                <p className="leading-relaxed">{t('forPurposes')}</p>
                <h3>{t('rightsInUser')}</h3>
                <p className="leading-relaxed">{t('youGrantUs')}</p>
                <h3>{t('rightsInApp')}</h3>
                <p className="leading-relaxed">{t('theApp')}</p>
              </section>

              {/* Acceptable Use and Enforcement Rights */}
              <section id="acceptable-use" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('acceptableUse')}</h2>
                <p className="leading-relaxed">{t('asCondition')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('violate')}</li>
                  <li>{t('areIllegal')}</li>
                  <li>{t('involveFalsehoods')}</li>
                  <li>{t('involveSending')}</li>
                  <li>{t('avoidBypass')}</li>
                  <li>{t('disguiseYour')}</li>
                  <li>{t('interfereWith')}</li>
                  <li>{t('circumvent')}</li>
                  <li>{t('couldInterfere')}</li>
                  <li>{t('violateAny')}</li>
                  <li>{t('encourageOrEnable')}</li>
                </ul>
                <p className="leading-relaxed">{t('byUsing')}</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>{t('anyDigitalTransfer')}</li>
                  <li>{t('youWillProvide')}</li>
                  <li>{t('youWillFunctionality')}</li>
                  <li>{t('anyDigitalAssets')}</li>
                  <li>{t('youWillPay')}</li>
                </ul>
                <p className="leading-relaxed">{t('althoughWeHave')}</p>
              </section>

              {/* Fees */}
              <section id="fees" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('fees')}</h2>
                <p className="leading-relaxed">{t('youMayBeCharged')}</p>
                <p className="leading-relaxed">{t('arrangements')}</p>
                <p className="leading-relaxed">{t('youUnderstand')}</p>
              </section>

              {/* Third Party Functionality */}
              <section id="third-party" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('thirdParty')}</h2>
                <p className="leading-relaxed">{t('theSite')}</p>
              </section>

              {/* Termination */}
              <section id="termination" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('termination')}</h2>
                <p className="leading-relaxed">{t('weMayTerminate')}</p>
              </section>

              {/* Warranty Disclaimers */}
              <section id="warranty" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('warrantyDisclaimers')}</h2>
                <p className="leading-relaxed">{t('youExpressly')}</p>
                <p className="leading-relaxed">{t('noProfessionalAdvice')}</p>
                <p className="leading-relaxed">{t('allInformationProvided')}</p>
              </section>

              {/* Indemnity */}
              <section id="indemnity" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('indemnity')}</h2>
                <p className="leading-relaxed">{t('youWillIndemnify')}</p>
              </section>

              {/* Limitation of Liability */}
              <section id="limitation" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('limitationLiability')}</h2>
                <p className="leading-relaxed">{t('theOneLabsParties')}</p>
              </section>

              {/* Acknowledgment of Certain Risks; Other Disclaimers; Release of Claims */}
              <section id="acknowledgment" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('acknowledgment')}</h2>
                <p className="leading-relaxed">{t('byAccessing')}</p>
              </section>

              {/* Dispute Resolution */}
              <section id="dispute-resolution" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('disputeResolution')}</h2>
                <h3>{t('governingLaw')}</h3>
                <p className="leading-relaxed">{t('theseTermsShall')}</p>
                <h3>{t('mandatoryArbitration')}</h3>
                <p className="leading-relaxed">{t('pleaseReadThis')}</p>
              </section>

              {/* General Terms */}
              <section id="general-terms" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('generalTerms')}</h2>
                <p className="leading-relaxed">{t('theseTerms')}</p>
              </section>

              {/* Usernames */}
              <section id="usernames" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('usernames')}</h2>
                <p className="leading-relaxed">{t('oneLabsUsernames')}</p>
              </section>

              {/* Contact Information */}
              <section id="contact-information" className="space-y-2">
                <h2 className="text-2xl font-semibold text-white">{t('contactInformation')}</h2>
                <p className="leading-relaxed">{t('ifYouHave')}</p>
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
                    href="#"
                    className="text-sm sm:text-[1.125rem] font-medium text-[#0047C4] hover:text-[#0047C4] leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
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
                    href={`/${locale}/privacy`}
                    className="text-sm sm:text-[1.125rem] font-medium text-[#A0A1A1] hover:text-[#0047C4] leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
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
