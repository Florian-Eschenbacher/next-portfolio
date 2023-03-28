import Layout from '@/components/layout';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';
import { appWithI18Next } from 'ni18n';
import { ni18nConfig } from '../../ni18n.config';

const inter = Inter({
  subsets: ['latin']
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default appWithI18Next(App, ni18nConfig);
