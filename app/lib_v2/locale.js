// 默认语言
export const DEFAULT_LOCALE = {
    label: 'Germany (EUR €)',
    language: 'DE',
    currency: '€',
    pathPrefix: ''
}

// 支持语言
const LOCALES = {
    DEFAULT_LOCALE,
    '/en': {
        label: 'Euro (EUR €)',
        language: 'EN',
        currency: '€',
    }
}


export function getLocaleFromRequest(request) {
    const url = new URL(request.url);
    const pathPrefix = '/' + url.pathname.substring(1).split('/')[0].toLowerCase();

    return Object.assign({ pathPrefix }, LOCALES[pathPrefix] || DEFAULT_LOCALE)
}


// 默认导出
export default LOCALES
