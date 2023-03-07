
// all constant and variable declarations are mentioned below 
// showcase img elements and their text
const wintersKiss = document.getElementById('winters-kiss');
const wintersKissText = document.getElementById('winters-kiss-text');

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