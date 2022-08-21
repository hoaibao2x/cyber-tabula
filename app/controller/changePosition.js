
function scrollFunction() {

    if ($(this).scrollTop() > 220) {
        document.querySelector(".tabula-header").classList.add("change__position");
    } else {
        document.querySelector(".tabula-header").classList.remove("change__position");
    }
}

window.onscroll = scrollFunction;