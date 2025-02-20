
// all constant and variable declarations are mentioned below 
// showcase img elements and their text
// winter's kiss
const wintersKiss = document.getElementById('01');
const wintersKissText = document.getElementById('01-tx');
// pine
const pine = document.getElementById('02');
const pineText = document.getElementById('02-tx');
// her sweet kiss
const herSweetKiss = document.getElementById('03');
const herSweetKissText = document.getElementById('03-tx');
// the dropdown button DOM element
const dropdownButton = document.getElementById('dropdown-arrow');
// the content DOM element where the website content is displayed
const contentDOM = document.getElementsByClassName('content')[0];
// the footer DOM
const footerDOM = document.getElementsByTagName('footer')[0];
// the additional navbar to show when the dropdown 
// button is clicked
const additionalNavbar = document.getElementsByClassName('navbar-additional')[0];

// ------------END OF DECLARATIONS-----------------


// all event listeners are mentioned below

// event listeners attached to showcase image elements 
// they help to bring behaviour to the images 
// the hover event causes the name of the theme to appear at the center of the image 
// as an anchor tag. Thus, providing the link to the theme's page.

// hover listener to the winter's kiss element
wintersKiss.addEventListener("mouseover", (event) => {

    wintersKissText.style.opacity = '1';
    wintersKiss.style.filter = "blur(2px)";
});

wintersKiss.addEventListener('mouseout', (event) => {

    wintersKissText.style.opacity = "0";
    wintersKiss.style.filter = 'none';
});

wintersKissText.addEventListener('mouseover', (event) => {

    wintersKissText.style.opacity = "1";
    wintersKiss.style.filter = "blur(2px)";
});

// hover listener to the pine element
pine.addEventListener("mouseover", (event) => {

    pineText.style.opacity = '1';
    pine.style.filter = "blur(2px)";
});

pine.addEventListener('mouseout', (event) => {

    pineText.style.opacity = "0";
    pine.style.filter = 'none';
});

pineText.addEventListener('mouseover', (event) => {

    pineText.style.opacity = "1";
    pine.style.filter = "blur(2px)";
});

// hover listener to the her sweet kiss element
herSweetKiss.addEventListener("mouseover", (event) => {

    herSweetKissText.style.opacity = '1';
    herSweetKiss.style.filter = "blur(2px)";
});

herSweetKiss.addEventListener('mouseout', (event) => {

    herSweetKissText.style.opacity = "0";
    herSweetKiss.style.filter = 'none';
});

herSweetKissText.addEventListener('mouseover', (event) => {

    herSweetKissText.style.opacity = "1";
    herSweetKiss.style.filter = "blur(2px)";
});


// adding event listener to the dropdown button to
// enable dropdown of the navbar
dropdownButton.addEventListener("click", (event) => {

    console.log('heh')
    additionalNavbar.classList.remove('hidden');
});

// adding event listener to the footer DOM 
// to hide the dropdown navbar 
footerDOM.addEventListener('click', (event) => {

    additionalNavbar.classList.add('hidden');
});

// adding event listener to the content DOM
// to hide the dropdown navbar
contentDOM.addEventListener('click', (event) => {

    additionalNavbar.classList.add('hidden');
});

// update the date
const date = document.getElementById("date");
date.innerText = new Date().getFullYear();
