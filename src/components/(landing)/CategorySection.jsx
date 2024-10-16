import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategorySection = () => {
  return (
    <section className="bg-whiteColor">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-lightPink rounded-lg shadow-md p-4 text-center">
          <Image
                src="/images/lawn-category-1.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-full h-50 object-cover mb-2"
              />
            <h3 className="text-lg font-semibold text-charcoal">Lawn</h3>
            <Link href="/lawn" className="text-[#FFB347] hover:text-softCoral">
              Shop Now
            </Link>
          </div>
          <div className="bg-lightPink rounded-lg shadow-md p-4 text-center">
          <Image
                src="/images/lawn-category-1.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-full h-50 object-cover mb-2"
              />
            <h3 className="text-lg font-semibold text-charcoal">Lawn</h3>
            <Link href="/lawn" className="text-[#FFB347] hover:text-softCoral">
              Shop Now
            </Link>
          </div>
          <div className="bg-lightPink rounded-lg shadow-md p-4 text-center">
          <Image
                src="/images/lawn-category-1.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-full h-50 object-cover mb-2"
              />
            <h3 className="text-lg font-semibold text-charcoal">Lawn</h3>
            <Link href="/lawn" className="text-[#FFB347] hover:text-softCoral">
              Shop Now
            </Link>
          </div>
          <div className="bg-lightPink rounded-lg shadow-md p-4 text-center">
          <Image
                src="/images/lawn-category-1.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-full h-50 object-cover mb-2"
              />
            <h3 className="text-lg font-semibold text-charcoal">Lawn</h3>
            <Link href="/lawn" className="text-[#FFB347] hover:text-softCoral">
              Shop Now
            </Link>
          </div>
          <div className="bg-lightPink rounded-lg shadow-md p-4 text-center">
          <Image
                src="/images/lawn-category-1.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-full h-50 object-cover mb-2"
              />
            <h3 className="text-lg font-semibold text-charcoal">Lawn</h3>
            <Link href="/lawn" className="text-[#FFB347] hover:text-softCoral">
              Shop Now
            </Link>
          </div>
          <div className="bg-lightPink rounded-lg shadow-md p-4 text-center">
          <Image
                src="/images/lawn-category-1.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-full h-50 object-cover mb-2"
              />
            <h3 className="text-lg font-semibold text-charcoal">Lawn</h3>
            <Link href="/lawn" className="text-[#FFB347] hover:text-softCoral">
              Shop Now
            </Link>
          </div>
          {/* Repeat for other categories */}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
