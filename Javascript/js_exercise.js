function set() {
    var string = document.getElementById('input1').value;
    document.getElementById('s1').innerHTML = string;
}

function checkDate() {
    var date1 = document.getElementById('date1').value;
    var date2 = document.getElementById('date2').value;
    if (date1==''||date2=='') {
        alert('Attention! Please enter two different dates.');
    }   else if (date1==date2) {
            alert('Attention! The two dates must be different.');
    }   else {
            alert('Correct!')
    }
}