import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  const t = useTranslations('common');

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-slate-100 text-white dark:text-white light:text-slate-800 relative overflow-hidden transition-colors duration-500">
        {/* Background decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full opacity-80 animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-70 animate-pulse delay-500"></div>
          <div className="absolute bottom-60 left-16 w-1 h-1 bg-blue-300 rounded-full opacity-60 animate-pulse delay-1500"></div>
        </div>

        <Header />

        <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-16">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Visual */}
            <div className="mb-8">
              <div className="relative w-64 h-64 mx-auto">
                {/* Animated 404 */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute inset-8 bg-gradient-to-br from-blue-400/80 via-purple-500/60 to-green-400/80 rounded-full backdrop-blur-lg border border-white/20 flex items-center justify-center">
                  <span className="text-6xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    404
                  </span>
                </div>

                {/* Floating particles */}
                <div className="absolute top-12 right-8 w-3 h-3 bg-blue-400 rounded-full opacity-80 animate-bounce"></div>
                <div className="absolute bottom-16 left-12 w-2 h-2 bg-green-400 rounded-full opacity-60 animate-bounce delay-500"></div>
                <div className="absolute top-32 left-4 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-bounce delay-1000"></div>
              </div>
            </div>

            {/* Content */}
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              {t('notFound')}
            </h1>

            <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 mb-8 leading-relaxed">
              The page you&apos;re looking for seems to have wandered into the decentralized void.
              Let&apos;s get you back to safer digital territory.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Link href="/">
                <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Home className="w-5 h-5 mr-2" />
                  {t('backHome')}
                </Button>
              </Link>

              <Button
                variant="outline"
                onClick={() => window.history.back()}
                className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
              <Link
                href="/about"
                className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300"
              >
                About Us
              </Link>
              <Link
                href="/features"
                className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300"
              >
                Features
              </Link>
              <Link
                href="/support"
                className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300"
              >
                Support
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </PageWrapper>
  );
}
