import { GetStaticProps } from 'next';
import { loadTranslations } from 'ni18n';
import { useTranslation } from 'react-i18next';
import { ni18nConfig } from '../../ni18n.config';
import Nav from './nav';

export default function Header() {
  const { t } = useTranslation();
  return (
    <header className='mb-20 flex flex-col text-center items-center'>
      <Nav />
      <div className='mt-8 uppercase'>
        <h1 className='text-5xl font-bold mb-6'>{t('mainHeading')}</h1>
        <h2>{t('description')}</h2>
      </div>
    </header>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, props.locale, ['common']))
    }
  };
};
