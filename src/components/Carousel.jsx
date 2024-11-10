import React from 'react';
import { useNavigate } from 'react-router-dom';
import santacruz from '../assets/santacruz.jpg';
import juhu from '../assets/juhu.jpg';
import malad from '../assets/malad.jpg';
import bandra from '../assets/bandra.jpg';

const slides = [
  {
    title: "Walk 4",
    subtitle: "Malad to Juhu",
    description: "Distance: 8.3 kilometers",
    image: juhu,
    path: "/walk4"
  },
  {
    title: "Walk 3",
    subtitle: "Jogeshwari to Malad",
    description: "Distance: 5.5 kilometers",
    image: malad,
    path: "/walk3"
  },
  {
    title: "Walk 2",
    subtitle: "Santacruz to Jogeshwari",
    description: "Distance: 6.8 kilometers",
    image: santacruz,
    path: "/walk2"
  },
  {
    title: "Walk 1",
    subtitle: "Bandra to Santacruz",
    description: "Distance: 4.2 kilometers",
    image: bandra,
    path: "/walk1"
  }
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

      setTilt({ x: x * 20, y: y * -20 });
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
      ref={ref}
      className={`transform-gpu transition-all duration-500 ${
        active ? 'z-10 pointer-events-auto' : 'pointer-events-none'
      }`}
      style={{
        gridArea: '1 / -1',
        '--offset': offset,
        '--dir': offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="fixed inset-0 -left-[10%] -right-[10%] bg-cover bg-center -z-10 opacity-0 transition-all duration-300 pointer-events-none"
        style={{
          backgroundImage: `url(${slide.image})`,
          opacity: active ? 0.2 : 0,
          transform: `translateX(calc(10% * var(--dir)))`,
        }}
      />
      <div
        onClick={() => active && navigate(slide.path)}
        className={`w-[30vw] h-[40vw] bg-cover bg-center grid content-center cursor-pointer ${
          active ? 'opacity-100 hover:translate-x-2 hover:scale-105 transition-transform' : 'opacity-70'
        }`}
        style={{
          backgroundImage: `url(${slide.image})`,
          transform: active
            ? `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`
            : 'perspective(1000px) translateX(calc(100% * var(--offset))) rotateY(calc(-45deg * var(--dir)))',
        }}
      >
        <div
          className={`transform-gpu translate-z-8 transition-all duration-300 text-shadow ${
            active ? 'opacity-100' : 'opacity-0'
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
  );
};

const ImageCarousel = () => {
  const [state, dispatch] = React.useReducer(
    (state, action) => {
      if (action.type === "NEXT") {
        return {
          ...state,
          slideIndex: (state.slideIndex + 1) % slides.length
        };
      }
      if (action.type === "PREV") {
        return {
          ...state,
          slideIndex:
            state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
        };
      }
      return state;
    },
    { slideIndex: 0 }
  );

  return (
    <div className="h-screen w-screen bg-[#151515] text-white overflow-hidden flex justify-center items-center">
      <div className="grid relative">
        <button
          onClick={() => dispatch({ type: "NEXT" })}
          className="appearance-none bg-transparent border-none text-white absolute text-5xl w-20 h-20 top-[30%] -left-[50%] transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-125 hover:text-yellow-400 focus:outline-none z-5"
        >
          ‹
        </button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}

        <button
          onClick={() => dispatch({ type: "PREV" })}
          className="appearance-none bg-transparent border-none text-white absolute text-5xl w-20 h-20 top-[30%] -right-[50%] transition-all duration-300 opacity-70 hover:opacity-100 hover:scale-125 hover:text-yellow-400 focus:outline-none z-5"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;