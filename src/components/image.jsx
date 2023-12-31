import requestObject from "../functions/request_object";
import shuffle from "../functions/shuffle";

export default function ImageGenerate ({url, getter={}, setter={}, id}) {
    const {object, pending} = requestObject(url);
    if (pending == true) {return <div id={id}>Loading...</div>}
    return (
        <div onClick={() => {
            const {card, randomize, images} = getter;
            const {setCard, setRandomize, setImages} = setter;

            for (let i = 0; i < card.length; i++) {
                if (card[i] == object.name) {
                    setRandomize(false);
                    return console.log(card, randomize);
                }
            }
            
            setCard(previous => [...previous, object.name]);
            setImages(shuffle(images));
        }} id={id}>
            <img src={object.sprite} style={{background: 'white'}}/>
            <div>{object.name}</div>
        </div>
    );
}