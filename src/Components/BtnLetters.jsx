import "../App.css";

export default function BtnLetters(props) {
  return (
    <button
      className="btnLetters"
      onClick={(e) => {
        e.target.disabled = true;
      }}
    >
      {props.letter}
    </button>
  );
}
