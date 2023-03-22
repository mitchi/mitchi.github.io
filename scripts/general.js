//@ts-check
//A file with general functions

//Adjust the attack bonus using the size of the creature as well
export function calculate_attack_bonus_size(attack_bonus, size) {
  size = size.toLowerCase()

  switch (size) {
    case "small":
      attack_bonus *= 0.75
      break
    case "medium":
      attack_bonus *= 1
      break
    case "large":
      attack_bonus *= 1.25
      break
    case "huge":
      attack_bonus *= 1.5
      break
    case "gargantuan":
      attack_bonus *= 1.75
      break
    case "colossal":
      attack_bonus *= 2
      break
  }
  return attack_bonus
}

/**
 * Calculate the damage dice of a weapon based on its size
 * Obviously, bigger weapons deal much more damage
 * @param {*} size
 */
export function calculate_weapon_dice_size(size) {
  let damage_dice = ""

  switch (size) {
    case "small":
      damage_dice = "1d6"
      break
    case "medium":
      damage_dice = "2d6"
      break
    case "large":
      damage_dice = "4d6"
      break
    case "huge":
      damage_dice = "8d6"
      break
    case "gargantuan":
      damage_dice = "16d6"
      break
    case "colossal":
      damage_dice = "32d6"
      break
  }
}

/**
 * Return the reflex save adjusted for size
 * @param {number} reflex 
 * @param {string} size 
 * @returns {number} new reflex
 */
export function reflex_size(reflex, size) {

  switch (size) {
    case "small":
      reflex *= 1.25
      break
    case "medium":
      reflex *= 1
      break
    case "large":
      reflex *= 0.9
      break
    case "huge":
      reflex *= 0.8
      break
    case "gargantuan":
      reflex *= 0.7
      break
    case "colossal":
      reflex *= 0.6
      break
  }
  
  return reflex
}
