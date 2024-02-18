function Options({ value, onUpdate }) {
  const totalValue = value.good + value.neutral + value.bad;
  return (
    <>
      <button name="good" onClick={onUpdate}>
        Good
      </button>
      <button name="neutral" onClick={onUpdate}>
        Neutral
      </button>
      <button name="bad" onClick={onUpdate}>
        Bab
      </button>
      {totalValue && (
        <button name="reset" onClick={onUpdate}>
          Reset
        </button>
      )}
    </>
  );
}

export default Options;
