document.addEventListener('DOMContentLoaded', async () => {
    let input = document.querySelector('#inputSearch');
    let btnSearch = document.querySelector('#btnSearch');
    let containerOps = document.querySelector('#containerOpciones');
    let btnNature = document.querySelector('#btnNature');
    let btnFootball = document.querySelector('#btnFootball');
    let btnMountain = document.querySelector('#btnMountain');
    let btnComputer = document.querySelector('#btnComputer');
    let sugerenciaNature = document.querySelector('#sugerenciaNature');
    let sugerenciaFootball = document.querySelector('#sugerenciaFootball');
    let sugerenciaMountain = document.querySelector('#sugerenciaMountain');
    let sugerenciaComputer = document.querySelector('#sugerenciaComputer');
    const apiKey = '3jebeApb9hI7RnfZFJD2tHpmWswyyojV'
    const urlApi = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=12`;
    const urlApiCard = `http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&limit=1`;

    const getApi = async url => {
        try {
            const res = await fetch(url);
            const data = await res.json();
            return data.data;
        } catch (error) {
            console.log(error);
        }
    }

    const showGifs = gifs => {
        let containerGifs = document.querySelector('#containerGifs');
        containerGifs.innerHTML = '';
        for (const gif of gifs) {
            let img = document.createElement('img');
            img.src = gif.images.fixed_height.url;
            containerGifs.appendChild(img);
        }
    }

    const showTrending = async () => {
        const gifs = await getApi(`http://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=12`)
        showGifs(gifs)
    }

    const showCardNature = async () => {
        const gif = await fetch(`${urlApiCard}&q=nature`);
        const form = await gif.json();

        for (const card1 of form.data) {
            let img = document.createElement('img');
            let p = document.querySelector('#parrafoNature');
            img.src = card1.images.fixed_height.url;
            sugerenciaNature.appendChild(img);
            sugerenciaNature.insertBefore(img, p);
            img.style.width = '100%';
            img.style.height = '100%';
        }
    }
    showCardNature()

    const showCardFootball = async () => {
        const gif = await fetch(`${urlApiCard}&q=football`);
        const form = await gif.json();

        for (const card1 of form.data) {
            let img = document.createElement('img');
            let p = document.querySelector('#parrafoFootball');
            img.src = card1.images.fixed_height.url;
            sugerenciaFootball.appendChild(img);
            sugerenciaFootball.insertBefore(img, p);
            img.style.width = '100%';
            img.style.height = '100%';
        }
    }
    showCardFootball()

    const showCardMountain = async () => {
        const gif = await fetch(`${urlApiCard}&q=mountain`);
        const form = await gif.json();

        for (const card1 of form.data) {
            let img = document.createElement('img');
            let p = document.querySelector('#parrafoMountain');
            img.src = card1.images.fixed_height.url;
            sugerenciaMountain.appendChild(img);
            sugerenciaMountain.insertBefore(img, p);
            img.style.width = '100%';
            img.style.height = '100%';
        }
    }
    showCardMountain()

    const showCardComputer = async () => {
        const gif = await fetch(`${urlApiCard}&q=computer`)
        const form = await gif.json();

        for (const card1 of form.data) {
            let img = document.createElement('img');
            let p = document.querySelector('#parrafoComputer');
            img.src = card1.images.fixed_height.url;
            sugerenciaComputer.appendChild(img);
            sugerenciaComputer.insertBefore(img, p);
            img.style.width = '100%';
            img.style.height = '100%';
        }
    }
    showCardComputer()


    btnSearch.addEventListener('click', async e => {
        let value = input.value.trim();
        containerOps.style.display = 'none';
        const gifs = await getApi(`${urlApi}&q=${value}`);
        showGifs(gifs);
        document.querySelector('#titleTend').innerHTML = value;
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" });
    })

    animalOps.addEventListener('click', async e => {
        const value = 'Animales'
        containerOps.style.display = 'none'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = value
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    deporteOps.addEventListener('click', async e => {
        const value = 'Deportes'
        containerOps.style.display = 'none'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = value
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    comidaOps.addEventListener('click', async e => {
        const value = 'Comidas'
        containerOps.style.display = 'none'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = value
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    btnNature.addEventListener('click', async () => {
        const value = 'Nature'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = 'Nature'
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    btnFootball.addEventListener('click', async () => {
        let value = 'Futbol'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = 'Football'
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    btnMountain.addEventListener('click', async () => {
        let value = 'Montañas'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = 'Mountain'
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    btnComputer.addEventListener('click', async () => {
        let value = 'Computadoras'
        const gifs = await getApi(`${urlApi}&q=${value}`)
        showGifs(gifs)
        document.querySelector('#titleTend').innerHTML = 'Computer';
        document.querySelector('#titleTend').scrollIntoView({ behavior: "smooth" })
    })

    showTrending();
})