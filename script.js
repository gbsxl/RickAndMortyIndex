const container = document.getElementById('cards-container');

fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => {
        data.results.forEach(personagem => {
            const card = document.createElement('div');
            card.className = 'card';

            const img = document.createElement('img');
            img.src = personagem.image;

            const nome = document.createElement('h2');
            nome.textContent = personagem.name;

            const status = document.createElement('p');
            status.innerHTML = '<span class="status">Status:</span> ' + personagem.status;

            const especie = document.createElement('p');
            especie.innerHTML = '<span class="species">Espécie:</span> ' + personagem.species;

            const origem = document.createElement('p');
            origem.innerHTML = '<span class="species">Localização:</span> ' + personagem.location.name;

            card.appendChild(img);
            card.appendChild(nome);
            card.appendChild(status);
            card.appendChild(especie);
            card.appendChild(origem);

            container.appendChild(card);
        });
    })
    .catch(error => console.log('Erro ao carregar dados', error));
