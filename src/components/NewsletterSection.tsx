'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function NewsletterSection() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribe:', email);
  };

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

  return (
    <motion.section
      ref={ref}
      className="relative px-4 sm:px-6 py-16 sm:py-20"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Visual Element */}
          <motion.div
            className="relative order-2 lg:order-1"
            variants={itemVariants}
          >
            <div className="relative w-72 h-48 sm:w-80 sm:h-64 mx-auto lg:mx-0">
              {/* Background gradient blob */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-500/40 to-green-400/30 rounded-2xl sm:rounded-3xl blur-xl sm:blur-2xl"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 2, 0, -2, 0]
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Main shape */}
              <motion.div
                className="absolute inset-3 sm:inset-4 bg-gradient-to-br from-blue-400/60 via-purple-500/40 to-green-400/60 dark:from-blue-400/60 dark:via-purple-500/40 dark:to-green-400/60 light:from-blue-500/50 light:via-purple-600/30 light:to-green-500/50 rounded-2xl sm:rounded-3xl backdrop-blur-lg border border-white/20 dark:border-white/20 light:border-white/40 shadow-2xl"
                whileHover={{
                  scale: 1.05,
                  rotateY: 10
                }}
                transition={{ duration: 0.6 }}
              >
                {/* Inner reflection */}
                <motion.div
                  className="absolute top-3 left-4 sm:top-4 sm:left-6 w-12 h-12 sm:w-16 sm:h-16 bg-white/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Floating elements */}
                <motion.div
                  className="absolute top-6 right-6 sm:top-8 sm:right-8 w-3 h-3 sm:w-4 sm:h-4 bg-blue-400 dark:bg-blue-400 light:bg-blue-500 rounded-full opacity-80"
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.3, 1],
                    opacity: [0.8, 1, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div
                  className="absolute bottom-8 left-8 sm:bottom-12 sm:left-12 w-2 h-2 sm:w-3 sm:h-3 bg-green-400 dark:bg-green-400 light:bg-green-500 rounded-full opacity-60"
                  animate={{
                    y: [0, -10, 0],
                    x: [0, 8, 0],
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.9, 0.6]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5
                  }}
                />
              </motion.div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6 sm:space-y-8 order-1 lg:order-2 text-center lg:text-left"
            variants={itemVariants}
          >
            <div className="space-y-3 sm:space-y-4">
              <motion.h2
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white dark:text-white light:text-slate-800 leading-tight transition-colors duration-300"
                variants={itemVariants}
              >
                {t('title')}
              </motion.h2>

              <motion.p
                className="text-gray-300 dark:text-gray-300 light:text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 transition-colors duration-300"
                variants={itemVariants}
              >
                {t('description')}
              </motion.p>
            </div>

            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0"
              variants={itemVariants}
            >
              <motion.div
                whileFocus={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Input
                  type="email"
                  placeholder={t('placeholder')}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-white/10 dark:bg-white/10 light:bg-white/80 border-white/20 dark:border-white/20 light:border-slate-300 text-white dark:text-white light:text-slate-800 placeholder:text-gray-400 dark:placeholder:text-gray-400 light:placeholder:text-slate-500 focus:border-blue-400 dark:focus:border-blue-400 light:focus:border-blue-500 h-12 rounded-xl text-sm sm:text-base backdrop-blur-sm transition-all duration-300"
                  required
                />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 light:bg-blue-500 light:hover:bg-blue-600 text-white px-6 sm:px-8 h-12 rounded-xl font-medium text-sm sm:text-base w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {t('subscribe')}
                </Button>
              </motion.div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
