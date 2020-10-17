function tipcalc() {
    var total = document.getElementById('total').value;
    var service = document.getElementById('qlty').value;
    var people = document.getElementById('numpp').value;
    var res = total * service / people;
    document.getElementById('result').innerHTML = res + " dollars";
}