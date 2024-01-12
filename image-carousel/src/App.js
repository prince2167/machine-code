import "./App.css";
import { useEffect, useState } from "react";
const images = [
  {
    id: 1,
    src: "https://cdn.vectorstock.com/i/1000x1000/65/54/cute-anime-girl-in-black-hoodie-and-green-eyes-vector-39706554.webp",
    title: "Item 1",
  },
  {
    id: 2,
    src: "https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg",
    title: "Item 1",
  },
  {
    id: 3,
    src: "https://cdn.pixabay.com/photo/2023/07/24/08/16/ai-generated-8146519_640.jpg",
    title: "Item 1",
  },
  {
    id: 4,
    src: "https://cdn.pixabay.com/photo/2023/08/20/08/16/ai-generated-8201916_640.png",
    title: "Item 1",
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevHandler = () => {
    if (activeIndex === 0) {
      setActiveIndex(images.length - 1);
    } else {
      setActiveIndex((prev) => prev - 1);
    }
  };

  const nextHandler = () => {
    if (activeIndex === images.length - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      nextHandler();
    }, 1500);

    return () => {
      clearInterval(timer);
    };
  }, [activeIndex]);
  return (
    <div className="App">
      <button onClick={prevHandler}>Prev</button>
      <img
        src={images[activeIndex].src}
        alt={images[activeIndex].title}
        width={300}
        height={400}
      />
      <button onClick={nextHandler}>Next</button>
    </div>
  );
}

export default App;
