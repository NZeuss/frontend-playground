import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sheetgen/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className='text-center'>Choose a game to create a character sheet.</div>
}
