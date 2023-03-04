
// constants and variables declarations

// vertical navbar items
const vnav1 = document.getElementById('vnav1');
const vnav2 = document.getElementById('vnav2');
const vnav3 = document.getElementById('vnav3');

// ---------------------END OF DECLARATIONS-------------------------



// all event listeners are attached below

// adding click event listener to vnav1 to simulate click behavior
vnav1.addEventListener('click', (event) => {

    vnav1.classList.add('vnav-item-click');

    vnav2.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
});


// adding click event listener to vnav2 to simulate click behavior
vnav2.addEventListener('click', (event) => {

    vnav2.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav3.classList.remove('vnav-item-click');
});

// adding click event listener to vnav3 to simulate click behaviour
vnav3.addEventListener('click', (event) => {

    vnav3.classList.add('vnav-item-click');

    vnav1.classList.remove('vnav-item-click');
    vnav2.classList.remove('vnav-item-click');
})
