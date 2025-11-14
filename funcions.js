
let totalProductes = 0
let totaly = 0.00

function Comprar(nom,preu) {
    document.getElementById("Cistella").innerHTML += "<h3>"+nom+preu+"€</h3>"  ;
    localStorage.setItem("Cistella", document.getElementById("Cistella").innerHTML )
        // Cistella = localStorage.getItem("Cistella")
    totaly = totaly + preu;
    totaly.toFixed(2)
    document.getElementById("preuTotal").innerText = totaly.toFixed(2)
    localStorage.setItem("total", totaly )

    // localStorage.setItem("Cistella")

 }
// per conectar les dues cistelles
function carregar(){
    nombreProductes = localStorage.getItem("Cistella");
    document.getElementById('Cistella').innerHTML = nombreProductes
    totaly = parseInt(localStorage.getItem("total"));
    if (isNaN(totaly)) totaly = 0.00
    document.getElementById("preuTotal").innerText = totaly.toFixed(2);

}
// amagr i mostrar tota la cistella
let amagat = true;
function carrito(){
    if (amagat){
        document.getElementById("idcistella").hidden = false;  // amaga
        amagat = false;
    }else {
        document.getElementById("idcistella").hidden = true;  // amaga
        amagat = true;

    }
}
// quan acabi tota la pagina executa el següent
(() => {
    document.addEventListener("DOMContentLoaded", () => {
        carregar();
    });
})();
// per buidar tota la cistella
function buidar () {
    localStorage.setItem('Cistella', " ");
    localStorage.setItem('total', " ");
    document.getElementById('preuTotal').innerText = ''
    document.getElementById('Cistella').innerText = ''
    totaly = totaly * 0
}
