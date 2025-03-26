import { IntlProvider } from 'next-intl';
import { useRouter } from 'next/router';
import '../styles/globals.css';
import { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  const { locale = "en" } = useRouter();

  // 選択された言語の翻訳ファイルを読み込む
  const messages = require(`../locales/${locale}.json`);

  return (
    <IntlProvider messages={messages} locale={locale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}
