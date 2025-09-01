'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <motion.section
      ref={ref}
      className="relative sm:px-[80px]"
      style={{ y, opacity }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-[1568px] mx-auto">
        <div className="grid lg:grid-cols-[901fr_667fr]">
          {/* Left Content */}
          <motion.div
            className="text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="mt-[1.75rem] h-[12.375rem] text-[5.875rem] font-extrabold leading-[5.375rem] text-white dark:text-white light:text-slate-800 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              className="mt-[2.25rem] text-[1.5rem] text-white leading-[2.25rem] opacity-80 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('description1')}
            </motion.p>
            <motion.p
              className="text-[1.5rem] text-white leading-[2.25rem] opacity-80 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('description2')}
            </motion.p>

            <motion.div
              className="mt-[3.125rem] flex flex-col sm:flex-row gap-[40px] mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="w-[18.75rem] h-[5rem] flex items-center justify-center bg-white rounded-[13px] hover:bg-white transition-all duration-300"
                >
                  <div className="w-[3.125rem] h-[3.125rem]">
                    <Image src="/images/icon-chrome.png" alt="" width={50} height={50} className="size-full" />
                  </div>
                  <div className="ml-[0.625rem] text-[#121315] text-left">
                    <div className="text-[0.75rem] leading-[1.125rem]">{t('getItOn')}</div>
                    <div className="text-[1.25rem] font-semibold leading-[1.375rem]">{t('downloadChrome')}</div>
                  </div>
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="w-[14.375rem] h-[5rem] flex items-center justify-center bg-white rounded-[13px] hover:bg-white transition-all duration-300"
                >
                  <div className="w-[3.125rem] h-[3.125rem]">
                    <Image src="/images/icon-phone.png" alt="" width={50} height={50} className="size-full" />
                  </div>
                  <div className="ml-[0.625rem] text-[#121315] text-left">
                    <div className="text-[0.75rem] leading-[1.125rem]">{t('getItOn')}</div>
                    <div className="text-[1.25rem] font-semibold leading-[1.375rem]">{t('downloadApp')}</div>
                  </div>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
            variants={itemVariants}
          >
            <Image src="/images/icon-8.png" alt="" width={667} height={690} className="w-full h-auto" />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
