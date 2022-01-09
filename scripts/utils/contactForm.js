import { getProfil, getPhotographerId } from "./service.js";

const contactButton = document.getElementById("open_button_contact");
const closeContact = document.getElementById("close_button_contact")

contactButton.addEventListener("click", () => {
    displayModal();
})

closeContact.addEventListener("click", () => {
    closeModal();
})



async function displayModal() {
    const modal = document.getElementById("contact_modal");
	modal.style.display = "block";
    const NameTitle = document.querySelector(".title_modal_contact");
    const photographerProfil = await getProfil(getPhotographerId());
    const photographerName = photographerProfil.name;
    NameTitle.textContent = `Contactez-moi ${photographerName}`;
    console.log(photographerName);
}

function closeModal() {
    const modal = document.getElementById("contact_modal");
    modal.style.display = "none";
}

