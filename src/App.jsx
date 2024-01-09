import { useState } from "react";

export default function App() {
  const [likes, setLikes] = useState(0);
  const [spoiler, setSpoiler] = useState(false);
  const [disclaimer, setDisclaimer] = useState(true);

  const addLike = () => {
    setLikes((prevState) => prevState + 1);
  };
  const showSpoiler = () => {
    setSpoiler((prevState) => (prevState = true));
  };
  const closeDisclaimer = () => {
    setDisclaimer((prevState) => (prevState = false));
  };

  return (
    <>
      <h1>Gwiezdne wojny V</h1>
      <h2>Rok produkcji: 1980</h2>
      <h2>Liczba polubień: {likes}</h2>
      <button onClick={addLike}>Lubię to!</button>
      <h2>Fabuła</h2>
      {!spoiler && disclaimer && (
        <p>
          Uwaga! Opis fabuły zawiera spoilery!{" "}
          <button onClick={closeDisclaimer}>X</button>
        </p>
      )}
      <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
      {spoiler ? null : <button onClick={showSpoiler}>Pokaż spoiler</button>}
      {spoiler && <p>Vader okazuje się być ojcem Luka.</p>}
    </>
  );
}
