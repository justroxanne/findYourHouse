export function createCard(array){

    //Call the parent
        let allCards = document.querySelector(".cards");
    
    // On fait une boucle pour générer une carte pour chaque élément du tableau
        array.forEach(item => {
            let cardTemplate = document.createElement("div");
            let cardHeader = document.createElement("div");
            let cardBody = document.createElement("div");
            let cardDescription = document.createElement("p");
            let cardTitle = document.createElement("h2");
            let wantedButton = document.createElement("button");
    
    // On attribue une classe à chaque élément créé
        cardTemplate.classList.add("card");
        cardHeader.classList.add("card-header");
        cardBody.classList.add("card-body");
        cardDescription.classList.add("card-description");
        wantedButton.classList.add("card-button");
    
    //On génère le contenu des cartes
        cardHeader.innerHTML = `<div class="card-img" style="background-image:url('${item.img}')"></div>`;
        cardTitle.innerText = `${item.name}`
        cardDescription.innerText = `${item.desc}`
        wantedButton.innerText = "I want it!"
    
    // On rattache chaque élément à son parent
        cardBody.appendChild(cardTitle);
        cardBody.appendChild(cardDescription);
        cardTemplate.appendChild(cardHeader);
        cardTemplate.appendChild(cardBody);
        allCards.appendChild(cardTemplate);
        cardBody.appendChild(wantedButton)
        })
    
    }
    