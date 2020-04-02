let paragraf=document.getElementById("tekst");
tekst.style.color="orange";
tekst.style.fontSize="50px";
let dodaj=document.getElementById("dodaj");
let usun=document.getElementById("usun");

dodaj.onclick = function(){
    paragraf.textContent="Akademia 108";
}

usun.onclick = function(){
    paragraf.remove();
}