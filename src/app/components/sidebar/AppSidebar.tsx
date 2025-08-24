'use client'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Nav } from "../menus/nav/Nav"
import { Separator } from "@/components/ui/separator"
import { Services } from "../menus/services/Services"
 
export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent className="">
        <SidebarGroup className="p-0"/>
          <div className=" bg-white rounded-l-4xl p-2 sm:px-6 sm:py-6  flex flex-col">
            <h1 className="text-sm sm:text-2xl font-bold text-blue-600">Dashboard</h1>
            <p className="text-xs sm:text-sm sm:pr-2 sm:pt-2 font-light">Hola, Bienvenid@, mi nombre es Sebastian Morales y esta es mi prueba tecnica para Signa.</p>
            <Nav />
            <Separator className=" border-primary border-1  my-4" />
            <Services  />
        </div>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
