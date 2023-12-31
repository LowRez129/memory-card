import { useState, useEffect } from "react";

async function fetchObject (url, setObject, setPending) {
    const requestURL = url;
    const request = new Request(requestURL);
    const response = await fetch(request, {cache: "reload"});
    const object = await response.json();
    const name = await object.name;
    const sprite = await object.sprites.front_default;
    
    await setPending(false);
    await setObject({name, sprite});
}

export default function requestObject (url) {
    const [object, setObject] = useState({});
    const [pending, setPending] = useState(true);
    useEffect(() => {
        fetchObject(url, setObject, setPending);
    }, []);

    return {object, pending};
}