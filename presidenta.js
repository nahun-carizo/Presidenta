function esPrimo(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        return false;
      }
    }
    return true;
  }
  
  function obtenerNumerosPrimos(minimo, maximo) {
    const numerosPrimos = [];
    for (let i = minimo; i <= maximo; i++) {
      if (esPrimo(i)) {
        numerosPrimos.push(i);
      }
    }
    return numerosPrimos;
  }
  
  function sumaDigitosPrimos(numerosPrimos) {
    const numerosPrimosSumados = [];
    for (let i = 0; i < numerosPrimos.length; i++) {
      let sumaDigitos = 0;
      const digitos = numerosPrimos[i].toString().split("");
      for (let j = 0; j < digitos.length; j++) {
        sumaDigitos += parseInt(digitos[j]);
      }
      if (esPrimo(sumaDigitos)) {
        numerosPrimosSumados.push(numerosPrimos[i]);
      }
    }
    return numerosPrimosSumados;
  }
  
  const minimo = parseInt(prompt("Ingrese el límite inferior:"));
  const maximo = parseInt(prompt("Ingrese el límite superior:"));
  
  const numerosPrimos = obtenerNumerosPrimos(minimo, maximo);
  const numerosPrimosSumados = sumaDigitosPrimos(numerosPrimos);
  
  console.log("Números primos encontrados: " + numerosPrimos);
  console.log("Números primos cuya suma de dígitos es también primo: " + numerosPrimosSumados);
  