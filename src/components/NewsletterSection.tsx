'use client';

import { useTranslations } from 'next-intl';
import Image from "next/image";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { toast } from "@/lib/toast";
import {isEmail} from "@/lib/utils";
import {apiService} from "@/lib/api";

export default function NewsletterSection() {
  const t = useTranslations('newsletter');
  const [email, setEmail] = useState('');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [loading, setLoading] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !isEmail(email)) {
      toast.error({
        title: t('emailError'),
        position: "top-right",
      });
      return false;
    }
    setLoading(true);
    apiService.addMail({mailAddress: email})
      .then((res) => {
        setLoading(false);
        if (res.code === 200) {
          setEmail('');
          toast.info({
            title: t('subscriptionSuccessful'),
            position: "top-right",
          });
        } else {
          toast.error({
            title: res.msg || t('subscriptionFailed'),
            position: "top-right",
          });
        }
      })
      .catch((err) => {
        console.log(err)
        setLoading(false);
        toast.error({
          title: t('subscriptionFailed'),
          position: "top-right",
        });
      })
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
      className="mt-16 sm:mt-[10rem] relative px-4 sm:px-[5rem]"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="max-w-[1568px] mx-auto relative">
        <div className="hidden sm:block">
          <Image src="/images/icon-9.png" alt="" width={1568} height={324} />
        </div>
        <motion.div
          className="static sm:absolute sm:top-[3.875rem] sm:right-[4.1875rem] w-full sm:w-[46.25rem] p-6 sm:p-0"
          variants={itemVariants}
        >
          <div className="space-y-3 sm:space-y-4">
            <motion.h2
              className="text-2xl sm:text-[3.25rem] font-bold text-white dark:text-white light:text-slate-800 leading-tight sm:leading-[3.5rem] transition-colors duration-300"
              variants={itemVariants}
            >
              {t('title')}
            </motion.h2>

            <motion.p
              className="text-white dark:text-white light:text-slate-600 text-base sm:text-[1.25rem] leading-relaxed sm:leading-[2.25rem] font-medium text-center opacity-80 transition-colors duration-300"
              variants={itemVariants}
            >
              {t('description')}
            </motion.p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="mt-6 sm:mt-[1.75rem] w-full h-12 sm:h-[3.75rem] bg-white rounded-lg sm:rounded-[1.125rem] flex items-center gap-2 sm:gap-[1.5rem]"
            variants={itemVariants}
          >
            <motion.div
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 h-8 sm:h-[2.25rem] ml-3 sm:ml-[0.75rem]"
            >
              <Input
                type="email"
                placeholder={t('placeholder')}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-full text-sm sm:text-[20px] text-[#0047C4] bg-transparent border-none outline-none px-[0.75rem] placeholder:text-[rgba(44,48,57,0.4)] focus:border-none focus:outline-none focus-visible:border-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent transition-all duration-300"
                required
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="mr-2 sm:mr-[8px]"
            >
              <Button
                type="submit"
                className="bg-transparent hover:bg-[#0047C4] h-8 sm:h-[2.75rem] border-2 sm:border-[3px] border-[#0047C4] rounded-md sm:rounded-[0.5rem] text-xs sm:text-[0.875rem] text-[#0047C4] hover:text-white font-medium outline-none focus:outline-none focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent transition-all duration-300 px-3 sm:px-4"
                loading={loading}
                onClick={handleSubmit}
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
