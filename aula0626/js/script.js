let dia, hora;
dia=26
hora = 20;

// nome=prompt("Digite seu nome")
// idade=parseInt(prompt("Informe sua idade"))
// if (idade >=18){
//     document.write("<h1> Bem Vindo " + nome + "</h1>")
// } else {
 
//     document.write("<img style=\"width: 100px\" src=\"https://png.pngtree.com/png-clipart/20220925/original/pngtree-18-icon-png-image_8632027.png\"</img>")
//     document.write("<h1> Descuple " + nome + " Site para maiores de 18. </h1>")
// }


if(hora >= 18){
    document.write("<h1>Boa Noite!!</h1>")
} else {
    document.write("<h1>Bom Dia!!</h1>")
}

let cars = ['VW', "Ford", "GM"]
cars[1] = 'Fiat'

let i = 0
// do {
//    document.write(`<p> ${cars[i++]} </p>` )
// } while (i < cars.length)
document.write("<table>")
document.write(`<tr><th>Num</th><th>CARROS</th></tr>`)
while (i < cars.length) {
    document.write("<tr>")
    document.write(`<td>${i+1}</td>` )
    document.write(`<td>${cars[i++]}</td>` )
    document.write("</tr>")
}
document.write("</table>")
// for (let i in cars){
//     document.write(`<p> ${cars[i]} </p>` )
// }
// cars.forEach(i => {
//     document.write(`<p> ${i} </p>` )
// })
console.log(cars)

document.write(`<p> Hoje é dia ${dia} </p>`);
document.write(`<p> Hoje é dia ${dia + 1} </p>`);
document.write("<p>Primeiro código js</p>");
document.write("<p>Segunda linha</p>");
document.write("<p>Terceira linha</p>");