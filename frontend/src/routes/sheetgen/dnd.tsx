import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectItem, SelectLabel, SelectContent, SelectGroup, SelectValue } from '@/components/ui/select'
import { createFileRoute } from '@tanstack/react-router'
import { Shield } from 'lucide-react'
import React, { useState } from 'react'

export const Route = createFileRoute('/sheetgen/dnd')({
  component: RouteComponent,
})

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
  const [strValue, setStrValue] = useState(9);
  const [dexValue, setDexValue] = useState(12);
  const [conValue, setConValue] = useState(7);
  const [intValue, setIntValue] = useState(15);
  const [wisValue, setWisValue] = useState(13);
  const [chaValue, setChaValue] = useState(16);

  return <div className="flex-col h-full pt-4">
    <div className="text-center text-2xl">Dungeons & Dragons</div>
    <div className="flex h-full w-full space-x-4 pt-4">
      <div className="flex-col h-full w-1/4 space-y-4 pl-4">
        <Card>
          <div className="pl-4 space-y-2">
            <CardTitle className="">Name</CardTitle>
            <Input className="w-2/3" placeholder="Character Name"></Input>
            <CardTitle className="">Class</CardTitle>
            <Select>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select a class" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Classes</SelectLabel>
                  <SelectItem value="barbarian">Barbarian</SelectItem>
                  <SelectItem value="bard">Bard</SelectItem>
                  <SelectItem value="cleric">Cleric</SelectItem>
                  <SelectItem value="druid">Druid</SelectItem>
                  <SelectItem value="fighter">Fighter</SelectItem>
                  <SelectItem value="monk">Monk</SelectItem>
                  <SelectItem value="paladin">Paladin</SelectItem>
                  <SelectItem value="ranger">Ranger</SelectItem>
                  <SelectItem value="rogue">Rogue</SelectItem>
                  <SelectItem value="sorcerer">Sorcerer</SelectItem>
                  <SelectItem value="warlock">Warlock</SelectItem>
                  <SelectItem value="wizard">Wizard</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <CardTitle className="">Race</CardTitle>
            <Select>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select a race" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Races</SelectLabel>
                  <SelectItem value="elf">Elf</SelectItem>
                  <SelectItem value="human">Human</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <CardTitle className="">Alignment</CardTitle>
            <Select>
              <SelectTrigger className="w-2/3">
                <SelectValue placeholder="Select an alignment" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Alignments</SelectLabel>
                  <SelectItem value="chaoticEvil">Chaotic Evil</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
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
        </Card>
      </div>
      <div className="h-full w-1/8 space-y-4">
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">STR</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{strValue}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(strValue)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">DEX</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{dexValue}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(dexValue)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">CON</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{conValue}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(conValue)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">INT</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{intValue}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(intValue)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">WIS</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{wisValue}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(wisValue)}</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">CHA</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">{chaValue}</CardTitle>
            <CardDescription className="w-1/2">{formatModifier(chaValue)}</CardDescription>
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
        <Button onClick={() => {setStrValue(slotValues[slotOfAttr(picks,"STR")])
            setDexValue(slotValues[slotOfAttr(picks,"DEX")])
            setConValue(slotValues[slotOfAttr(picks,"CON")])
            setIntValue(slotValues[slotOfAttr(picks,"INT")])
            setWisValue(slotValues[slotOfAttr(picks,"WIS")])
            setChaValue(slotValues[slotOfAttr(picks,"CHA")])
          }
        }
        >Set Attributes</Button>
      </div>
    </div>

  </div>
}

