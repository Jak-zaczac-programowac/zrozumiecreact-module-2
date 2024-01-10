import { useState } from "react";

export default function App() {
  const [numberOfLikes, setNumberOfLikes] = useState(0);
  const [isSpoilerVisible, setIsSpoilerVisible] = useState(false);
  const [isWarningVisible, setIsWarningVisible] = useState(true);

  const addLike = () => {
    setNumberOfLikes((prevState) => prevState + 1);
  };
  const handleSpoilerShow = () => {
    setIsSpoilerVisible((prevState) => (prevState = true));
    // optional:
    // setIsWarningVisible((prevState) => (prevState = false));
  };
  const handleWarningClose = () => {
    setIsWarningVisible((prevState) => (prevState = false));
  };

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Liczba polubień: {numberOfLikes}</h2>
      <button onClick={addLike}>Lubię to!</button>
      <h2>Fabuła</h2>
      {!isSpoilerVisible && isWarningVisible && (
        <p>
          Uwaga! Opis fabuły zawiera spoilery!{" "}
          <button onClick={handleWarningClose}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {isSpoilerVisible ? null : (
        <button onClick={handleSpoilerShow}>Pokaż spoiler</button>
      )}
      {isSpoilerVisible && <p>Vader okazuje się być ojcem Luka.</p>}
    </>
  );
}
