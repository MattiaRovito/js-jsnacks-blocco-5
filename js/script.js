
//* Esercizio 1
//* Creare un array di oggetti:
//* Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.



var biciDaCorsa = 
[
    {
        nome : 'BRoad',
        peso : 18
    },
    {
        nome : 'SystemSX',
        peso : 15
    },
    {
        nome : 'BHDisk',
        peso : 13
    }
];

//* Assegniamo una variabile al primo oggetto dell'array

var pesoMin = biciDaCorsa[0];


//* Apriamo il ciclo for. Avremmo potuto usare anche var i = 0, in quel caso avrebbe confrontato il primo oggetto con se stesso, ecco perché abbiamo usato var i = 1.
for( var i = 1; i < biciDaCorsa.length; i++)
{
    //* con if confrontiamo ogni singolo peso di ogni singolo oggetto con il peso del pesoMin, in questo caso BRoad
    if (biciDaCorsa[i].peso < pesoMin.peso)
    {
        pesoMin = biciDaCorsa[i];
    }
}
//* Stampiamo il peso minore
console.log(pesoMin);









//* Esercizio 2
//* Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
//* Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
//* Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.


var squadre = 
[
    {
        nome: 'Inter',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Juventus',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Milan',
        puntiFatti: 0,
        falliSubiti: 0
    },
    {
        nome: 'Atalanta',
        puntiFatti: 0,
        falliSubiti: 0
    }
];



//* Ciclo while

var i = 0;

while (i < squadre.length)
{
    squadre[i].puntiFatti = (Math.floor( Math.random()* 100) + 1);
    squadre[i].falliSubiti = (Math.floor( Math.random()* 100) + 1);
    i++;
}
console.log(squadre);


//* Oppure con il ciclo for

// for (var i = 0; i < squadre.length; i++)
// {
//     squadre[i].puntiFatti = (Math.floor( Math.random()* 100) + 1);
//     squadre[i].falliSubiti = (Math.floor( Math.random()* 100) + 1);
// }

// console.log(squadre);












//* Esercizio 3
//* Crea un array di 10 oggetti che rappresentano una zucchina, indicandone per ognuno varietà, peso e lunghezza. Calcola quanto pesano tutte le zucchine. 



var zucchine =
[
    {
        varietà : 1,
        peso : 2,
        lunghezza : 8
    },
    {
        varietà : 1,
        peso : 5,
        lunghezza : 10
    },
    {
        varietà : 1,
        peso : 3,
        lunghezza : 12
    },
    {
        varietà : 1,
        peso : 5,
        lunghezza : 14
    },
    {
        varietà : 1,
        peso : 10,
        lunghezza : 13
    },
    {

        varietà : 1,
        peso : 2,
        lunghezza : 5
    },
    {
        varietà : 1,
        peso : 1,
        lunghezza : 12
    },
    {
        varietà : 1,
        peso : 8,
        lunghezza : 11
    },
    {
        varietà : 1,
        peso : 7,
        lunghezza : 10
    },
    {
        varietà : 1,
        peso : 10,
        lunghezza : 18
    },
];
// console.log(zucchine);

var pesoTotale = 0;

for (var i = 0; i < zucchine.length; i++)
{
    // console.log(zucchine[i].peso);    
    pesoTotale += zucchine[i].peso;
}
console.log('Il peso totale delle zucchine è: ' + pesoTotale + ' kg');









//* Esercizio 4
//* Crea un array di 10 oggetti che rappresentano una zucchina.
//* Dividi in due array separati le zucchine che misurano meno o più di 15cm. Infine stampa separatamente quanto pesano i due gruppi di zucchine



var nuoveZucchine =
[
    {
        varietà : 1,
        peso : 2,
        lunghezza : 8
    },
    {
        varietà : 1,
        peso : 5,
        lunghezza : 10
    },
    {
        varietà : 1,
        peso : 3,
        lunghezza : 12
    },
    {
        varietà : 1,
        peso : 5,
        lunghezza : 14
    },
    {
        varietà : 1,
        peso : 10,
        lunghezza : 13
    },
    {

        varietà : 1,
        peso : 2,
        lunghezza : 20
    },
    {
        varietà : 1,
        peso : 1,
        lunghezza : 26
    },
    {
        varietà : 1,
        peso : 8,
        lunghezza : 20
    },
    {
        varietà : 1,
        peso : 7,
        lunghezza : 16
    },
    {
        varietà : 1,
        peso : 10,
        lunghezza : 18
    },
];
// console.log(zucchine);


var zucchinePiccole = [];

var zucchineGrandi = [];


for (var i = 0; i < nuoveZucchine.length; i++)
{
    if (nuoveZucchine[i].lunghezza <= 15)
    {
        zucchinePiccole.push(nuoveZucchine[i]);
    } else
    {
        zucchineGrandi.push(nuoveZucchine[i]);
    }
}

console.log(zucchinePiccole);
console.log(zucchineGrandi);


var pesoTotalePiccole = 0;

for (var i = 0; i < zucchinePiccole.length; i++)
{
    // console.log(zucchine[i].peso);    
    pesoTotalePiccole += zucchinePiccole[i].peso;
}
console.log('Il peso totale delle zucchine piccole è: ' + pesoTotalePiccole + ' kg');

var pesoTotaleGrandi = 0;

for (var i = 0; i < zucchineGrandi.length; i++)
{
    // console.log(zucchine[i].peso);    
    pesoTotaleGrandi += zucchineGrandi[i].peso;
}
console.log('Il peso totale delle zucchine grandi è: ' + pesoTotaleGrandi + ' kg');


