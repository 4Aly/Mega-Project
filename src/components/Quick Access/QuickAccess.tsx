import { CiLocationOn } from "react-icons/ci";
import { GoLightBulb } from "react-icons/go";
import { FaList } from "react-icons/fa6";
import { FaCalendarAlt } from "react-icons/fa";
import { LuPiggyBank } from "react-icons/lu";
import { FaRegHeart } from "react-icons/fa";

const options = [
  {
    title: "Smart Preference Quiz",
    desc: "Tailor your recommendations with a quick quiz.",
    icon: <GoLightBulb />,
  },
  {
    title: "Recommendation Feed",
    desc: "Explore attractions curated just for you.",
    icon: <FaList />,
  },
  {
    title: "Smart Mini Trip Planner",
    desc: "Build your perfect itinerary day by day.",
    icon: <FaCalendarAlt />,
  },
  {
    title: "Budget Tracker",
    desc: "Manage your expenses and stay on track.",
    icon: <LuPiggyBank />,
  },
  {
    title: "Favorites & Wishlist",
    desc: "Save the places you love and want to visit.",
    icon: <FaRegHeart />,
  },
  {
    title: "Explore Destinations",
    desc: "Browse all the amazing sights of Cairo & Giza.",
    icon: <CiLocationOn />,
  },
];

const QuickAccess = () => {
  return (
    <div
      className="flex align-middle justify-center flex-col p-16 w-full

"
    >
      <h2 className="text-xl font-bold mb-4 ">Quick Access</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {options.map((item, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow flex flex-col items-left p-5  max-w-1/3"
          >
            <div className="flex flex-col gap-3">
              <div className="text-2xl text-orange-400">{item.icon}</div>
              <div>
                <div className="font-bold">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuickAccess;
