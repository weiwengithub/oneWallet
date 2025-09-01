'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from "next/image";

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
      className="mt-[10rem] relative px-[5rem]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[1568px] mx-auto relative">
        <Image src="/images/icon-9.png" alt="" width={1568} height={324} />
        <motion.div
          className="absolute top-[3.875rem] right-[4.1875rem] w-[46.25rem]"
          variants={itemVariants}
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.h2
              className="text-[3.25rem] font-bold text-white dark:text-white light:text-slate-800 leading-[3.5rem] transition-colors duration-300"
              variants={itemVariants}
            >
              {t('title')}
            </motion.h2>

            <motion.p
              className="text- dark:text- light:text-slate-600 text-[1.25rem] leading-[2.25rem] font-medium text-center opacity-80 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('description')}
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-[1.75rem] w-full h-[3.75rem] bg-white rounded-[1.125rem] flex items-center gap-[1.5rem]"
            variants={itemVariants}
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 h-[2.25rem] ml-[1.5rem]"
            >
              <Input
                type="email"
                placeholder={t('placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-full text-[20px] text-[#0047C4] bg-transparent border-none outline-none p-0 placeholder:text-[rgba(44,48,57,0.4)] focus:border-none focus:outline-none focus-visible:border-none focus-visible:outline-none transition-all duration-300"
                required
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mr-[8px]"
            >
              <Button
                type="submit"
                className="bg-transparent hover:bg-[#0047C4] h-[2.75rem] border-[3px] border-[#0047C4] rounded-[0.5rem] text-[0.875rem] text-[#0047C4] hover:text-white font-medium transition-all duration-300"
              >
                {t('subscribe')}
              </Button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </motion.section>
  );
}
