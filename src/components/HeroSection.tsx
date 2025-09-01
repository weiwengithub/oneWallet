'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Chrome, Smartphone } from 'lucide-react';
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
      className="relative px-4 sm:px-6 py-12 sm:py-16 lg:py-20"
      style={{ y, opacity }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 text-center lg:text-left"
            variants={itemVariants}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white dark:text-white light:text-slate-800 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('title')}
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('description')}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Button
                  size="lg"
                  className="bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-100 light:bg-slate-800 light:text-white light:hover:bg-slate-700 font-medium px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base h-12 sm:h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Chrome className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">{t('downloadChrome')}</span>
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
                  className="border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white font-medium px-4 sm:px-6 py-3 rounded-xl text-sm sm:text-base h-12 sm:h-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Smartphone className="w-4 h-4 sm:w-5 sm:h-5 mr-2 flex-shrink-0" />
                  <span className="truncate">{t('downloadApp')}</span>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Visual Element */}
          <motion.div
            className="relative flex justify-center lg:justify-end order-first lg:order-last"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main 3D Element */}
              <motion.div
                className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative"
                animate={{
                  rotateY: [0, 10, 0, -10, 0],
                  rotateX: [0, 5, 0, -5, 0]
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                {/* Outer glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-green-400/20 rounded-full blur-2xl sm:blur-3xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Main sphere */}
                <motion.div
                  className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-blue-400/80 via-purple-500/60 to-green-400/80 dark:from-blue-400/80 dark:via-purple-500/60 dark:to-green-400/80 light:from-blue-500/70 light:via-purple-600/50 light:to-green-500/70 rounded-full backdrop-blur-lg border border-white/20 dark:border-white/20 light:border-white/40 shadow-2xl"
                  whileHover={{
                    scale: 1.05,
                    rotateY: 15,
                    boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {/* Inner reflection */}
                  <motion.div
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 w-16 h-16 sm:w-24 sm:h-24 bg-white/30 rounded-full blur-xl sm:blur-2xl"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />

                  {/* OneWallet logo in center */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    animate={{ rotateZ: [0, 5, 0, -5, 0] }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    <motion.div
                      className="text-white text-sm sm:text-lg lg:text-xl font-bold bg-black/20 dark:bg-black/20 light:bg-white/20 px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg backdrop-blur-sm border border-white/20 shadow-lg"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      ONEWALLET
                    </motion.div>
                  </motion.div>
                </motion.div>

                {/* Floating particles */}
                <motion.div
                  className="absolute top-12 right-6 sm:top-16 sm:right-8 w-2 h-2 sm:w-3 sm:h-3 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full opacity-80"
                  animate={{
                    y: [0, -20, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-16 left-8 sm:bottom-20 sm:left-12 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 dark:bg-green-400 light:bg-green-500 rounded-full opacity-60"
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
                <motion.div
                  className="absolute top-24 left-0 sm:top-32 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-purple-400 dark:bg-purple-400 light:bg-purple-500 rounded-full opacity-70"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
