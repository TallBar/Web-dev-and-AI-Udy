var z = 0;
var colarray = ['red','green','black','white','purple','blue','yellow']
var t = 0;

function plus() {
  z += 1
  t += 20
  document.getElementById('varz').innerHTML = ('Count:'+ z);
  document.body.style.backgroundColor= 'rgb(' + 50 + ',' + 70 + ',' + t +')'
}

function minus() {
  z = z - 1
  t = t - 20
  document.getElementById('varz').innerHTML =('Count:'+z);
  document.body.style.backgroundColor= 'rgb(' + 50 + ',' + 20 + ',' + t +')'
}
