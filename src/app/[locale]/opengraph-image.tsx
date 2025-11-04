import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'OneWallet - Your Gateway to Future Finance'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function Image({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  const title = locale === 'en'
    ? 'OneWallet | Secure Web3 Wallet'
    : locale === 'zh'
    ? 'OneWallet | 安全的 Web3 钱包'
    : 'OneWallet | 安全的 Web3 錢包';

  const subtitle = locale === 'en'
    ? 'Your Gateway to Future Finance'
    : locale === 'zh'
    ? '通往未来金融的入口'
    : '通往未來金融的入口';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          backgroundImage: 'radial-gradient(circle at 25% 50%, #0047c4 0%, #000 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '20px',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: '#fff',
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            {title}
          </div>
          <div
            style={{
              fontSize: 32,
              color: '#d7e0e9',
              textAlign: 'center',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
