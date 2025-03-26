import { GetStaticProps } from 'next';
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

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      messages: (await import(`../locales/${locale}.json`)).default
    }
  };
}
