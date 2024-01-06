import ImageGenerate from "./image";
import { useEffect, useState } from "react";
import shuffle from "../functions/shuffle";
import requestObject from "../functions/request_object";

export default function AppGenerate () {
    const request = [
        requestObject("https://pokeapi.co/api/v2/pokemon/psyduck"),
        requestObject("https://pokeapi.co/api/v2/pokemon/sprigatito"),
        requestObject("https://pokeapi.co/api/v2/pokemon/magikarp"),
        requestObject("https://pokeapi.co/api/v2/pokemon/meowth"),
        requestObject("https://pokeapi.co/api/v2/pokemon/ditto")
    ]
    const [card, setCard] = useState([]);
    const [randomize, setRandomize] = useState(true);
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);

    const clickHandler = (name) => {
        for (let i = 0; i < card.length; i++) {
            if (card[i] == name) {
                setRandomize(false);
                return;
            }
        }
                    
        setCard(previous => [...previous, name]);
        setScore(previous => previous + 1);
    }
    const images = shuffle([
        <ImageGenerate request={request[0]} onClick={clickHandler} key={1}/>,
        <ImageGenerate request={request[1]} onClick={clickHandler} key={2}/>,
        <ImageGenerate request={request[2]} onClick={clickHandler} key={3}/>,
        <ImageGenerate request={request[3]} onClick={clickHandler} key={4}/>,
        <ImageGenerate request={request[4]} onClick={clickHandler} key={5}/>,
    ]);

    useEffect(() => {
        if (score == images.length) {setRandomize(false)}
        if (score > highscore) {setHighscore(score)}
    }, [score])

    return randomize ? (
        <div style={{display: 'flex', flexDirection: 'row'}} >
           {images}
        </div>
    ) : (
        <div>
            Score: {score} Highscore: {highscore} 
            <button onClick={() => {
                setCard([])
                setRandomize(true)
                setScore(0)
            }}>Retry?</button>
        </div>
    )
}

