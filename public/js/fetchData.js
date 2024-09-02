/* eslint-disable no-undef */ // Disclaimer: Disabling no-undef rule for code clarity (assuming necessary globals are defined elsewhere)
import fetchPokemonAbilities from './fetchPokemonAbilities.js';
import fetchPokemon from './fetchPokemon.js';

window.addEventListener("DOMContentLoaded", () => {
  const pokeInfoElement = document.getElementById("pokeInfo");
  const pokemonInfoDiv = document.getElementById("pokemon-info");
  const pokeAbilityButton = document.getElementById("ability");
  const sendButton = document.getElementById("sendButton");

  /**
   * Handles displaying the comment message element.
   *
   * @param {Event} event - The click event from the send button.
   */
  const displayComment = (event) => {
    const commentElement = document.getElementById("myComment");
    event.preventDefault(); // Prevent default form submission behavior
    commentElement.style.visibility = "visible";
    $("#message").text($("#messageInput").val()); // Assuming jQuery library is available
  };

  /**
   * Attaches a click event listener to the Pokemon button that triggers fetching Pokemon information.
   */
  const invokePokemon = () => {
    const pokemonButton = document.getElementById("pokemon");
    pokemonButton.addEventListener("click", fetchPokemon);
    pokemonInfoDiv.appendChild(pokeInfoElement);
  };

  /**
   * Attaches a click event listener to the Ability button that triggers fetching Pokemon abilities.
   */
  const handlePokemonAbility = () => {
    pokeAbilityButton.addEventListener("click", fetchPokemonAbilities);
    pokemonInfoDiv.appendChild(pokeAbilityButton);
  };

  // Immediately Invoked Function Expression (IIFE) to encapsulate logic and avoid variable pollution
  (function startAll() {
    invokePokemon();
    handlePokemonAbility();
    sendButton.addEventListener("click", displayComment);
  })();
});