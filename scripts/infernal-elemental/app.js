//https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
//https://stackoverflow.com/questions/71953553/disable-cors-in-brave-browser

import { adjust_bonus, calculate_attack_bonus_size, truncate_numbers } from "../general.js"
import { write, get_span_dictionary, dict_add } from "../lib.js"
import {attaques_scimitars_roll20, attaques_spiked_ball_roll20} from "./elemental.js"

function myApp() {
  // Select the input elements
  const charismaInput = document.querySelector("#charisma")
  const size_input = document.querySelector("#size")

  // Add event listeners to the input elements
  charismaInput?.addEventListener("input", update_all)
  size_input?.addEventListener("input", update_all)

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
    "flying",
    "scimitars",
    "scimitars_times",
    "scimitars_roll20",
    "arrows",
    "arrows_times",
    "spikedball",
    "spikedball_times",
    "spikedball_roll20",
  ])

  let dict = get_span_dictionary(ids)

  // Define the updateSpells function
  function update_all() {
    const charisma_value = parseInt(charismaInput.value)
    const size_value = size_input.value

    const hp = charisma_value * 500
    const ac = charisma_value * 5
    const touch_ac = ac * 0.75
    const flat_footed_ac = ac * 0.3

    const speed = charisma_value * 20
    const horizontal = speed / 3
    const vertical = speed / 10
    const flying = speed / 4

    const attack_bonus = calculate_attack_bonus_size(
      charisma_value * 5,
      size_value
    )
    const damage_bonus = calculate_attack_bonus_size(
      charisma_value * 3,
      size_value
    )
    const fire_damage_str = `${charisma_value}d${charisma_value}`
    const base_number_attacks = charisma_value / 4
    const fire_presence_str = `${charisma_value}d${2 * charisma_value}`

    const fortitude = charisma_value * 3
    const barrier = charisma_value * 10
    const will = charisma_value * 3
    const reflex = charisma_value * 3

    const perception = charisma_value * 4
    const stealth = charisma_value * 3.5

    let computed_values = {
      hp,
      ac,
      touch_ac,
      flat_footed_ac,
      speed,
      horizontal,
      vertical,
      flying,
      attack_bonus,
      damage_bonus,
      fire_damage_str,
      fire_presence_str,
      base_number_attacks,
      fortitude,
      will,
      reflex,
      barrier,
      perception, stealth,
    }

    computed_values = truncate_numbers(computed_values)
    console.log("computed_values", computed_values)

    write_to_spans(computed_values)

  }

  /**
   * This function writes to the DOM the values we have computed
   * @param {*} computed_values 
   */
  function write_to_spans(computed_values) {

    write(dict["hp"], `${computed_values.hp}`)
    write(dict["ac"], `${computed_values.ac}`)
    write(
      dict["attack-bonus"],
      `${computed_values.attack_bonus}`
    )
    write(dict["damage-bonus"], `${computed_values.damage_bonus}`)

    write(dict["fire-damage"], `${computed_values.fire_damage_str}`)
    write(dict["fire-presence"], `${computed_values.fire_presence_str}`)
    write(dict["fortitude"], `${computed_values.fortitude}`)
    write(dict["barrier"], `${computed_values.barrier}`)
    write(dict["will"], `${computed_values.will}`)
    write(dict["reflex"], `${computed_values.reflex}`)
    write(dict["perception"], `${computed_values.perception}`)
    write(dict["stealth"], `${computed_values.stealth}`)
    write(dict["flatfooted"], `${computed_values.flat_footed_ac}`)
    write(dict["touchac"], `${computed_values.touch_ac}`)
    write(dict["speed"], `${computed_values.speed}`)
    write(dict["horizontal"], `${computed_values.horizontal}`)
    write(dict["vertical"], `${computed_values.vertical}`)
    write(dict["flying"], `${computed_values.flying}`)

    write(dict["scimitars_times"], `${computed_values.base_number_attacks + 2}`)
    write(
      dict["scimitars_roll20"],
      `${attaques_scimitars_roll20(
        computed_values.attack_bonus,
        computed_values.damage_bonus,
        computed_values.fire_damage_str
      )}`
    )

    write(dict["spikedball_times"], `${computed_values.base_number_attacks}`)
    write(
      dict["spikedball_roll20"],
      `${attaques_spiked_ball_roll20(computed_values.attack_bonus, computed_values.damage_bonus)}`
    )

  }



} //end of MyApp

// Initialize the application when the DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  myApp()
})
