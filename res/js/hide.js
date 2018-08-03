function HideDevSection() {
    var x = document.getElementById("devitems");
    var x2 = document.getElementById("aboutmeitems");
    var x3 = document.getElementById("musicitems");
    if (x.style.display === "none") {
        x.style.display = "block";
        x2.style.display = "none";
        x3.style.display = "none"; 
    } else {
        x.style.display = "none";
    }
}
function HideAboutMeSection() {
    var x = document.getElementById("aboutmeitems");
    var x2 = document.getElementById("devitems");
    var x3 = document.getElementById("musicitems");
    if (x.style.display === "none") {
        x.style.display = "block";
        x2.style.display = "none";  
        x3.style.display = "none"; 
    } else {
        x.style.display = "none";
    }
}
function HideMusicSection() {
    var x = document.getElementById("musicitems");
    var x2 = document.getElementById("aboutmeitems");
    var x3 = document.getElementById("devitems");
    if (x.style.display === "none") {
        x.style.display = "block";
        x2.style.display = "none"; 
        x3.style.display = "none"; 
    } else {
        x.style.display = "none";
    }
}
function HideAllSection() {
    var x = document.getElementById("musicitems");
    var x2 = document.getElementById("aboutmeitems");
    var x3 = document.getElementById("devitems");
    x.style.display = "none";
    x2.style.display = "none"; 
    x3.style.display = "none"; 
}