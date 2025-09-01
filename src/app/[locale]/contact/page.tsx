import { useTranslations } from 'next-intl';
import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Mail, MessageSquare, Clock, Globe } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact OneWallet - Get in Touch with Our Team',
  description: 'Contact OneWallet support team. Get help with crypto wallet questions, technical support, or business inquiries. 24/7 customer service available.',
  keywords: 'contact OneWallet, crypto wallet support, customer service, technical support, business inquiries',
  openGraph: {
    title: 'Contact OneWallet - Get in Touch with Our Team',
    description: 'Contact OneWallet for support, questions, or business inquiries. 24/7 customer service.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact OneWallet',
    description: 'Get in touch with OneWallet support team.',
  },
};

export default function ContactPage() {
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
        <ContactContent />
        <Footer />
      </div>
    </PageWrapper>
  );
}

function ContactContent() {
  const t = useTranslations('contact');

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "support@onewallet.io",
      detail: "Response within 24 hours"
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      description: "Available 24/7",
      detail: "Instant response"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "Monday - Friday",
      detail: "9AM - 6PM UTC"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Support",
      description: "200+ Countries",
      detail: "Multilingual assistance"
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
          <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-3xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200">
            <h2 className="text-3xl font-bold mb-8">{t('info.title')}</h2>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-8 leading-relaxed">
              {t('info.description')}
            </p>

            <ContactForm />
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <div className="text-white">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{info.title}</h4>
                      <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-1">{info.description}</p>
                      <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-500">{info.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* FAQ Link */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200">
              <h3 className="text-xl font-bold mb-4">Quick Answers</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-6">
                Check our FAQ section for instant answers to common questions.
              </p>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white"
              >
                Visit FAQ
              </Button>
            </div>

            {/* Download Links */}
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200">
              <h3 className="text-xl font-bold mb-4">Get OneWallet</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-6">
                Download OneWallet to start managing your crypto assets securely.
              </p>
              <div className="space-y-3">
                <Button className="w-full bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-100 light:bg-slate-800 light:text-white light:hover:bg-slate-700">
                  Chrome Extension
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white"
                >
                  Mobile App
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
