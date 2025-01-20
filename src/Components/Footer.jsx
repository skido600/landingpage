import SvgIcons from "./Svg/SvgIcons";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Last_Footer from "./Last_Footer";

function Footer() {
  return (
    <>
      <main className="mx-4 mt-12 text-center  md:text-left">
        <section className="md:grid grid-cols-3">
          <article className="md:mb-0 mb-4">
            <div className="flex justify-center md:block">
              <img
                src="/svg/footer.svg"
                alt="nacho_logo"
                className="w-[60px] h-[60px]"
              />
            </div>
            <p className="font-inter">
              We have the best nachos, with a better for you product, A
              healthier, tastier product!
            </p>
          </article>
          <footer className="md:grid grid-cols-3 col-span-2 pl-4">
            <article className="div_2 text-[#555555] md:mb-0 mb-8">
              <ul className="md:space-y-5">
                <li className="text-black font-inter font-[600]">
                  Useful links
                </li>
                <li>About us</li>
                <li>Events</li>
                <li>Menu</li>
              </ul>
            </article>
            <article className="div_3 text-[#555555] md:mb-0 mb-4">
              <ul className="md:space-y-5">
                <li className="text-black font-inter font-[600]">Main Menu</li>
                <li>Home</li>
                <li>Offers</li>
                <li>Menus</li>
                <li>Reservation</li>
              </ul>
            </article>
            <article className="div_4 text-[#555555] md:mb-0 mb-4">
              <ul className="md:space-y-5">
                <li className="text-black font-inter font-[600]">Contact Us</li>
                <li>
                  {" "}
                  <a href="mailto:ebisileonard@gmail.com">
                    <div className="flex items-center  justify-center md:justify-start  ">
                      <IoMdMail size={20} className="" />
                      <span className="">Email@ebisileonard.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  {" "}
                  <div className="flex items-center justify-center md:justify-start ">
                    <FaWhatsapp size={20} />
                    <a
                      href="https://wa.me/2349065849502"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <p className="">Whatsapp</p>
                    </a>
                  </div>
                </li>
                <li className="t">Social media</li>
                <div className=" flex md:justify-start justify-center  mt-8 gap-x-4">
                  <div className="flex items-center ">
                    <a
                      href="https://www.instagram.com/lwave1962/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <SvgIcons type="insta" />
                    </a>
                  </div>

                  <div className="flex items-center ">
                    <a
                      href="https://www.linkedin.com/in/leo-wave-309637239/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <SvgIcons type="lINK" />
                    </a>
                  </div>
                  <div className="flex items-center ">
                    <a
                      href="https://x.com/Momentum1962"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2"
                    >
                      <SvgIcons type="X" />
                    </a>
                  </div>
                </div>
              </ul>
            </article>
          </footer>
        </section>
      </main>
      <div>
        <Last_Footer />
      </div>
    </>
  );
}

export default Footer;
