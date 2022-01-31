import {
  TruckIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from '@heroicons/react/outline';

type SectionProps = {
  children?: React.ReactNode | typeof TruckIcon;
};
const SectionDiv = ({ children }: SectionProps) => {
  return (
    <div className="flex flex-col items-center p-2 md:hover:animate-bounce cursor-pointer ">
      {children}
    </div>
  );
};

let selected = 'selection:bg-slate-100 selection:text-slate-800';

const SectionItems = () => {
  return (
    <div className=" w-full grid grid-cols-1 divide-y divide-gray-600 bg-slate-900 md:space-x-8 md:flex md:justify-center md:divide-none">
      <SectionDiv>
        <TruckIcon className="m-2 h-10 p-2  bg-white rounded-full  text-slate-800 " />
        <h3 className={selected}>Free Delivery</h3>
      </SectionDiv>
      <SectionDiv>
        <CurrencyDollarIcon className="m-2 h-10 p-2  bg-white rounded-full  text-slate-800" />
        <h3 className={selected}>$10.00 Minimum</h3>
      </SectionDiv>
      <SectionDiv>
        <CreditCardIcon className="m-2 h-10 p-2 bg-white rounded-full  text-slate-800" />
        <h3 className={selected}>Credit/Debit</h3>
      </SectionDiv>
    </div>
  );
};

export default SectionItems;
