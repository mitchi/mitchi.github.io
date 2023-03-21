//https://stackoverflow.com/questions/71953553/disable-cors-in-brave-browser

import { calculate_attack_bonus_size } from "../general.js"

function myApp() 
{

  function add_event_listeners() {
    // Add event listeners to the input elements
    charismaInput.addEventListener("input", update_all)
    casterLevelInput.addEventListener("input", update_all)
    spell_dc_input.addEventListener("input", update_all)
    size_input.addEventListener("input", update_all)
  }

  // Select the input elements
  const charismaInput = document.querySelector("#charisma")
  const casterLevelInput = document.querySelector("#caster-level")
  const spell_dc_input = document.querySelector("#spell-dc")
  const size_input = document.querySelector("#size")

  //Adding the event listeners
  add_event_listeners()

  // Select the span elements to update
  const hp_span = document.querySelector("#hp")
  const ac_span = document.querySelector("#ac")
  const attack_bonus_span = document.querySelector("#attack-bonus")
  const damage_bonus_span = document.querySelector("#damage-bonus")
  const fire_damage_span = document.querySelector("#fire-damage")
  const fire_presence_span = document.querySelector("#fire-presence")
  const will_save_span = document.querySelector("#will")
  const reflex_save_span = document.querySelector("#reflex")

  // Define the updateSpells function
  function update_all() {
    // Get the values of the input elements
    const charisma_value = parseInt(charismaInput.value)
    const cl_value = parseInt(casterLevelInput.value)

    // Calculate the new spell DC and duration
    const spell_dc_value = parseInt(spell_dc_input.value)
    const size_value = size_input.value

    // Update the span elements with the new values
    hp_span.textContent = `${charisma_value * 500}`
    ac_span.textContent = `${cl_value * 3}`
    attack_bonus_span.textContent = `${calculate_attack_bonus_size(
      cl_value * 3,
      size_value
    )}`
    fire_damage_span.textContent = `${charisma_value}d${charisma_value}`
    damage_bonus_span.textContent = `${charisma_value * 3}`

    //spellDurationSpan.textContent = `Spell Duration: ${spellDuration} rounds`
  }
} //end of MyApp




// Initialize the application when the DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
    console.log("Asdasdas")
  myApp()
})
