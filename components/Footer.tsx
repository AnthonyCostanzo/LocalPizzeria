import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
const faFacebookIcon = faFacebook as IconProp;
const faTwitterIcon = faTwitter as IconProp;
const faInstagramIcon = faInstagram as IconProp;

let icons: IconProp[] = [faFacebookIcon, faTwitterIcon, faInstagramIcon];

let selected = 'selection:bg-slate-100 selection:text-slate-800';

const Footer = () => (
  <div className="bg-slate-300 flex flex-col items-center p-3">
    <div className="space-x-10">
      {icons.map((icon, i) => (
        <FontAwesomeIcon
          key={i}
          className="cursor-pointer text-2xl text-slate-800"
          icon={icon}
        />
      ))}
    </div>
    <p className={`text-slate-800 ${selected}`}>
      Staten Island Township Pizza Delivery or Pickup
    </p>
    <p className={`text-slate-800 ${selected}`}>
      {"Order From Nonna's Old Fashioned Pizzeria"}
    </p>
    <p
      className={`text-slate-600 text-bold hover:text-slate-900 cursor-pointer ${selected}`}
    >
      718-123-6789
    </p>
  </div>
);

export default Footer;
