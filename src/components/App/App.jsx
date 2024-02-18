import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import "./App.css";

function App() {
  const [review, setReview] = useState(() => {
    if (localStorage.getItem("review") == !null) {
      return JSON.parse(localStorage.getItem("review"));
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  function handleReview(e) {
    function resetReview() {
      setReview({
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
    function updateReview() {
      setReview({
        ...review,
        [e.target.name]: review[e.target.name] + 1,
      });
    }

    e.target.name !== "reset" ? updateReview() : resetReview();
  }

  useEffect(() => {
    localStorage.setItem("review", JSON.stringify(review));
  }, [review]);

  return (
    <>
      <Description />
      <Options value={review} onUpdate={handleReview} />
      <Feedback value={review} />
    </>
  );
}

export default App;
