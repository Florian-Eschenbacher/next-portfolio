import Nav from './nav';

type HeaderProps = {
  siteTitle: string;
  description: string;
};

export default function Header({ siteTitle, description }: HeaderProps) {
  return (
    <header className='mb-20 flex flex-col text-center items-center'>
      <Nav />
      <div className='mt-8 uppercase'>
        <h1 className='text-5xl font-bold mb-6'>{siteTitle}</h1>
        <h2>{description}</h2>
      </div>
    </header>
  );
}
