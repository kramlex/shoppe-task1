const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const BacklightFunction = (on = true) => {
    const selectors = document.querySelectorAll('*')
    const selector = selectors[getRandomInt(0,selectors.length - 1)]
    selector.style.boxShadow = on ? `0px -1px 8px 6px rgba(${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${getRandomInt(0,255)}, ${Math.random()})` : ``
}
console.log(Math.random())

BacklightFunction()

setInterval(BacklightFunction,2000,)
setInterval(BacklightFunction,2000,false)