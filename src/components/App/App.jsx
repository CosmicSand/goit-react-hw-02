import { useState, useEffect } from "react";
import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";
import "./App.css";

function App() {
  const LOCAL_STORAGE_KEY = "review";
  const zeroReview = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [review, setReview] = useState(() => getReviews());

  const total = review.good + review.neutral + review.bad;

  function getReviews() {
    if (localStorage.getItem(LOCAL_STORAGE_KEY) === null) {
      return zeroReview;
    } else {
      return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    }
  }

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
      <Options onUpdate={handleReview} total={total}>
        Good
      </Options>
      <Options onUpdate={handleReview} total={total}>
        Neutral
      </Options>
      <Options onUpdate={handleReview} total={total}>
        Bad
      </Options>
      {total !== 0 && (
        <Options onUpdate={handleReview} total={total}>
          Reset
        </Options>
      )}
      {total === 0 ? (
        <Notification />
      ) : (
        <Feedback value={review} total={total} />
      )}
    </>
  );
}

export default App;
