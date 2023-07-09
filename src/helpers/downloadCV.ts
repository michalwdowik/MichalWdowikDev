const downloadCV = () => {
    fetch('michalwdowik-CV[eng&pl].pdf').then((response) => {
        response.blob().then((blob) => {
            const fileURL = window.URL.createObjectURL(blob)
            const alink = document.createElement('a')
            alink.href = fileURL
            alink.download = 'michalwdowik-CV[eng&pl].pdf'
            alink.click()
        })
    })
}

export default downloadCV
