import { useState } from "react";

function App() {
    const [isSpoilerShown, setIsSpoilerShown] = useState(false);
    const [isWarningShown, setIsWarningShown] = useState(true);
    const [numberOfLikes, setNumberOfLikes] = useState(50);

    function handleShowSpoilerClick() {
        setIsSpoilerShown(true);
        console.log("handleClick!");
        setIsWarningShown(false);
    }

    function handleCloseWarningClick() {
        setIsWarningShown(false);
    }

    function handleLikeButtonClick() {
        setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 1);
    }

    function handleLoveButtonClick() {
        setNumberOfLikes((previousNumberOfLikes) => previousNumberOfLikes + 3);
    }

    console.log("<App> - render");

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <h2>Liczba polubień: {numberOfLikes}</h2>
            <button onClick={handleLikeButtonClick}>Lubię to!</button>
            <button onClick={handleLoveButtonClick}>Kocham to!</button>
            <h2>Fabuła</h2>
            {isWarningShown && (
                <p>
                    Uwaga! Opis fabuły zawiera spoilery!
                    <button onClick={handleCloseWarningClick}>X</button>
                </p>
            )}
            <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
            {isSpoilerShown ? (
                <p>Vader okazuje się być ojcem Luka.</p>
            ) : (
                <button onClick={handleShowSpoilerClick}>Pokaż spoiler</button>
            )}
        </>
    );
}

export default App;
