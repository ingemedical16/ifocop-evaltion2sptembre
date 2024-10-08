/**
 * Fetches a random Pokemon's ability information from the PokeAPI and displays it.
 *
 * @async
 * @returns {Promise<void>} - Resolves after fetching and displaying Pokemon ability information.
 */
const fetchPokemonAbilities = async () => {
  /**
   * Generates a random Pokemon ability ID between 0 and 266.
   * 
   * Note: The PokeAPI documentation suggests using a maximum ID of 270, 
   * but some abilities might not have data associated with them. 
   * This code uses 266 to avoid potential issues.
   *
   * @type {number}
   */
  const randomAbilityId = Math.floor(Math.random() * 266);

  /**
   * Fetches Pokemon ability data from the PokeAPI using the provided ID.
   *
   * @param {number} abilityId - The ID of the ability to fetch.
   * @returns {Promise<object>} - Resolves with the fetched ability data as a JSON object.
   * @throws {Error} - If there's an error fetching data.
   */
  const fetchAbilityData = async (abilityId) => {
    const abilityResponse = await fetch(
      `https://pokeapi.co/api/v2/ability/${abilityId}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );

    if (!abilityResponse.ok) {
      throw new Error(`Error fetching ability: ${abilityResponse.statusText}`);
    }

    return await abilityResponse.json();
  };

  /**
   * Checks if a string is empty.
   *
   * @param {string} str - The string to check.
   * @returns {boolean} - True if the string is empty, false otherwise.
   */
  const isEmptyString = (str) => str.trim() === "";

  /**
   * Checks if a value is undefined.
   *
   * @param {*} input - The value to check.
   * @returns {boolean} - True if the value is undefined, false otherwise.
   */
  const isUndefined = (input) => typeof input === "undefined";

  let abilityToDisplay = "";

  try {
    const fetchedAbilities = await fetchAbilityData(randomAbilityId);

    if (!isEmptyString(fetchedAbilities.name) && !isUndefined(fetchedAbilities.name)) {
      abilityToDisplay = `${fetchedAbilities.name.charAt(0).toUpperCase()}${fetchedAbilities.name.slice(1).toLowerCase()}`;
    } else {
      abilityToDisplay = "Tackle"; // Default ability if no name found
    }
  } catch (error) {
    console.error("Error fetching ability:", error.message);
  }

  const pokeAbility = document.getElementById("pokeAbility");

  if (pokeAbility.innerText !== "") {
    pokeAbility.innerText = "";
  }

  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
};

export default fetchPokemonAbilities;