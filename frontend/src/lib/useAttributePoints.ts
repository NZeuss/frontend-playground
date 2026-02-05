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

  const POINT_BUY_TOTAL = 27
  const PB_MIN = 8
  const PB_MAX = 15

  const pbCost = (score: number) => {
    if (score <= 8) return 0
    if (score <= 13) return score - 8
    if (score === 14) return 7
    return 9
  }

  const totalPbCost = (scores: Record<CharacterAttribute, number>) =>
    (Object.values(scores) as number[]).reduce((sum, s) => sum + pbCost(s), 0)

  export type AttributeMethod= "roll" | "pointbuy"

  export type PointBuyDraft = Record<CharacterAttribute, number>

  export type RollAttrKey = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA"

  export type RollDraft = {
  slotValues: number[]              
  picks: (RollAttrKey | null)[]     
}

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

  attributeMethod: AttributeMethod;

  attributeDraft: {
    roll: RollDraft
    pointbuy: PointBuyDraft
  }
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
  attributeMethod: "roll",
  attributeDraft: {
    roll: {
        slotValues: [10, 10, 10, 10, 10, 10],
        picks: [null, null, null, null, null, null],
      },
    pointbuy: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
  },
}

interface CharacterState {
  sheet: Character,
  setName: (name: string) => void
  setHP: (hp: number) => void
  setClass: (charClass: CharacterClass) => void
  setRace: (race: CharacterRace) => void
  setAlignment: (alignment: CharacterAlignment) => void
  setAttribute: (key: keyof CharacterState["sheet"]["defaultAttributes"], value: number) => void
  setAttributeMethod: (attributeMethod: AttributeMethod) => void
  setPointBuyScore: (attr: CharacterAttribute, value: number) => void
  incPointBuy: (attr: CharacterAttribute) => void
  decPointBuy: (attr: CharacterAttribute) => void
  getPointBuyRemaining: () => number
  applyPointBuyToAttributes: () => void
  reset: () => void;
}

export const useCharacterSheetStore =
  create<CharacterState>()(
    persist(
      (set, get) => ({
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

        setAttributeMethod: (attributeMethod) =>
          set((state) => ({
            sheet: { ...state.sheet, attributeMethod }
          })),

          getPointBuyRemaining: () => {
      const scores = get().sheet.attributeDraft.pointbuy
      return POINT_BUY_TOTAL - totalPbCost(scores)
    },

    setPointBuyScore: (attr, value) =>
      set((state) => ({
        sheet: {
          ...state.sheet,
          attributeDraft: {
            ...state.sheet.attributeDraft,
            pointbuy: {
              ...state.sheet.attributeDraft.pointbuy,
              [attr]: value,
            },
          },
        },
      })),

    incPointBuy: (attr) =>
      set((state) => {
        const scores = state.sheet.attributeDraft.pointbuy
        const cur = scores[attr]
        if (cur >= PB_MAX) return state

        const next = cur + 1
        const remainingBefore = POINT_BUY_TOTAL - totalPbCost(scores)
        const delta = pbCost(next) - pbCost(cur)
        if (remainingBefore - delta < 0) return state

        return {
          sheet: {
            ...state.sheet,
            attributeDraft: {
              ...state.sheet.attributeDraft,
              pointbuy: { ...scores, [attr]: next },
            },
          },
        }
      }),

    decPointBuy: (attr) =>
      set((state) => {
        const scores = state.sheet.attributeDraft.pointbuy
        const cur = scores[attr]
        if (cur <= PB_MIN) return state
        return {
          sheet: {
            ...state.sheet,
            attributeDraft: {
              ...state.sheet.attributeDraft,
              pointbuy: { ...scores, [attr]: cur - 1 },
            },
          },
        }
      }),

    applyPointBuyToAttributes: () =>
      set((state) => {
        const pb = state.sheet.attributeDraft.pointbuy
        const remaining = POINT_BUY_TOTAL - totalPbCost(pb)

        return {
          sheet: {
            ...state.sheet,
            defaultAttributes: {
              strength: pb.strength,
              dexterity: pb.dexterity,
              constitution: pb.constitution,
              intelligence: pb.intelligence,
              wisdom: pb.wisdom,
              charisma: pb.charisma,
            },
            // optional: store remaining; rename if you want “remainingPoints”
            attributePoints: remaining,
          },
        }
      }),

        reset: () =>
          set({ sheet: structuredClone(initialState) }),
      }),
      {
        name: "character-sheet"
      }
    )
  )