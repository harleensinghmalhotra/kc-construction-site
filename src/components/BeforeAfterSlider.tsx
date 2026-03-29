import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  title,
  description,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percent = ((clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.max(0, Math.min(100, percent)));
  };

  useEffect(() => {
    const stop = () => (isDragging.current = false);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
    return () => {
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };
  }, []);

  return (
    <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
      <h3 className="text-xl sm:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>

      <div
        ref={containerRef}
        className="relative rounded-xl overflow-hidden select-none touch-none"
        onMouseMove={(e) => isDragging.current && handleMove(e.clientX)}
        onMouseDown={(e) => {
          isDragging.current = true;
          handleMove(e.clientX);
        }}
        onTouchMove={(e) =>
          isDragging.current && handleMove(e.touches[0].clientX)
        }
        onTouchStart={(e) => {
          isDragging.current = true;
          handleMove(e.touches[0].clientX);
        }}
      >
        {/* AFTER (Base layer - determines height) */}
        <img
          src={afterImage}
          className="w-full h-auto block"
          draggable={false}
        />

        {/* BEFORE (Overlay layer) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <img
            src={beforeImage}
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />
        </div>

        {/* DIVIDER */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-xl"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-xl flex gap-1">
            <ChevronLeft className="text-[#681a1e]" />
            <ChevronRight className="text-[#681a1e]" />
          </div>
        </div>

        {/* LABELS */}
        <div className="absolute top-3 left-3 bg-black/70 text-white px-3 py-1.5 rounded-lg text-xs font-bold">
          BEFORE
        </div>
        <div className="absolute top-3 right-3 bg-[#681a1e] text-white px-3 py-1.5 rounded-lg text-xs font-bold">
          AFTER
        </div>
      </div>
    </div>
  );
}