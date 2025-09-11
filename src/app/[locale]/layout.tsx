import type { Metadata } from "next";
import { dmSans, notoSansSC, notoSansTC } from "../fonts";
import "../globals.css";
import Script from "next/script";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { ThemeProvider } from "next-themes";

/** 静态导出需要列举动态段 */
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "zh" }, { locale: "tw" }];
}

// 你实际支持的语言
type SupportedLocale = "en" | "zh" | "tw";
const SUPPORTED = ["en", "zh", "tw"] as const;
const asSupported = (l: string): SupportedLocale =>
  (SUPPORTED as readonly string[]).includes(l) ? (l as SupportedLocale) : "en";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const loc = asSupported(locale);
  const isZh = loc === "zh";

  return {
    metadataBase: new URL("https://one-wallet.cc"),
    title: {
      default: isZh
        ? "OneWallet - 您的数字金融门户"
        : "OneWallet - Your Gateway to Future Finance",
      template: "%s | OneWallet",
    },
    description: isZh
      ? "安全便捷地购买、存储、发送、交换代币和收集NFT。受到来自200多个国家和地区的3000多万用户信赖的去中心化钱包。"
      : "Easy and safe to buy, store, send, swap tokens and collect NFTs. Trusted by 30+ million users from 200+ countries and regions.",
    keywords: isZh
      ? "OneWallet, 加密钱包, DeFi钱包, NFT钱包, 区块链钱包, 去中心化钱包, 数字资产管理"
      : "OneWallet, crypto wallet, DeFi wallet, NFT wallet, blockchain wallet, decentralized wallet, digital asset management",
    authors: [{ name: "OneWallet Team" }],
    creator: "OneWallet",
    publisher: "OneWallet",
    formatDetection: { email: false, address: false, telephone: false },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: loc === "zh" ? "zh_CN" : "en_US",
      url: `https://one-wallet.cc/${loc}`,
      siteName: "OneWallet",
      title: isZh
        ? "OneWallet - 您的数字金融门户"
        : "OneWallet - Your Gateway to Future Finance",
      description: isZh
        ? "安全便捷地购买、存储、发送、交换代币和收集NFT。受到来自200多个国家和地区的3000多万用户信赖。"
        : "Easy and safe to buy, store, send, swap tokens and collect NFTs. Trusted by 30+ million users from 200+ countries and regions.",
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "OneWallet - Crypto Wallet" }],
    },
    twitter: {
      card: "summary_large_image",
      title: isZh
        ? "OneWallet - 您的数字金融门户"
        : "OneWallet - Your Gateway to Future Finance",
      description: isZh
        ? "安全便捷的去中心化钱包，支持DeFi和NFT"
        : "Secure decentralized wallet supporting DeFi and NFTs",
      images: ["/og-image.jpg"],
      creator: "@onewallet",
    },
    alternates: {
      canonical: `https://one-wallet.cc/${loc}`,
      languages: {
        en: "https://one-wallet.cc/en",
        zh: "https://one-wallet.cc/zh",
        tw: "https://one-wallet.cc/tw",
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
      yahoo: "your-yahoo-verification-code",
    },
    category: "technology",
  };
}

export default async function RootLayout({
                                           children,
                                           params,
                                         }: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const loc = asSupported(locale);

  const messages = await getMessages({ locale: loc });

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "OneWallet",
    applicationCategory: "FinanceApplication",
    operatingSystem: "Web, iOS, Android",
    description:
      loc === "zh"
        ? "安全便捷地购买、存储、发送、交换代币和收集NFT的去中心化钱包"
        : "Secure decentralized wallet for buying, storing, sending, swapping tokens and collecting NFTs",
    url: `https://one-wallet.cc/${loc}`,
    creator: { "@type": "Organization", name: "OneWallet Team", url: "https://one-wallet.cc" },
    offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    aggregateRating: { "@type": "AggregateRating", ratingValue: "4.8", ratingCount: "30000000" },
  };

  const mainFont =
    loc === "zh" ? notoSansSC : loc === "tw" ? notoSansTC : dmSans;

  return (
    <html lang={loc} className={`${mainFont.className} ${notoSansSC.variable} ${notoSansTC.variable} ${dmSans.variable}`} suppressHydrationWarning>
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
    </head>
    <body className="antialiased">
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <NextIntlClientProvider locale={loc} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </ThemeProvider>
    </body>
    </html>
  );
}
