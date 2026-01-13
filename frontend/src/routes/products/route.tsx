import { createFileRoute, Link, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/products')({
  component: RouteComponent,
})

function RouteComponent() {
  console.log('products route rendered');
  return (
    <div className="flex flex-col h-full">
      <div className="flex flex-col h-1/3 bg-amber-100">
        <Link to="/products/$id" params={{ id: '1' }}>Product 1</Link>
        <Link to="/products/$id" params={{ id: '2' }}>Product 2</Link>
        <Link to="/products/$id" params={{ id: '3' }}>Product 3</Link>
      </div>
      <div className="flex flex-col h-2/3">
        <Outlet />
      </div>
    </div>
  )
}
