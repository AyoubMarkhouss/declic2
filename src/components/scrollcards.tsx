import React, { useRef, useEffect, useState } from "react";

const HorizontalSwiper = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [thumbPosition, setThumbPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollLeft, setStartScrollLeft] = useState(0);

  useEffect(() => {
    const updateThumbWidth = () => {
      if (swiperRef.current) {
        const { clientWidth, scrollWidth } = swiperRef.current;
        setThumbWidth((clientWidth / scrollWidth) * 100); // Thumb width as a percentage
      }
    };

    updateThumbWidth();
    window.addEventListener("resize", updateThumbWidth);
    return () => window.removeEventListener("resize", updateThumbWidth);
  }, []);

  const handleScroll = () => {
    if (swiperRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = swiperRef.current;
      const position = (scrollLeft / (scrollWidth - clientWidth)) * 100;
      setThumbPosition(position);
    }
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (swiperRef.current) {
      setIsDragging(true);
      setStartX(e.clientX);
      setStartScrollLeft(swiperRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !swiperRef.current) return;

    const { scrollWidth, clientWidth } = swiperRef.current;
    const deltaX = e.clientX - startX;
    const scrollDelta = (deltaX / clientWidth) * scrollWidth;

    swiperRef.current.scrollLeft = startScrollLeft + scrollDelta;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="my-10 ">
      <div className="w-full overflow-hidden">
        {/* Swiper Container */}
        <div className="relative ">
          <div
            ref={swiperRef}
            onScroll={handleScroll}
            className="flex px-20 space-x-10 overflow-x-scroll scrollbar-hide" // Hides default scrollbar
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="min-w-[400px] h-full   flex-shrink-0 shadow-md"
              >
                <div className="h-[450px] bg-gray-200 flex items-center justify-center text-lg font-bold text-gray-700">
                  Card {index + 1}
                </div>
                <h1 className="fontmed text-2xl pt-2">Title</h1>
                <p className="fontmed pt-2">Description</p>
              </div>
            ))}
          </div>
        </div>
        {/* Custom Scrollbar */}
        <div
          className="mt-5 mx-20  h-3 bg-gray-300 relative cursor-pointer"
          onMouseDown={handleMouseDown}
        >
          <div
            className="h-3 bg-black absolute"
            style={{
              width: `${thumbWidth}%`,
              transform: `translateX(${thumbPosition}%)`,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalSwiper;
