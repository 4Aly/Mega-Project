import React from "react";
import AdvancedCard from "./../Reusable Components/AdvancedCard";

type Props = {
  attractions: any[];
  showCloseButton?: boolean;
};

const RecommendedCards = ({ attractions, showCloseButton = false }: Props) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-5 justify-center ">
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
            id={attraction.id}
            showCloseButton={showCloseButton}
            key={idx}
          />
        ))}
      </div>
    </div>
  );
};

export default RecommendedCards;
