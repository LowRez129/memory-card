import { useEffect, useState } from "react";
import GetObject from "./get_object";

export default function ImageGenerate ({url}) {
    const [object, setObject] = useState({});
    const [pending, setPending] = useState(true);
    
    useEffect(() => {
        GetObject(url, setObject, setPending);
    }, [])

    if (pending == true) {return <div>Loading...</div>}
    return (
        <div>
            <img src={object.sprite} style={{background: 'white'}}/>
            <div>{object.name}</div>
        </div>
    );
}