function google_search_button() {
    var search_google = document.getElementById("search_google").value;
    var search = 'https://www.google.com/search?q=' + search_google

    window.open(search,'_Blank')
    console.log(search_google);
}

function button_copy() {
    var to_copy =  document.getElementById("copy_text").value;
    document.getElementById("copy_label").innerHTML = to_copy;
    console.log(to_copy);
}




function time() {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let time = hours + ":" + minutes + ":" + seconds;

    document.getElementById("time").innerText = time;

    time_changer();
    
}


function time_changer() {
    setTimeout(time,1000);
}

time()

// By Crius Behera