import React from "react";
import { useNavigate } from "react-router-dom";
import santacruz from "../assets/image1.jpg";
import juhu from "../assets/image2.jpg";
import malad from "../assets/image3.jpeg";
import bandra from "../assets/image4.jpg";

const slides = [
  {
    title: "Walk 4",
    subtitle: "Malad to Juhu",
    description: "Distance: 8.3 kilometers",
    image: juhu,
    path: "/walk4",
  },
  {
    title: "Walk 3",
    subtitle: "Jogeshwari to Malad",
    description: "Distance: 5.5 kilometers",
    image: malad,
    path: "/walk3",
  },
  {
    title: "Walk 2",
    subtitle: "Santacruz to Jogeshwari",
    description: "Distance: 6.8 kilometers",
    image: santacruz,
    path: "/walk2",
  },
  {
    title: "Walk 1",
    subtitle: "Bandra to Santacruz",
    description: "Distance: 4.2 kilometers",
    image: bandra,
    path: "/walk1",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setTilt({ x: x * 20, y: y * -20 }); // Reduced tilt intensity for smoother effect
    };

    const handleMouseLeave = () => {
      setTilt({ x: 0, y: 0 });
    };

    el.addEventListener("mousemove", handleMouseMove);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [active]);

  return { ref, tilt };
}

const Slide = ({ slide, offset }) => {
  const active = offset === 0;
  const { ref, tilt } = useTilt(active);
  const navigate = useNavigate();

  return (
    <div
      style={{
        gridArea: "1 / -1",
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div ref={ref} className={`relative ${active ? "z-10" : ""}`}>
        <div
          className="fixed inset-0 bg-cover bg-center -z-10 opacity-0 transition-all duration-500 pointer-events-none"
          style={{
            backgroundImage: `url(${slide.image})`,
            opacity: active ? 0.15 : 0,
            transform: `translateX(calc(10% * var(--dir)))`,
          }}
        />
        <div
          onClick={() => active && navigate(slide.path)}
          className={`w-[30vw] h-[40vw] bg-cover bg-center grid content-center cursor-pointer rounded-lg overflow-hidden ${
            active
              ? "opacity-100 hover:translate-y-1 hover:translate-x-1 hover:shadow-2xl transition-transform duration-500 ease-out"
              : "opacity-60 pointer-events-none"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            transform: active
              ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.02)`
              : "perspective(1000px) translateX(calc(100% * var(--offset))) rotateY(calc(-45deg * var(--dir)))",
            transition: active
              ? "transform 0.3s ease-out"
              : "transform 0.8s ease-in-out",
          }}
        >
          <div
            className={`transform-gpu transition-all duration-500 text-shadow backdrop-blur-sm bg-black/30 p-4 ${
              active ? "opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-2xl font-normal tracking-widest uppercase m-0">
              {slide.title}
            </h2>
            <h3 className="text-2xl font-normal tracking-widest uppercase m-0 before:content-['—_']">
              {slide.subtitle}
            </h3>
            <p className="m-0 text-sm tracking-widest">{slide.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const ImageCarousel = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      if (action.type === "NEXT") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
        };
      }
      if (action.type === "PREV") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length,
        };
      }
      return state;
    },
    { slideIndex: 0 }
  );

  return (
    <div className="h-screen w-screen bg-[#000000] text-white overflow-hidden flex justify-center items-center">
      <div className="grid relative">
        <button
          onClick={() => dispatch({ type: "PREV" })}
          className="appearance-none bg-transparent border-none text-white absolute text-5xl w-20 h-20 top-[30%] -left-[50%] transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 hover:text-yellow-400 focus:outline-none z-5"
        >
          ‹
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}

        <button
          onClick={() => dispatch({ type: "NEXT" })}
          className="appearance-none bg-transparent border-none text-white absolute text-5xl w-20 h-20 top-[30%] -right-[50%] transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-110 hover:text-yellow-400 focus:outline-none z-5"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
