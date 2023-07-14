const downloadCV = () => {
    fetch('michalwdowik-CV.pdf').then((response) => {
        response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob)
            const alink = document.createElement('a')
            alink.href = fileURL
            alink.download = 'michalwdowik-CV.pdf'
            alink.click()
        })
    })
}

export default downloadCV
