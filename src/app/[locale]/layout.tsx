import type { Metadata } from "next";
import { dmSans, notoSansSC, notoSansTC } from "../fonts";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import JsonLd from "@/components/JsonLd";

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
  let defaultTitle = '';
  let description = '';
  let keywords = '';
  switch (loc) {
    case "en":
      defaultTitle = "OneWallet | Secure Web3 Wallet for RWA, Stablecoins & DeFi";
      description = "OneWallet is your secure gateway to Web3. Store, trade, and grow real assets with MPC security, USDO stablecoin, RWA tokenization, and seamless login.";
      keywords = "OneWallet Web3 wallet, identity-driven crypto wallet, secure crypto wallet for Web3, cross-border crypto payments app";
      break;
    case "zh":
      defaultTitle = "OneWallet | 面向 RWA、稳定币与 DeFi 的安全 Web3 钱包";
      description = "OneWallet 是你通往 Web3 的安全入口。借助 MPC 安全防护、USDO 稳定币、RWA 资产代币化与无缝登录，轻松存储、交易并增值真实世界资产。";
      keywords = "OneWallet Web3 钱包，身份驱动的加密钱包，适用于 Web3 的安全加密钱包，跨境加密支付 App";
      break;
    case "tw":
      defaultTitle = "OneWallet | 面向 RWA、穩定幣與 DeFi 的安全 Web3 錢包";
      description = "OneWallet 是你通往 Web3 的安全入口。憑藉 MPC 安全防護、USDO 穩定幣、RWA 資產代幣化與無縫登入，輕鬆儲存、交易並增值真實世界資產。";
      keywords = "OneWallet Web3 錢包，身分驅動的加密錢包，適用於 Web3 的安全加密錢包，跨境加密支付 App";
      break;
  }

  return {
    metadataBase: new URL("https://one-wallet.cc"),
    title: {
      default: defaultTitle,
      template: "%s | OneWallet",
    },
    description: description,
    keywords: keywords,
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
      locale: loc === "zh" ? "zh_CN" : loc === "tw" ? "zh_TW" : "en_US",
      url: `https://one-wallet.cc/${loc}`,
      siteName: "OneWallet",
      title: defaultTitle,
      description: description,
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: description,
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

  const mainFont = loc === "zh" ? notoSansSC : loc === "tw" ? notoSansTC : dmSans;

  return (
    <div lang={loc} className={mainFont.className}>
      <JsonLd locale={loc} />
      <NextIntlClientProvider locale={loc} messages={messages}>
        {children}
      </NextIntlClientProvider>
    </div>
  );
}
