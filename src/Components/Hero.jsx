import Btn from "./props/Btn";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Hero() {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
      <main>
        <section className=" px-5 mt-[3rem] md:flex justify-between  items-center relative z-[1px]">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
            }}
            ref={sectionRef}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
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
          </motion.article>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
            }}
            ref={sectionRef}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-nachos-bg md:bg-none md:bg-transparent z-30 bg-no-repeat md:pr-3 lg:pr-0 md:w-[80%] rounded-[20px] mt-4 md:mt-0 bg-cover w-full center-right-100 lg:h-[500px] h-[400px]"
          >
            <img
              src="/svg/image-removebg-preview (46)_cleanup 1 (1)_prev_ui (6).png"
              alt="logo_Nachos"
              className=" w-full  object-contain translate-x-[-60px] pt-7 md:block hidden"
            />
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default Hero;
