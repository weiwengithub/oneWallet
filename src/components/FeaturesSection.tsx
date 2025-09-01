'use client';

import { useTranslations } from 'next-intl';
import { Card } from '@/components/ui/card';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function FeaturesSection() {
  const t = useTranslations('features');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1
    }
  };

  const features = [
    {
      key: 'multiLayerSecurity',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 dark:from-blue-600 dark:to-blue-800 light:from-blue-400 light:to-blue-600 rounded-xl sm:rounded-2xl transform rotate-3"
            animate={{ rotateY: [0, 5, 0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative bg-gradient-to-br from-blue-500 to-blue-700 dark:from-blue-500 dark:to-blue-700 light:from-blue-400 light:to-blue-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-full flex items-center justify-center shadow-lg"
            whileHover={{
              scale: 1.05,
              rotateY: 10,
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid grid-cols-3 gap-0.5 sm:gap-1">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                    i === 4 ? 'bg-yellow-400' : 'bg-blue-300'
                  }`}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>
      )
    },
    {
      key: 'defiSupport',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 dark:from-purple-600 dark:to-purple-800 light:from-purple-400 light:to-purple-600 rounded-xl sm:rounded-2xl transform -rotate-2"
            animate={{ rotateY: [0, -5, 0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative bg-gradient-to-br from-purple-500 to-purple-700 dark:from-purple-500 dark:to-purple-700 light:from-purple-400 light:to-purple-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-full flex items-center justify-center shadow-lg"
            whileHover={{
              scale: 1.05,
              rotateY: -10,
              boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <motion.div
                className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center"
                animate={{
                  rotateZ: [0, 360],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <span className="text-white text-xs font-bold">%</span>
              </motion.div>
              <motion.div
                className="absolute -top-0.5 -right-0.5 sm:-top-1 sm:-right-1 w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 0.5
                }}
              />
            </div>
          </motion.div>
        </div>
      )
    },
    {
      key: 'oneChainSupport',
      icon: (
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-800 dark:from-green-600 dark:to-green-800 light:from-green-400 light:to-green-600 rounded-xl sm:rounded-2xl transform rotate-1"
            animate={{ rotateY: [0, 3, 0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative bg-gradient-to-br from-green-500 to-green-700 dark:from-green-500 dark:to-green-700 light:from-green-400 light:to-green-600 rounded-xl sm:rounded-2xl p-3 sm:p-4 h-full flex items-center justify-center shadow-lg"
            whileHover={{
              scale: 1.05,
              rotateY: 8,
              boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)"
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="text-white text-xl sm:text-2xl font-bold"
              animate={{
                rotateZ: [0, 5, 0, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              %
            </motion.div>
            <motion.div
              className="absolute top-2 right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity
              }}
            />
          </motion.div>
        </div>
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
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.key}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 border-slate-700 dark:border-slate-700 light:border-slate-200 backdrop-blur-sm hover:from-slate-700/50 hover:to-slate-800/50 dark:hover:from-slate-700/50 dark:hover:to-slate-800/50 light:hover:from-white light:hover:to-slate-50 transition-all duration-500 p-6 sm:p-8 text-center group shadow-xl hover:shadow-2xl"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <motion.h3
                  className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-white dark:text-white light:text-slate-800 group-hover:text-blue-400 dark:group-hover:text-blue-400 light:group-hover:text-blue-600 transition-colors duration-300 leading-tight"
                  whileHover={{ scale: 1.02 }}
                >
                  {t(`${feature.key}.title`)}
                </motion.h3>

                <motion.p
                  className="text-gray-300 dark:text-gray-300 light:text-slate-600 text-sm leading-relaxed transition-colors duration-300"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {t(`${feature.key}.description`)}
                </motion.p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
