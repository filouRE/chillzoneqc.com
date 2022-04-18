import { memo, useState, useEffect } from "react";

export default memo(function Carousel({ className, slides = [] }) {
  // Since you don't have a context
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    // Update mobile state every resize
    window.addEventListener("resize", () => {
      setMobile(window.innerWidth <= 600);
    });
    setMobile(window.innerWidth <= 600);
  }, []);

  const length = slides.length;
  const [index, setIndex] = useState(Math.abs((length-1) / 2));

  const onBack = () => {
    setIndex(index === 0 ? length - 1 : index - 1);
  };

  const onNext = () => {
    setIndex(index === length - 1 ? 0 : index + 1);
  };

  return (
    <div className={`Carousel ${mobile ? "mobile" : ""}`}>
      {mobile && (
        <div className="absolute z-40">
          <a onClick={onBack}>BACK</a>
          <a onClick={onNext}>NEXT</a>
        </div>
      )}

      <div className="container">
        <div
          className={`slider ${className}`}
          style={{
            transform: `translateX(-${mobile ? index * 393.19 + 40 : 0}px`,
          }}
        >
          {slides.map((slide) => slide)}
        </div>
      </div>
    </div>
  );
});
