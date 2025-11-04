'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
  const router = useRouter();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLanguageChange = (locale: string) => {
    const currentPath = pathname.split('/').slice(2).join('/');
    router.push(`/${locale}/${currentPath}`);
  };

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('about'), href: '/about' },
    { name: t('features'), href: '/features' },
    { name: t('support'), href: '/support' },
    { name: t('contact'), href: '/contact' },
  ];

  const currentLocale = pathname.split('/')[1] || 'en';

  const [showTheme] = useState(false);

  return (
    <motion.header
      className="relative z-50 px-4 py-6 sm:px-[5rem] sm:pt-[1.5rem] sm:pb-[5.875rem]"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-[1568px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <Link href={`/${currentLocale}`} className="flex items-center space-x-2">
            <div className="w-[21.125rem] h-[5.25rem]">
              <Image src="/images/logo.png" alt="" width={338} height={84} className="size-full" />
            </div>
          </Link>
        </motion.div>

        {/* Controls and Mobile Menu */}
        <div className="flex items-center space-x-[12px]">
          {/* Language Toggle */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="h-[2.625rem] flex items-center text-white border-[1px] border-solid border-[rgba(255,255,255,0.2)] rounded-[40px] px-[1rem] hover:bg-transparent hover:text-white cursor-pointer"
              >
                <div className="h-[1rem] w-[1rem] mr-[1rem]">
                  <Image src="/images/icon-language.png" alt="" width={16} height={16} className="size-full" />
                </div>
                <div className="h-[1.5rem] text-[1rem] leading-[1.5rem]">{t('language')}</div>
                <div className="h-[0.25rem] w-[0.5rem] ml-[1rem]">
                  <Image src="/images/icon-arrow.png" alt="" width={8} height={4} className="size-full" />
                </div>
              </motion.div>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white/90 dark:bg-slate-800/90 light:bg-white/95 backdrop-blur-md border-white/20 dark:border-slate-700/50 light:border-slate-200"
            >
              <DropdownMenuItem
                onClick={() => handleLanguageChange('en')}
                className="hover:bg-[#0047C4] hover:text-white focus:bg-[#0047C4] focus:text-white cursor-pointer"
              >
                English
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange('zh')}
                className="hover:bg-[#0047C4] hover:text-white focus:bg-[#0047C4] focus:text-white cursor-pointer"
              >
                简体中文
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => handleLanguageChange('tw')}
                className="hover:bg-[#0047C4] hover:text-white focus:bg-[#0047C4] focus:text-white cursor-pointer"
              >
                繁體中文
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Mobile Menu Toggle */}
          {/*<motion.button*/}
          {/*  className="lg:hidden text-white dark:text-white light:text-slate-800 hover:text-blue-400 p-2"*/}
          {/*  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}*/}
          {/*  whileTap={{ scale: 0.95 }}*/}
          {/*>*/}
          {/*  {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}*/}
          {/*</motion.button>*/}
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
