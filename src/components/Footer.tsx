'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";

export default function Footer() {
  const t = useTranslations('footer');
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
      className="relative pt-[9.25rem] pb-[2.75rem]"
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
            className="flex h-[4rem] items-center justify-center space-x-2"
            variants={itemVariants}
          >
            <Image src="/images/logo-1.png" alt="" width={254} height={63} className="w-auto h-full" />
          </motion.div>

          {/* Description */}
          <motion.p
            className="mt-[1.5rem] text-[1.125rem] font-medium text-white leading-[1.75rem] transition-colors duration-300"
            variants={itemVariants}
          >
            {t('description')}
          </motion.p>

          {/* Copyright */}
          <motion.div
            className="pt-[1.75rem]"
            variants={itemVariants}
          >
            <motion.p
              className="text-[1.125rem] font-medium text-white leading-[1.75rem] transition-colors duration-300"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {t('copyright')}
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
