window.addEventListener("load", (e) => { //dit voert alle code uit die erin staat wanneer alles is geladen. soms werkt je javascript code niet als nog niet alles is geladen
    console.log("DOM loaded. Yay!");     //dit kun je ook oplossen door de javascript aan het einde van je HTML op te roepen ipv bovenaan


    //add event listeners for 'click' to our nav links

    var navButtons = document.getElementsByClassName("tabTop"); // zorgt ervoor dat de class met name tab word geselecteerd en in var navButtons word gezet
    // var navButtons = document.querySelectorAll(".tab"); kan ook maar dan moet je wel .tab gebruiken omdat dit meer kan zijn dan alleen een class
    console.log(navButtons); //hiermee zie je in de console van de inspector wat navButtons is

    for(navButton of navButtons) {
        navButton.addEventListener('click', navClickHandler);
    }

    function navClickHandler(event) {
        // make all buttons inactive (remove class active)
        for (navButton of navButtons) {
            navButton.classList.remove("active");
        };

        // make the clicked button active
        this.classList.add('active');
    }







    







});