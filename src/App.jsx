function App() {
    const buttonEl = <button>Pokaż spoiler</button>;

    // document.querySelector("button").addEventListener("click", () => {
    //     alert("Klik");
    // });

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <h2>Fabuła</h2>
            <p>Dobrzy walczą ze złymi. Trzeba wyłączyć pole siłowe.</p>
            {buttonEl}
            <p>Vader okazuje się być ojcem Luka.</p>
        </>
    );
}

export default App;
