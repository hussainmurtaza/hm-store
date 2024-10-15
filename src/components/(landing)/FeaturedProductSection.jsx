import Image from "next/image";
import React from "react";

export const FeaturedProductSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">
          Featured Fabrics
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Sample Product Card */}
          <div className="bg-[#EDE3E9] rounded-lg overflow-hidden shadow-md">
            <div className="flex items-center justify-center">
              <Image
                src="/images/feature-pro-3.png"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="w-100 object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-charcoal">
                Fabric Name
              </h3>
              <p className="text-[#9F84BD] text-xl font-bold">$Price</p>
              <button className="mt-2 bg-[#9F84BD] text-white px-4 py-2 rounded hover:bg-softCoral">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-[#EDE3E9] rounded-lg overflow-hidden shadow-md">
            <div className="flex items-center justify-center">
              <Image
                src="/images/feature-pro-2.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-charcoal">
                Fabric Name
              </h3>
              <p className="text-[#9F84BD] text-xl font-bold">$Price</p>
              <button className="mt-2 bg-[#9F84BD] text-white px-4 py-2 rounded hover:bg-softCoral">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-[#EDE3E9] rounded-lg overflow-hidden shadow-md">
            <div className="flex items-center justify-center">
              <Image
                src="/images/feature-pro-3.png"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-charcoal">
                Fabric Name
              </h3>
              <p className="text-[#9F84BD] text-xl font-bold">$Price</p>
              <button className="mt-2 bg-[#9F84BD] text-white px-4 py-2 rounded hover:bg-softCoral">
                View Details
              </button>
            </div>
          </div>
          <div className="bg-[#EDE3E9] rounded-lg overflow-hidden shadow-md">
            <div className="flex items-center justify-center">
              <Image
                src="/images/feature-pro-2.webp"
                alt="Fabric Name"
                width={300} // Adjust based on your design
                height={100} // Adjust based on your design
                className="object-cover"
              />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold text-charcoal">
                Fabric Name
              </h3>
              <p className="text-[#9F84BD] text-xl font-bold">$Price</p>
              <button className="mt-2 bg-[#9F84BD] text-white px-4 py-2 rounded hover:bg-softCoral">
                View Details
              </button>
            </div>
          </div>
          {/* Repeat for more products */}
        </div>
      </div>
    </section>
  );
};
