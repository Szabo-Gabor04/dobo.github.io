var tomb = ["kep1.png", "kep2.png", "kep3.png", "kep4.png", "kep5.png", "kep6.png"];

function dobas() {
    
    var randomIndex1 = Math.floor(Math.random() * tomb.length);
    var randomIndex2 = Math.floor(Math.random() * tomb.length);

  
    var kepide1 = document.getElementById("kepide1");
    var kepide2 = document.getElementById("kepide2");
    kepide1.src = tomb[randomIndex1];
    kepide2.src = tomb[randomIndex2];


    var ertek1 = tomb.indexOf(tomb[randomIndex1]) + 1;
    var ertek2 = tomb.indexOf(tomb[randomIndex2]) + 1;
    var osszeg = ertek1 + ertek2;

   
    var dotElement = document.querySelector(".dot");
    dotElement.textContent = osszeg;
}
