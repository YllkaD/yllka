
// function testMetoda() {
// const Personi = {
//     emri: document.getElementById('emri').value,
//     mbiemri:document.getElementById('mbiemri').value,
//     // mosha:21,
//     // lenda = 'inxhinieri e Web',
//     // nota:6
// }

//  var vargu = [Personi.emri, Personi.mbiemri]
//  for(let i = 0; i< vargu.length; i++){
//     console.log(vargu[i]);
//  }
//  var vargu = ['E hene' , 'E marte' , ' E Merkure']
// for(let i in vargu2){
//     console.log(i);
// }
// for (let i of vargu){
//     console.log(i);
// }

// }
var personi = {
    Emri: "",
    Mbiemri: "",
    Email: "",
    Mosha: 19,
    Qyteti: ""
}
var personat = new Array();
var i = 0;
while(i < 2) {
    let emri = prompt("Emri", "");
    while (emri == "" || emri == null) {
        emri = prompt("Emri", "");
    }
    let mbiemri = prompt("mbiemri", "");
    while (mbiemri == "" || mbiemri == null) {
        mbiemri = prompt("mbiemri", "");
    }
    let email = prompt("email", "");
    while (email == "" || email == null) {
        email = prompt("email", "");
    }
    let mosha = prompt("mosha", "");
    while (mosha == "" || mosha == null) {
        mosha = prompt("mosha", "");
    }
    let qyteti = prompt("qyteti", "");
    while (qyteti == "" || qyteti == null) {
        qyteti = prompt("qyteti", "");
    }
    personi = {
        Emri: emri,
        Mbiemri: mbiemri,
        Email: email,
        Mosha: mosha,
        Qyteti: qyteti
    }
    personat.push(personi);
    i++;
}
console.log(personat);

function emratEPersonave() {
    for (let i = 0; i < personat.length; i++) {
        console.log(personat[i].Emri);
    }
}
emratEPersonave();
function personatMbiMoshen18() {
    for (let i = 0; i < personat.length; i++) {
        if (personat[i].Mosha > 18) {
            console.log(personat[i]);
        }
    }
}
personatMbiMoshen18();
let qytetet = [];
for (let i = 0; i < personat.length; i++) {
    qytetet.push(personat[i].Qyteti);
}
function toUniqueArray(a){
    var newArr = [];
    for (var i = 0; i < a.length; i++) {
        if (newArr.indexOf(a[i]) === -1) {
            newArr.push(a[i]);
        }
    }
  return newArr;
}
var qytetetUnique = toUniqueArray(qytetet);
console.log(qytetetUnique);