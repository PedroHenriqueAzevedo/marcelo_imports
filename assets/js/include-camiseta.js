document.addEventListener("DOMContentLoaded", function() {
    fetch('produtos/camiseta.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('camiseta-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
});
