import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Link from "next/link";


export default function DashboardPage() {
  return (
    <div className="flex flex-col bg-white w-full h-full rounded-lg p-4 gap-4">
      <h1 className="font-light px-2 pt-4 text-blue-600 text-xl">Bienvendio a Dashboard Signa</h1>
      <div className="flex flex-col gap-2">
        <div>
          <h3 className="font-semibold">Servicios</h3>
          <p className="font-light">Explora los servicios disponibles</p>
        </div>
        <div className="flex p-4 border rounded-md">
          <Card className="py-4 w-full sm:max-w-48 px-2 rounded-md">
            <CardHeader>
              <CardTitle>Registro de Marca</CardTitle>
              <CardDescription>Gestiona tus marcas desde un solo lugar</CardDescription>
            </CardHeader>
            <CardContent className="w-full">
              <Link href={'/dashboard/brands'} className=""><Button className="w-full">Visitar</Button></Link>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
}