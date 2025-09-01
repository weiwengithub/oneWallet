import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' }
  ];
}
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';
import { HelpCircle, MessageCircle, BookOpen } from 'lucide-react';
import FAQItem from '@/components/FAQItem';

export const metadata: Metadata = {
  title: 'OneWallet Support - Help Center & FAQ',
  description: 'Get help with OneWallet. Find answers to frequently asked questions about crypto wallet security, DeFi features, and blockchain support.',
  keywords: 'OneWallet support, crypto wallet help, FAQ, blockchain support, DeFi help, wallet security',
  openGraph: {
    title: 'OneWallet Support - Help Center & FAQ',
    description: 'Get help with OneWallet crypto wallet features and find answers to common questions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OneWallet Support - Help Center',
    description: 'Find answers and get help with OneWallet crypto wallet.',
  },
};

export default function SupportPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-slate-100 text-white dark:text-white light:text-slate-800 relative overflow-hidden transition-colors duration-500">
        {/* Background decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-70"></div>
        </div>

        <Header />
        <SupportContent />
        <Footer />
      </div>
    </PageWrapper>
  );
}

function SupportContent() {
  const t = useTranslations('support');

  const supportCategories = [
    {
      icon: <HelpCircle className="w-8 h-8" />,
      title: "Getting Started",
      description: "Learn the basics of using OneWallet",
      color: "from-blue-500 to-purple-500"
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Security & Safety",
      description: "Keep your assets secure with best practices",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Advanced Features",
      description: "Make the most of DeFi and cross-chain features",
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <main className="relative px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {t('title')}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-3xl mx-auto mb-8">
            {t('subtitle')}
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 bg-white/10 dark:bg-white/10 light:bg-white/80 border border-white/20 dark:border-white/20 light:border-slate-300 rounded-xl text-white dark:text-white light:text-slate-800 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 backdrop-blur-sm"
              />
              <HelpCircle className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Support Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {supportCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:scale-105 transition-all duration-300 cursor-pointer group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {category.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed">
                {category.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 dark:from-slate-800/30 dark:to-slate-900/30 light:from-white/60 light:to-slate-100/60 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-12 text-center">{t('faq.title')}</h2>

          <div className="space-y-6">
            {t.raw('faq.questions').map((faq: {question: string; answer: string}, index: number) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="text-center mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Still Need Help?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 mb-8 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you with any questions or issues
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Contact Support
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Live Chat
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
