import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import "./App.css";

function App() {
  const [review, setReview] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
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
        [e.target.name]: e.target.name,
      });
    }
    e.target.name !== "reset" ? updateReview : resetReview;
  }

  useEffect(() => {});

  return (
    <>
      <Description />
      <Options value={review} onUpdate={handleReview} />
      <Feedback value={review} />
    </>
  );
}

export default App;
