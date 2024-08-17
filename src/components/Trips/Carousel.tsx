"use client";
import Image from "next/image";
import { useState } from "react";

interface CarouselProps {
  images: { src: string }[];
  altText?: string;
  className?: string;
  width?: number;
  height?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  images = [],
  altText = "Carousel Image",
  className = "w-100 border-20",
  width = 800,
  height = 450,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {images.length > 0 ? (
          images.map((image, index) => (
            <div key={index} className={`carousel-item ${index === activeIndex ? "active" : ""}`}>
              <Image src={image.src} alt={altText} className={className} width={width} height={height} />
            </div>
          ))
        ) : (
          <div className="carousel-item active">
            <Image src="/default-image.jpg" alt="Default Image" className={className} width={width} height={height} />
          </div>
        )}
      </div>
      {images.length > 1 && (
        <>
          <button className="carousel-control-prev" type="button" onClick={handlePrevClick}>
            <i className="bi bi-chevron-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" onClick={handleNextClick}>
            <i className="bi bi-chevron-right"></i>
            <span className="visually-hidden">Next</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Carousel;