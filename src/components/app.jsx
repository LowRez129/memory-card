import ImageGenerate from "./image";
import { useState, useEffect, useRef } from "react";
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

    useEffect(() => {
        const array = [
            <ImageGenerate  url={url[0]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} id={1} />,
            <ImageGenerate  url={url[1]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} id={2} />,
            <ImageGenerate  url={url[2]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} id={3} />,
            <ImageGenerate  url={url[3]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} id={4} />,
            <ImageGenerate  url={url[4]} getter={{card, randomize, images}} setter={{setCard, setRandomize, setImages}} id={5} />,
        ];

        setImages(shuffle(array));
    }, [card])

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

