import Btn from "./props/Btn";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
function Favourfly() {
  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const transition = {
    duration: 0.8,
    delay: 0.7,
    ease: [0, 0.71, 0.2, 1.01],
    type: "spring",
  };
  return (
    <>
      <main className="mt-[3rem]">
        <section className="flex flex-col-reverse md:flex-row justify-between mx-4 gap-x-6 lg:gap-x-0 items-center">
          <div>
            <img src="/svg/fv.svg" alt="Flavourful" className="" />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: inView ? 1 : 0,
              y: inView ? 0 : 20,
            }}
            ref={sectionRef}
            transition={transition}
            className="md:w-[50%]"
          >
            <h1 className="font-Prosto text-center md:text-left mb-2 text-[#8F0000] text-[30px] lg:text-[60px] ">
              Crunchy & Flavourful{" "}
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{
                opacity: inView ? 1 : 0,
              }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="font-jost text-[#8F0000] mb-4"
            >
              The ultimate crunch with our nachos, crafted for snack lovers who
              crave bold flavors and high quality. Each chip is packed with the
              perfect balance of seasoning, creating a delicious experience in
              every bite. Our nachos bring a fun, flavorful twist to any snack
              moment, making them the ideal choice for gatherings, parties, or a
              quick treat on the go.
            </motion.p>
            <div className="mb-4">
              <Btn />
            </div>
          </motion.div>
        </section>
      </main>
    </>
  );
}

export default Favourfly;
