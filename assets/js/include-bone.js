document.addEventListener("DOMContentLoaded", function() {
    fetch('produtos/bone.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('bone-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Erro ao carregar o header:', error));
});
