import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { ThemeProvider } from "next-themes";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

// Generate static params for all supported locales
export async function generateStaticParams() {
  return [
    { locale: 'en' },
    { locale: 'zh' }
  ];
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params;

  const isZh = locale === 'zh';

  return {
    metadataBase: new URL('https://onewallet.com'),
    title: {
      default: isZh ? 'OneWallet - 您的数字金融门户' : 'OneWallet - Your Gateway to Future Finance',
      template: isZh ? '%s | OneWallet' : '%s | OneWallet'
    },
    description: isZh
      ? '安全便捷地购买、存储、发送、交换代币和收集NFT。受到来自200多个国家和地区的3000多万用户信赖的去中心化钱包。'
      : 'Easy and safe to buy, store, send, swap tokens and collect NFTs. Trusted by 30+ million users from 200+ countries and regions.',
    keywords: isZh
      ? 'OneWallet, 加密钱包, DeFi钱包, NFT钱包, 区块链钱包, 去中心化钱包, 数字资产管理'
      : 'OneWallet, crypto wallet, DeFi wallet, NFT wallet, blockchain wallet, decentralized wallet, digital asset management',
    authors: [{ name: 'OneWallet Team' }],
    creator: 'OneWallet',
    publisher: 'OneWallet',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : 'en_US',
      url: `https://onewallet.com/${locale}`,
      siteName: 'OneWallet',
      title: isZh ? 'OneWallet - 您的数字金融门户' : 'OneWallet - Your Gateway to Future Finance',
      description: isZh
        ? '安全便捷地购买、存储、发送、交换代币和收集NFT。受到来自200多个国家和地区的3000多万用户信赖。'
        : 'Easy and safe to buy, store, send, swap tokens and collect NFTs. Trusted by 30+ million users from 200+ countries and regions.',
      images: [
        {
          url: '/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'OneWallet - Crypto Wallet',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: isZh ? 'OneWallet - 您的数字金融门户' : 'OneWallet - Your Gateway to Future Finance',
      description: isZh
        ? '安全便捷的去中心化钱包，支持DeFi和NFT'
        : 'Secure decentralized wallet supporting DeFi and NFTs',
      images: ['/og-image.jpg'],
      creator: '@onewallet',
    },
    alternates: {
      canonical: `https://onewallet.com/${locale}`,
      languages: {
        'en': 'https://onewallet.com/en',
        'zh': 'https://onewallet.com/zh',
      },
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
      yahoo: 'your-yahoo-verification-code',
    },
    category: 'technology',
  };
}

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const messages = await getMessages();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'OneWallet',
    applicationCategory: 'FinanceApplication',
    operatingSystem: 'Web, iOS, Android',
    description: locale === 'zh'
      ? '安全便捷地购买、存储、发送、交换代币和收集NFT的去中心化钱包'
      : 'Secure decentralized wallet for buying, storing, sending, swapping tokens and collecting NFTs',
    url: `https://onewallet.com/${locale}`,
    creator: {
      '@type': 'Organization',
      name: 'OneWallet Team',
      url: 'https://onewallet.com'
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      ratingCount: '30000000'
    }
  };

  return (
    <html lang={locale} className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#1e40af" />
        <meta name="color-scheme" content="dark light" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
