import { create } from 'zustand'
import { persist } from "zustand/middleware"

export type CharacterAttribute =
    | "strength"
    | "dexterity"
    | "constitution"
    | "intelligence"
    | "wisdom"
    | "charisma";

export type CharacterClass =
    | "barbarian"
    | "bard"
    | "cleric"
    | "druid"
    | "fighter"
    | "monk"
    | "paladin"
    | "ranger"
    | "rogue"
    | "sorcerer"
    | "warlock"
    | "wizard";

export type CharacterAlignment =
    | "lawful good"
    | "neutral good"
    | "chaotic good"
    | "lawful neutral"
    | "neutral"
    | "chaotic neutral"
    | "lawful evil"
    | "neutral evil"
    | "chaotic evil";

export type CharacterRace =
    | "dwarf"
    | "elf"
    | "halfling"
    | "human"
    | "dragonborn"
    | "gnome"
    | "half-elf"
    | "half-orc"
    | "tiefling";

export type Character = {
    name: string;
    charClass: CharacterClass;
    race: CharacterRace;
    alignment: CharacterAlignment;
    ac: number;
    hp: number;
    defaultAttributes: {
        strength: number;
        dexterity: number;
        constitution: number;
        intelligence: number;
        wisdom: number;
        charisma: number;
    };
};

const initialState: Character = {
  name: "Skarsnik",
  charClass: "wizard",
  race: "half-orc",
  alignment: "chaotic evil",
  ac: 10,
  hp: 10,
  defaultAttributes: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
  },
}

interface CharacterState{
    sheet: Character,
    setName: (name: string) => void
    setHP: (hp: number) => void
    setClass: (charClass: CharacterClass) => void
    setRace: (race: CharacterRace) => void
    setAlignment: (alignment: CharacterAlignment) => void
    setAttribute: (key: keyof CharacterState["sheet"]["defaultAttributes"], value: number) => void
    reset: () => void;
}

export const useCharacterSheetStore =
  create<CharacterState>()(
    persist(
      (set) => ({
        sheet: initialState,

        setName: (name) =>
          set((state) => ({
            sheet: { ...state.sheet, name },
          })),

        setHP: (hp) =>
          set((state) => ({
            sheet: { ...state.sheet, hp },
          })),

        setClass: (charClass) =>
          set((state) => ({
            sheet: { ...state.sheet, charClass },
          })),

        setRace: (race) =>
          set((state) => ({
            sheet: { ...state.sheet, race },
          })),

        setAlignment: (alignment) =>
          set((state) => ({
            sheet: { ...state.sheet, alignment },
          })),

        setAttribute: (key, value) =>
          set((state) => ({
            sheet: {
              ...state.sheet,
              defaultAttributes: {
                ...state.sheet.defaultAttributes,
                [key]: value,
              },
            },
          })),

        reset: () =>
          set({ sheet: structuredClone(initialState) }),
      }),
      {
        name: "character-sheet"
      }
    )
  )