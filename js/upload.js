document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '3jebeApb9hI7RnfZFJD2tHpmWswyyojV'

    const windowCreate = document.querySelector('#windowCreateGifos')
    const windowCheck = document.querySelector('#windowCheck')
    const btnComenzarVideo = document.querySelector('#comenzarVideo')
    const btnCapture = document.querySelector('#btnCapture')
    const btnEnd = document.querySelector('#btnEnd')
    const videoCamara = document.querySelector('#video-camara')
    let videoBtnStar = document.querySelector('#windowBtnStar')
    let videoBtnEnd = document.querySelector('#windowBtnEnd')
    let logoCam = document.querySelector('#logoCam')
    let btnRepeat = document.querySelector('#btnRepeat')
    let btnUpload = document.querySelector('#btnUpload')
    let cargaLogoGuifo = document.querySelector('#logoSubir')
    let subiendoGuifo = document.querySelector('#subirGuifo')
    const cancelBtn = document.querySelector('#cancelBtn')
    let titleWindow = document.querySelector('#titleWindow')
    let windowGuifoReady = document.querySelector('#windowGuifoReady')
    let previewGuifo = document.querySelector('#previewGuifo')
    let videoCamera = document.querySelector('#videoCamera')
    let btnListo = document.querySelector('#btnListo')
    let containerGuifoReady = document.querySelector('#containerGuifoReady')
    let btnCopyGuifo = document.querySelector('#btnCopyGuifo')
    let btnDownloadGuifo = document.querySelector('#btnDownloadGuifo')
    const urlApiUpload = `http://upload.giphy.com/v1/gifs?api_key=${apiKey}`;

    let recorder = null
    let gifId

    const getMedia = async () => {
        const configVideo = {
            video: { height: { max: 450 } }, audio: false
        }
        let stream = null;
        try {
            stream = await navigator.mediaDevices.getUserMedia(configVideo);
            return stream;
        } catch (error) {
            alert('La camara no tiene permiso')
        }
    }

    btnComenzarVideo.addEventListener('click', async () => {
        windowCreate.style.display = 'none';
        windowCheck.style.display = 'flex';

        let stream = await getMedia()
        videoCamara.srcObject = stream
        videoCamara.play()
    });

    btnCapture.addEventListener('click', async () => {
        videoBtnStar.style.display = 'none'
        videoBtnEnd.style.display = 'flex'
        titleWindow.innerHTML = 'Capturando tu Guifo'
        let stream = await getMedia()
        videoCamara.srcObject = stream
        videoCamara.play()

        const configGif = {
            type: 'gif',
            frameRate: 1,
            quality: 10,
            width: 360,
            hidden: 240,
            onGifRecordingStarted:  () => {
            }
        }
        recorder = new RecordRTCPromisesHandler(stream, configGif);
        recorder.startRecording();
    })

    btnEnd.addEventListener('click', async () => {
        titleWindow.innerHTML = 'Vista previa'
        await recorder.stopRecording()
        videoCamara.pause()
        logoCam.style.display = 'none'
        btnEnd.style.display = 'none'
        btnRepeat.style.display = 'block'
        btnUpload.style.display = 'block'
        videoBtnEnd.style.padding = ' 0px 0px 0px 65%'
    });

    btnRepeat.addEventListener('click', async () => location.reload());

    btnUpload.addEventListener('click', async () => {
        btnRepeat.style.display = 'none'
        btnUpload.style.display = 'none'
        videoCamara.style.display = 'none'
        cargaLogoGuifo.style.display = 'block'
        subiendoGuifo.style.display = 'block'
        cancelBtn.style.display = 'block'
        titleWindow.innerHTML = 'Subiendo Guifo'

        let data = new FormData()
        let blob = await recorder.getBlob()
        let objectURL = URL.createObjectURL(blob);
        data.append('file', blob, 'myGif.gif')

        const res = await fetch(urlApiUpload, { method: 'POST', mode: 'cors', body: data })
        const form = await res.json()

        gifId = form.data.id
        const actualGifs = JSON.parse(localStorage.getItem('myGifs')) || []
        const newGifs = [...actualGifs, gifId]
        localStorage.setItem('myGifs', JSON.stringify(newGifs))
        windowGuifoReady.style.display = 'flex'
        videoCamera.style.display = 'none'
        cancelBtn.style.display = 'none'
        previewGuifo.src = objectURL
        containerGuifoReady.style.display = 'flex'
        btnListo.style.display = 'block'
    });

    cancelBtn.addEventListener('click', async () => location.reload());

    btnCopyGuifo.addEventListener('click', async () => {
        const res = await fetch(`http://api.giphy.com/v1/gifs/${gifId}?api_key=${apiKey}`);
        let form = await res.json();
        url = form.data.url;
        const copyClipBoard = url => {
            const input = document.createElement('textarea');
            input.value = url;
            document.body.appendChild(input);
            input.select();
            document.execCommand('copy');
            document.body.removeChild(input);
        }
        copyClipBoard(url)
    })

    btnDownloadGuifo.addEventListener('click', async () => {
        const blob = await recorder.getBlob();
        invokeSaveAsDialog(blob);
    })

    btnListo.addEventListener('click', async () => location.href = 'gifos.html');
})