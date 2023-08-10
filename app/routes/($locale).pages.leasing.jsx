import { defer } from '@shopify/remix-oxygen';

export { default } from '~/pages/leasing/index.jsx'
import { cssBundleHref } from '@remix-run/css-bundle';

export const handle = {
    seo: v => {
        console.log('v', v)

        return {
            title: 'x'
        }
    }
}

export const loader = (...args) => defer({})

export const links = () => [
    ...(cssBundleHref ? [
        { rel: "preload" , as: "text/css", href: cssBundleHref },
        { rel: "stylesheet" , href: cssBundleHref },
    ] : [cssBundleHref])
]

export const meta = () => {
    return 
}