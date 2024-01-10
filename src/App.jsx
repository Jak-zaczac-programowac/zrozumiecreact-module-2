import { useState } from "react";

export default function App() {
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);
  const [isDisclaimerVisible, setIsDisclaimerVisible] = useState(true);

  const addLike = () => {
    setNumberOfLikes((prevState) => prevState + 1);
  };
  const handleShowSpoiler = () => {
    setIsSpoilerVisible((prevState) => (prevState = true));
    // optional:
    // setIsDisclaimerVisible((prevState) => (prevState = false));
  };
  const handleCloseDisclaimer = () => {
    setIsDisclaimerVisible((prevState) => (prevState = false));
  };

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Liczba polubień: {numberOfLikes}</h2>
      <button onClick={addLike}>Lubię to!</button>
      <h2>Fabuła</h2>
      {!isSpoilerVisible && isDisclaimerVisible && (
        <p>
          Uwaga! Opis fabuły zawiera spoilery!{" "}
          <button onClick={handleCloseDisclaimer}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {isSpoilerVisible ? null : (
        <button onClick={handleShowSpoiler}>Pokaż spoiler</button>
      )}
      {isSpoilerVisible && <p>Vader okazuje się być ojcem Luka.</p>}
    </>
  );
}
