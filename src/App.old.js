import { useState } from 'react';
import HangmanStep from './components/Hangman/HangmanStep';
import VirtualKeyboard from './components/Hangman/VirtualKeyboard';
import RestartBtn from './components/RestartBtn';
import 'bulma/css/bulma.min.css';
import './assets/css/scss/App.css';

function App() {

  const words = ['tonneaux', 'gomme', 'presidentielle', 'vietnam', 'javascript', 'jeux', 'aragorn'];
  const randomIndex = Math.floor(Math.random() * (words.length - 1));
  const wordToFind = words[randomIndex];
  const endgame = 7;
  
  const createMaskedWord = () => {
    let newMaskedWord = '';
    for (let i = 0; i < wordToFind.length; i++) {
      newMaskedWord += '*';
    }
    return newMaskedWord;
  };

  const [maskedWord, setMaskedWord] = useState(createMaskedWord());
  const [fail, setFail] = useState(0);

  const updateMaskedWord = (wordToShow, letter) => {
    let newMaskedWord = '';
    for (let i = 0; i < wordToFind.length; i++) {
      if (letter === wordToFind[i]) {
        newMaskedWord += letter;
      } else {
        newMaskedWord += wordToShow[i];
      }
    }
    setMaskedWord(newMaskedWord);
  };

  const createEndMessage = (isWinner) => {
    const newP = document.createElement("p");
    newP.classList.add('endmessagev');
    newP.innerHTML = 'Vous avez gagné <img src="https://media2.giphy.com/media/lnyPptAfGwHeTdoQDk/giphy.gif?cid=ecf05e47i6s88fufl369lmxlxixeqtawrobjyz2e2rouhfpe&rid=giphy.gif&ct=g"/>'
    if (!isWinner) {
      newP.classList.add('endmessaged');
      newP.innerHTML = 'Vous avez perdu <img src="https://media4.giphy.com/media/QmGNyXP5MRFgeFERPd/giphy.gif?cid=ecf05e47noe95fuwwg8v1ifpx1eve59xlwoapg1zm4k5uutr&rid=giphy.gif&ct=g"/>';
    }
    console.log(newP);
    document.querySelector("main").appendChild(newP);
    document.querySelector("#btnLetters").parentNode.removeChild(document.querySelector("#btnLetters"));

  }

  const showRestartButton = (result) => {
    const restart = document.createElement('button');
    restart.innerHTML = "Recommencer";
    restart.onclick = () => {
      setFail(0);
    }
    document.querySelector(".restart").appendChild(restart);
    createEndMessage(result);
  };

  const winTurn = (letter) => {
    console.log(maskedWord);
    console.log(wordToFind);
    updateMaskedWord(maskedWord, letter);
    if (maskedWord === wordToFind) {
      const victoire = new Audio('./mixkit-animated-small-group-applause-523.wav');
      victoire.play();
      showRestartButton(true);
    }
  };

  const looseTurn = () => {
    const nFail = fail + 1;
    console.log(nFail);
    setFail(fail + 1);
    document.querySelector("#pAttemptLeft").innerHTML = endgame - fail;

    const hangmanStep = document.querySelector("#hangmanStep");

    switch (fail) {
      case 1:
        hangmanStep.style.backgroundPosition = "32% 20%";
        break;
      case 2:
        hangmanStep.style.backgroundPosition = "60% 20%";
        break;
      case 3:
        hangmanStep.style.backgroundPosition = "88% 20%";
        break;
      case 4:
        hangmanStep.style.backgroundPosition = "5% 85%";
        break;
      case 5:
        hangmanStep.style.backgroundPosition = "31% 85%";
        break;
      case 6:
        hangmanStep.style.backgroundPosition = "59% 85%";
        break;
      case 7:
        hangmanStep.style.backgroundPosition = "89.5% 83%";
        break;
      default:
        hangmanStep.style.backgroundPosition = "5% 20%";
    }

    console.log('fail : '+fail);
    console.log('endgame : '+endgame);

    if (fail === endgame) {
      const defaite = new Audio('./assets/sound/mixkit-player-losing-or-failing-2042.wav');
      defaite.play();
      document.querySelector("#keyboardSection").visible=false;
      document.querySelector("#RestartBtn").props.hasWin=false;
      document.querySelector("#RestartBtn").visible=true;
    }

  };

  const checkLetter = (letter) => {
    document.querySelector('#btn-' + letter).disabled = true;
    if (wordToFind.indexOf(letter) !== -1) {
      winTurn(letter);
    } else {
      looseTurn();
    }
    return true;
  };

  return (
    <div className="container is-fluid">

      <header className="columns has-text-white is-size-3">
        <div className='column has-text-centered'>
          <p>Mot à trouver</p>
          <p id='maskedWord'>{maskedWord}</p>
        </div>
        <div className='column has-text-centered' >
          <p id='lblAttemptLeft'>Nombre d'essais restants : </p>
          <p id="pAttemptLeft">{endgame - fail}</p>
        </div>
      </header>
      <main>
        <HangmanStep />
        <VirtualKeyboard checkLetter={(l) => checkLetter(l)} />
        <RestartBtn visible={false} message={''}/>
      </main>
    </div>
  );
}

export default App;
