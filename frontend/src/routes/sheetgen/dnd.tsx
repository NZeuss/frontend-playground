import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectItem, SelectLabel, SelectContent, SelectGroup, SelectValue } from '@/components/ui/select'
import { createFileRoute } from '@tanstack/react-router'
import { Shield } from 'lucide-react'
import React, { useState } from 'react'
import { useCharacterSheetStore, type CharacterAlignment, type CharacterClass, type CharacterRace} from '@/lib/useAttributePoints'

export const Route = createFileRoute('/sheetgen/dnd')({
  component: RouteComponent,
})

export const CHARACTER_ATTRIBUTES = [
  "strength",
  "dexterity",
  "constitution",
  "intelligence",
  "wisdom",
  "charisma",
] as const

export const CHARACTER_CLASSES = [
  "barbarian",
  "bard",
  "cleric",
  "druid",
  "fighter",
  "monk",
  "paladin",
  "ranger",
  "rogue",
  "sorcerer",
  "warlock",
  "wizard",
] as const

export const CHARACTER_ALIGNMENTS = [
  "lawful good",
  "neutral good",
  "chaotic good",
  "lawful neutral",
  "neutral",
  "chaotic neutral",
  "lawful evil",
  "neutral evil",
  "chaotic evil",
] as const

export const CHARACTER_RACES = [
  "dwarf",
  "elf",
  "halfling",
  "human",
  "dragonborn",
  "gnome",
  "half-elf",
  "half-orc",
  "tiefling",
] as const

export const titleCase = (s: string) =>
  s.replace(/\b\w/g, (c) => c.toUpperCase())

type Attr = "STR" | "DEX" | "CON" | "INT" | "WIS" | "CHA"
const ATTRS: Attr[] = ["STR", "DEX", "CON", "INT", "WIS", "CHA"]
const CLEAR = "__clear__"

type Slot = 0 | 1 | 2 | 3 | 4 | 5


function slotOfAttr(picks: (Attr | null)[], attr: Attr): number {
  const i = picks.indexOf(attr)
  if (i === -1) throw new Error(`${attr} not selected`)
  return i
}

function formatModifier(score: number): string {
  const mod = Math.floor((score - 10) / 2)
  return mod >= 0 ? `+${mod}` : `${mod}`
}

