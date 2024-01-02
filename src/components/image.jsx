export default function ImageGenerate ({request={}, getter={}, setter={}, id}) {
    const {object, pending} = request
    if (pending == true) {return <div id={id}>Loading...</div>}
    return (
        <div onClick={() => {
            const {card} = getter;
            const {setCard, setRandomize, setScore} = setter;
        
            for (let i = 0; i < card.length; i++) {
                if (card[i] == object.name) {
                    setRandomize(false);
                    return;
                }
            }
                      
            setCard(previous => [...previous, object.name]);
            setScore(previous => previous + 1);

        }} id={id}>
            <img src={object.sprite} style={{background: 'white'}}/>
            <div>{object.name}</div>
        </div>
    );
}