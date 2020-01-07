export function toggleDropdown(id) {
    document.getElementById(id).classList.toggle("show");
    let dds = document.getElementsByClassName('dropdown');
    dds.forEach(dd => {
        if (dd.id !== id) dd.classList.remove("show");
    });
}

