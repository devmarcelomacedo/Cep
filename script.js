document.getElementById('buscaCepForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const cep = event.target.cep.value;
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => response.json())
        .then(data => {
            document.getElementById('resultado').innerHTML = `
                <h2>Endereço:</h2>
                <p>CEP: ${data.cep}</p>
                <p>Logradouro: ${data.logradouro}</p>
                <p>Complemento: ${data.complemento}</p>
                <p>Bairro: ${data.bairro}</p>
                <p>Localidade: ${data.localidade}</p>
                <p>UF: ${data.uf}</p>
                `;
            })
            .catch(error => {
                document.getElementById('resultado').innerHTML = '<p>CEP não encontrado.</p>';
            });
    });