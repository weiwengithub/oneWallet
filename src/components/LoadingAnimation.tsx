'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function LoadingAnimation() {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-slate-100"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        {/* Main spinning circle */}
        <motion.div
          className="w-20 h-20 border-4 border-blue-500/30 border-t-blue-500 rounded-full"
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Inner pulsing circle */}
        <motion.div
          className="absolute inset-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Center logo */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{
            rotateY: [0, 360],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <div className="w-8 h-8 rounded-lg flex items-center justify-center">
            <Image
              src="/apple-touch-icon.png"
              alt="OneWallet Logo"
              width={163}
              height={166}
              className="w-full h-full"
            />
            {/*<span className="text-white font-bold text-sm">OW</span>*/}
          </div>
        </motion.div>
      </div>

      {/* Loading text */}
      <motion.div
        className="absolute bottom-1/3 text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg font-medium"
        >
          Loading OneWallet...
        </motion.span>
      </motion.div>
    </motion.div>
  );
}
