import React from "react";
import AdvancedCard from "./../Reusable Components/AdvancedCard";

type Props = {
  attractions: any[];
};

const RecommendedCards = ({ attractions }: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-5 justify-center">
        {attractions?.map((attraction, idx) => (
          <AdvancedCard
            photo={attraction.photo}
            title={attraction.title}
            description={attraction.description}
            rating={attraction.rating}
            className=""
            level={attraction.level}
            distance={attraction.distance}
            isFavorite={attraction.isFavorite}
            category={attraction.category}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedCards;
