import allTypes from "../data/AllTypes.json"; // file from https://github.com/Naramsim/Colosseum/blob/master/src/data/all_types.json

export default function getMultipliers(types) {
  if (types === undefined) {
    return;
  }
  var bothMultipliers = [];

  types.forEach(typeSlot => {
    let multipliers = [];

    var type = typeSlot.type.name;

    var doubleDamageTo = allTypes[type].attack.double;
    var halfDamageTo = allTypes[type].attack.half;
    var noDamageTo = allTypes[type].attack.zero;
    var halfDamageFrom = allTypes[type].defense.half;
    var doubleDamagefrom = allTypes[type].defense.double;
    var immuneTo = allTypes[type].defense.zero;

    multipliers.push(doubleDamageTo);
    multipliers.push(halfDamageTo);
    multipliers.push(noDamageTo);
    multipliers.push(halfDamageFrom);
    multipliers.push(doubleDamagefrom);
    multipliers.push(immuneTo);

    bothMultipliers.push(multipliers);
  });

  return bothMultipliers;
}
