var hour = new Date().getHours();

/*
Midnight = 0 am
Morning = hour > 0 && hour <12
Midday = 12 am
Evening = hour > 12 && hour < 18
Night = hour >18 && hour < 0
*/

if(hour == 0) {
  document.getElementById('alter').innerHTML = "Good Midnight"
}else if (hour > 0 && hour < 12) {
  document.getElementById('alter').innerHTML = "Good Morning"
}else if (hour == 12) {
  document.getElementById('alter').innerHTML = "Good Midday"
}else if (hour > 12 && hour < 18) {
  document.getElementById('alter').innerHTML = "Good Evening"
  document.getElementById('gretim').src = "https://upload.wikimedia.org/wikipedia/commons/0/09/Beautiful_Sunset_Clouds.jpg"
}else{
  document.getElementById('alter').innerHTML = "Good Night"
  document.getElementById('gretim').src = "https://upload.wikimedia.org/wikipedia/commons/c/c4/View_across_the_bay_of_Naples_at_night.jpg"
}
