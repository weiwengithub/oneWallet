'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const locale = params.locale as string;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  return (
    <motion.footer
      ref={ref}
      className="relative pt-16 pb-8 sm:pt-[9.25rem] sm:pb-[2.75rem] px-4"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[27.5rem] mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div
            className="flex h-12 sm:h-[4rem] items-center justify-center space-x-2"
            variants={itemVariants}
          >
            <Image src="/images/logo.png" alt="" width={254} height={63} className="w-auto h-full" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-4 sm:mt-[1.5rem] text-sm sm:text-[1.125rem] font-medium text-white leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
            variants={itemVariants}
          >
            {t('description')}
          </motion.p>

          {/* Copyright */}
          <motion.div
            className="pt-4 sm:pt-[1.75rem]"
            variants={itemVariants}
          >
            <motion.p
              className="text-sm sm:text-[1.125rem] font-medium text-white leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {t('copyright')}
            </motion.p>
          </motion.div>

          {/* Agreement */}
          <motion.div
            className="pt-4 sm:pt-[1.75rem]"
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
                href={`/${locale}/privacy`}
                className="text-sm sm:text-[1.125rem] font-medium text-[#A0A1A1] hover:text-[#0047C4] leading-relaxed sm:leading-[1.75rem] transition-colors duration-300"
              >
                {t('privacyPolicy')}
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
