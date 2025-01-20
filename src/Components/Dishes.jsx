import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const [sectionRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <main>
      <section className="px-5 mt-12">
        <h1 className="text-[#8F0000] text-[30px] lg:text-[60px] font-Prosto">
          Best Dishes From Our Menu
        </h1>
        <div ref={sectionRef} className="grid md:grid-cols-3 space-y-4 gap-x-4">
          {dishes.map((item, key) => (
            <motion.article
              whileHover={{ scale: 1.05 }} // Slight zoom on hover
              whileTap={{ scale: 0.96 }} // Shrink slightly on tap
              initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and slide up
              animate={inView ? { opacity: 1, y: 0 } : {}} // Animate only when in view
              transition={{ duration: 0.6, delay: key * 0.4 }} // Add delay for staggered animation
              key={key}
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
                  {item.price}
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
