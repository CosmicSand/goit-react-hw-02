function Options({ onUpdate, children }) {
  const btnNameAtribute = children.toLowerCase();
  return (
    <>
      <button name={btnNameAtribute} onClick={onUpdate}>
        {children}
      </button>
    </>
  );
}

export default Options;
