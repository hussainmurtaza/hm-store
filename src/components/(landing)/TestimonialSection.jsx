import React from "react";

const TestimonialSection = () => {
  return (
    <section className="py-16 bg-lightPink">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-charcoal mb-6 text-center">
          What Our Customers Say
        </h2>
        <div className="flex flex-col items-center">
          <blockquote className="max-w-xl text-center text-lg italic text-charcoal mb-4">
            "The fabrics I purchased from H.M Store are of exceptional quality!
            I'll definitely be back for more."
          </blockquote>
          <cite className="text-charcoal font-semibold">- Customer Name</cite>
        </div>
        <div className="flex flex-col items-center">
          <blockquote className="max-w-xl text-center text-lg italic text-charcoal mb-4">
            "The fabrics I purchased from H.M Store are of exceptional quality!
            I'll definitely be back for more."
          </blockquote>
          <cite className="text-charcoal font-semibold">- Customer Name</cite>
        </div>
        {/* Repeat for more testimonials */}
      </div>
    </section>
  );
};

export default TestimonialSection;
