import CardCarousel from "../Reusable Components/CardCarousel";

type Props = {
  attractions: Array<object>;
};

const HiddenGems = ({ attractions = [] }: Props) => {
  return (
    <div className="items-center justify-center px-16">
      <h1 className="text-xl w-full text-left font-bold">
        Hidden Gems & Local Favorites
      </h1>

      <CardCarousel items={attractions} className="mt-6 mb-10" />
    </div>
  );
};
export default HiddenGems;
