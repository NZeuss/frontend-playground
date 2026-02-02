import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectItem, SelectLabel, SelectContent, SelectGroup, SelectValue } from '@/components/ui/select';
import { useSkillpoints, type CharacterClass } from '@/lib/useSkillpoints';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

export const Route = createFileRoute('/sheetgen/dnd2')({
  component: RouteComponent,
});

const classes: CharacterClass[] = [
  { id: "babarian", label: "Babarian", defaultAttributes: { strength: 18, dexterity: 12, constitution: 14, intelligence: 10, wisdom: 10, charisma: 10 } },
  { id: "bard", label: "Bard", defaultAttributes: { strength: 17, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "cleric", label: "Cleric", defaultAttributes: { strength: 16, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "druid", label: "Druid", defaultAttributes: { strength: 15, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "fighter", label: "Fighter", defaultAttributes: { strength: 14, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "monk", label: "Monk", defaultAttributes: { strength: 13, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "paladin", label: "Paladin", defaultAttributes: { strength: 12, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "ranger", label: "Ranger", defaultAttributes: { strength: 11, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "rogue", label: "Rogue", defaultAttributes: { strength: 10, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "sorcerer", label: "Sorcerer", defaultAttributes: { strength: 9, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "warlock", label: "Warlock", defaultAttributes: { strength: 8, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } },
  { id: "wizard", label: "Wizard", defaultAttributes: { strength: 7, dexterity: 12, constitution: 10, intelligence: 14, wisdom: 10, charisma: 18 } }
];

let counter = 0;

function RouteComponent() {

  const { skillPointsAvailable, attributeStrength, attributeDexterity, addSkillpoint, changeCharacterClass, selectedClass } = useSkillpoints(classes[0]);


/**
 *
 *  DndComponent   <-- use hook here
 *    DndBasicStatsComponent
 *    DndSkillsComponents
 *    DndSpellsComponent
 *    DndJobComponent
 */


  return (
    <div className="flex flex-col space-y-2 w-full">
      <Select defaultValue={selectedClass.id} onValueChange={(val) => changeCharacterClass(classes.filter(x => x.id === val)?.[0])}>
        <SelectTrigger className="w-2/3">
          <SelectValue placeholder="Select a class" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Classes</SelectLabel>
            {classes.map(clazz => (
              <SelectItem key={clazz.id} value={clazz.id}>{clazz.label}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      <div>{skillPointsAvailable} skill points available</div>
      <div className="flex flex-row">
        <div>Strength: {attributeStrength}</div>
        <Button onClick={() => addSkillpoint("strength")}>+</Button>
      </div>
      <div className="flex flex-row">
        <div>Dexterity: {attributeDexterity}</div>
        <Button onClick={() => addSkillpoint("dexterity")}>+</Button>
      </div>
      <div className="flex flex-row">
        <div>Counter: {counter}</div>
        <div><Button onClick={() => counter++}>+</Button></div>
      </div>
    </div >
  );
}
