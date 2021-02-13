
let clickButton = document.querySelector('button');
clickButton.onclick = function () {
    let imie = document.getElementById("imie").value;



    document.getElementById("name").innerHTML = imie;

    let nazwisko = document.getElementById("nazwisko").value;
    document.getElementById("surname").innerHTML = nazwisko;

    let nrtelefonu = document.getElementById("nrtel").value;
    document.getElementById("phone").innerHTML = nrtelefonu;


}