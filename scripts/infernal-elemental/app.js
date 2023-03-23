//https://www.typescriptlang.org/docs/handbook/type-checking-javascript-files.html
//https://stackoverflow.com/questions/71953553/disable-cors-in-brave-browser

import {
  adjust_armor_classes,
  adjust_bonus,
  adjust_dexterity_size,
  adjust_naturalarmor_size,
  adjust_speed_size,
  calculate_attack_bonus_size,
  calculate_weapon_dice_size,
  truncate_numbers,
} from "../general.js"
import { write, get_span_dictionary, dict_add } from "../lib.js"
import {
  attaques_arrows_roll20,
  attaques_scimitars_roll20,
  attaques_spiked_ball_roll20,
} from "./elemental.js"

function myApp() {
  // Select the input elements
  const charismaInput = document.querySelector("#charisma")
  const size_input = document.querySelector("#size")

  // Add event listeners to the input elements
  charismaInput?.addEventListener("input", update_all)
  size_input?.addEventListener("input", update_all)

  let ids = new Set([
    "hp",
    "dex",
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
    "natural_armor",
    "speed",
    "horizontal",
    "vertical",
    "flying",
    "scimitars",
    "scimitars_times",
    "scimitars_roll20",
    "arrows",
    "arrows_times",
    "arrows_roll20",
    "spikedball",
    "spikedball_times",
    "spikedball_roll20",
  ])

  let dict = get_span_dictionary(ids)

  // Define the updateSpells function
  function update_all() {
    if (!charismaInput || !size_input) return

    const charisma_value = parseInt(charismaInput.value)
    const size_value = size_input.value
    const size = size_value



    const attack_bonus = calculate_attack_bonus_size(
      charisma_value * 5,
      size_value
    )
    const damage_bonus = calculate_attack_bonus_size(
      charisma_value * 3,
      size_value
    )
    const fire_damage_str = `${charisma_value}d10`
    const base_number_attacks = charisma_value / 4
    const fire_presence_str = `${2*charisma_value}d10`

    const dex = adjust_dexterity_size(charisma_value * 1.5, size)
    const natural_armor = adjust_naturalarmor_size(charisma_value * 3, size)
    const hp = charisma_value * 500
    const ac = natural_armor + dex + 10
    const touch_ac = dex + 10
    const flat_footed_ac = natural_armor + 10

    const speed = adjust_speed_size(charisma_value * 13, size)
    const horizontal = speed / 3
    const vertical = speed / 10
    const flying = speed / 2

    const fortitude = charisma_value * 3
    const barrier = charisma_value * 10
    const will = charisma_value * 2
    const reflex = dex * 2

    const perception = charisma_value * 4
    const stealth = dex * 2.5

    /**
     * @type {import("./types/computedValues.js").ComputedValues}
     */
    let computed_values = {
      dex,
      natural_armor,
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
      perception,
      stealth,
      size,
    }

    //computed_values = adjust_armor_classes(computed_values, size)
    computed_values = truncate_numbers(computed_values)
    write_to_spans(computed_values)
  }

  /**
   * This function writes to the DOM the values we have computed
   * @param {*} computed_values
   */
  function write_to_spans(computed_values) {
    write(dict["dex"], `${computed_values.dex}`)

    write(dict["hp"], `${computed_values.hp}`)
    write(dict["ac"], `${computed_values.ac}`)
    write(dict["attack-bonus"], `${computed_values.attack_bonus}`)
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

    write(dict["scimitars"], `${calculate_weapon_dice_size(computed_values.size)}`)
    write(dict["arrows"], `${calculate_weapon_dice_size(computed_values.size)}`)

    write(dict["scimitars_times"], `${computed_values.base_number_attacks + 2}`)

    write(dict["arrows_times"], `${computed_values.base_number_attacks}`)

    write(
      dict["scimitars_roll20"],
      `${attaques_scimitars_roll20(
        computed_values.attack_bonus,
        computed_values.damage_bonus,
        computed_values.fire_damage_str,
        computed_values.size
      )}`
    )

    write(
      dict["arrows_roll20"],
      `${attaques_arrows_roll20(
        computed_values.attack_bonus,
        computed_values.damage_bonus,
        computed_values.fire_damage_str,
        computed_values.size
      )}`
    )


    write(dict["spikedball_times"], `${computed_values.base_number_attacks}`)
    write(
      dict["spikedball_roll20"],
      `${attaques_spiked_ball_roll20(
        computed_values.attack_bonus,
        computed_values.damage_bonus
      )}`
    )

    write(dict["natural_armor"], `${computed_values.natural_armor}`)
  }
} //end of MyApp

// Initialize the application when the DOM is ready
document.addEventListener("DOMContentLoaded", function (event) {
  myApp()
})
