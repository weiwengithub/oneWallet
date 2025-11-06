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
      defaultTitle = "OneWallet – Non-Custodial & Privacy-Preserving Web3 Wallet for DeFi, RWA & Multi-Chain Assets";
      description = "OneWallet is a secure, privacy-preserving non-custodial Web3 wallet on the OneChain Move Layer-1. Manage DeFi, tokenized assets & multi-chain crypto with on-device key control and MPC security.";
      keywords = "Non-custodial, user-controlled keys, MPC-secured key protection, Zero-tracking privacy model, On-device encryption, Move-based Layer-1 security, Multi-chain wallet support, Tokenized asset (RWA) support, Gas-abstracted onboarding, Seamless DeFi support";
      break;
    case "zh":
      defaultTitle = "OneWallet – 去中心化、隐私保护的 Web3 钱包，支持 DeFi、RWA 与多链资产";
      description = "OneWallet 是一个安全、注重隐私的去中心化 Web3 钱包，基于 OneChain Move Layer-1 构建。用户可在本地设备上安全管理 DeFi、代币化资产与多链加密资产，拥有自主密钥控制与 MPC 安全保护。";
      keywords = "去中心化、自主密钥控制、MPC 安全密钥保护、零跟踪隐私模型、本地加密、基于 Move 的 Layer-1 安全、多链钱包支持、代币化资产（RWA）支持、免 Gas 上手体验、无缝 DeFi 支持";
      break;
    case "tw":
      defaultTitle = "OneWallet – 去中心化、隱私保護的 Web3 錢包，支援 DeFi、RWA 與多鏈資產";
      description = "OneWallet 是一個安全、重視隱私的去中心化 Web3 錢包，建構於 OneChain Move Layer-1 之上。使用者可在本地裝置上安全管理 DeFi、代幣化資產與多鏈加密資產，並具備自主金鑰控制與 MPC 安全防護。";
      keywords = "去中心化、自主金鑰控制、MPC 安全金鑰防護、零追蹤隱私模型、本地加密、基於 Move 的 Layer-1 安全、多鏈錢包支援、代幣化資產（RWA）支援、免 Gas 上手體驗、無縫 DeFi 支援";
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
      images: [
        {
          url: "https://one-wallet.cc/apple-touch-icon.png",
          width: 180,
          height: 180,
          alt: "OneWallet Logo"
        }
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: defaultTitle,
      description: description,
      creator: "@onewallet",
      images: ["https://one-wallet.cc/apple-touch-icon.png"],
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
      google: "JjFrWGZV7OlvFHLBs6JAp4-5uzKjdb92-67zN83ER9U",
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
