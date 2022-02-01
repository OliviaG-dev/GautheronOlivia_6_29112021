import { getProfil, getPhotographerId } from "./service.js";

const contactButton = document.getElementById("open_button_contact");
const closeContact = document.getElementById("close_button_contact");
const form = document.querySelector("form");

contactButton.addEventListener("click", () => {
    displayModal();
})

closeContact.addEventListener("click", () => {
    closeModal();
})

async function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const NameTitle = document.querySelector(".name_modal_photographer");
    const photographerProfil = await getProfil(getPhotographerId());
    const photographerName = photographerProfil.name;
    NameTitle.textContent = photographerName;
    modal.ariaLabel = `Contact me ${photographerName}`; 
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') {
        closeModal();
    }
    })

form.addEventListener("submit", (e) => { 
    e.preventDefault();
    e.stopPropagation();
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('name');
    const emailInput = document.getElementById('mail');
    const messageInput = document.getElementById('comment');
    
    if(firstNameInput.value !='' 
    && lastNameInput.value != ''
    && emailInput.value != ''
    && messageInput.value != '') {
        
        console.log(`%c Bonjour, ${firstNameInput.value} ${lastNameInput.value}`, "color: red");
        
        console.log(`%c Votre message : ${messageInput.value} a bien été envoyé !`, "color: orange" );

        console.log(`%c Une copie du message sera disponible sur votre e-mail : ${emailInput.value}`, "color: pink");
        
        firstNameInput.value = null
        lastNameInput.value = null
        emailInput.value = null
        messageInput.value = null
        
        closeModal();
    }

});
