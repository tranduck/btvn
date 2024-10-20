document.getElementById('main-menu').addEventListener('click', function () {
    var submenu = document.getElementById('submenu');
    if (submenu.style.display === "block") {
        submenu.style.display = "none";
    } else {
        submenu.style.display = "block";
    }
});
