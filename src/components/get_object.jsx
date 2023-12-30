export default async function GetObject (url, setObject, setPending) {
    const requestURL = url;
    const request = new Request(requestURL);
    const response = await fetch(request, {cache: "reload"});
    const object = await response.json();
    const name = await object.name;
    const sprite = await object.sprites.front_default;
    
    await setPending(false);
    await setObject({name, sprite});
}