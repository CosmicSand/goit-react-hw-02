import Button from "../Button/Button";

function Options({ onUpdate, total }) {
  return (
    <>
      <Button onUpdate={onUpdate} total={total}>
        Good
      </Button>
      <Button onUpdate={onUpdate} total={total}>
        Neutral
      </Button>
      <Button onUpdate={onUpdate} total={total}>
        Bad
      </Button>
      {total !== 0 && (
        <Button onUpdate={onUpdate} total={total}>
          Reset
        </Button>
      )}
    </>
  );
}

export default Options;
