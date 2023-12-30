import ImageGenerate from "./image";

export default function AppGenerate () {
    return (
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <ImageGenerate  url={"https://pokeapi.co/api/v2/pokemon/psyduck"}/>
            <ImageGenerate url={"https://pokeapi.co/api/v2/pokemon/sprigatito"}/>
            <ImageGenerate url={"https://pokeapi.co/api/v2/pokemon/magikarp"}/>
            <ImageGenerate url={"https://pokeapi.co/api/v2/pokemon/meowth"}/>
            <ImageGenerate url={"https://pokeapi.co/api/v2/pokemon/ditto"}/>
        </div>
    );
}

