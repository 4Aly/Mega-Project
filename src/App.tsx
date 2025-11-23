import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";
import Recommendations from "./pages/Recommendations";
import Quiz from "./pages/Quiz";
import QuizResults from "./pages/QuizResults";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const attractions = [
    {
      photo: "src/media/Sphinx testing image.jpg",
      title: "Pyramids of Giza",
      description:
        "The iconic ancient pyramids located on the Giza Plateau, built over 4,500 years ago.",
      rating: 4.9,
      className: "attraction-pyramids",
      level: "Moderate",
      distance: "20 km",
      isFavorite: true,
      category: "Historical",
    },
    {
      photo:
        "https://www.cleopatraegypttours.com/wp-content/uploads/2018/08/Karnak-Temple-Facts.jpg",
      title: "Karnak Temple",
      description:
        "A vast complex of chapels and pylons dedicated mainly to the god Amun-Ra in Luxor.",
      rating: 4.8,
      className: "attraction-karnak",
      level: "Low",
      distance: "2 km",
      isFavorite: false,
      category: "Historical",
    },
    {
      photo:
        "https://holiday-golightly.com/wp-content/uploads/2017/10/20070602-dsc_0089-lightroom-1024x685.jpg",
      title: "Abu Simbel",
      description:
        "Two temples carved into rock by Ramses II, famous for their massive statues and relocation.",
      rating: 4.7,
      className: "attraction-abu-simbel",
      level: "High",
      distance: "280 km",
      isFavorite: false,
      category: "Historical",
    },
    {
      photo:
        "https://herasianadventures.com/wp-content/uploads/2025/06/best-things-to-do-in-Siwa-Oasis-egypt-4.jpg",
      title: "Siwa Oasis",
      description:
        "A remote, serene oasis known for natural springs, salt lakes, and the ancient Shali Fortress.",
      rating: 4.6,
      className: "attraction-siwa",
      level: "Low",
      distance: "560 km",
      isFavorite: true,
      category: "Natural",
    },
    {
      photo:
        "https://static.dezeen.com/uploads/2025/10/grand-egyptian-museum-heneghan-peng-architects-cultural-egypt-giza-architecture_dezeen_2364_hero.jpg",
      title: "Grand Egyptian Museum",
      description:
        "A museum in Cairo housing thousands of ancient artifacts, including Tutankhamun’s treasures.",
      rating: 4.5,
      className: "attraction-gem",
      level: "Free",
      distance: "5 km",
      isFavorite: false,
      category: "Museum",
    },
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home attractions={attractions} />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/settings" element={<Settings />} />
        <Route
          path="/recommendations"
          element={<Recommendations attractions={attractions} />}
        />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/quiz/results" element={<QuizResults />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
