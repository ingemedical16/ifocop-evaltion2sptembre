  /**
 * Fetches a random Pokemon's information from the PokeAPI and displays it.
 *
 * @async
 * @returns {Promise<void>} - Resolves after fetching and displaying Pokemon information.
 */
const fetchPokemon = async () => {

  const pokeP = document.getElementById("pokeInfo");
  const pokeAbilityBtn = document.getElementById("ability");

  /**
   * Generates a random Pokemon ID between 0 and 897.
   *
   * @type {number}
   */
  const randomPokemonId = Math.floor(Math.random() * 897);

  /**
   * Object to store the fetched Pokemon's information.
   *
   * @type {object}
   * @property {string} name - The Pokemon's name.
   */
  const pokeInfo = {};

  try {
    /**
     * Fetches Pokemon data from the PokeAPI using the provided ID.
     *
     * @param {number} pokemonId - The ID of the Pokemon to fetch.
     * @returns {Promise<object>} - Resolves with the fetched Pokemon data as a JSON object.
     * @throws {Error} - If there's an error fetching data.
     */
    const fetchPokemonData = async (pokemonId) => {
      const pokemonResponse = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemonId}`,
        { method: "GET", headers: { "Content-Type": "application/json" } }
      );

      if (!pokemonResponse.ok) {
        throw new Error(`Error fetching Pokemon: ${pokemonResponse.statusText}`);
      }

      return await pokemonResponse.json();
    };

    const parsedPokemonData = await fetchPokemonData(randomPokemonId);

    /**
     * Formats the Pokemon's name by capitalizing the first letter and making the rest lowercase.
     *
     * @param {string} pokemonName - The Pokemon's name to format.
     * @returns {string} - The formatted Pokemon name.
     */
    const formatPokemonName = (pokemonName) => {
      return `<span class="math-inline">${pokemonName.charAt(0).toUpperCase()}</span>${pokemonName.slice(1).toLowerCase()}`;
    };

    pokeInfo.name = formatPokemonName(parsedPokemonData.species.name);
  } catch (error) {
    console.error("Error fetching Pokemon:", error.message);
    pokeP.innerText = "An error occurred. Please try again.";
  }

  if (pokeP.innerText !== "") {
    pokeP.innerText = "";
  }
  pokeP.innerHTML = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute("disabled");   

};

export default fetchPokemon;
 