//https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
//https://stackoverflow.com/questions/71953553/disable-cors-in-brave-browser

import { calculate_attack_bonus_size } from "../general.js"
import { write, get_span_dictionary } from "../lib.js"

function myApp() {
  // Select the input elements
  const charismaInput = document.querySelector("#charisma")
  const casterLevelInput = document.querySelector("#caster-level")
  const spell_dc_input = document.querySelector("#spell-dc")
  const size_input = document.querySelector("#size")

  // Add event listeners to the input elements
  charismaInput.addEventListener("input", update_all)
  casterLevelInput.addEventListener("input", update_all)
  spell_dc_input.addEventListener("input", update_all)
  size_input.addEventListener("input", update_all)

  let ids = new Set([
    "hp",
    "ac",
    "attack-bonus",
    "damage-bonus",
    "fire-damage",
    "fire-presence",
    "will",
    "reflex",
    "fortitude",
    "barrier",
    "perception",
    "stealth",
    "flatfooted",
    "touchac",
    "speed",
    "horizontal",
    "vertical",
    "flying"
  ])

  let dict = get_span_dictionary(ids)

  // Define the updateSpells function
  function update_all() {
    const charisma_value = parseInt(charismaInput.value)
    const cl_value = parseInt(casterLevelInput.value)
    const size_value = size_input.value

    const ac = charisma_value * 5
    const touch_ac = ac * 0.75
    const flat_footed_ac = ac * 0.3

    const speed = charisma_value * 20;
    const horizontal = speed / 3
    const vertical = speed / 10
    const flying = speed /4 

    write(dict["hp"], `${charisma_value * 500}`)
    write(dict["ac"], `${charisma_value * 5}`)
    write(
      dict["attack-bonus"],
      `${calculate_attack_bonus_size(charisma_value * 5, size_value)}`
    )
    write(dict["fire-damage"], `${charisma_value}d${charisma_value}`)
    write(dict["fire-presence"], `${charisma_value}d${2 * charisma_value}`)
    write(dict["fortitude"], `${charisma_value * 3}`)
    write(dict["barrier"], `${charisma_value * 10}`)
    write(dict["damage-bonus"], `${charisma_value * 3}`)
    write(dict["will"], `${charisma_value * 3}`)
    write(dict["reflex"], `${charisma_value * 3}`)
    write(dict["perception"], `${charisma_value * 4}`)
    write(dict["stealth"], `${charisma_value * 3.5}`)
    write(dict["flatfooted"], `${flat_footed_ac}`)
    write(dict["touchac"], `${touch_ac}`)

    write(dict["speed"], `${speed}ft`)
    write(dict["horizontal"], `${horizontal}ft`)
    write(dict["vertical"], `${vertical}ft`)
    write(dict["flying"], `${flying}ft`)
  }
} //end of MyApp

// Initialize the application when the DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  myApp()
})
