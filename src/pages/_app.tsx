import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import Script from 'next/script'


export default function App({ Component, pageProps }: AppProps) {
  const GOOGLE_ANALITICS_TAG = process.env.GOOGLE_ANALITICS_TAG
  return (<>
    {GOOGLE_ANALITICS_TAG && <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALITICS_TAG}`} />
      <Script id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GOOGLE_ANALITICS_TAG}')
        `
        }}
      />
    </>}
    <Component {...pageProps} />
  </>
  )
}
