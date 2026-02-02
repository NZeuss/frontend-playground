import { Card, CardDescription, CardHeader } from '@/components/ui/card'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/sheetgen')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="flex flex-col h-screen">
    <div className="flex flex-row h-42 p-4 gap-4">
        <Link to = "/sheetgen/dnd" className="block w-full h-full">
            <Card className="h-32 flex-col">
                <CardHeader className="text-center">Dungeons & Dragons</CardHeader>
                <CardDescription className="text-center">5th Edition</CardDescription>
            </Card>
        </Link>
        <Link to = "/sheetgen/cyberpunk" className="block w-full h-full">
            <Card className="h-32 flex-col">
                <CardHeader className="text-center">Cyberpunk</CardHeader>
                <CardDescription className="text-center">Red</CardDescription>
            </Card>
        </Link>
        <Link to = "/sheetgen/vampire" className="block w-full h-full">
            <Card className="h-32 flex-col">
                <CardHeader className="text-center">Vampire the Masquerade</CardHeader>
                <CardDescription className="text-center">5th Edition</CardDescription>
            </Card>
        </Link>
      <Link to="/sheetgen/dnd2" className="block w-full h-full">
        <Card className="h-32 flex-col">
          <CardHeader className="text-center">DND 2</CardHeader>
          <CardDescription className="text-center">5th Edition</CardDescription>
        </Card>
      </Link>
    </div>
    <div className="flex flex-col h-full">
        <Outlet />
    </div>
  </div>
}
