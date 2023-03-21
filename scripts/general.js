//A file with general functions

  //Adjust the attack bonus using the size of the creature as well
  export function calculate_attack_bonus_size(attack_bonus, size) {
    
    console.log(attack_bonus, size)
    
    size = size.toLowerCase()

    switch (size) {
      case "small":
        attack_bonus *= 0.75;
        break
      case "medium":
        attack_bonus *= 1;
        break
      case "large":
        attack_bonus *= 1.25;
        break
      case "huge":
        attack_bonus *= 1.5;
        break
      case "gargantuan":
        attack_bonus *= 1.75;
        break
      case "colossal":
        attack_bonus *= 2;
        break
    }
    return attack_bonus
  }