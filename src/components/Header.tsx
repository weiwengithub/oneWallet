'use client';

import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { Globe, Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useRouter, usePathname } from 'next/navigation';

export default function Header() {
  const t = useTranslations('nav');
  const { theme, setTheme } = useTheme();
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (locale: string) => {
    const pathSegments = pathname.split('/');
    const currentPath = pathSegments.slice(2).join('/');
    const newPath = currentPath ? `/${locale}/${currentPath}` : `/${locale}`;
    router.push(newPath);
  };

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('features'), href: '/features' },
    { name: t('support'), href: '/support' },
    { name: t('contact'), href: '/contact' },
  ];

  const currentLocale = pathname.split('/')[1] || 'en';

  const languageMap: Record<string, string> = {
    'en': 'English',
    'zh': '中文'
  };

  return (
    <motion.header
      className="relative z-50 px-4 sm:px-6 py-4"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <motion.div
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg flex items-center justify-center shadow-lg"
              whileHover={{
                rotateY: 180,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-xs sm:text-sm">OW</span>
            </motion.div>
            <span className="text-white dark:text-white light:text-slate-800 font-semibold text-lg sm:text-xl transition-colors duration-300">
              ONEWALLET
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={`/${currentLocale}${item.href}`}
              className="text-white dark:text-white light:text-slate-800 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300 text-sm font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Controls and Mobile Menu */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white dark:text-white light:text-slate-800 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200/50 h-8 sm:h-9 px-2 sm:px-3 transition-all duration-300"
                >
                  <Globe className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline ml-1">{languageMap[currentLocale]}</span>
                  <span className="sm:hidden ml-1">{currentLocale.toUpperCase()}</span>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/90 dark:bg-slate-800/90 light:bg-white/95 backdrop-blur-md border-white/20 dark:border-slate-700/50 light:border-slate-200"
            >
              {currentLocale !== 'en' && (
                <DropdownMenuItem
                  onClick={() => handleLanguageChange('en')}
                  className="hover:bg-blue-500/10 cursor-pointer"
                >
                  English
                </DropdownMenuItem>
              )}
              {currentLocale !== 'zh' && (
                <DropdownMenuItem
                  onClick={() => handleLanguageChange('zh')}
                  className="hover:bg-blue-500/10 cursor-pointer"
                >
                  中文
                </DropdownMenuItem>
              )}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Theme Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-white dark:text-white light:text-slate-800 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200/50 h-8 sm:h-9 w-8 sm:w-9 p-0 transition-all duration-300"
                >
                  <motion.div
                    animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </motion.div>
                  <span className="sr-only">{t('theme')}</span>
                </Button>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/90 dark:bg-slate-800/90 light:bg-white/95 backdrop-blur-md border-white/20 dark:border-slate-700/50 light:border-slate-200"
            >
              <DropdownMenuItem
                onClick={() => setTheme('light')}
                className="hover:bg-blue-500/10 cursor-pointer"
              >
                Light
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme('dark')}
                className="hover:bg-blue-500/10 cursor-pointer"
              >
                Dark
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setTheme('system')}
                className="hover:bg-blue-500/10 cursor-pointer"
              >
                System
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          <motion.button
            className="lg:hidden text-white dark:text-white light:text-slate-800 hover:text-blue-400 p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 right-0 bg-slate-900/95 dark:bg-slate-900/95 light:bg-white/95 backdrop-blur-lg border-t border-white/10 dark:border-white/10 light:border-slate-200"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="px-4 py-6 space-y-4">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/${currentLocale}${item.href}`}
                    className="block text-white dark:text-white light:text-slate-800 hover:text-blue-400 dark:hover:text-blue-400 light:hover:text-blue-600 transition-colors duration-300 text-lg font-medium py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
