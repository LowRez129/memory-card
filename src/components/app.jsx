import ImageGenerate from "./image";
import { useState, useEffect } from "react";
import shuffle from "../functions/shuffle";

export default function AppGenerate () {
    const [card, setCard] = useState([]);
    const [randomize, setRandomize] = useState(true);
    const [images, setImages] = useState([]);

    const url = [
        "https://pokeapi.co/api/v2/pokemon/psyduck",
        "https://pokeapi.co/api/v2/pokemon/sprigatito",
        "https://pokeapi.co/api/v2/pokemon/magikarp",
        "https://pokeapi.co/api/v2/pokemon/meowth",
        "https://pokeapi.co/api/v2/pokemon/ditto"
    ];

    const array = [
        <ImageGenerate  url={url[0]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} />,
        <ImageGenerate  url={url[1]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} />,
    ];

    if (randomize == true) {
        return (
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {array}
            </div>
        );
    }
}