function AttrSelect({
  slot,
  picks,
  setPicks,
}: {
  slot: Slot
  picks: (Attr | null)[]
  setPicks: React.Dispatch<React.SetStateAction<(Attr | null)[]>>
}) {
  const current = picks[slot]
  const used = new Set(picks.filter(Boolean) as Attr[])
  const options = ATTRS.filter((a) => !used.has(a) || a === current)

  return (
    <Select
      key={current ?? "empty"}
      value={(current ?? undefined) as string}
      onValueChange={(v) =>
        setPicks((prev) => {
          const next = [...prev]
          next[slot] = v === CLEAR ? null : (v as Attr)
          return next
        })
      }
    >
      
      <SelectTrigger className="w-45">
        <SelectValue placeholder="Select an Attribute" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select an Attribute</SelectLabel>
            {current && <SelectItem value={CLEAR}>Clear</SelectItem>}
          {options.map((a) => (
            <SelectItem key={a} value={a}>
              {a}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

function RouteComponent() {
  const [picks, setPicks] = React.useState<(Attr | null)[]>(Array(6).fill(null))
  const [slotValues, setSlotValues] = useState<number[]>([9,12,7,15,13,16]);
  // const setName = useCharacterSheetStore((s) => s.setName)
  const setRace = useCharacterSheetStore((s) => s.setRace)
  const setClass = useCharacterSheetStore((s) => s.setClass)
  const setAlignment = useCharacterSheetStore((s) => s.setAlignment)
  const str = useCharacterSheetStore((s) => s.sheet.defaultAttributes.strength)
  const dex = useCharacterSheetStore((s) => s.sheet.defaultAttributes.dexterity)
  const con = useCharacterSheetStore((s) => s.sheet.defaultAttributes.constitution)
  const int = useCharacterSheetStore((s) => s.sheet.defaultAttributes.intelligence)
  const wis = useCharacterSheetStore((s) => s.sheet.defaultAttributes.wisdom)
  const cha = useCharacterSheetStore((s) => s.sheet.defaultAttributes.charisma)

  const setAttribute = useCharacterSheetStore((s) => s.setAttribute)

  return <div className="flex-col h-full pt-4">
    <div className="text-center text-2xl">Dungeons & Dragons</div>
    <div className="flex h-full w-full space-x-4 pt-4">
      <div className="flex-col h-full w-1/4 space-y-4 pl-4">
        <Card>
          <div className="pl-4 space-y-2">
            <CardTitle className="">Name</CardTitle>
            <Input className="w-2/3" placeholder="Character Name"></Input>
            <CardTitle className="">Class</CardTitle>
            <Select onValueChange={(v) => setClass(v as CharacterClass)} value = {useCharacterSheetStore((s) => s.sheet.charClass)}>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Classes</SelectLabel>
                  {CHARACTER_CLASSES.map((a) => (
                    <SelectItem key={a} value={a}>
                      {titleCase(a)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <CardTitle className="">Race</CardTitle>
            <Select onValueChange={(v) => setRace(v as CharacterRace)} value = {useCharacterSheetStore((s) => s.sheet.race)}>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select a race" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Races</SelectLabel>
                  {CHARACTER_RACES.map((a) => (
                    <SelectItem key={a} value={a}>
                      {titleCase(a)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <CardTitle className="">Alignment</CardTitle>
            <Select onValueChange={(v) => setAlignment(v as CharacterAlignment)} value = {useCharacterSheetStore((s) => s.sheet.alignment)}>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select an alignment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Alignments</SelectLabel>
                  {CHARACTER_ALIGNMENTS.map((a) => (
                    <SelectItem key={a} value={a}>
                      {titleCase(a)}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
            <div className="w-full flex">
              <CardTitle className="w-1/2">Hit Points</CardTitle>
              <CardTitle className="w-1/2">Armor Class</CardTitle>
            </div>
            <div className="w-full flex">
              <Input className="w-1/4" placeholder="HP"></Input>
              <Label className="w-1/4">/20</Label>

              <Label className="w-1/4">16
                <Shield strokeWidth={2} className="w-5 h-5" />
              </Label>
            </div>
            <div className="w-full flex">
              <CardTitle className="w-1/2">Initiative</CardTitle>
              <CardTitle className="w-1/2">Speed</CardTitle>
            </div>
            <div className="w-full flex">
              <Label className="w-1/2">-1</Label>
              <Label className="w-1/2">30 ft</Label>
            </div>
          </div>
          <div className="w-full flex space-x-16 justify-center">
            <Button onClick={useCharacterSheetStore((s) => s.reset)}>Reset</Button>
            <Button>Save</Button>
          </div>
        </Card>
      </div>
      <div className="h-full w-1/8 space-y-4">
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">STR</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{str}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(str)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">DEX</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{dex}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(dex)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">CON</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{con}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(con)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">INT</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{int}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(int)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">WIS</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{wis}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(wis)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">CHA</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{cha}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(cha)}</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="w-1/2 flex-col text-center space-y-4">
        <Button className="">Roll Dice</Button>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">{slotValues[0]}</Label>
          <AttrSelect slot={0} picks={picks} setPicks={setPicks} />
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">{slotValues[1]}</Label>
          <AttrSelect slot={1} picks={picks} setPicks={setPicks} />
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">{slotValues[2]}</Label>
          <AttrSelect slot={2} picks={picks} setPicks={setPicks} />
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">{slotValues[3]}</Label>
          <AttrSelect slot={3} picks={picks} setPicks={setPicks} />
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">{slotValues[4]}</Label>
          <AttrSelect slot={4} picks={picks} setPicks={setPicks} />
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">{slotValues[5]}</Label>
          <AttrSelect slot={5} picks={picks} setPicks={setPicks} />
        </div>
        <Button onClick={() => {
            setAttribute("strength", slotValues[slotOfAttr(picks,"STR")])
            setAttribute("dexterity", slotValues[slotOfAttr(picks, "DEX")])
            setAttribute("constitution",slotValues[slotOfAttr(picks,"CON")])
            setAttribute("intelligence",slotValues[slotOfAttr(picks,"INT")])
            setAttribute("wisdom",slotValues[slotOfAttr(picks,"WIS")])
            setAttribute("charisma",slotValues[slotOfAttr(picks,"CHA")])
          }
        }
        >Set Attributes</Button>
      </div>
    </div>

  </div>
}

