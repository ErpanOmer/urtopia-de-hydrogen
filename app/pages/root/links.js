import favicon from '../../../public/favicon.svg'
import styles from '~/styles/app.css';

export default function () {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'preconnect',
            href: 'https://cdn.shopify.com',
        },
        {
            rel: 'preconnect',
            href: 'https://shop.app',
        },
        { rel: 'icon', type: 'image/svg+xml', href: favicon },
    ];
}