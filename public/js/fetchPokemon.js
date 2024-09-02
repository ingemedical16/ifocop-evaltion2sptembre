  /**
   * une function qui retrieve  un Objet 'Pokemon'
   * de  lAPI avec l'url  https://pokeapi.co/api/v2/pokemon/${pokedexNum}
   * ou pokedexNum est number aléatoire entre 0 et  897
   */
  const pokeP = document.getElementById("pokeInfo");
  const pokeAbilityBtn = document.getElementById("ability");
  const fetchPokemon = async () => {
    const pokedexNum = Math.floor(Math.random() * 897);
    let foundPokemon = "";
    let jsonPokemon = "";
    const pokeInfo = {};

    try {
      foundPokemon = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        jsonPokemon = await foundPokemon.json();
        pokeInfo.name = `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1, jsonPokemon.species.name.length).toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon = "No Pokémon found...";
    }

    if (pokeP.innerText !== "") {
      pokeP.innerText = "";
    }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute("disabled");
  };

  export default fetchPokemon;