type props = {
  href: string;
  children: React.ReactNode;
};

export default function IconLink({ href, children }: props) {
  return <a href={href}>{children}</a>;
}
