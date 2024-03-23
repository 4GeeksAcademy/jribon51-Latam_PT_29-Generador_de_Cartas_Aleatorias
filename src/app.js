let boton = document.querySelector(".btn");
boton.addEventListener("click", e => {
  let palo = ["♦", "♥", "♠", "♣"];
  let numero = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];

  let resultadoPalo = palo[Math.floor(Math.random() * palo.length)];
  let resultadoNumero = numero[Math.floor(Math.random() * numero.length)];

  let domPalo = document.querySelectorAll(".palo");

  domPalo.forEach(elemento => {
    elemento.innerHTML = resultadoPalo;
  });

  let domNumero = document.querySelector(".numero");
  domNumero.innerHTML = resultadoNumero;

  /* if (resultadoPalo == "♦" || resultadoPalo == "♥") {
    let color = document.querySelectorAll(".color");

    color.forEach(elemento => {
      elemento.style.color = "#FF0000";
    });
  } else {
    let color = document.querySelectorAll(".color");

    color.forEach(elemento => {
      elemento.style.color = "#000000";
    });
  }
 */

  let color = document.querySelectorAll(".color");
  let colorHex =
    resultadoPalo == "♦" || resultadoPalo == "♥" ? "#FF0000" : "#000000";

  color.forEach(elemento => {
    elemento.style.color = colorHex;
  });

  console.log(resultadoPalo);
});
