import { Form } from "./components/Form";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";

function App() {
    console.log("<App> - render");

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <LikesCounter />
            <Plot />
            <Form />
        </>
    );
}

export default App;
