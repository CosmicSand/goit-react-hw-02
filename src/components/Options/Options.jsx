function Options({ value: { good, neutral, bad }, onUpdate }) {
  const total = good + neutral + bad;
  return (
    <>
      <button name="good" onClick={onUpdate}>
        Good
      </button>
      <button name="neutral" onClick={onUpdate}>
        Neutral
      </button>
      <button name="bad" onClick={onUpdate}>
        Bad
      </button>
      {total !== 0 && (
        <button name="reset" onClick={onUpdate}>
          Reset
        </button>
      )}
    </>
  );
}

export default Options;
