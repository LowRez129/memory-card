import requestObject from "./request_object";

export default function ImageGenerate ({url}) {
    const {object, pending} = requestObject(url);
    if (pending == true) {return <div>Loading...</div>}
    return (
        <div onClick={() => {console.log(object.name)}}>
            <img src={object.sprite} style={{background: 'white'}}/>
            <div>{object.name}</div>
        </div>
    );
}