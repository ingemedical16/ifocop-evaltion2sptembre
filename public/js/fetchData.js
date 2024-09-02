/* eslint-disable no-undef */
window.addEventListener("DOMContentLoaded", () => {
  const pokeP = document.getElementById("pokeInfo");
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeAbilityBtn = document.getElementById("ability");
  const sendButton = document.getElementById("sendButton");

  /**
   * une function qui Afficher le message size
   * @param {Event} event
   */
  const displayComment = (event) => {
    const comment = document.getElementById("myComment");
    event.preventDefault();
    comment.style.visibility = "visible";
    $("#message").text($("#messageInput").val());
  };

  /**
   * une function qui retrieve  un Objet 'Pokemon'
   * de  lAPI avec l'url  https://pokeapi.co/api/v2/pokemon/${pokedexNum}
   * ou pokedexNum est number aléatoire entre 0 et  897
   */
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
  /**
   * une function qui retrieve  un Objet 'Abilities Pokemon'
   * de  lAPI avec l'url  https://pokeapi.co/api/v2/ability/${pokedexNum}
   * ou pokedexNum est number aléatoire entre 0 et  897
   */
  const fetchPokemonAbilities = async () => {
    const pokedexNum = Math.floor(Math.random() * 266);
    let foundAbilities = "";
    const pokeAbility = document.getElementById("pokeAbility");
    let jsonAbilities = {};
    let abilityToDisplay = "";

    try {
      foundAbilities = await fetch(
        `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
        { method: "GET", headers: { "Content-Type": "application/json" } },
      );
    } catch (error) {
      console.error(error.message);
    }

    if (foundAbilities) {
      try {
        jsonAbilities = await foundAbilities.json();
        if ("" !== jsonAbilities.name && undefined !== jsonAbilities.name) {
          abilityToDisplay = `${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1, jsonAbilities.name.length).toLowerCase()}`;
        } else {
          abilityToDisplay = "Tackle";
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonAbilities = "No ability found...";
    }

    if (pokeAbility.innerText !== "") {
      pokeAbility.innerText = "";
    }

    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };

  const invoquePokemon = () => {
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };
  /**
   * une function qui execute un listener event
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);
    pokeDiv.appendChild(pokeAbilityBtn);
  };

  (function startAll() {
    invoquePokemon();
    pokemonAbility();
    sendButton.addEventListener("click", displayComment);
  })();
});
