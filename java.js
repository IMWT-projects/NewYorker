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

/* animation for title in index 
window.onload = function() {
    var title = document.getElementById("TitleAnimation");
    title.classList.add("animate-on-load"); */

document.addEventListener("DOMContentLoaded", function() {
  var TitleAnimation = document.getElementById("TitleAnimation");

  // Animazione al caricamento della pagina
  TitleAnimation.classList.add("animate-on-load");

  // Animazione al passaggio del cursore
  TitleAnimation.addEventListener("mouseenter", function() {
    this.classList.add("animate-on-hover");
  });

  TitleAnimation.addEventListener("animationend", function() {
    this.classList.remove("animate-on-hover");
  });
});


