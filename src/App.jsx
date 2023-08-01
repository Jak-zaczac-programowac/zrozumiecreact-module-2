import { useState } from "react";
import { Form } from "./components/Form";
import { LikesCounter } from "./components/LikesCounter";
import { Plot } from "./components/Plot";
import { Reviews } from "./components/Reviews";

const initialReviews = [
    { author: "Brian", text: "Najlepszy film ever!", id: 1 },
    { author: "Jessica", text: "Nie podobał mi się", id: 2 },
];

function App() {
    const [reviews, setReviews] = useState(initialReviews);

    return (
        <>
            <h1>Gwiezdne wojny V</h1>
            <h2>Rok produkcji: 1980</h2>
            <LikesCounter />
            <Plot />
            <Reviews reviews={reviews} />
            <Form
                onReviewSubmit={(author, text) => {
                    setReviews((prevReviews) => {
                        return [
                            { author, text, id: prevReviews.length + 1 },
                            ...prevReviews,
                        ];
                    });
                }}
            />
        </>
    );
}

export default App;
