import { motion } from "framer-motion";

function Dishes() {
  const dishes = [
    {
      title: "Avocado Nacho",
      Description: "Description of the item",
      img: "/svg/ff.svg",
      price: 10.0,
      rating: 4.9,
    },
    {
      title: "Best Seller Nachos",
      Description: "Description of the item",
      img: "/svg/best-seller.svg",
      price: 22.0,
      rating: 4.9,
    },
    {
      title: "Original Nachos",
      Description: "Description of the item",
      img: "/svg/original.svg",
      price: 22.0,
      rating: 4.9,
    },
  ];

  return (
    <main>
      <section className="px-5 mt-12">
        <h1 className="text-[#8F0000] text-[30px] lg:text-[60px] font-Prosto">
          Best Dishes From Our Menu
        </h1>
        <div className="grid md:grid-cols-3 space-y-4 md:space-y-0 gap-x-4">
          {dishes.map((item) => (
            <motion.article
              whileHover={{
                scale: 0.8,
                transition: { duration: 0.2 },
              }}
              whileTap={{
                scale: 0.8,
                transition: { duration: 0.2 },
              }}
              key={item.title}
              className="bg-white px-4 py-6 rounded-lg shadow-lg"
            >
              <img src={item.img} alt={item.title} className="w-full mb-4" />
              <h1 className="text-lg font-bold mb-2">{item.title}</h1>
              <p className="text-[#555555] font-inter mb-4">
                {item.Description}
              </p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold">
                  <span>$</span>
                  {item.price.toFixed(2)}
                </p>
                <div className="flex items-center">
                  <img src="/svg/fi-sr-star.svg" className="w-4 mr-1" alt="" />
                  <p className="text-[#555555]">{item.rating}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Dishes;
