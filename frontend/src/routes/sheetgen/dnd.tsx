import { Button } from '@/components/ui/button'
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectTrigger, SelectItem, SelectLabel, SelectContent, SelectGroup, SelectValue } from '@/components/ui/select'
import { createFileRoute } from '@tanstack/react-router'
import { Shield } from 'lucide-react'

export const Route = createFileRoute('/sheetgen/dnd')({
  component: RouteComponent,
})

function RouteComponent() {
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
            <CardTitle className="w-1/2">16</CardTitle>
            <CardDescription className="w-1/2">+3</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">DEX</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">9</CardTitle>
            <CardDescription className="w-1/2">-1</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">CON</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">15</CardTitle>
            <CardDescription className="w-1/2">+3</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">INT</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">7</CardTitle>
            <CardDescription className="w-1/2">-2</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">WIS</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">13</CardTitle>
            <CardDescription className="w-1/2">+1</CardDescription>
          </CardHeader>
        </Card>
        <Card className="h-1/8 w-1/2 min-w-22">
          <CardTitle className="px-4 h-1/3">CHA</CardTitle>
          <CardHeader className="inline-flex h-full">
            <CardTitle className="w-1/2">12</CardTitle>
            <CardDescription className="w-1/2">+1</CardDescription>
          </CardHeader>
        </Card>
      </div>
      <div className="w-1/2 flex-col text-center space-y-4">
        <Button className="">Roll Dice</Button>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">9</Label>
          <Select>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select an attribute"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                  <SelectLabel>Attributes</SelectLabel>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="dexterity">Dexterity</SelectItem>
                  <SelectItem value="constitution">Constitution</SelectItem>
                  <SelectItem value="intelligence">Intelligence</SelectItem>
                  <SelectItem value="wisdom">Wisdom</SelectItem>
                  <SelectItem value="charisma">Charisma</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">12</Label>
          <Select>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select an attribute"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                  <SelectLabel>Attributes</SelectLabel>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="dexterity">Dexterity</SelectItem>
                  <SelectItem value="constitution">Constitution</SelectItem>
                  <SelectItem value="intelligence">Intelligence</SelectItem>
                  <SelectItem value="wisdom">Wisdom</SelectItem>
                  <SelectItem value="charisma">Charisma</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">7</Label>
          <Select>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select an attribute"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                  <SelectLabel>Attributes</SelectLabel>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="dexterity">Dexterity</SelectItem>
                  <SelectItem value="constitution">Constitution</SelectItem>
                  <SelectItem value="intelligence">Intelligence</SelectItem>
                  <SelectItem value="wisdom">Wisdom</SelectItem>
                  <SelectItem value="charisma">Charisma</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">15</Label>
          <Select>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select an attribute"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                  <SelectLabel>Attributes</SelectLabel>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="dexterity">Dexterity</SelectItem>
                  <SelectItem value="constitution">Constitution</SelectItem>
                  <SelectItem value="intelligence">Intelligence</SelectItem>
                  <SelectItem value="wisdom">Wisdom</SelectItem>
                  <SelectItem value="charisma">Charisma</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">13</Label>
          <Select>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select an attribute"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                  <SelectLabel>Attributes</SelectLabel>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="dexterity">Dexterity</SelectItem>
                  <SelectItem value="constitution">Constitution</SelectItem>
                  <SelectItem value="intelligence">Intelligence</SelectItem>
                  <SelectItem value="wisdom">Wisdom</SelectItem>
                  <SelectItem value="charisma">Charisma</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
        </div>
        <div className="flex space-x-16 justify-center">
          <Label className="text-4xl text-right w-8">16</Label>
          <Select>
            <SelectTrigger className="w-45">
                <SelectValue placeholder="Select an attribute"/>
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                  <SelectLabel>Attributes</SelectLabel>
                  <SelectItem value="strength">Strength</SelectItem>
                  <SelectItem value="dexterity">Dexterity</SelectItem>
                  <SelectItem value="constitution">Constitution</SelectItem>
                  <SelectItem value="intelligence">Intelligence</SelectItem>
                  <SelectItem value="wisdom">Wisdom</SelectItem>
                  <SelectItem value="charisma">Charisma</SelectItem>
                </SelectGroup>
              </SelectContent>
          </Select>
        </div>
      </div>
    </div>

  </div>
}
