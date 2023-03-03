function ejercicio_1() {
  value = prompt("Ingresa un valor:", "10");

  typeof_string = "{" + typeof value + "}";
  console.log(value, typeof_string);
}

function ejercicio_2() {
  const first_number = prompt("ingresa un numero", "10");

  const second_number = prompt("Ingresa otro numero", 20);
  const first_time = new Date().getTime();

  if (!first_number || !second_number) {
    joke_prompt = alert("Error, no ingresaste los numeros necesarios");
    return;
  }
  const third_prompt = prompt("ingresa un numero mas");
  const second_time = new Date().getTime();

  const elapsed_seconds = (second_time - first_time) / 1000;
  let string_joke = "Ese ultimo numero no sirve de nada.\n";
  if (third_prompt) {
    string_joke += "te hice escribir " + third_prompt + " sin necesidad, y ademas ";
  }
  string_joke += "te hice perder " + elapsed_seconds + " segundos \n";
  let string_result = first_number + "-" + second_number + "=" + (parseInt(first_number) - parseInt(second_number));
  console.log(string_result);
  alert(string_joke);
}

function ejercicio_3_a() {
  let prompt_a = prompt("ingresa un valor", "decimo valor");
  let prompt_b = prompt("ingresa otro valor", "noveno valor");
  ejercicio_3_b(prompt_a, prompt_b);
}

function ejercicio_3_b(a, b) {
  let a_temp = a;
  a = b;
  b = a_temp;
  alert("a:" + a + " b:" + b);
}

function ejercicio_4() {
  const side_value = prompt("Ingresa el tamaño del lado", 1.5);
  const perimeter = side_value * 4;
  const area = side_value ** 2;
  console.log(perimeter, area);
  alert("Area: " + area + " Perimetro: " + perimeter);
}

function ejercicio_5() {
  const farenheit = prompt("ingresa temperatura en ºF", "-459.67");
  const celcius = (5 / 9) * (farenheit - 32);

  if (farenheit) {
    alert("Temperatura en celcius: " + celcius);
  }
}

function ejercicio_6() {
  const number = parseInt(prompt("Ingresa un numero menor a 10", "5"));
  if (number > 10) {
    console.log("ERROR: Valor invalido.");
    alert("Solo valores menores al 10");
  }
  let result = number;
  for (let iteration = number - 1; iteration > 0; iteration--) {
    result *= iteration;
  }
  console.log(result);
  alert("!" + number + "=" + result);
}

function ejercicio_7() {
  let phrase = prompt("Ingresa una frase o palabra", "mi vieja mula ya no es lo que era");
  phrase = phrase.replaceAll(" ", "").toLowerCase();

  const original_phrase = phrase;
  phrase = phrase.split("").reverse().join("");
  console.log(original_phrase, phrase);
  if (original_phrase == phrase) {
    alert("Es un palindromo!");
  } else {
    alert("no, no es un palindromo -..-");
  }
}

function ejercicio_8() {
  let text = prompt("Ingresa algun texto...", "un dos tres un pasito pa lante maria");
  const lower = text.toLowerCase();
  const upper = text.toUpperCase();
  text_array = text.split("");
  jeje_text = "";
  for (let index = 0; index < text_array.length; index++) {
    if (index % 2 == 0) {
      jeje_text += text[index].toUpperCase();
    } else {
      jeje_text += text[index].toLowerCase();
    }
  }

  console.log(lower, upper, jeje_text);
  alert("texto en mayuscula: " + upper + "\ntexto en minuscula: " + lower + "\ntexto en ??????: " + jeje_text);
}

function ejercicio_9() {
  let nota = prompt("Ingresa la calificacion", "5.5");
  let calificacion = 0;
  if (nota >= 0 && nota <= 3) {
    calificacion = "Muy deficiente";
  } else if (nota <= 5) {
    calificacion = "Insuficiente";
  } else if (nota <= 6) {
    calificacion = "Suficiente";
  } else if (nota <= 7) {
    calificacion = "Bien";
  } else if (nota <= 9) {
    calificacion = "Notable";
  } else if (nota <= 10) {
    calificacion = "Sobresaliente";
  } else {
    calificacion = "Valor fuera de rango";
  }
  console.log(calificacion);
  alert("Calificacion: " + calificacion);
}

