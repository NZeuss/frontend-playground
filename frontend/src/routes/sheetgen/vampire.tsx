import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import { Circle, CircleSmall } from 'lucide-react'
import React from 'react'

export const Route = createFileRoute('/sheetgen/vampire')({
  component: RouteComponent,
})
type Skill = "Strength" | "Dexterity" | "Stamina" | "Charisma" | "Manipulation" | "Composure" | "Intelligence" | "Wits" | "Resolve"
function Points({
  skill
}:{
  skill: Skill
}){
  const [rating, setRating] = React.useState<number>(0) // 0..5
  const [hover, setHover] = React.useState<number>(0)
  const shown = hover || rating
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }, (_, i) => {
        const value = i + 1
        const filled = value <= shown

        return (
          <button
            key={value}
            type="button"
            aria-label={`Rate ${value} star${value > 1 ? "s" : ""}`}
            onClick={() => setRating(value)}
            onMouseEnter={() => setHover(value)}
            onMouseLeave={() => setHover(0)}
            className="p-0.5"
          >
            {filled ? <Circle className="text-red-900 stroke-4"/>: 
              <CircleSmall className="text-muted-foreground"/>
            }
            
          </button>
        )
      })}
    </div>
  );
}

function RouteComponent() {
  return <div className="flex-col h-full w-full space-x-4 pt-4">
    <div className="text-center text-2xl">Vampire The Masquerade</div>
    <div className="px-8 pt-4 w-full"><Separator className="bg-red-900"/></div>
    <div className="flex h-1/8">
      <div className="w-1/3 p-4">
        <div className="font-bold">Name</div>
        <Input className="w-2/3" placeholder="Character Name"></Input>
      </div>
      <div className="w-1/3 p-4">
        <div className="font-bold">Clan</div>
        <Input className="w-2/3" placeholder="Character Clan"></Input>
      </div>
      <div className="w-1/3 p-4">
        <div className="font-bold">Generation</div>
        <Input className="w-2/3" placeholder="Generation"></Input>
      </div>
    </div>
    <div className="px-8 w-full"><Separator className="bg-red-900"/></div>
    <div className="flex h-6/8">
      <div className="w-1/3 p-4 justify-center">
        <div className="font-bold w-full text-cente pb-4">Physical</div>
        <div className="space-y-4">
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Strength</Label>
            <Points skill="Strength"></Points>
            
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Dexterity</Label>
            <Points skill="Dexterity"></Points>
            </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Stamina</Label>
            <Points skill="Stamina"></Points>
            </div>
        </div>
      </div>
      <div className="py-8 h-full"><Separator orientation='vertical' className="bg-red-900 pt-4"/></div>
      <div className="w-1/3 p-4 justify-center">
        <div className="font-bold w-full text-center pb-4">Social</div>
        <div className="space-y-4">
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Charisma</Label>
            <Points skill="Charisma"></Points>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Manipulation</Label>
            <Points skill="Manipulation"></Points>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Composure</Label>
            <Points skill="Composure"></Points>
          </div>
        </div>
      </div>
      <div className="py-8 h-full"><Separator orientation='vertical' className="bg-red-900 pt-4"/></div>
      <div className="w-1/3 p-4 justify-center">
        <div className="font-bold w-full text-center pb-4">Mental</div>
        <div className="space-y-4">
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Intelligence</Label>
            <Points skill="Intelligence"></Points>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Wits</Label>
            <Points skill="Wits"></Points>  
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Resolve</Label>
            <Points skill="Resolve"></Points>
          </div>
        </div>
      </div>
    </div>
  </div>
}
