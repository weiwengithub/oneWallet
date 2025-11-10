'use client';

import { useTranslations } from 'next-intl';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PageWrapper from '@/components/PageWrapper';
import { Shield, Zap, Globe, Lock, Coins, Smartphone } from 'lucide-react';

export default function FeaturesPageClient() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 light:from-slate-50 light:via-blue-50 light:to-slate-100 text-white dark:text-white light:text-slate-800 relative overflow-hidden transition-colors duration-500">
        {/* Background decorative dots */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
          <div className="absolute top-40 right-32 w-1 h-1 bg-green-400 rounded-full opacity-80"></div>
          <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-400 rounded-full opacity-70"></div>
          <div className="absolute bottom-60 left-16 w-1 h-1 bg-blue-300 rounded-full opacity-60"></div>
        </div>

        <Header />
        <FeaturesContent />
        <Footer />
      </div>
    </PageWrapper>
  );
}

function FeaturesContent() {
  const t = useTranslations('features');

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security",
      description: "Multi-layer encryption, secure key storage, and biometric authentication protect your digital assets.",
      color: "from-blue-500 to-blue-700"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning Fast",
      description: "Instant transactions and real-time updates across all supported blockchain networks.",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cross-Chain Support",
      description: "Seamlessly manage assets across 50+ blockchain networks including Ethereum, OneChain, and SUI.",
      color: "from-green-500 to-blue-500"
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Self-Custody",
      description: "You own your private keys. Your assets, your control - no third-party risk.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Coins className="w-8 h-8" />,
      title: "DeFi Integration",
      description: "Access lending, staking, DEX trading, and yield farming directly from your wallet.",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Multi-Platform",
      description: "Available on web browsers, iOS, and Android with seamless synchronization.",
      color: "from-teal-500 to-green-500"
    }
  ];

  const detailedFeatures = [
    {
      title: t('multiLayerSecurity.title'),
      description: t('multiLayerSecurity.description'),
      features: [
        "End-to-end encryption",
        "Hardware wallet integration",
        "Biometric authentication",
        "Multi-signature support",
        "Secure backup & recovery"
      ]
    },
    {
      title: t('defiSupport.title'),
      description: t('defiSupport.description'),
      features: [
        "DEX trading integration",
        "Yield farming protocols",
        "Lending & borrowing",
        "NFT marketplace access",
        "Staking rewards"
      ]
    },
    {
      title: t('oneChainSupport.title'),
      description: t('oneChainSupport.description'),
      features: [
        "OneChain native support",
        "Ethereum compatibility",
        "SUI blockchain integration",
        "Cross-chain bridges",
        "Multi-asset management"
      ]
    }
  ];

  return (
    <main className="relative px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Powerful Features for <br />
            <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Modern Finance
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-3xl mx-auto">
            Everything you need to manage, trade, and grow your digital assets securely
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 dark:from-slate-800/50 dark:to-slate-900/50 light:from-white/80 light:to-slate-100/90 rounded-2xl p-8 backdrop-blur-sm border border-slate-700 dark:border-slate-700 light:border-slate-200 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Detailed Features */}
        <div className="space-y-16">
          {detailedFeatures.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-slate-800/30 to-slate-900/30 dark:from-slate-800/30 dark:to-slate-900/30 light:from-white/60 light:to-slate-100/60 rounded-3xl p-8 lg:p-12 backdrop-blur-sm border border-white/10"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-6">{section.title}</h2>
                  <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 mb-8 leading-relaxed">
                    {section.description}
                  </p>
                  <ul className="space-y-4">
                    {section.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
                        <span className="text-gray-300 dark:text-gray-300 light:text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="relative">
                  <div className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400/20 via-purple-500/20 to-green-400/20 rounded-full backdrop-blur-lg border border-white/20 flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-500/30 to-green-500/30 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                        OW
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 mb-8 max-w-2xl mx-auto">
            Join millions of users who trust OneWallet for their digital asset management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <button className="bg-white text-black hover:bg-gray-100 dark:bg-white dark:text-black dark:hover:bg-gray-100 light:bg-slate-800 light:text-white light:hover:bg-slate-700 font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Download for Chrome
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black light:border-slate-800 light:text-slate-800 light:hover:bg-slate-800 light:hover:text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl">
              Get Mobile App
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
