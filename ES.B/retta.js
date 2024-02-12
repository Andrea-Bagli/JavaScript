m = parseInt(prompt("inserisci coefficiente m della retta y=mx+c")); //parseInt trasforma da stringa ad intero
c = parseInt(prompt("inserisci coefficiente c della retta y=mx+c")); //parseInt trasforma da stringa ad intero

console.log("Coordinata Y per ascissa -1 = " + ((m * -1) + c)); //calcola punto y ad X=-1
console.log("Coordinata Y per ascissa 10 = " + ((m * 10) + c)); //calcola punto y ad X=10
console.log("Punto di intersezione con l'asse Y = " + ((m * 0) + c)); //calcola intersezione sull'sse x
console.log("Punto di intersezione con l'asse X = " + ((0 - c) / m)); //calcola intersezione sull'asse y, formula inversa che calcoa la X, X = y-c/m