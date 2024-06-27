// cardImage.tsx
import React, { useEffect, useState } from "react";
import { getImagesUrlByProfile } from "../app/utils";
import Image from "next/image";

interface CardProps {
  profileId: number;
}

const CardImage: React.FC<CardProps> = ({ profileId }) => {
  const [urls, setUrls] = useState<string[]>([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const urls = await getImagesUrlByProfile(profileId);
        setUrls(urls);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchImages();
  }, [profileId]);

  return (
    <>
      {urls.map((url, index) => (
        <div
          key={index}
          className="relative overflow-hidden transition-transform duration-300 ease-in-out rounded-lg shadow-lg group hover:shadow-xl hover:-translate-y-2"
        >
          <Image
            src={url}
            alt={`Image ${index + 1}`}
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </>
  );
};

export default CardImage;
