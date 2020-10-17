var car = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi",'Cosco'];
var para = "";

for(i=0;i < car.length; i++) {
    para += car[i] + ' <br>'
}

document.getElementById('carmodels').innerHTML = para;