import Keyboard from "./Keyboard";
import CountHangman from "./CountHangman";
import Word from "./Word";
import "../App.css";

export default function Hangman() {
  return (
    <div className="mainHang">
      <CountHangman />
      <div className="divWord">
        <Word />
      </div>
      <div className="divKeyboard">
        <Keyboard />
      </div>
    </div>
  );
}
