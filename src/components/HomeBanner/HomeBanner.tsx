const HomeBanner = () => {
  const imageUrl = new URL(
    "../../media/Sphinx testing image.jpg",
    import.meta.url
  ).href;

  return (
    <div className="w-full flex justify-center align-middle">
      {/* Banner Section */}
      <div className="w-10/12 rounded-2xl shadow-lg overflow-hidden  mx-auto mt-8">
        <div
          className=" w-full block bg-center bg-cover h-80 md:h-96"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          role="img"
          aria-label="The Great Sphinx of Giza at sunset"
        />
        {/* Overlay content
        <div className="flex flex-col justify-center pl-10 text-white">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            Discover Cairo & Giza with AI
          </h1>
          <p className="text-lg md:text-xl mb-4 max-w-xl">
            Your personalized guide to ancient wonders and vibrant culture
            awaits.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-6 py-2 rounded hover:bg-yellow-500 shadow">
            Start Your Travel Quiz
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default HomeBanner;
