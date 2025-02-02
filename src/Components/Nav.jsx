import { useEffect, useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const handle = () => {
    setToggle(!toggle);
  };
  const handleClick = (index) => {
    setActiveIndex(index);
  };
  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [toggle]);
  const navItems = ["Home", "Menu", "About Us", "Offers"];
  return (
    <>
      <main>
        <nav>
          {/* desktop */}
          <div className="flex justify-between items-center mx-[2rem] mt-4 md:mt-0 md:mx-[4rem]  ">
            <div>
              <img
                src="/svg/image-removebg-preview (47) 1.svg"
                alt="nacho_logo"
                className="w-[40px] h-[40px]"
              />
            </div>
            <div
              className={`md:flex py-3 items-center ${
                toggle ? "translate-x-0" : "translate-x-full"
              } px-4 md:space-x-8 fixed md:relative z-20 bg-white md:bg-transparent left-0 right-0 bottom-0 top-0 md:translate-x-0 transition-transform duration-300 transform`}
            >
              <div className="md:hidden" onClick={handle}>
                <IoMdClose size={30} className="float-right cursor-pointer" />
              </div>
              <ul className="md:flex md:space-y-0 md:text-[14px] md:h-auto h-screen space-y-5 mt-8 text-[40px] items-center px-4 md:space-x-8 absolute md:relative">
                {navItems.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => handleClick(index)}
                    className={` cursor-pointer ${
                      activeIndex === index ? " text-red-600" : ""
                    }`}
                  >
                    {item}

                    {activeIndex === index && (
                      <span className="ml-2 sm:hidden text-[50px]">-</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:hidden" onClick={handle}>
              <IoIosMenu size={40} className="cursor-pointer" />
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}

export default Nav;
