
// all declarations are mentioned below

// the dropdown button DOM element
const dropdownButton = document.getElementById('dropdown-arrow');
// the content DOM element where the website content is displayed
const contentDOM = document.getElementsByClassName('content')[0];
// the footer DOM
const footerDOM = document.getElementsByTagName('footer')[0];
// the additional navbar to show when the dropdown 
// button is clicked
const additionalNavbar = document.getElementsByClassName('navbar-additional')[0];

// ---------------------------------------------



// attachment of event listeners is mentioned below

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
