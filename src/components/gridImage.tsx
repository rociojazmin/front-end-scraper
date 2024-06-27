// gridImage.tsx
import React from "react";
import CardImage from "./cardImage";

interface GridProps {
  profileId: number;
}

const GridImage: React.FC<GridProps> = ({ profileId }) => {
  return (
    <section className="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 lg:p-6">
      <CardImage profileId={profileId} />
    </section>
  );
};

export default GridImage;
