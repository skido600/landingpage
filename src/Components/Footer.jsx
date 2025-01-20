import SvgIcons from "./Svg/SvgIcons";

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
                <li>ebisileonard@gmail.com</li>
                <li>+234 906 584 9502</li>
                <li>Social media</li>
                <div className=" flex md:justify-start justify-center mt-4  gap-x-4">
                  <SvgIcons type="insta" />
                  <SvgIcons type="x" />
                </div>
              </ul>
            </article>
          </footer>
        </section>
      </main>
    </>
  );
}

export default Footer;
