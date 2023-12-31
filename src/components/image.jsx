import requestObject from "../functions/request_object";
import shuffle from "../functions/shuffle";

export default function ImageGenerate ({url, getter={}, setter={}}) {
    const {object, pending} = requestObject(url);
    if (pending == true) {return <div>Loading...</div>}
    return (
        <div onClick={() => {
            const {card, randomize} = getter;
            const {setCard, setRandomize} = setter;

            for (let i = 0; i < card.length; i++) {
                if (card[i] == object.name) {
                    //setRandomize(false);
                    return console.log(card, randomize);
                }
            }
            
            setCard(previous => [...previous, object.name]);
        }}>
            <img src={object.sprite} style={{background: 'white'}}/>
            <div>{object.name}</div>
        </div>
    );
}