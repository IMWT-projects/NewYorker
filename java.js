function set() {
    var textInputValue = document.getElementById('textInput').value;
    document.getElementById('s1').innerText = textInputValue;
}

function verifyDates() {
    var firstDate = document.getElementById('firstDate').value;
    var secondDate = document.getElementById('secondDate').value;

    if (firstDate === '' || secondDate === '') {
        alert('Please fill in both dates.');
        return;
    }

    if (firstDate === secondDate) {
        alert('The dates should be different.');
        return;
    }

    alert('Dates are valid.');
}