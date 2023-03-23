
// constants and variables declarations

// vertical navbar items
const vnav1 = document.getElementById('vnav1');
const vnav2 = document.getElementById('vnav2');
const vnav3 = document.getElementById('vnav3');
const vnav4 = document.getElementById('vnav4');
const vnav5 = document.getElementById('vnav5');
const vnav6 = document.getElementById('vnav6');

// the dropdown button DOM element
const dropdownButton = document.getElementById('dropdown-arrow');
// the content DOM element where the website content is displayed
const contentDOM = document.getElementsByClassName('content')[0];
// the footer DOM
const footerDOM = document.getElementsByTagName('footer')[0];
// the additional navbar to show when the dropdown 
// button is clicked
const additionalNavbar = document.getElementsByClassName('navbar-additional')[0];

// ---------------------END OF DECLARATIONS-------------------------



// all event listeners are attached below

// adding click event listener to vnav1 to simulate click behavior
vnav1.addEventListener('click', (event) => {

    vnav1.classList.add('vnav-item-click');

    vnav2.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
    vnav4.classList.remove('vnav-item-click');
    vnav5.classList.remove('vnav-item-click');
    vnav6.classList.remove('vnav-item-click');
});


// adding click event listener to vnav2 to simulate click behavior
vnav2.addEventListener('click', (event) => {

    vnav2.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
    vnav4.classList.remove('vnav-item-click');
    vnav5.classList.remove('vnav-item-click');
    vnav6.classList.remove('vnav-item-click');
});

// adding click event listener to vnav3 to simulate click behaviour
vnav3.addEventListener('click', (event) => {

    vnav3.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav2.classList.remove('vnav-item-click');
    vnav4.classList.remove('vnav-item-click');
    vnav5.classList.remove('vnav-item-click');
    vnav6.classList.remove('vnav-item-click');
})

// adding click event listener to vnav4 to simulate click behaviour
vnav4.addEventListener('click', (event) => {

    vnav4.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav2.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
    vnav5.classList.remove('vnav-item-click');
    vnav6.classList.remove('vnav-item-click');
})

// adding click event listener to vnav5 to simulate click behaviour
vnav5.addEventListener('click', (event) => {

    vnav5.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav2.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
    vnav4.classList.remove('vnav-item-click');
    vnav6.classList.remove('vnav-item-click');
});

// adding click event listener to vnav6 to simulate click behaviour
vnav6.addEventListener('click', (event) => {

    vnav6.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav2.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
    vnav4.classList.remove('vnav-item-click');
    vnav5.classList.remove('vnav-item-click');
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