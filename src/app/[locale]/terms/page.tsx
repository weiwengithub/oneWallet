import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import TermsPageClient from './TermsPageClient';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'terms' });

  const title = t('title');
  const description = t('subtitle');

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'zh' ? 'zh_CN' : locale === 'tw' ? 'zh_TW' : 'en_US',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function TermsPage() {
  return <TermsPageClient />;
}
