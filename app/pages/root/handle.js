function truncate(str, num = 155) {
    if (typeof str !== 'string') return '';
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num - 3) + '...';
  }
  
  export default {
    seo: ({ data }) => {
        const shop = data.shopInfos.shop
        const url = data.request.url
  
        return {
          title: shop?.name,
          titleTemplate: '%s | Hydrogen Demo Store',
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
        };
    }
}