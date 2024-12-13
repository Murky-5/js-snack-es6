/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore. */

let bikes = [
    {
    name: "Giulietta",
    weight: 300,
},
    {
    name: "Graziella",
    weight: 1,
}
]

console.log(bikes[0].weight > bikes[1].weight ? bikes[1] : bikes[0]) /* Basically the question mark (?) is the if? and the two dots (:) are the else? */


/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

let inField = [
    {
        team: "narcelli",
        scores: 0,
        foul: 0,
    },
    {
        team: "romia",
        scores: 0,
        foul: 0,
    },
    {
        team: "casaleri",
        scores: 0,
        foul: 0,
    },
    {
        team: "emceseli",
        scores: 0,
        foul: 0,
    },
]

let stats = []
for (let i = 0; i < inField.length; i++) {
    inField[i].scores = Randomizer(0, 100)
    inField[i].foul = Randomizer(0, 300)
    stats.push(`${inField[i].team}: ${inField[i].foul}`)
}
console.log(stats, inField)


/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

// 1 -- creo una funzione che contiene es[], "a", "b"
// 2 -- randomizzo due numeri faccio si che il più piccolo venga inserito per primo cosi che "a" > "b" sia corretto
// 3 -- creo un "for" ecc. prendo "a" e aggiungo la "i" finchè la a non combacia con la "b"
// 4 -- prendo il valore di "i" e lo divido per due, poi lo aggiungo ad "a"
// 5 -- assegno i dati dei numeri iniziali in un altro array e vi ritorno il risultato di "a + i / 2"

let result = [];
console.log(betweenNumbers(result, Randomizer(1, 100), Randomizer(1, 100)))

let squads = ["narcelli", "romia", "casaleri", "emceseli"]
console.log(betweenSquads(squads, 1, 3))