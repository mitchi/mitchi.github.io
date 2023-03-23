//Ce fichier contient des fonctions qui peuvent servir à d'autres créatures ou d'autres sorts

/**
 * @typedef { (import("./infernal-elemental/types/computedValues").ComputedValues) ComputedValues
 */

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
  return damage_dice
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
export function adjust_touch_ac_size(touchac, size) {
  console.log("adjusting", touchac)

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
  console.log("after", touchac)
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
 * @param {ComputedValues} obj
 * @returns {ComputedValues}
 */
export function truncate_numbers(obj) {
  const truncatedObj = {}
  for (const key in obj) {
    if (typeof obj[key] === "number") {
      truncatedObj[key] = Math.trunc(obj[key])
    } else {
      truncatedObj[key] = obj[key]
    }
  }
  return truncatedObj
}

/**
 * Adjust the AC, flat footed armor and touch ac armor according to the size
 *
 * Size medium: armure de base
 * Size large: 25% plus d'armure
 * Size medium: 50% plus d'armure
 * Size large: 70%
 *
 *
 * @param {ComputedValues} obj
 * @param {string} size
 * @returns {ComputedValues} new object
 */
export function adjust_armor_classes(obj, size) {
  let flat_footed_ac = obj.flat_footed_ac
  let touch_ac = adjust_touch_ac_size(obj.touch_ac, size)

  return { ...obj, touch_ac, flat_footed_ac }
}

/**
 * Adjust the dexterity according to the size
 * @param {number} dex 
 * @param {string} size 
 */
export function adjust_dexterity_size(dex, size) {
  switch (size) {
    case "small":
      dex *= 1.2
      break
    case "medium":
      dex *= 1
      break
    case "large":
      dex *= 0.8
      break
    case "huge":
      dex *= 0.6
      break
    case "gargantuan":
      dex *= 0.4
      break
    case "colossal":
      dex *= 0.2
      break
  }

  return dex
}


/**
 * Adjust the natural armor according to the size
 * @param {number} natural_armor 
 * @param {string} size 
 */
export function adjust_naturalarmor_size(natural_armor, size) {
  switch (size) {
    case "small":
      natural_armor *= 0.8
      break
    case "medium":
      natural_armor *= 1
      break
    case "large":
      natural_armor *= 1.3
      break
    case "huge":
      natural_armor *= 1.6
      break
    case "gargantuan":
      natural_armor *= 1.9
      break
    case "colossal":
      natural_armor *= 2.2
      break
  }

  return natural_armor
}

/**
 * Adjust the speed according to the size of the creature
 * Every level is -10%
 * @param {number} speed 
 * @param {string} size 
 */
export function adjust_speed_size(speed, size) {
  switch (size) {
    case "small":
      speed *= 1.2
      break
    case "medium":
      speed *= 1
      break
    case "large":
      speed *= 0.9
      break
    case "huge":
      speed *= 0.8
      break
    case "gargantuan":
      speed *= 0.7
      break
    case "colossal":
      speed *= 0.6
      break
  }

  return speed
}