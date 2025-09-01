'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Get browser language or default to 'en'
    // const locale = navigator.language.startsWith('zh')
    //   ? navigator.language.includes('TW') || navigator.language.includes('HK')
    //     ? 'tw'
    //     : 'zh'
    //   : 'en';
    router.replace('/en');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-4"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
}
