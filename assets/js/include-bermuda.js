document.addEventListener("DOMContentLoaded", function() {
    fetch('produtos/bermuda.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bermuda-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
});
