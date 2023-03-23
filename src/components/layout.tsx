import Footer from './footer';
import Header from './header';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className='max-w-4xl mx-8 pt-8 box-border md:mx-auto flex flex-col justify-center items-center min-h-screen'>
      <Header siteTitle='Florian Eschenbacher' description='Frontend Web Developer' />
      <main className='mt-20 mb-auto'>{children}</main>
      <Footer />
    </div>
  );
}
