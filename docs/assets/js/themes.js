
// all constant and variable declarations are mentioned below 
// showcase img elements and their text
// winter's kiss
const wintersKiss = document.getElementById('winters-kiss');
const wintersKissText = document.getElementById('winters-kiss-text');
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

    wintersKissText.classList.add('centered');
    wintersKissText.classList.remove('hidden');
    wintersKiss.classList.add('showcase-blur');
});

wintersKiss.addEventListener('mouseout', (event) => {

    wintersKissText.classList.add('hidden');
    wintersKissText.classList.remove('centered');
    wintersKiss.classList.remove('showcase-blur');
});

wintersKissText.addEventListener('mouseover', (event) => {

    wintersKissText.classList.add('centered');
    wintersKissText.classList.remove('hidden');
    wintersKiss.classList.add('showcase-blur');
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