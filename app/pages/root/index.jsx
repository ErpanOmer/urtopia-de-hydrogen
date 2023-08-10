import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useParams,
} from '@remix-run/react';
import { Seo } from '@shopify/hydrogen';
import { useNavigate, useLocation } from "react-router-dom";
import Layout from '~/layout/BasicLayout/index.jsx';
import { DEFAULT_LOCALE } from '~/lib_v2/locale';
import { useAnalytics } from '~/hooks/useAnalytics';
import { useEffect } from 'react';

export default function App() {
  const params = useParams()
  const data = useLoaderData();
  const navigate = useNavigate()
  const location = useLocation();
  const fetcher = useFetcher()
  const locale = data.selectedLocale ?? DEFAULT_LOCALE;
  const hasUserConsent = true;

  //console.log(data)

  useAnalytics(hasUserConsent, locale);

  useEffect(() => {
    // 如果url.path 是从/de开头, 默认替换为
    if (params.locale === 'de' && location.pathname.startsWith('/de')) {
      navigate(location.pathname.replace('/de', ''), { replace: true })
    }
  }, [])

  return (
    <html lang={locale.language}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body>
        <Layout key={`${locale.language}-${locale.country}`}>
          <Outlet />
        </Layout>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}