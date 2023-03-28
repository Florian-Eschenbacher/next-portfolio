import { GetStaticProps } from 'next';
import Link from 'next/link';
import { loadTranslations } from 'ni18n';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { ni18nConfig } from '../../ni18n.config';

export default function Nav() {
  const { t } = useTranslation();
  return (
    <nav className='flex justify-around m-2 w-full'>
      <Link href='/'>{t('nav.home')}</Link>
      <Link href='/about'>{t('nav.about')}</Link>
    </nav>
  );
}

export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await loadTranslations(ni18nConfig, props.locale, ['common']))
    }
  };
};
