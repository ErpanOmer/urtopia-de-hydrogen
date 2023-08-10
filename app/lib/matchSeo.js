function truncate(str, num = 155) {
    if (typeof str !== 'string') return '';
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num - 3) + '...';
  }
  
  
  export default function (id, shop, request) {
    const url = request.url

    const root = {
        title: shop?.name,
        titleTemplate: `%s | ${shop?.name}`,
        description: truncate(shop?.description ?? ''),
        handle: '@shopify',
        url,
        robots: {
          noIndex: false,
          noFollow: false,
        },
        jsonLd: {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: shop.name,
          logo: shop.brand?.logo?.image?.url,
          sameAs: [
            'https://twitter.com/shopify',
            'https://facebook.com/shopify',
            'https://instagram.com/shopify',
            'https://youtube.com/shopify',
            'https://tiktok.com/@shopify',
          ],
          potentialAction: {
            '@type': 'SearchAction',
            target: `${url}search?q={search_term}`,
            query: "required name='search_term'",
          },
        },
      }


      return Object.assign(root)
  }