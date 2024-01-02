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
    const images = shuffle([
        <ImageGenerate request={request[0]} getter={{card}} setter={{setCard, setRandomize, setScore}} id={1}/>,
        <ImageGenerate request={request[1]} getter={{card}} setter={{setCard, setRandomize, setScore}} id={2}/>,
        <ImageGenerate request={request[2]} getter={{card}} setter={{setCard, setRandomize, setScore}} id={3}/>,
        <ImageGenerate request={request[3]} getter={{card}} setter={{setCard, setRandomize, setScore}} id={4}/>,
        <ImageGenerate request={request[4]} getter={{card}} setter={{setCard, setRandomize, setScore}} id={5}/>
    ]);

    useEffect(() => {
        if (score == images.length) {setRandomize(false)}
        if (score > highscore) {setHighscore(score)}
    }, [score])

    if (randomize == true) {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}} >
               {images}
            </div>
        );
    }

    return (
        <div>
            Score: {score} Highscore: {highscore} 
            <button onClick={() => {
                setCard([])
                setRandomize(true)
                setScore(0)
            }}>Retry?</button>
        </div>
    );
}

