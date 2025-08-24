import { getBrandsAction } from "@/app/actions/server/get-brands.action";
import { BrandList } from "@/app/components/brands/BrandList";
import { Button } from "@/components/ui/button";
import { Brand } from "@/interfaces/brand.interface";
import Link from "next/link";

export default async function BrandsPage() {

  const brands =  await getBrandsAction();

  return (
    <div className="flex flex-col bg-white w-full h-full rounded-lg p-4 sm:p-8 ">


      <Link href={'/dashboard/brands/create'} className="self-end mb-2 mr-2">
        <Button
          variant={'success'}>Agregar Nueva Marca</Button>
      </Link>

      <section className="flex flex-col overflow-hidden">
        <h1 className="self-center py-4 font-light text-blue-600 text-xl sm:text-2xl">Marcas Registradas</h1>
        <BrandList brands={brands.status == 200 ? brands.data as Brand[] : []} />
      </section>
      
    </div>
  );
}