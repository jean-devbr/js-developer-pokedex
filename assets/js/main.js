const pokemonList =  document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')
const maxRecords = 151
const limit = 10;
let offset = 0;


      



function consertPokemonTOLi(pokemon) {
    return 
}


function loadPokemonItens(offset, limit) {
    pokeAPI.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) =>
        `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
        `).join('')
    pokemonList.innerHTML += newHTML

    })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNexPage = offset + limit
    
    if (qtdRecordNexPage >= maxRecords) {
        const newLimite =  maxRecords - offset
        loadPokemonItens(offset,newLimite)
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }

    else {
        loadPokemonItens(offset,limit)
    }
    
    
}) 
