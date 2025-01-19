import { useState } from "react";

import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

function Nav() {
  const [toggle, setToggle] = useState(false);
  const handle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <main>
        <nav>
          {/* desktop */}
          <div className="flex justify-between items-center mx-[2rem] md:mx-[4rem] ">
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
              } px-4 md:space-x-8 fixed md:relative bg-white md:bg-transparent left-0 right-0 bottom-0 top-0 md:translate-x-0 transition-transform duration-300 transform`}
            >
              <div className="md:hidden" onClick={handle}>
                <IoMdClose size={30} className="float-right " />
              </div>
              <ul className="md:flex md:space-y-0 md:text-[14px] space-y-5 mt-8 text-[40px] items-center px-4 md:space-x-8 absolute md:relative">
                <li>Home</li>
                <li>Menu</li>
                <li>About Us</li>
                <li>Offers</li>
              </ul>
            </div>

            <div className="md:hidden" onClick={handle}>
              <IoIosMenu size={40} className="" />
            </div>
          </div>
        </nav>
      </main>
    </>
  );
}

export default Nav;
