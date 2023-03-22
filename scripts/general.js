//@ts-check

//Ce fichier contient des fonctions qui peuvent servir à d'autres créatures ou d'autres sorts

/**
 * 
 * @param {*} attack_bonus 
 * @param {*} size 
 * @returns attack_bonus
 */
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

/**
 * Adjust the touch AC according to the size of the creature
 * @param {number} touchac 
 * @param {string} size 
 * @returns new armor value
 */
export function touch_ac_size(touchac, size) {

  switch (size) {
    case "small":
      touchac *= 1.25
      break
    case "medium":
      touchac *= 1
      break
    case "large":
      touchac *= 0.8
      break
    case "huge":
      touchac *= 0.7
      break
    case "gargantuan":
      touchac *= 0.6
      break
    case "colossal":
      touchac *= 0.5
      break
  }
  return touchac
}

/**
 * Adjust an attack roll or damage roll from a multiplier
 * These multipliers are added together before applying them one final time
 */
export function adjust_bonus(bonus, multiplier) {
     return bonus * multiplier
}

/**
 * Calculate the multiplier from a list of effects. Example, a +5 weapon adds 60% damage, so 0.6
 * @param {number[]} effects 
 */
export function calculate_multiplier(effects) {
  let multiplier = 1
  for (let effect of effects) {
      multiplier += effect
  }
  return multiplier
}


/**
 * Truncate number properties of an object
 * @param {*} obj 
 * @returns 
 */
export function truncate_numbers(obj) {
  const truncatedObj = {};
  for (const key in obj) {
    if (typeof obj[key] === 'number') {
      truncatedObj[key] = Math.trunc(obj[key]);
    } else {
      truncatedObj[key] = obj[key];
    }
  }
  return truncatedObj;
}