import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { createFileRoute } from '@tanstack/react-router'
import { Circle, CircleSmall } from 'lucide-react'

export const Route = createFileRoute('/sheetgen/vampire')({
  component: RouteComponent,
})

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
            <Circle/><Circle/><Circle/><Circle/><CircleSmall className="text-muted-foreground"/>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Dexterity</Label>
            <Circle/><Circle/><CircleSmall className="text-muted-foreground"/><CircleSmall className="text-muted-foreground"/><CircleSmall className="text-muted-foreground"/>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Stamina</Label>
            <Circle/><Circle/><Circle/><Circle/><CircleSmall className="text-muted-foreground"/>
          </div>
        </div>
      </div>
      <div className="py-8 h-full"><Separator orientation='vertical' className="bg-red-900 pt-4"/></div>
      <div className="w-1/3 p-4 justify-center">
        <div className="font-bold w-full text-center pb-4">Social</div>
        <div className="space-y-4">
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Charisma</Label>
            <Circle/><Circle/><Circle/><Circle/><CircleSmall className="text-muted-foreground"/>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Manipulation</Label>
            <Circle/><Circle/><CircleSmall className="text-muted-foreground"/><CircleSmall className="text-muted-foreground"/><CircleSmall className="text-muted-foreground"/>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Composure</Label>
            <Circle/><Circle/><Circle/><Circle/><CircleSmall className="text-muted-foreground"/>
          </div>
        </div>
      </div>
      <div className="py-8 h-full"><Separator orientation='vertical' className="bg-red-900 pt-4"/></div>
      <div className="w-1/3 p-4 justify-center">
        <div className="font-bold w-full text-center pb-4">Mental</div>
        <div className="space-y-4">
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Intelligence</Label>
            <Circle/><Circle/><Circle/><Circle/><CircleSmall className="text-muted-foreground"/>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Wits</Label>
            <Circle/><Circle/><CircleSmall className="text-muted-foreground"/><CircleSmall className="text-muted-foreground"/><CircleSmall className="text-muted-foreground"/>
          </div>
          <div className="flex space-x-1">
            <Label className="pr-3 w-1/3">Resolve</Label>
            <Circle/><Circle/><Circle/><Circle/><CircleSmall className="text-muted-foreground"/>
          </div>
        </div>
      </div>
    </div>
  </div>
}
