import React from "react";
import { Disclosure } from "@headlessui/react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";
const Filter = (props) => {
  return (
    <>
      <Disclosure>
        {({ open }) => (
          <>
            <div className="bg-gray-50 w-full">
              <Disclosure.Button className="p-3 flex items-center gap-3  ">
                {open ? <FiChevronUp /> : <FiChevronDown />}
                <span className={open ? "text-red-600" : "text-gray-700"}>
                  {props.title}
                </span>
              </Disclosure.Button>
              <Disclosure.Panel className="text-gray-500  p-3">
                <div className="flex flex-wrap gap-3 ">
                  {props.tags.map((tag) => (
                    <>
                      <div className="border-2 border-gray-200 px-3 py-2">
                        <span className="text-red-600">{tag}</span>
                      </div>
                    </>
                  ))}
                </div>
              </Disclosure.Panel>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
};

export default Filter;
