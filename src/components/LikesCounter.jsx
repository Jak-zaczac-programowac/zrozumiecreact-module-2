export function LikesCounter({
    numberOfLikes,
    onHandleLikeButtonClick,
    onHandleLoveButtonClick,
}) {
    return (
        <>
            <h2>Liczba polubień: {numberOfLikes}</h2>
            <button onClick={onHandleLikeButtonClick}>Lubię to!</button>
            <button onClick={onHandleLoveButtonClick}>Kocham to!</button>
        </>
    );
}
