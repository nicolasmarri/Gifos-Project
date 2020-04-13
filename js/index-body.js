document.addEventListener('DOMContentLoaded', () => {
    let q = document.querySelector('#inputSearch');
    let containerOps = document.querySelector('#containerOpciones');
    let lupa = document.querySelector('#lupa');
    let btnSearch = document.querySelector('#btnSearch');
    let themeDay = document.querySelector('#daySearch');

    q.onkeyup = () => {
        if (q.value.trim() != "" && themeDay.className == 'search') {
            containerOps.style.display = 'block';
            lupa.setAttribute('src', './images/lupa.svg');
            btnSearch.setAttribute('class', 'button-search-active');
        } else if (q.value.trim() == "" && themeDay.className == 'search') {
            containerOps.style.display = 'none';
            lupa.setAttribute('src', './images/lupa_inactive.svg');
            btnSearch.setAttribute('class', 'button-search');
        } else if (q.value.trim() != "" && themeDay.className == 'black-search') {
            containerOps.style.display = 'block';
            lupa.setAttribute('src', './images/lupa_light.svg');
            btnSearch.setAttribute('class', 'black-button-search-active');
        } else {
            containerOps.style.display = 'none';
            lupa.setAttribute('src', './images/lupa_inactive.svg');
            btnSearch.setAttribute('class', 'black-button-search');
        }
    }
})
