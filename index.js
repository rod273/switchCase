const data = new Date();
let diaSemana = data.getDay();
let diaSemanaTexto = 7;

switch (diaSemana) {
  case 0:
    diaSemanaTexto = "Domingo";
    break;
  case 1:
    diaSemanaTexto = "Segunda";
    break;
  case 2:
    diaSemanaTexto = "Terça-feira";
    break;
  case 3:
    diaSemanaTexto = "Quarta-feira";
    break;
  case 4:
    diaSemanaTexto = "Quinta-feira";
    break;
  case 5:
    diaSemanaTexto = "Sexta-feira";
    break;
  case 6:
    diaSemanaTexto = "Sábado";
    break;

    default:
        diaSemanaTexto = "";
}

console.log(diaSemanaTexto, diaSemana);
