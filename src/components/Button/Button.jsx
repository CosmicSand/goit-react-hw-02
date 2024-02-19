function Button({ onUpdate, children }) {
  const btnNameAtribute = children.toLowerCase();
  return (
    <>
      <button name={btnNameAtribute} onClick={onUpdate}>
        {children}
      </button>
    </>
  );
}

export default Button;
