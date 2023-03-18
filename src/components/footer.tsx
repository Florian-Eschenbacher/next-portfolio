import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import IconLink from './iconlink';

export default function Footer() {
  return (
    <footer>
      <IconLink href='https://github.com/Florian-Eschenbacher'>
        <AiFillGithub />
      </IconLink>
      <IconLink href='https://www.linkedin.com/in/florian-eschenbacher-b703a591/'>
        <AiFillLinkedin />
      </IconLink>
      <IconLink href='mailto:kopflaster@gmail.com'>
        <AiOutlineMail />
      </IconLink>
      <Link href='/privacy'>Privacy</Link>
      <Link href='/impressum'>Impressum</Link>
    </footer>
  );
}
