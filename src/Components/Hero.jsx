import Btn from "./props/Btn";

// import React from "react";

function Hero() {
  return (
    <>
      <main>
        <section className=" px-5 mt-[3rem] md:flex justify-between  items-center relative z-[1px]">
          <article className="relative">
            <div className="order-2 md:order-1">
              <h1 className="text-[#8F0000] text-[30px] lg:text-[60px] font-Prosto">
                Nachos are your best friend!
              </h1>

              <p className="font-jost text-[18px] mt-4 text-[#8F0000] ">
                Feeling bored? A better for you product! Made with love.
              </p>
            </div>
            <div className="mt-8">
              {/* <button className="bg-[#8F0000] text-white px-8 py-3 rounded-lg">
                View all products
              </button> */}
              <Btn />
            </div>
          </article>
          {/* <div className="bg-white w-[80%] z-[-1px]"></div> */}
          <div className="bg-nachos-bg z-30 bg-no-repeat md:pr-3 lg:pr-0 md:w-[80%] rounded-[20px] mt-4 md:mt-0   bg-cover w-full  center-right-100 lg:h-[500px] h-[400px]"></div>
        </section>
      </main>
    </>
  );
}

export default Hero;
