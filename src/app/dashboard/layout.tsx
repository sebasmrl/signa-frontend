import { Metadata } from "next";
import { Header } from "../components/header/Header";

export const metadata: Metadata = {
  title: "Panel",
  description: "Panel de administracion de servicios de prueba técnica de Signa",
};

export default function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
      <div className="grid w-dvw h-dvh grid-cols-12 grid-rows-12">
        
        <div className=" row-span-1 col-start-0 col-span-12 bg-slate-200 px-6 pt-4">
            <Header />
        </div>
        <main className="row-span-12 col-span-12 pb-6 pt-2 px-6 h-full bg-slate-200">
          {children}
        </main>
      </div>
    );
}