export default function JsonLd({ locale }: { locale: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OneWallet",
    "applicationCategory": "CryptocurrencyWallet",
    "operatingSystem": ["iOS", "Android", "Web"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "headline": locale === 'en'
      ? "OneWallet – Non-Custodial, Privacy-Preserving Web3 Wallet"
      : locale === 'zh'
        ? "OneWallet – 去中心化、隐私保护的 Web3 钱包"
        : "OneWallet – 去中心化、隱私保護的 Web3 錢包",
    "description": locale === 'en'
      ? "OneWallet is a secure, privacy-preserving non-custodial Web3 wallet built on the OneChain Move-based Layer-1 blockchain. It supports DeFi, stablecoins, multi-chain assets, MPC key security, tokenized real-world assets (RWA), and on-device key control."
      : locale === 'zh'
      ? "OneWallet 是一个安全、注重隐私保护的去中心化 Web3 钱包，基于 OneChain 的 Move 架构 Layer-1 区块链构建。它支持 DeFi、稳定币、多链资产、MPC 密钥安全、代币化实物资产（RWA）以及本地设备密钥控制。"
      : "OneWallet 是一個安全、重視隱私保護的去中心化 Web3 錢包，建構於以 Move 為基礎的 OneChain Layer-1 區塊鏈之上。它支援 DeFi、穩定幣、多鏈資產、MPC 金鑰安全、代幣化實體資產（RWA），以及裝置端金鑰控制。",
    "url": `https://one-wallet.cc/${locale}`,
    "screenshot": "https://one-wallet.cc/og-image.jpg",
    "featureList": [
      "Non-custodial, user-controlled keys",
      "MPC-secured key protection",
      "Zero-tracking privacy model",
      "On-device encryption",
      "Move-based Layer-1 security",
      "Multi-chain wallet support",
      "Tokenized asset (RWA) support",
      "Gas-abstracted onboarding",
      "Seamless DeFi support"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
