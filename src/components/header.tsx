import Nav from './nav';

type HeaderProps = {
  siteTitle: string;
  description: string;
};

export default function Header({ siteTitle, description }: HeaderProps) {
  return (
    <header>
      <Nav />
      <div>
        <h1>{siteTitle}</h1>
        <h2>{description}</h2>
      </div>
    </header>
  );
}
