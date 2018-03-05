/**
 * Toggle menu.
 */
function showMenu()
{
    let menu = document.getElementById('header-nav');
    let menuIcon = document.getElementById('menu-icon');

    if(menu.style.display !== 'block') {
        menu.style.display = 'block';
        menuIcon.childNodes[0].className = 'fa fa-times';
    } else {
        menu.style.display = 'none';
        menuIcon.childNodes[0].className = 'fa fa-bars';
    }
}

/**
 * Shake footer.
 */
function animateFooter()
{
    let footer = document.getElementById('social');

    footer.style.animation = 'shake 1s';

    footer.addEventListener('animationend', function () {
        footer.removeAttribute('style');
    });
}