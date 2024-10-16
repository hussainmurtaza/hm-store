export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/images/hero-section-1.jpg)" }}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-whiteColor px-4">
        {/* Headline */}
        <h1 className="text-4xl lg:text-6xl font-bold mb-4">
          Discover the Finest Fabrics for Every Season
        </h1>

        {/* Subtext */}
        <p className="text-lg lg:text-2xl mb-8">
          From luxurious chiffons to cozy cottons, find the perfect fabric for
          every occasion.
        </p>

        {/* Search Bar */}
        <div className="w-full max-w-md">
          <form className="flex items-center bg-whiteColor rounded-full shadow-md overflow-hidden">
            <input
              type="text"
              placeholder="Search fabrics..."
              className="w-full px-4 py-2 text-charcoal focus:outline-none"
            />
            <button
              type="submit"
              className="bg-deepTeal hover:bg-softCoral text-whiteColor px-4 py-2 rounded-r-full focus:outline-none"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
