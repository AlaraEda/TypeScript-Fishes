//
//For-Loop die 100 visjes & bellen creeert
//
    let i;
    for (i = 0; i < 100; i++) {
        //Vis vertraging
        setTimeout(function(){
            //ScreenSize geeft de lengte en breedte aan van het scherm
            let screenSize = window.innerWidth * 0.9
            let screenSize2 = window.innerHeight * 0.8

            //Math.Random() zorgt voor een getal tussen de 0-1.
            //Door Math.Random() * screensize te doen zorgt Math Random voor een groter getal.
            let randomNumber = Math.random() * screenSize
            let randomNumber2 = Math.random() * screenSize2
            let randomNumber3 = Math.random() * 360

            //Vis creeeren
            let fishes = document.createElement("fish")                    //Creert vis in de DOM. de "fish" zit verwerkt in style.css
            document.body.appendChild(fishes)                              //Zorgt dat de vis in de body van de DOM gestopt word

            //Vissen zijn clickabel
            fishes.addEventListener("click", dooieVis)

                //dooie vis
                function dooieVis(){
                    console.log("clicked")
                    fishes.classList.add("dead")                           //Want in CSS staat de afbeelding van bot vis als .dead
                                                                           //.dead is het zelfde als "select all elements met de class = "dead"
                                                                           //Dus moet je niet.dead maar dead typen tussen de haakjes.
                                                                           //Plus je veranderd de vis eigenschap. Dus moet je fishes doen.
                }

            //Posities/locaties vis
            fishes.style.left = randomNumber + "px"
            fishes.style.top = randomNumber2 + "px"

            //Kleuren van de vis
            fishes.style.webkitFilter = "hue-rotate("+ randomNumber3+ "deg)"
            fishes.style.filter = "hue-rotate(" + randomNumber3 + "deg)"   //Binnen  0 - 360
        }, i* 100)                                                          //Om de 0,1 sec een nieuwe vis.

        //Bel vertraging
        setTimeout(function(){
            //Random nummer voor de scherm grootte in breedte en hoogte
            let screenSize = window.innerWidth * 0.9                        //Scherm breedte
            let screenSize2 = window.innerHeight                            //Scherm hoogte

            let randomNumber4 = Math.random() * screenSize                  //Random getal in Scherm Breedte
            let randomNumber5 = Math.random() * screenSize2                 //Random getal in Scherm Hoogte

            //Bubbel creeeren
            let bubbles = document.createElement("bubble")                   //Creert bubbel via DOM
            document.body.appendChild(bubbles)                               //Zorgt dat de bubbel in de body van de DOM bevind

            //Posities/Locaties
            bubbles.style.left = randomNumber4 + "px"
            bubbles.style.top = randomNumber5 + "px"
        }, i * 100)                                                          //Om de 0,1 sec een nieuwe bel.

    }