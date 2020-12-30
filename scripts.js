document.getElementById('copy').addEventListener('click', function () {
    let copyArea = document.getElementById('copyArea');
    navigator.clipboard.writeText(copyArea.value);
   
});

document.getElementById('paste').addEventListener('click', () => {
    let pastearea = document.getElementById('pasteArea');
    pasteArea.value = '';

    navigator.clipboard.readText()
        .then((text) => {
            pasteArea.value = text;

        });
})






