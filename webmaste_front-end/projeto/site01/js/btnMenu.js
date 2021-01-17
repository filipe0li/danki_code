const $menu = document.querySelector('.formulario');
function menu() {
    if ($menu.classList.contains('menu_open')) {
        $menu.classList.remove('menu_open');
    } else {
        $menu.classList.add('menu_open');
    }
}
