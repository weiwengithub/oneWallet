'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
        <div className="relative w-48 h-48 sm:w-[25rem] sm:h-[25rem] mx-auto mb-4 sm:mb-[1.25rem]">
          <motion.div
            className="absolute inset-0 bg-[#001027] rounded-[1.5rem] transform rotate-3"
            animate={{ rotateY: [0, 5, 0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />

          <motion.div
            className="relative bg-[#001027] rounded-[1.5rem] size-full"
            whileHover={{
              scale: 1.05,
              rotateY: 10
            }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/images/icon-5.png" alt="" width={400} height={400} className="size-full" />
          </motion.div>
        </div>
      )
    },
    {
      key: 'defiSupport',
      icon: (
        <div className="relative w-48 h-48 sm:w-[25rem] sm:h-[25rem] mx-auto mb-4 sm:mb-[1.25rem]">
          <motion.div
            className="absolute inset-0 bg-[#001027] rounded-[1.5rem] transform -rotate-2"
            animate={{ rotateY: [0, -5, 0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative bg-[#001027] rounded-[1.5rem] size-full"
            whileHover={{
              scale: 1.05,
              rotateY: -10
            }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/images/icon-6.png" alt="" width={400} height={400} className="size-full" />
          </motion.div>
        </div>
      )
    },
    {
      key: 'oneChainSupport',
      icon: (
        <div className="relative w-48 h-48 sm:w-[25rem] sm:h-[25rem] mx-auto mb-4 sm:mb-[1.25rem]">
          <motion.div
            className="absolute inset-0 bg-[#001027] rounded-[1.5rem] transform rotate-1"
            animate={{ rotateY: [0, 3, 0, -3, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="relative bg-[#001027] rounded-[1.5rem] size-full"
            whileHover={{
              scale: 1.05,
              rotateY: 8
            }}
            transition={{ duration: 0.3 }}
          >
            <Image src="/images/icon-7.png" alt="" width={400} height={400} className="size-full" />
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative px-4 sm:px-[5rem]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[1568px] mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-[2.125rem]"
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
                className="h-auto sm:h-[42.5rem] bg-[#011B40] border-none rounded-[1.5rem] p-6 sm:p-[3.125rem]"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  {feature.icon}
                </motion.div>

                <motion.h3
                  className="text-white text-lg sm:text-[1.625rem] font-bold leading-tight sm:leading-[2.25rem] text-center transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {t(`${feature.key}.title`)}
                </motion.h3>

                <motion.p
                  className="mt-4 sm:mt-[1.25rem] text-white text-sm sm:text-[1.25rem] leading-relaxed sm:leading-[2.25rem] text-center transition-colors duration-300"
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
