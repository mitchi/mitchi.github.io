  //@ts-check
import { adjust_bonus } from "../general.js"
  
  /**
   * Générer les attaques de la spiked ball
   */
  export function attaques_spiked_ball_roll20(attack_bonus, damage_bonus) {
    let crit = 20
    attack_bonus = Math.floor(adjust_bonus(attack_bonus, 1.6)) //Adjust to +5 weapon
    damage_bonus = Math.floor(adjust_bonus(damage_bonus, 1.6)) //Adjust to +5 weapon

    let str = `Attack [[1d20cs>${crit}+${attack_bonus}]] Confirm [[1d20cs>${crit}+${attack_bonus}]]
                Damage [[4d10+${damage_bonus}]] `

    return str
  }

  /**
   * Générer les attaques des scimitares
   */
  export function attaques_scimitars_roll20(
    attack_bonus,
    damage_bonus,
    fire_damage_str
  ) {
    let crit = 18
    attack_bonus = Math.floor(adjust_bonus(attack_bonus, 1.0)) //weapon is not magic
    damage_bonus = Math.floor(adjust_bonus(damage_bonus, 1.0)) //weapon is not magic

    let str = `Attack [[1d20cs>${crit}+${attack_bonus}]] Confirm [[1d20cs>${crit}+${attack_bonus}]]
                Damage [[4d10+${damage_bonus}]]`
    let str2 = `Fire damage (touch): [[${fire_damage_str}]]`
    return `${str} ${str2}`
  }