import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import IconLink from './iconlink';

export default function Footer() {
  return (
    <footer className='flex items-center w-full justify-around m-2'>
      <IconLink href='https://github.com/Florian-Eschenbacher'>
        <AiFillGithub className='h-full w-full' />
      </IconLink>
      <IconLink href='https://www.linkedin.com/in/florian-eschenbacher-b703a591/'>
        <AiFillLinkedin className='h-full w-full' />
      </IconLink>
      <IconLink href='mailto:kopflaster@gmail.com'>
        <AiOutlineMail className='h-full w-full' />
      </IconLink>
      <Link href='/privacy'>Privacy</Link>
      <Link href='/impressum'>Impressum</Link>
    </footer>
  );
}
