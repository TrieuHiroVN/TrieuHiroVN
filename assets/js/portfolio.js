/**
 * 
 * @param { string } id ID of the display element
 */

function display (id, btn) {
    const displays = document.getElementsByClassName('portfolio__content');
    for (const element of displays) {
        element.style.display = 'none';
    };

    document.getElementById(id).style.display = 'block';
};