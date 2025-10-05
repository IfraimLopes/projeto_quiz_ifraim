let contador_lost = parseInt(localStorage.getItem("lost") || "0");
let contador_win = parseInt(localStorage.getItem("win") || "0");

function proximaPagina() {
  // pega o nome atual do arquivo, ex: "pergunta1.html"
  let atual = window.location.pathname.split("/").pop();
  let num = parseInt(atual.replace("pergunta", "").replace(".html", ""));
  let proxima = "pergunta" + (num + 1) + ".html";
  return proxima;
}

function certa(){
    contador_win += 1;
    localStorage.setItem("win", contador_win);
    window.alert("ACERTOU!! PARABÉNS!!");
    window.location.href = proximaPagina();
}

function erro(){
      contador_lost += 1;
    localStorage.setItem("lost", contador_lost);
    window.alert("ERROU, MAS SORTE NA PRÓXIMA!");
    window.location.href = proximaPagina();
}

  function resetarPontuacao(){
    localStorage.setItem("win", 0);
    localStorage.setItem("lost", 0);
}

if (contador_win == 5){
  document.getElementById('nivel').innerText = `Desempenho: Muito Bom`
} else if(contador_win == 4){
  document.getElementById('nivel').innerText = `Desempenho: Bom`
} else if (contador_win == 3){
  document.getElementById('nivel').innerText = `Desempenho: Suficiente`
} else if (contador_win == 2){
  document.getElementById('nivel').innerText = `Desempenho: Mediocre`
} else if(contador_win == 1){
  document.getElementById('nivel').innerText = `Desempenho: Mal`

}


document.getElementById('pontuacao').innerText = `Acertou ${contador_win} e Errou ${contador_lost}`;