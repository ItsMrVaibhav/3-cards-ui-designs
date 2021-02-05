let tabs = document.querySelectorAll(".Card-Tab");
let cards = document.querySelectorAll(".Card");

for (let i = 0 ; i < tabs.length ; i++) { 
    tabs[i].addEventListener("click", function() {
        
        for (let j = 0 ; j < cards.length ; j++) {
            if (!cards[j].classList.contains("Hidden")) {
                cards[j].classList.add("Hidden");    
            }
            
            if (tabs[j].classList.contains("Selected-Card-Tab")) {
                tabs[j].classList.remove("Selected-Card-Tab");    
            }
        }
        
        cards[i].classList.remove("Hidden");
        tabs[i].classList.add("Selected-Card-Tab");
    });
}