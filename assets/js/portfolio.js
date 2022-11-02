/**
 * 
 * @param { string } id ID of the display element
 */

function display (id, btn) {
    ['intro', 'goal', 'academic', 'project', 'contact']
        .forEach(page => 
            document.getElementById(page).style.display = 'none'
        );

    document.getElementById(id).style.display = 'block';
};