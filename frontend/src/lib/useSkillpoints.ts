import { useEffect, useState } from 'react';

export type CharacterAttribute = "strength" | "dexterity" | "constitution" | "intelligence" | "wisdom" | "charisma";

export type CharacterClass = {
  id: string;
  label: string;
  defaultAttributes: {
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
  };
};

export function useSkillpoints(characterClass: CharacterClass) {

  const [skillPointsAvailable, setSkillPointsAvailable] = useState(10);
  const [selectedClass, setSelectedClass] = useState(characterClass);
  const [attributeStrength, setAttributeStrength] = useState(characterClass.defaultAttributes.strength);
  const [attributeDexterity, setAttributeDexterity] = useState(characterClass.defaultAttributes.dexterity);
  const [attributeConstitution, setAttributeConstitution] = useState(characterClass.defaultAttributes.constitution);
  const [attributeIntelligence, setAttributeIntelligence] = useState(characterClass.defaultAttributes.intelligence);
  const [attributeWisdom, setAttributeWisdom] = useState(characterClass.defaultAttributes.wisdom);
  const [attributeCharisma, setAttributeCharisma] = useState(characterClass.defaultAttributes.charisma);

  const addSkillpoint = (attribute: CharacterAttribute) => {
    if (skillPointsAvailable <= 0) {
      return;
    }
    setSkillPointsAvailable(skillPointsAvailable - 1);
    switch (attribute) {
      case "strength":
        setAttributeStrength(attributeStrength + 1);
        break;
      case "dexterity":
        setAttributeDexterity(attributeDexterity + 1);
        break;
      case "constitution":
        setAttributeConstitution(attributeConstitution + 1);
        break;
      case "intelligence":
        setAttributeIntelligence(attributeIntelligence + 1);
        break;
      case "wisdom":
        setAttributeWisdom(attributeWisdom + 1);
        break;
      case "charisma":
        setAttributeCharisma(attributeCharisma + 1);
        break;
      default:
        throw new Error(`Invalid attribute: ${attribute}`);
    }
  }

  const changeCharacterClass = (characterClass: CharacterClass) => {
    setSelectedClass(characterClass);
    setSkillPointsAvailable(10);
    setAttributeStrength(characterClass.defaultAttributes.strength);
    setAttributeDexterity(characterClass.defaultAttributes.dexterity);
    setAttributeConstitution(characterClass.defaultAttributes.constitution);
    setAttributeIntelligence(characterClass.defaultAttributes.intelligence);
    setAttributeWisdom(characterClass.defaultAttributes.wisdom);
    setAttributeCharisma(characterClass.defaultAttributes.charisma);
  }

  useEffect(() => {
    if (skillPointsAvailable <= 0) {
      alert('great');
    }
  }, [skillPointsAvailable])


  return {
    skillPointsAvailable,
    attributeStrength,
    attributeDexterity,
    attributeConstitution,
    attributeIntelligence,
    attributeWisdom,
    attributeCharisma,
    selectedClass,
    addSkillpoint,
    changeCharacterClass
  }
}
