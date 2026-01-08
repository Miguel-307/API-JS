
const API_URL = 'https://rickandmortyapi.com/api/character';


const container = document.getElementById('character-container');
const btn = document.getElementById('reload-btn');


async function fetchCharacters() {
    try {

        const response = await fetch(API_URL);
        

        if (!response.ok) {
            throw new Error('Error en la red al obtener los datos');
        }


        const data = await response.json();
        

        displayCharacters(data.results);

    } catch (error) {
        console.error('Hubo un problema:', error);
        container.innerHTML = '<p>Error al cargar los personajes. Inténtalo luego.</p>';
    }
}


function displayCharacters(characters) {

    container.innerHTML = '';

    characters.forEach(character => {

        const card = document.createElement('div');
        card.classList.add('card');

        let statusColor = character.status === 'Alive' ? 'green' : (character.status === 'Dead' ? 'red' : 'gray');


        card.innerHTML = `
            <img src="${character.image}" alt="${character.name}">
            <div class="card-info">
                <h2>${character.name}</h2>
                <p><span class="status" style="background-color: ${statusColor};"></span>${character.status} - ${character.species}</p>
                <p><strong>Origen:</strong> ${character.origin.name}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', fetchCharacters);

btn.addEventListener('click', fetchCharacters);