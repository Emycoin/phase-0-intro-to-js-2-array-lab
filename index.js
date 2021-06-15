const cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    return cats.push(name);
}
function destructivelyPrependCat(name){
    return cats.unshift(name);
}
function destructivelyRemoveLastCat(name){
    return cats.pop(name);
}
function destructivelyRemoveFirstCat(name){
    return cats.shift(name);
}
function appendCat(name){
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}
function prependCat(name){
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}
function removeLastCat(name){
    const newCats = [...cats];
    newCats.pop(name);
    return newCats;
}
function removeFirstCat(name){
    const newCats = [...cats];
    newCats.shift(name);
    return newCats;
}