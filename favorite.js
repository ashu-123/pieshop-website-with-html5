function save() {
    localStorage.setItem("applepie", true);
}
window.onload = function () {
    var favorite = document.getElementById('favorite');
    if (window.localStorage) {
        var storage = window.localStorage;
        if (storage.getItem("applepie") == 'true') {
            favorite.innerHTML = "Apple Pie is my favorite";
        }
    }
}