import Head from 'next/head';
import NavItem from '../components/NavItem';
import Link from 'next/link';
import Image from 'next/image';
import { DefaultProps } from '../utils/models';

const Nav = ({ title, description }: DefaultProps) => (
  <>
    <Head>
      {title && <title>{{ title }}</title>}
      {description && <meta name="description" content="description" />}
    </Head>
    <nav className="">
      <ul className="flex w-full mt-4 space-x-5 items-center justify-center md:justify-around">
        <li>
          {' '}
          <Link href="/" passHref>
            <Image
              alt="pizza logo"
              height={50}
              width={80}
              className="rounded-full cursor-pointer"
              src="https://image.similarpng.com/very-thumbnail/2020/05/Pizza-logo-design-template-Vector-PNG.png"
            />
          </Link>
        </li>
        <NavItem name="Menu" />
        <NavItem name="Gallery" />
        <NavItem name="Contact" />
      </ul>
    </nav>
  </>
);

export default Nav;
