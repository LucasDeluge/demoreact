import { useState } from "react";
import BtnLetters from "./BtnLetters";
import "../App.css";
import img from "./Images/encrier.png";

export default function CountHangman(props) {
  // const [count, setCount] = useState(0);
  // <BtnLetters setCount={(c) => setCount(c)} count={count} />;
  // if (count === 1) {
  //   document.querySelector("#health5").style.display = "none";
  // } else if (count <= 2) {
  //   document.querySelector("#health4").style.display = "none";
  // } else if (count <= 3) {
  //   document.querySelector("#health3").style.display = "none";
  // } else if (count <= 4) {
  //   document.querySelector("#health2").style.display = "none";
  // } else if (count <= 5) {
  //   document.querySelector("#health1").style.display = "none";
  // }
  return (
    <main>
      <img src={img} alt="encrier" id="health1" className="life"></img>
      <img src={img} alt="encrier" id="health2" className="life"></img>
      <img src={img} alt="encrier" id="health3" className="life"></img>
      <img src={img} alt="encrier" id="health4" className="life"></img>
      <img src={img} alt="encrier" id="health5" className="life"></img>
      {props.life}
    </main>
  );
}
