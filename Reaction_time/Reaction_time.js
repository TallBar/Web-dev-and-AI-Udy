// for later when things can get more elaborate
// var w = window.innerWidth
// var h = window.innerHeight
// var dv_hd_height = document.getElementById('header').offsetHeight
// var dv_hd_width = document.getElementById('header').offsetWidth
// var actual_available_height = (h - dv_hd_height);
        // var actual_available_width = (w - dv_hd_width);
        //calculates the available space in terms of the object size and window size

//function that starts the experience
function start() {
    document.getElementById('field').style.display = 'block';
}

// Add lag to functions
function Delay() {
setTimeout(start,2000);
}


function randlag() {
    // Define a random period to lag random() functIon
    var this_period = Math.random()*1000;
    // Set lag for random()
    setTimeout(random, this_period);
    // Object only visible when random() called again
    document.getElementById('object').style.display = 'none';
}

// function that randomizes color and shapes of objects to appear
function random() {
    // Object appears
    document.getElementById('object').style.display = 'block';
    // Set random x and y coordinates in the form of percentages
    var tp_obj = Math.random()*300;
    var sd_obj_pct = Math.random()*1100;

    // Set random color value
    document.getElementById('object').style.backgroundColor = 'rgb(' + Math.random()*255 + ',' + Math.random()*255 + ',' + Math.random()*255 + ')';
    
    // Set value to decide if square of circle
    var shape = Math.random()

    // Change position & shape
    document.getElementById('object').style.left = sd_obj_pct + 'px';
    document.getElementById('object').style.top = tp_obj + 'px';
    // Use shape value to change shape
    if(shape <= 0.5) {
    document.getElementById('object').style.borderRadius = '50%'
    }else{
        document.getElementById('object').style.borderRadius = '0%'
    }
 }

// function that measures reaction time and adds semi-random lag for next appearance

