import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header siteTitle='Florian Eschenbacher' description='Frontend Web Developer' />
      <main>{children}</main>
      <Footer />
    </>
  );
}
