'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
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
          className="w-[12.25rem] h-[12.1875rem] mx-auto"
          whileHover={{
            scale: 1.1,
            rotateY: 15
          }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/images/icon-1.png" alt="" width={196} height={195} className="size-full" />
        </motion.div>
      ),
      arrow: (
        <div className="hidden lg:block w-[7.125rem] h-[2.4375rem] absolute -right-[5.4375rem] top-1/2 transform -translate-y-1/2">
          <Image src="/images/icon-10.png" alt="" width={114} height={39} className="size-full" />
        </div>
      )
    },
    {
      key: 'permissionless',
      icon: (
        <motion.div
          className="w-[12.25rem] h-[12.1875rem] mx-auto"
          whileHover={{
            scale: 1.1,
            rotateY: 15
          }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/images/icon-2.png" alt="" width={196} height={195} className="size-full" />
        </motion.div>
      ),
      arrow: (
        <div className="hidden lg:block w-[7.125rem] h-[2.4375rem] absolute -right-[5.4375rem] top-1/2 transform -translate-y-1/2">
          <Image src="/images/icon-11.png" alt="" width={114} height={39} className="size-full" />
        </div>
      )
    },
    {
      key: 'interoperable',
      icon: (
        <motion.div
          className="w-[14.125rem] h-[12.1875rem] mx-auto"
          whileHover={{
            scale: 1.1,
            rotateY: 15
          }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/images/icon-3.png" alt="" width={226} height={195} className="size-full" />
        </motion.div>
      ),
      arrow: (
        <div className="hidden lg:block w-[7.125rem] h-[2.4375rem] absolute -right-[5.4375rem] top-1/2 transform -translate-y-1/2">
          <Image src="/images/icon-10.png" alt="" width={114} height={39} className="size-full" />
        </div>
      )
    },
    {
      key: 'globalX',
      icon: (
        <motion.div
          className="w-[12.25rem] h-[12.1875rem] mx-auto"
          whileHover={{
            scale: 1.1,
            rotateY: 15
          }}
          transition={{ duration: 0.3 }}
        >
          <Image src="/images/icon-4.png" alt="" width={196} height={195} className="size-full" />
        </motion.div>
      )
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="relative px-[5rem] py-[5rem]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[1568px] mx-auto text-center">
        <motion.h2
          className="text-[3.25rem] font-bold mb-[1rem] text-white leading-[3.5rem] tracking-wide transition-colors duration-300"
          variants={itemVariants}
        >
          {t('title')} <span className="text-[#0047C4] dark:text-[#0047C4] light:text-blue-600">{t('works')}</span>
        </motion.h2>

        <motion.p
          className="text-[1.5rem] font-medium text-white leading-[2.25rem] opacity-80"
          variants={itemVariants}
        >
          {t('subtitle')}
        </motion.p>

        <motion.div
          className="mt-[6.5rem] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[3.75rem]"
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
              <div className="mb-[2.75rem] relative w-full h-[12.1875rem]">
                {feature.icon}
                {feature.arrow}
              </div>

              {/* Content */}
              <motion.h3
                className="text-[1.875rem] font-bold mb-[0.875rem] text-white dark:text-white light:text-slate-800 group-hover:text-[#0047C4] dark:group-hover:text-[#0047C4] light:group-hover:text-blue-600 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {t(`${feature.key}.title`)}
              </motion.h3>

              <motion.p
                className="text-white dark:text-white light:text-slate-600 text-[1.125rem] leading-[1.5rem] opacity-80 max-w-xs transition-colors duration-300"
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
