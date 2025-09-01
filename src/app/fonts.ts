import localFont from 'next/font/local';

export const dmSans = localFont({
  src: [
    { path: '../assets/fonts/dm-sans/DMSans-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/dm-sans/DMSans-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/dm-sans/DMSans-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const notoSansSC = localFont({
  src: [
    { path: '../assets/fonts/noto-sans-sc/NotoSansSC-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/noto-sans-sc/NotoSansSC-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/noto-sans-sc/NotoSansSC-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-noto-sans-sc',
  display: 'swap',
});

export const notoSansTC = localFont({
  src: [
    { path: '../assets/fonts/noto-sans-tc/NotoSansTC-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/noto-sans-tc/NotoSansTC-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/noto-sans-tc/NotoSansTC-Bold.ttf', weight: '700', style: 'normal' },
  ],
  variable: '--font-noto-sans-tc',
  display: 'swap',
});
