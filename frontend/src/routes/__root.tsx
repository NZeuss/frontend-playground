import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar"
import { Map } from 'lucide-react';

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  console.log('RootComponent rendered');
  return (
  <div className="min-h-screen flex flex-row">
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg">
                  <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                    <Map className="size-4" />
                  </div>
                  <div className="flex flex-col gap-0.5 leading-none">
                    <span className="font-medium">Frontend Playground</span>
                    <span className="">NZeuss</span>
                  </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <Link to="/">Home</Link>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <Link to="/about">About</Link>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <Link to="/blog">Blog</Link>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <Link to="/imprint">Imprint</Link>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <Link to="/products">Products</Link>
                  </SidebarMenuButton>
                  <SidebarMenuButton asChild>
                    <Link to="/sheetgen">Character Sheet Generator</Link>
                  </SidebarMenuButton>
                  
                    <SidebarMenuSub>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton>
                            <Link to="/sheetgen/dnd">Dungeons and Dragons</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton>
                            <Link to="/sheetgen/cyberpunk">Cyberpunk</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                        <SidebarMenuSubItem>
                          <SidebarMenuSubButton>
                            <Link to="/sheetgen/vampire">Vampire the Masquerade</Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                    </SidebarMenuSub>
                </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroup>
        </SidebarContent>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <main><Outlet/></main>
      </SidebarInset>
    </SidebarProvider>
    
    <div className="flex-1 overflow-x-hidden overflow-y-auto">
        <Outlet/>
    </div>
  </div>
    
    
    // <div className="min-h-screen flex flex-row">
    //     <div className="w-72 bg-slate-200 p-4">
    //         <div className="flex flex-col gap-2">
    //           <Link to="/">Home</Link>
    //           <Link to="/about">About</Link>
    //           <Link to="/blog">Blog</Link>
    //           <Link to="/imprint">Imprint</Link>
    //           <Link to="/products">Products</Link>
    //           <Link to="/sheetgen">Sheet Generator</Link>
    //         </div>
    //     </div>
    //     <div className="flex-1 overflow-x-hidden overflow-y-auto">
    //         <Outlet />
    //     </div>
    // </div>
  )
}
