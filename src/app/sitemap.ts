import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://onewallet.com'
  const locales = ['en', 'zh', 'tw']
  const pages = ['', '/about', '/features', '/support', '/contact']

  const sitemap: MetadataRoute.Sitemap = []

  // Add root page
  sitemap.push({
    url: baseUrl,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 1,
    alternates: {
      languages: {
        en: `${baseUrl}/en`,
        zh: `${baseUrl}/zh`,
        tw: `${baseUrl}/tw`,
      },
    },
  })

  // Add localized pages
  locales.forEach((locale) => {
    pages.forEach((page) => {
      const url = `${baseUrl}/${locale}${page}`
      let priority = 0.8
      let changeFrequency: 'daily' | 'weekly' | 'monthly' = 'weekly'

      // Set priority based on page importance
      if (page === '') {
        priority = 1
        changeFrequency = 'daily'
      } else if (page === '/about' || page === '/features') {
        priority = 0.9
        changeFrequency = 'weekly'
      } else if (page === '/support' || page === '/contact') {
        priority = 0.7
        changeFrequency = 'monthly'
      }

      sitemap.push({
        url,
        lastModified: new Date(),
        changeFrequency,
        priority,
        alternates: {
          languages: {
            en: `${baseUrl}/en${page}`,
            zh: `${baseUrl}/zh${page}`,
            tw: `${baseUrl}/tw${page}`,
          },
        },
      })
    })
  })

  return sitemap
}
