import { CiFilter } from "react-icons/ci";
import { useState } from "react";

const FilterRecommendations = () => {
  const [budget, setBudget] = useState(50000);
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);

  const moods = [
    "Adventurous",
    "Relaxing",
    "Cultural",
    "Romantic",
    "Family-Friendly",
    "Historical",
  ];

  const toggleMood = (mood: string) => {
    setSelectedMoods((prev) =>
      prev.includes(mood) ? prev.filter((m) => m !== mood) : [...prev, mood]
    );
  };

  return (
    <div className="flex align-middle justify-center w-full">
      <div className="border p-5 rounded-xl items-center w-full max-w-full">
        <div className="flex text-2xl gap-3 align-middle items-center mb-3">
          <CiFilter className="text-orange-500 font-extrabold text-3xl" />
          <h2>Filter Recommendations</h2>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-col gap-5">
          <div className="flex flex-col md:flex-row md:gap-5 lg:flex-col lg:gap-0">
            <div>
              <h2 className="text-xl font-bold mb-3">Mood</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                {moods.map((mood) => (
                  <button
                    key={mood}
                    onClick={() => toggleMood(mood)}
                    className={`btn rounded-full text-md w-full justify-start ${
                      selectedMoods.includes(mood)
                        ? "bg-orange-400 text-white hover:bg-orange-500"
                        : ""
                    }`}
                  >
                    {mood}
                  </button>
                ))}
              </div>
            </div>
            <div className="my-5">
              <h2 className="text-xl font-bold mb-3 ">Budget</h2>
              <input
                type="range"
                min={0}
                max={50000}
                value={budget}
                onChange={(e) =>
                  setBudget(Math.round(Number(e.target.value) / 100) * 100)
                }
                onClick={() => console.log(budget)}
                className="range range-xs [--range-shdw:orange]"
              />
              <p className="text-gray-500">
                Budget Level:{" "}
                <span className="font-bold">
                  {budget.toLocaleString("en-US")} EGP
                </span>
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:gap-5 lg:flex-col lg:gap-0">
            <div className="my-5">
              <h2 className="text-xl font-bold mb-3">Activity Type</h2>
              <div className="form-control flex-col gap-1">
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Historical Sites</span>
                </label>
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Museums</span>
                </label>
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Shopping</span>
                </label>
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Food Tours</span>
                </label>
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Outdoor Activities</span>
                </label>
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Nightlife</span>
                </label>
                <label className="flex gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    className="checkbox [--chkbg:orange]"
                  />
                  <span className="items-start">Art & Culture</span>
                </label>
              </div>
            </div>
            <div className="my-5">
              <h2 className="text-xl font-bold mb-3">Minimum Rating</h2>
              <div className="flex">
                <div className="flex w-full">
                  <select
                    className="select select-bordered w-full"
                    defaultValue={"1"}
                  >
                    <option value="5">5 Stars</option>
                    <option value="4">4 Stars</option>
                    <option value="3">3 Stars</option>
                    <option value="2">2 Stars</option>
                    <option value="1">1 Star</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 my-5">
          <div className="btn bg-orange-400 align-middle justify-center text-white text-xl">
            Apply Filters
          </div>
          <div className="btn bg-white align-middle justify-center text-black text-xl">
            Reset Filters
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterRecommendations;
