import BtnLetters from "./BtnLetters";

export default function Keyboard() {
  const letters = "AZERTYUIOPQSDFGHJKLMWXCVBN";
  const arrayLetters = letters.split("");
  return (
    <div>
      {arrayLetters.map((letter, index) => {
        return <BtnLetters letter={letter} key={index} />;
      })}
    </div>
  );
}
