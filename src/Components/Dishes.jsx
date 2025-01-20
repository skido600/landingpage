function Dishes() {
  const dishes = [
    {
      title: "Avacado Nacho",
      Description: "   Description of the item",
      img: "/svg/ff.svg",
      price: 10.0,
      rating: 4.9,
    },
    {
      title: "Best Seller Nachos",
      Description: "   Description of the item",
      img: "/svg/best-seller.svg",
      price: 22.0,
      rating: 4.9,
    },
    {
      title: "Original Nachos",
      Description: "   Description of the item",
      img: "/svg/original.svg",
      price: 22.0,
      rating: 4.9,
    },
  ];

  return (
    <>
      <main>
        <section className="px-5 mt-12">
          <h1 className="text-[#8F0000] text-[30px] lg:text-[60px] font-Prosto">
            Best Dishes From Our Menu{" "}
          </h1>
          <div className="grid md:grid-cols-3 space-y-4  gap-x-4">
            {dishes.map((item, key) => (
              <article key={key} className="bg-white  px-4 rounded-lg">
                <img src={item.img} alt={item.title} className="w-[]" />
                <h1>{item.title}</h1>
                <p className="text-[#555555] font-inter">{item.Description}</p>
                <div className="flex justify-between items-center">
                  <p>
                    <span>$</span>
                    {item.price}
                  </p>
                  <div>
                    <img src="/svg/fi-sr-star.svg" className="w-4" alt="" />
                    <p className="text-[#555555]">{item.rating}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Dishes;
