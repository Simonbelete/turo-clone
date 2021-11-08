import React, { ReactElement } from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUp, ChevronDown } from 'components/Icons';

const FooterNav = ({
  title,
  menus,
}: {
  title: string;
  menus: ReactElement[];
}): ReactElement => {
  return (
    <>
      {/* Mobile */}
      <div className="flex md:hidden flex-col gap-5">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button>
                <div className="flex flex-row justify-between items-center">
                  <h2 className="text-base text-black font-black">{title}</h2>
                  {open === true ? (
                    <ChevronUp size="11" />
                  ) : (
                    <ChevronDown size="11" />
                  )}
                </div>
              </Disclosure.Button>
              {menus.map((_) => (
                <Disclosure.Panel className="w-full text-base font-medium text-[#414143]">
                  {_}
                </Disclosure.Panel>
              ))}
            </>
          )}
        </Disclosure>
      </div>

      {/* Desktop */}
      <div className="hidden md:flex flex-col gap-7">
        <h2 className="text-base font-black">{title}</h2>
        <div className="flex flex-col gap-3">
          {menus.map((_) => (
            <div className="w-full text-xs font-medium text-black">{_}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FooterNav;
