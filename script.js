function toggleAnswer(answerId) {
    var answer = document.getElementById(answerId);
    answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
}

function openDay(evt, dayName) {
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Set the default tab (Day 1) to be open on page load
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.tablinks').click();
}, false);

function toggleMenu() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active');
    navbar.classList.toggle('expanded');
}

const startScale = 200;
const endScale = 1000;

window.addEventListener('scroll', function() {
    var scrollPosition = window.pageYOffset;
    var maxHeight = document.body.scrollHeight - window.innerHeight;
    var scale = (startScale + (endScale - startScale) * (scrollPosition / maxHeight)) / 100;

    if (scale > 1.5) scale = 1.5;

    var logoImage = document.querySelector('.image-wrapper img.logo');
    logoImage.style.transform = 'scale(' + scale + ')';
});