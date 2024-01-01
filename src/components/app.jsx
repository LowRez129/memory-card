import ImageGenerate from "./image";
import { useState, useEffect } from "react";
import shuffle from "../functions/shuffle";
import requestObject from "../functions/request_object";

export default function AppGenerate () {
    const url = [
        "https://pokeapi.co/api/v2/pokemon/psyduck",
        "https://pokeapi.co/api/v2/pokemon/sprigatito",
        "https://pokeapi.co/api/v2/pokemon/magikarp",
        "https://pokeapi.co/api/v2/pokemon/meowth",
        "https://pokeapi.co/api/v2/pokemon/ditto"
    ];
    const request = [
        requestObject(url[0]),
        requestObject(url[1]),
        requestObject(url[2])
    ]

    const [card, setCard] = useState([]);
    const [randomize, setRandomize] = useState(true);
    const images = shuffle([
        <ImageGenerate request={request[0]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={1}/>,
        <ImageGenerate request={request[1]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={2}/>,
        <ImageGenerate request={request[2]} getter={{card, randomize}} setter={{setCard, setRandomize}} id={3}/>
    ]);

    if (randomize == true) {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}} > 
               {images}
            </div>
        );
    }

    return (
        <div>Retry?</div>
    );
}

