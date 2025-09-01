'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

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
      className="relative px-4 sm:px-6 py-12 sm:py-16"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center space-y-6 sm:space-y-8"
          variants={containerVariants}
        >
          {/* Logo */}
          <motion.div
            className="flex items-center justify-center space-x-2"
            variants={itemVariants}
          >
            <motion.div
              className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-lg flex items-center justify-center shadow-lg"
              whileHover={{
                scale: 1.1,
                rotateY: 180,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)"
              }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-white font-bold text-xs sm:text-sm">OW</span>
            </motion.div>
            <motion.span
              className="text-white dark:text-white light:text-slate-800 font-semibold text-lg sm:text-xl transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              ONEWALLET
            </motion.span>
          </motion.div>

          {/* Description */}
          <motion.p
            className="text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base px-4 transition-colors duration-300"
            variants={itemVariants}
          >
            {t('description')}
          </motion.p>

          {/* Copyright */}
          <motion.div
            className="pt-6 sm:pt-8 border-t border-gray-700 dark:border-gray-700 light:border-slate-300 transition-colors duration-300"
            variants={itemVariants}
          >
            <motion.p
              className="text-gray-400 dark:text-gray-400 light:text-slate-500 text-xs sm:text-sm transition-colors duration-300"
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
