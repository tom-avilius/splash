// imports
const { contextBridge,} = require('electron')

// importing child process module
const {exec} = require('child_process');

// importing os-utils module
const osUtil = require('os-utils');

// always add this class to a div element
// class to enable draggability for elements in the splash window
class Draggable {

    constructor (element) {

        this.element = element;

        // setting the position of the element as absolute
        this.element.style.position = 'absolute';
        
        // initializing X and Y pos of element
        this.posX = 0;
        this.posY = 0;

        // checking if some data is already stored in the localStorage
        if (localStorage.length != 0) {

            // expected error might be undefined being returned from the local storage
            try {

                // getting the X and Y positions of the element
                this.posX = localStorage.getItem(element+'PosX');
                this.posY = localStorage.getItem(element+'PosY');

                // setting the top and left offset of the element
                this.element.style.left = localStorage.getItem(element+'OffsetLeft');
                this.element.style.top = localStorage.getItem(element+'OffsetTop');
            } catch (err) {

                console.error(err);
            }
        }

        // adding mousedown event listener to the element to know
        // when the element is being dragged
        this.element.addEventListener('mousedown', this.mouseDownHandler);
    }

    // to handle mouse down event to trigger clockging
    mouseDownHandler = (event) => {

        // finding x and y coordinates of the mouse down event
        this.posX = event.clientX;
        this.posY = event.clientY;

        // adding event to the document
        // these event listeners will be removed at the mouse up event
        document.addEventListener('mousemove', this.mouseMoveHandler);
        document.addEventListener('mouseup', this.mouseUpHandler);
    }

     // to handle dragging when mouse moves
    mouseMoveHandler = (event) => {

        // the distance mouse has been moved by
        var changeX = event.clientX - this.posX;
        var changeY = event.clientY - this.posY;

        // new position of the element
        this.element.style.left = (this.element.offsetLeft + changeX) + 'px';
        this.element.style.top = (this.element.offsetTop + changeY) + 'px';

        // set new mouse position
        this.posX = event.clientX;
        this.posY = event.clientY;

        // saving data to local storage
        localStorage.setItem(this.element+'PosX', this.posX+'');
        localStorage.setItem(this.element+'PosY', this.posY+'');

        localStorage.setItem(this.element+'OffsetLeft', (this.element.offsetLeft + changeX) + 'px');
        localStorage.setItem(this.element+'OffsetTop', (this.element.offsetTop + changeY) + 'px');
    }

    // to handle mouse up event to abort dragging and remove event listeners attached to the document
    mouseUpHandler = () => {

        document.removeEventListener('mousemove', this.mouseMoveHandler);
        document.removeEventListener('mouseup', this.mouseUpHandler);
    }
}

// to measure time
function startTime(callback) {
    var date = new Date();
    
    callback(date);

    setTimeout(startTime, 1000)   
}

// api to extend terminal functionality
contextBridge.exposeInMainWorld('terminal', {
    execute: async (command, execOptions = {}) => {
        return new Promise((resolve, reject) => {
            const childProcess = exec(command, execOptions);

            // stream process output to console
            childProcess.stderr.on('data', data => console.error(data));
            childProcess.stdout.on('data', data => console.log(data));
            // handle exit
            childProcess.on('exit', () => resolve());
            childProcess.on('close', () => resolve());
            // handle errors
            childProcess.on('error', error => reject(error));
            })
    },
})

// api to extend information regarding the system
contextBridge.exposeInMainWorld('os', {
    cpu: osUtil.cpuUsage,

    ram: () => { return osUtil.freememPercentage() * 100 },

    platform: () => osUtil.platform(),
})

// api to extend functionality relating to the html elements
contextBridge.exposeInMainWorld('element', {

    draggable: (element) => new Draggable(element),
})

// api to extend memory capabilities - storing, retreiving data
contextBridge.exposeInMainWorld('disk', {

    store: (key, value) => {

            localStorage.setItem(key+'', value+'');
        },

    get: (key) => {

            return localStorage.getItem(key+'');
        },

    free: (key) => {

            localStorage.removeItem(key+'');
        },
    
    clear: () => {

            localStorage.clear();
        },

    length: () => {

            return localStorage.length;
        },
})
