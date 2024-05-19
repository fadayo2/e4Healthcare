let drpDown = document.getElementById('drpdown');
let cancel = document.getElementById('cancel');
let menu = document.getElementById('menu');

const drpD = () => {
    drpDown.style.height = '250px';
    menu.style.cssText = 'display : none !important ;'
    cancel.style.cssText = 'display : block !important ;'
};

const drpU = () => {
    drpDown.style.height = '0px';
    menu.style.cssText = 'display : block !important ;'
    cancel.style.cssText = 'display : none !important ;'
};