
// all declarations are mentioned below

// getting the content divs
const content1 = document.getElementById('content-1');
const content2 = document.getElementById('content-2');
const content3 = document.getElementById('content-3');

// getting the hr, p, h1 and download elements of content divs
const hr1 = document.getElementById('hr-1');
const hr2 = document.getElementById('hr-2');
const hr3 = document.getElementById('hr-3');

const p1 = document.getElementById('p-1');
const p2 = document.getElementById('p-2');
const p3 = document.getElementById('p-3');

const h11 = document.getElementById('h1-1');
const h12 = document.getElementById('h1-2');
const h13 = document.getElementById('h1-3');

const d1 = document.getElementById('d-1');
const d2 = document.getElementById('d-2');
const d3 = document.getElementById('d-3');

// the dropdown button DOM element
const dropdownButton = document.getElementById('dropdown-arrow');
// the content DOM element where the website content is displayed
const contentDOM = document.getElementsByClassName('content')[0];
// the footer DOM
const footerDOM = document.getElementsByTagName('footer')[0];
// the additional navbar to show when the dropdown 
// button is clicked
const additionalNavbar = document.getElementsByClassName('navbar-additional')[0];


// -----------------------------------------------------------------

// adding hover behaviour to content-1
content1.addEventListener('mouseover', (event) => {

    hr1.classList.add('hr-hover');
    p1.classList.add('p-hover');
    h11.classList.add('h1-hover');
    d1.classList.remove('hidden');

    content1.addEventListener('mouseleave', (event) => {

        hr1.classList.remove('hr-hover');
        p1.classList.remove('p-hover');
        h11.classList.remove('h1-hover');
        d1.classList.add('hidden');
        content1.removeEventListener('mouseleave', (event) => { });
    });
});

// adding hover behaviour to content-2
content2.addEventListener('mouseover', (event) => {

    hr2.classList.add('hr-hover');
    p2.classList.add('p-hover');
    h12.classList.add('h1-hover');
    d2.classList.remove('hidden');

    content2.addEventListener('mouseleave', (event) => {

        hr2.classList.remove('hr-hover');
        p2.classList.remove('p-hover');
        h12.classList.remove('h1-hover');
        d2.classList.add('hidden');
        content2.removeEventListener('mouseleave', (event) => { });
    });
});

// adding hover behaviour to content-3
content3.addEventListener('mouseover', (event) => {

    hr3.classList.add('hr-hover');
    p3.classList.add('p-hover');
    h13.classList.add('h1-hover');
    d3.classList.remove('hidden');

    content3.addEventListener('mouseleave', (event) => {

        hr3.classList.remove('hr-hover');
        p3.classList.remove('p-hover');
        h13.classList.remove('h1-hover');
        d3.classList.add('hidden');
        content3.removeEventListener('mouseleave', (event) => { });
    });
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
const dateElement = document.getElementById("date");
dateElement.innerText = new Date().getFullYear();
