import React from "react";
import AdvancedCard from "./../Reusable Components/AdvancedCard";

type Props = {
  attractions: any[];
};

const RecommendedCards = ({ attractions }: Props) => {
  return (
    <div className="items-center w-full overflow-x-hidden">
      <div className="grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 place-items-center mx-auto w-full">
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
