let resposta = document.getElementById("resposta");
let input = document.getElementById("inserePalavra");

function conferePalindromo() {
  let palavra = input.value;
  /* Verificação se o input está vazio. */
  if (palavra != "") {
    let array = palavra.split(""); // Transformando o conteúdo do input em array
    let palindromo = [];
    for (let i = array.length; i > -1; i--) {
      palindromo.push(array[i]);
    }
    palindromo = palindromo.concat().join(""); // transformando o array em string e tirando as virgulas
    // Fim da transformação
    if (palindromo.toUpperCase() == palavra.toUpperCase()) {
      // Verificação se a palavra é um palíndromo.
      resposta.innerHTML = `${palavra} é um palíndromo`;
    } else {
      resposta.innerHTML = `${palavra} não é um palíndromo`;
    }
  }
}

// Uma outra solução também pode ser o método array reverse. no caso = palindromo.reverse()
