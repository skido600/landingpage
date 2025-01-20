import Btn from "./props/Btn";

function Favourfly() {
  return (
    <>
      <main className="mt-[8rem]">
        <section className="flex flex-col-reverse md:flex-row justify-between mx-4 gap-x-6 lg:gap-x-0 items-center">
          <div>
            <img src="/svg/fv.svg" alt="Flavourful" className="" />
          </div>
          <div className="md:w-[50%]">
            <h1 className="font-Prosto text-center md:text-left mb-2 text-[#8F0000] text-[30px] lg:text-[60px] ">
              Crunchy & Flavourful{" "}
            </h1>
            <p className="font-jost text-[#8F0000] mb-4">
              The ultimate crunch with our nachos, crafted for snack lovers who
              crave bold flavors and high quality. Each chip is packed with the
              perfect balance of seasoning, creating a delicious experience in
              every bite. Our nachos bring a fun, flavorful twist to any snack
              moment, making them the ideal choice for gatherings, parties, or a
              quick treat on the go.
            </p>
            <div className="mb-4">
              <Btn />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Favourfly;
