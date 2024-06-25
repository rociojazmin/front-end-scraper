import React from "react";
import CardImage, { CardProps } from "./cardImage";

interface GridProps {
  cards: CardProps[];
}

const GridImage: React.FC<GridProps> = ({ cards }) => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {cards.map((cardProps, index) => (
        <CardImage key={index} {...cardProps} />
      ))}
    </div>
  );
};

export default GridImage;
