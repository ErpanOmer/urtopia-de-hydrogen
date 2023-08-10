

const SHOP_INFOS_QUERY = `#graphql
    fragment Menu on Menu {
        id
        items {
            ...MenuItem
        }
    }

    fragment MenuItem on MenuItem {
        title
        url
        type
        id
    }

    query shopInfos (
        $language: LanguageCode
    ) @inContext(language: $language) {
        about: menu (handle: "4-0-about") { ...Menu }
        service: menu (handle: "4-0-customer-service") { ...Menu }
        explore: menu (handle: "4-0-explore") { ...Menu }
        footer: menu (handle: "footer") { ...Menu }
        header: menu (handle: "4-0-main-menu") { ...Menu }
        shop {
            id
            name
            description
            primaryDomain {
                url
            }
            brand {
                logo {
                    image {
                    url
                    }
                }
            }
        }
        localization {
            language {
              isoCode
              endonymName
              name
            }
            country {
              name
              unitSystem
              isoCode
            }
          }
    }    
    `

export async function getShopInfos (storefront) {
    if (!storefront) {
        return {}
    }


    return await storefront.query(SHOP_INFOS_QUERY, {
        variables: {
          language: storefront.i18n.language,
        },
    })
}