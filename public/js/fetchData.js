/* eslint-disable no-undef */
import fetchPokemonAbilities from './fetchPokemonAbilities.js'
import fetchPokemon from './fetchPokemon.js'
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
