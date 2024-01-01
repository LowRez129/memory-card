import ImageGenerate from "./image";
import { useState, useEffect } from "react";
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
    const images = shuffle([
        <ImageGenerate request={request[0]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={1}/>,
        <ImageGenerate request={request[1]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={2}/>,
        <ImageGenerate request={request[2]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={3}/>,
        <ImageGenerate request={request[3]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={4}/>,
        <ImageGenerate request={request[4]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={5}/>
    ]);

    if (randomize == true) {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}} > 
               {images}
            </div>
        );
    }

    return (
        <div onClick={() => {
            setCard([])
            setRandomize(true)
        }}>Retry?</div>
    );
}

