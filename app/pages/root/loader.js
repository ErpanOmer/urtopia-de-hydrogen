import { defer } from '@shopify/remix-oxygen';
import { ShopifySalesChannel } from '@shopify/hydrogen';
import { getCountry } from '~/lib/utils';
import { getShopInfos } from '~/apis/shop'
import { getCart } from '~/apis/cart.js';

export default async function ({ params, request, context}) {
    const [country, customerAccessToken, shopInfos, cart] = await Promise.all([
      getCountry(context.session),
      context.session.get('customerAccessToken'),
      getShopInfos(context.storefront),
      getCart(context.storefront, request)
    ]);

    console.log('country', country)
  
    const locale = params.locale
  
    if (locale && locale !== context.storefront.i18n.language.toLowerCase()) {
      throw new Response(null, {status: 404});
    }
  
    return defer({
      shopInfos,
      cart,
      request,
      isLoggedIn: Boolean(customerAccessToken),
      selectedLocale: Object.assign(context.storefront.i18n, { country }),
      analytics: {
        shopifySalesChannel: ShopifySalesChannel.hydrogen,
        shopId: shopInfos.shop.id,
      },
    }, {
      headers: {
        "Set-Cookie": await context.session.commit(),
      },
    });
  }