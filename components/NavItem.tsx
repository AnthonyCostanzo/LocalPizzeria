import { DefaultProps } from '../utils/models';
const NavItem = ({ name }: DefaultProps) => (
  <li className="cursor-pointer text-xl active:text-slate-200 hover:scale-125 hover:text-white  selection:bg-slate-100 selection:text-slate-800">
    <a href={name.toLowerCase()}>{name}</a>
  </li>
);

export default NavItem;
