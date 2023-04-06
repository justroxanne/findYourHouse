import {houseToRent} from './houseToRent.js'
import {createCard} from './createCard.js'


//On apelle la fonction createCard pour générer une carte par maison
createCard(houseToRent);





// Création du listener sur la checkbox

const availableCheckbox = document.querySelector('.available-checkbox');

availableCheckbox.addEventListener('change', function(result){
    let allCards = document.querySelector(".cards");
    result = this.checked;
    if (this.checked) {
        allCards.innerHTML = '';
        let availableHouses = houseToRent.filter(house => house.available == true);
        createCard(availableHouses);
    } else {
        allCards.innerHTML = '';
        createCard(houseToRent);
    }
})





// Création du listener  sur la selecteur

const selectItem = document.querySelector('.select');

selectItem.addEventListener('change', function(event){
    let allCards = document.querySelector(".cards");
    let selectedItem = event.target.value;
    if (selectedItem === 'Flat') {
        allCards.innerHTML = '';
        let flat = houseToRent.filter(item => item.type ==='Flat');
        createCard(flat);
    } else if (selectedItem === 'House') {
        allCards.innerHTML = '';
        let house = houseToRent.filter(item => item.type ==='House');
        createCard(house);
    } else {
        allCards.innerHTML = '';
        createCard(houseToRent);
    }
})



//Création du listener sur l'input de recherche

const filterHouse = document.querySelector('.search-input');

filterHouse.addEventListener('change', function(event){
    let allCards = document.querySelector('.cards');
    let filtered = event.target.value.toLowerCase();
    allCards.innerHTML = '';
    let filteredItem = houseToRent.filter(item => item.name.toLowerCase().includes(filtered));
    createCard(filteredItem);
});

