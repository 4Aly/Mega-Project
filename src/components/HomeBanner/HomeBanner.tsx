import { Link } from "react-router";

const HomeBanner = () => {
  const imageUrl = new URL("../../media/sphinxinverted.jpg", import.meta.url)
    .href;

  return (
    <div className="w-full flex justify-center align-middle">
      {/* Banner Section */}
      <div className="w-11/12 rounded-xl shadow-lg overflow-hidden mt-8 ">
        <div
          className="bg-[center_10%] bg-cover h-80 md:h-96 flex flex-col lg:items-start items-center justify-center text-center lg:text-left px-6 text-white gap-2"
          style={{ backgroundImage: `url('${imageUrl}')` }}
          role="img"
          aria-label="The Great Sphinx of Giza at sunset"
        >
          <h1 className="text-4xl font-bold">Discover Cairo & Giza with AI</h1>
          <h3>
            Your personalized guide to ancient wonders and vibrant culture
            awaits.
          </h3>
          <Link
            to="/quiz"
            className="btn bg-orange-400 border-none text-white "
          >
            Start Your Travel Quiz
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
