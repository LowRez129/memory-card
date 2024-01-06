import { useState, useEffect } from "react";

async function fetchObject (url, setObject, setPending) {
    const requestURL = url;
    const request = new Request(requestURL);
    const response = await fetch(request, {cache: "reload"});
    const object = await response.json();
    
    await setPending(false);
    await setObject(object);
}

export default function requestObject (url) {
    const [object, setObject] = useState({});
    const [pending, setPending] = useState(true);
    useEffect(() => {
        fetchObject(url, setObject, setPending);
    }, []);

    return {object, pending};
}