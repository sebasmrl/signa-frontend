import { Separator } from "@radix-ui/react-separator";
import { Nav } from "../components/menus/nav/Nav";
import { Services } from "../components/menus/services/Services";
import { Header } from "../components/header/Header";

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
      <div className="grid w-dvw h-dvh grid-cols-12 grid-rows-12">
        <div className="row-span-12 col-start-1 col-span-2 bg-white rounded-l-4xl p-2 sm:px-6 sm:py-6  flex flex-col">
            <h1 className="text-sm sm:text-2xl font-bold text-blue-600">Dashboard</h1>
            <p className="text-xs sm:text-sm sm:pr-2 sm:pt-2 font-light">Hola, Bienvenid@, mi nombre es Sebastian Morales y esta es mi prueba tecnica para Signa.</p>

            <Nav />
            <Separator className=" border-primary border-1  my-4" />
            <Services  />
        </div>
  
        <div className=" row-span-1 col-start-3 col-span-10 bg-slate-200 px-6 pt-4">
            <Header />
        </div>
        <main className="row-span-11 col-span-10 col-start-3 pb-6 pt-2 px-6 h-full bg-slate-200">
          {children}
        </main>
      </div>
    );
}