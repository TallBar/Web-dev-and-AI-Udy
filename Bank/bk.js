var correctName = 'Talles Gabriel';
var correctPassword = '1234';
var currentbalance = 500;

function withdraw(){
  var nameAttempt=document.getElementById('nameform').value;
  var passwordattempt=document.getElementById('passwordform').value;
  var amountattempt=document.getElementById('amountform').value;

  if (nameAttempt != correctName) {
    document.getElementById('feedback').innerHTML="Incorrect name. Try again!"
  }else if (passwordattempt != correctPassword) {
    document.getElementById('feedback').innerHTML="Incorrect password. Try again!"
  } else if (amountattempt > currentbalance) {
    document.getElementById('feedback').innerHTML="Incorrect name. Try again!"
  } else{
    document.getElementById('feedback').innerHTML="Withdraw success!"
  }
}
