import { defer } from '@shopify/remix-oxygen';

export { default } from '~/pages/leasing/index.jsx'
import { cssBundleHref } from '@remix-run/css-bundle';

export const loader = (...args) => defer({
    seo:  { 
        title: "leasing",
        titleTemplate: '%s | Page',
    }
})

export const links = () => [
    ...(cssBundleHref ? [
        { rel: "preload" , as: "text/css", href: cssBundleHref },
        { rel: "stylesheet" , href: cssBundleHref },
    ] : [cssBundleHref])
]

export const meta = () => {
    return 
}