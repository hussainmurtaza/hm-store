import React from "react";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-whiteColor text-charcoal text-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Stay Updated!</h2>
        <p className="text-lg mb-6">
          Sign up for our newsletter to receive the latest news and exclusive
          offers.
        </p>
        <form className="flex justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-full focus:outline-none border"
          />
          <button className="bg-yellow hover:bg-yellow text-whiteColor px-4 py-2 rounded-r-full">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default CallToActionSection;
