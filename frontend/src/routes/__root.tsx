import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  console.log('RootComponent rendered');
  return (
    <div className="min-h-screen flex flex-row">
        <div className="w-72 bg-slate-200 p-4">
            <div className="flex flex-col gap-2">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/blog">Blog</Link>
              <Link to="/imprint">Imprint</Link>
              <Link to="/products">Products</Link>
              <Link to="/sheetgen">Sheet Generator</Link>
            </div>
        </div>
        <div className="flex-1">
            <Outlet />
        </div>
    </div>
  )
}
