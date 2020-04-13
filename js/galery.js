document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '3jebeApb9hI7RnfZFJD2tHpmWswyyojV';
    btnTheme = document.querySelector('#buttonTheme');
    const color = localStorage.getItem('color');

    const dayGifos = () => {
        if (color == 'black') {
            document.querySelector('#bodyStyle').setAttribute('class', 'black-body');
            document.querySelector('#darkLogo').setAttribute('src', './images/gifOF_logo_dark.png');
            document.querySelector('#blackBtnCrear').setAttribute('class', 'black-button-crear');
            document.querySelector('#blackBtnStyleCrear').setAttribute('class', 'style-black-button-crear');
            document.querySelector('#buttonTheme').setAttribute('class', 'black-button-elegir');
            document.querySelector('#styleBtnElegir').setAttribute('class', 'style-black-button-elegir');
            document.querySelector('#buttonThemeDrop').setAttribute('class', 'black-button-drop');
            document.querySelector('#BtnGifos').setAttribute('class', 'black-container-gifos');
            document.querySelector('#optionDay').setAttribute('class', 'option-black');
            document.querySelector('#optionBlack').setAttribute('class', 'option-night-black');
        } else {
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
        }
    }

    const ShowGifosGalery = async () => {
        let myGifs = JSON.parse(localStorage.getItem('myGifs'))
        let containerGalery = document.querySelector('#containerGalery')
        containerGalery.innerHTML = ''

        for (let i = 0; i < myGifs.length; i++) {
            let gif = myGifs[i];
            let img = document.createElement('img')
            let res = await fetch(`http://api.giphy.com/v1/gifs/${gif}?api_key=${apiKey}`)
            const form = await res.json()
            img.src = form.data.images.fixed_height.url
            containerGalery.appendChild(img)
        }
    }

    dayGifos();
    ShowGifosGalery();
})