function ejercicio_10() {
  const month_number = prompt("Ingresa el numero del mes", "2");
  const month_name = obtener_mes(month_number);
  if (month_number <= 0 || month_number >= 12) {
    alert("Los meses van del 1 al 12");
    return;
  }
  const days_per_month = "111111110011111111101111111110111111111111110111111111011111";
  let position = (parseInt(month_number) - 1) * 5;
  let number_of_days = days_per_month.slice(position, position + 5);
  console.log(number_of_days);
  multiplyer = 16;
  let numb = 0;
  for (let index = 0; index < number_of_days.length; index++) {
    numb += parseInt(number_of_days[index] * multiplyer);
    multiplyer /= 2;
  }
  console.log(month_name, numb);
  alert(month_name + " tiene " + numb + " dias");
}

function obtener_mes(number) {
  const months = "EneroFebreroMarzoAbrilMayoJunioJulioAgostoSeptiembreOctubreNoviembreDiciembre";
  const lengths = "464434459688";

  let month_length = 0;
  let moth_starting_index = 0;
  let month_ending_index = 0;

  for (let index = 0; index < lengths.length + 1; index++) {
    month_length = parseInt(lengths[index]) + 1;
    month_ending_index = moth_starting_index + month_length;
    if (index == parseInt(number) - 1) {
      return months.slice(moth_starting_index, month_ending_index);
    }
    moth_starting_index += month_length;
  }
}

function ejercicio_11() {
  selected_number = parseInt(prompt("ingresa un numero mayor a 10"));
  string = "";
  if (selected_number > 10) {
    alert("nono, seria divertido pero la consigna dice que no");
    alert("aunque no dice nada de numeros negativos ;)");
    return;
  }
  if (selected_number < 0) {
    for (let width = -1; width > selected_number - 1; width--) {
      for (let height = -1; height > width - 1; height--) {
        string += height;
      }
      string += "\n";
    }
  } else {
    for (let width = 1; width < selected_number + 1; width++) {
      for (let height = 1; height < width + 1; height++) {
        string += height;
      }
      string += "\n";
    }
  }
  alert(string);
}

function ejercicio_12() {
  const bulges = parseInt(prompt("Cantidad de de bultos en stock"));
  const max_bulges_per_crotch = parseInt(prompt("cantidad de bultos por paquete")); //should be only one but well...
  let remaining_bulges = bulges % max_bulges_per_crotch;
  let max_crotches = Math.floor(bulges / max_bulges_per_crotch);
  console.log("Cajas completas:", max_crotches, "bultos restantes:", remaining_bulges);
  if (remaining_bulges != 0) {
    remaining_bulges = "\nBultos extra: " + remaining_bulges;
  } else {
    remaining_bulges = "Justo, no sobra ninguno";
  }
  if (max_crotches != 0) {
    max_crotches = "Paquetes llenos: " + max_crotches;
  } else {
    max_crotches = "No llenas ni un paquete con esos bultos.";
  }
  if (max_bulges_per_crotch == 1) {
    alert(max_crotches + remaining_bulges + "\nComo tiene que ser.");
  } else {
    alert(max_crotches + remaining_bulges);
  }
}

function ejercicio_13() {
  const cars = {
    1: { display_name: "Ford Focus", price: 1500, discounts: { focus: 10 } },
    2: { display_name: "Ford Fiesta", price: 1100, discounts: { fiesta: 5 } },
  };

  prompt_string = "Que auto querias comprar?\n";
  Object.keys(cars).forEach((index) => {
    const name = cars[index]["display_name"];
    const price = cars[index]["price"];
    prompt_string += index + ". " + name + " a $" + price + "\n";
  });
  const car_index = prompt(prompt_string);
  const selected_car = cars[car_index];
  if (!selected_car) {
    alert("Parece que no tenemos ese auto");
    ejercicio_13();
  }

  const discount_code = prompt("Tenes algun codigo de descuento?").toLocaleLowerCase();
  let final_price = selected_car["price"];
  let discount = 0;
  Object.keys(selected_car["discounts"]).forEach((code) => {
    if (code == discount_code) {
      final_price = final_price - (selected_car["discounts"][code] / 100) * final_price;
      discount = selected_car["discounts"][code];
    }
  });
  if (discount) {
    response_string = "Tu codigo aplico un " + discount + "% de descuento!\nPrecio final $" + final_price;
  } else {
    response_string = "Precio final $" + final_price;
  }
  console.log(response_string);
  alert(response_string);
}

for (let i = 1; i <= 13; i++) {
  let functionName = "ejercicio_" + i;

  if (i == "3") {
    functionName = "ejercicio_" + i + "_a";
  }

  document.getElementById("ejercicio_" + i).innerHTML = window[functionName].toString();
  functionName = window[functionName].toString();
}
