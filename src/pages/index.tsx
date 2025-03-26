import { GetStaticProps, GetStaticPropsContext } from 'next';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function Home() {
  const t = useTranslations("");

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <p>{t('description')}</p>

      <div>
        <Link href="/" locale="en">English</Link> |
        <Link href="/" locale="ja">日本語</Link>
      </div>
    </div>
  );
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like. The recommended
      // pattern is to put them in JSON files separated by locale and read
      // the desired one based on the `locale` received from Next.js.
      messages: (await import(`../locales/${context.locale}.json`)).default
    }
  };
}
