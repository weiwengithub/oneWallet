export default function JsonLd({ locale }: { locale: string }) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "OneWallet",
    "applicationCategory": "FinanceApplication",
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
    "description": locale === 'en'
      ? "OneWallet is your secure gateway to Web3. Store, trade, and grow real assets with MPC security, USDO stablecoin, RWA tokenization, and seamless login."
      : locale === 'zh'
      ? "OneWallet 是你通往 Web3 的安全入口。借助 MPC 安全防护、USDO 稳定币、RWA 资产代币化与无缝登录，轻松存储、交易并增值真实世界资产。"
      : "OneWallet 是你通往 Web3 的安全入口。憑藉 MPC 安全防護、USDO 穩定幣、RWA 資產代幣化與無縫登入，輕鬆儲存、交易並增值真實世界資產。",
    "url": `https://one-wallet.cc/${locale}`,
    "screenshot": "https://one-wallet.cc/og-image.jpg",
    "featureList": [
      "Self-Custodial Wallet",
      "Multi-Chain Support",
      "DeFi Integration",
      "NFT Support",
      "MPC Security"
    ]
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OneWallet",
    "url": "https://one-wallet.cc",
    "logo": "https://one-wallet.cc/images/logo.png",
    "sameAs": [
      "https://twitter.com/onewallet",
      "https://github.com/weiwengithub/oneWallet"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "url": `https://one-wallet.cc/${locale}/support`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
    </>
  );
}
