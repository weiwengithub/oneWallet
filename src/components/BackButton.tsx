'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function BackButton() {
  return (
    <Button
      variant="outline"
      onClick={() => window.history.back()}
      className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Go Back
    </Button>
  );
}
