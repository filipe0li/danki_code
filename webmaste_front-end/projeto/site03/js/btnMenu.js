const $menu = document.querySelector('.open');
function menu() {
    if ($menu.classList.contains('close')) {
        $menu.classList.remove('close');
    } else {
        $menu.classList.add('close');
    }
}
