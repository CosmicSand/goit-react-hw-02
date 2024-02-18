import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import "./App.css";

function App() {
  const zeroReview = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [review, setReview] = useState(() => {
    if (localStorage.getItem("review") === null) {
      return zeroReview;
    } else {
      return JSON.parse(localStorage.getItem("review"));
    }
  });

  function handleReview(e) {
    if (e.target.name === "reset") {
      setReview(zeroReview);
    } else {
      setReview({
        ...review,
        [e.target.name]: review[e.target.name] + 1,
      });
    }
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
