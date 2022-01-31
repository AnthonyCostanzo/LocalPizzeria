import { DefaultProps } from '../utils/models';
const NavItem = ({ name }: DefaultProps) => (
  <li className="cursor-pointer text-xl active:text-blue-200 hover:scale-125 hover:text-white  selection:bg-slate-100 selection:text-slate-800">
    {name}
  </li>
);

export default NavItem;
