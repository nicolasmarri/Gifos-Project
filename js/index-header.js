document.addEventListener('DOMContentLoaded', () => {
    let btnTheme = document.querySelector('#buttonTheme');
    let buttonThemeDrop = document.querySelector('#buttonThemeDrop');
    let optionTheme = document.querySelector('#optionTheme');
    let btnOptionDay = document.querySelector('#optionDay');
    let btnOptionBlack = document.querySelector('#optionBlack');

    btnTheme.onclick = () => {
        if (optionTheme.style.display = 'none') optionTheme.style.display = 'flex'
    }

    buttonThemeDrop.onclick = () => {
        if (optionTheme.style.display = 'none') optionTheme.style.display = 'flex'
    }

    btnOptionDay.onclick = () => {
        localStorage.setItem('color', 'day')
        if (optionTheme.style.diplay = 'flex') optionTheme.style.display = 'none';
        document.querySelector('#bodyStyle').setAttribute('class', 'body');
        document.querySelector('#darkLogo').setAttribute('src', './images/gifOF_logo.png');
        document.querySelector('#blackBtnCrear').setAttribute('class', 'button-crear');
        document.querySelector('#blackBtnStyleCrear').setAttribute('class', 'style-button-crear');
        document.querySelector('#buttonTheme').setAttribute('class', 'button-elegir');
        document.querySelector('#styleBtnElegir').setAttribute('class', 'style-button-elegir');
        document.querySelector('#buttonThemeDrop').setAttribute('class', 'button-drop');
        document.querySelector('#BtnGifos').setAttribute('class', 'container-gifos');
        document.querySelector('#optionDay').setAttribute('class', 'option-day');
        document.querySelector('#optionBlack').setAttribute('class', 'option-night');
        document.querySelector('#daySearch').setAttribute('class', 'search');
        document.querySelector('#dayContainerSearch').setAttribute('class', 'container-search');
        document.querySelector('#inputSearch').setAttribute('class', 'input-search');
        document.querySelector('#btnSearch').setAttribute('class', 'button-search');
        document.querySelector('#lupa').setAttribute('src', './images/lupa_inactive.svg');
        document.querySelector('#containerOpciones').setAttribute('class', 'container-opciones');
        document.querySelector('#btnOpciones').setAttribute('class', 'opciones');
    }

    btnOptionBlack.onclick = () => {
        localStorage.setItem('color', 'black')
        if (optionTheme.style.diplay = 'flex') optionTheme.style.display = 'none'
        document.querySelector('#bodyStyle').setAttribute('class', 'black-body')
        document.querySelector('#darkLogo').setAttribute('src', './images/gifOF_logo_dark.png')
        document.querySelector('#blackBtnCrear').setAttribute('class', 'black-button-crear')
        document.querySelector('#blackBtnStyleCrear').setAttribute('class', 'style-black-button-crear')
        document.querySelector('#buttonTheme').setAttribute('class', 'black-button-elegir')
        document.querySelector('#styleBtnElegir').setAttribute('class', 'style-black-button-elegir')
        document.querySelector('#buttonThemeDrop').setAttribute('class', 'black-button-drop')
        document.querySelector('#BtnGifos').setAttribute('class', 'black-container-gifos')
        document.querySelector('#optionDay').setAttribute('class', 'option-black')
        document.querySelector('#optionBlack').setAttribute('class', 'option-night-black')
        document.querySelector('#daySearch').setAttribute('class', 'black-search')
        document.querySelector('#dayContainerSearch').setAttribute('class', 'black-container-search')
        document.querySelector('#inputSearch').setAttribute('class', 'black-input-search')
        document.querySelector('#btnSearch').setAttribute('class', 'black-button-search')
        document.querySelector('#lupa').setAttribute('src', './images/Combined Shape.svg')
        document.querySelector('#containerOpciones').setAttribute('class', 'black-container-opciones')
        document.querySelector('#btnOpciones').setAttribute('class', 'black-opciones')
    }
})