type props = {
  href: string;
  children: React.ReactNode;
};

export default function IconLink({ href, children }: props) {
  return (
    <a className='h-8 w-8' href={href}>
      {children}
    </a>
  );
}
