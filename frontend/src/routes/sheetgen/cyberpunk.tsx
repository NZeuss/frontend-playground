import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/sheetgen/cyberpunk')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/sheetgen/cyberpunk"!</div>
}
