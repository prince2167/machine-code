import "./App.css";
import Rating from "./components/Rating";
import Star from "./components/Star";
import Loader from "./components/Loader";
import { useRef, useState } from "react";

function App() {
  const [currentRating, setCurrentRating] = useState(2);
  const [isLoading, setIsLoading] = useState(false);

  const previousRating = useRef();

  const starClickHandler = (index) => {
    previousRating.current = currentRating;
    setIsLoading(true);
    setTimeout(() => {
      const randomNumber = Math.random() * 10;
      if (randomNumber < 5) {
        setCurrentRating(index);
        setIsLoading(false);
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="App">
      <Rating
        totalItems={4}
        rating={currentRating}
        onItemClick={starClickHandler}
        ratingItem={(isFilled) => <Star isFilled={isFilled} />}
        loader={() => <Loader />}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
