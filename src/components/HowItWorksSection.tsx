'use client';

import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  };

  const features = [
    {
      key: 'selfCustody',
      icon: (
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-600 dark:to-gray-800 light:from-slate-300 light:to-slate-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-blue-400 to-green-400 rounded-md sm:rounded-lg"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, 0, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ),
      arrow: (
        <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
          <motion.svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="text-gray-400 dark:text-gray-400 light:text-slate-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.path
              d="M20 30 L40 30 M35 25 L40 30 L35 35"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1, duration: 1 }}
            />
          </motion.svg>
        </div>
      )
    },
    {
      key: 'permissionless',
      icon: (
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-600 dark:to-gray-800 light:from-slate-300 light:to-slate-500 rounded-full flex items-center justify-center shadow-lg"
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-4 h-4 sm:w-6 sm:h-6 border-2 border-blue-400 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              borderColor: ["#60a5fa", "#34d399", "#60a5fa"]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ),
      arrow: (
        <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
          <motion.svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="text-gray-400 dark:text-gray-400 light:text-slate-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <motion.path
              d="M20 30 L40 30 M35 25 L40 30 L35 35"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </motion.svg>
        </div>
      )
    },
    {
      key: 'interoperable',
      icon: (
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-600 dark:to-blue-800 light:from-blue-400 light:to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            boxShadow: "0 15px 30px rgba(59, 130, 246, 0.4)"
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-0 h-0 border-l-3 border-r-3 border-b-4 sm:border-l-4 sm:border-r-4 sm:border-b-6 border-l-transparent border-r-transparent border-b-white"
            animate={{
              rotateZ: [0, 10, 0, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      ),
      arrow: (
        <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2">
          <motion.svg
            width="60"
            height="60"
            viewBox="0 0 60 60"
            className="text-gray-400 dark:text-gray-400 light:text-slate-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <motion.path
              d="M20 30 L40 30 M35 25 L40 30 L35 35"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            />
          </motion.svg>
        </div>
      )
    },
    {
      key: 'globalX',
      icon: (
        <motion.div
          className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-gray-600 to-gray-800 dark:from-gray-600 dark:to-gray-800 light:from-slate-300 light:to-slate-500 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg"
          whileHover={{
            scale: 1.1,
            rotateY: 15,
            boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)"
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
            {[...Array(9)].map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.1
                }}
              />
            ))}
          </div>
        </motion.div>
      )
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative px-4 sm:px-6 py-16 sm:py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-white dark:text-white light:text-slate-800 transition-colors duration-300"
          variants={itemVariants}
        >
          {t('title')} <span className="text-blue-400 dark:text-blue-400 light:text-blue-600">Works</span>
        </motion.h2>

        <motion.p
          className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-12 sm:mb-16 text-base sm:text-lg max-w-2xl mx-auto transition-colors duration-300"
          variants={itemVariants}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6 lg:gap-4"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              className="relative flex flex-col items-center text-center group"
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              {/* Icon */}
              <div className="mb-4 sm:mb-6 relative">
                {feature.icon}
                {feature.arrow}
              </div>

              {/* Content */}
              <motion.h3
                className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3 text-white dark:text-white light:text-slate-800 group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {t(`${feature.key}.title`)}
              </motion.h3>

              <motion.p
                className="text-gray-300 dark:text-gray-300 light:text-slate-600 text-sm leading-relaxed max-w-xs px-2 transition-colors duration-300"
                initial={{ opacity: 0.8 }}
                whileHover={{ opacity: 1 }}
              >
                {t(`${feature.key}.description`)}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
