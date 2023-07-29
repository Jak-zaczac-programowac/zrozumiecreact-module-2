function App() {
    function handleClick() {
        alert("Klik!");
    }

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <h2>Fabuła</h2>
            <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
            <button onClick={handleClick}>Pokaż spoiler</button>
            <p>Vader okazuje się być ojcem Luka.</p>
        </>
    );
}

export default App;
